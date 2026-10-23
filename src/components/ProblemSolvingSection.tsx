import React, { useState, useEffect } from 'react';
import { Code2, Terminal, ExternalLink, Cpu, Check, Loader2, AlertCircle } from 'lucide-react';
import { problemSolvingData } from '../data/portfolioData';

interface CachedLeetCodeStats {
  solvedCount: number;
  timestamp: number;
}

type SyncStatus = 'loading' | 'live' | 'cached' | 'offline';

const LEETCODE_USERNAME = 'Mdhv20';
const BASELINE_PROBLEMS_SOLVED = problemSolvingData.problemsSolved || 122;
const CACHE_KEY = `madhav_leetcode_stats_${LEETCODE_USERNAME}`;
const REFRESH_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes

function getCachedStats(): CachedLeetCodeStats | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.solvedCount === 'number' &&
      Number.isInteger(parsed.solvedCount) &&
      parsed.solvedCount >= BASELINE_PROBLEMS_SOLVED &&
      typeof parsed.timestamp === 'number'
    ) {
      return parsed as CachedLeetCodeStats;
    }
  } catch {
    // Ignore localStorage access or JSON parse errors
  }
  return null;
}

function saveCachedStats(solvedCount: number) {
  try {
    if (typeof solvedCount === 'number' && Number.isInteger(solvedCount) && solvedCount >= BASELINE_PROBLEMS_SOLVED) {
      const payload: CachedLeetCodeStats = {
        solvedCount,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
    }
  } catch {
    // Ignore storage quota or disabled storage errors
  }
}

function extractCountFromPayload(data: unknown): number | null {
  if (!data || typeof data !== 'object') return null;
  const obj = data as Record<string, unknown>;

  // Format 1: alfa-leetcode-api (/Mdhv20/solved -> solvedProblem)
  if (typeof obj.solvedProblem === 'number' && Number.isInteger(obj.solvedProblem) && obj.solvedProblem > 0) {
    return obj.solvedProblem;
  }

  // Format 2: leetcode-api-faisalshohag (/Mdhv20 -> totalSolved)
  if (typeof obj.totalSolved === 'number' && Number.isInteger(obj.totalSolved) && obj.totalSolved > 0) {
    return obj.totalSolved;
  }

  // Format 3: acSubmissionNum array ([{ difficulty: 'All', count: 125 }])
  if (Array.isArray(obj.acSubmissionNum)) {
    const all = obj.acSubmissionNum.find(
      (item): item is { difficulty: string; count: number } =>
        Boolean(item) &&
        typeof item === 'object' &&
        item.difficulty === 'All' &&
        typeof item.count === 'number' &&
        Number.isInteger(item.count) &&
        item.count > 0
    );
    if (all) return all.count;
  }

  return null;
}

async function fetchFromEndpoint(url: string, signal: AbortSignal): Promise<number> {
  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw new Error(`Endpoint returned status ${res.status}`);
  }
  const json = await res.json();
  const count = extractCountFromPayload(json);
  if (count === null || count < BASELINE_PROBLEMS_SOLVED) {
    throw new Error('Payload did not contain a valid non-negative solved count');
  }
  return count;
}

export const ProblemSolvingSection: React.FC = () => {
  // Initialize state with cache if available, otherwise baseline
  const [solvedCount, setSolvedCount] = useState<number>(() => {
    const cached = getCachedStats();
    return cached ? cached.solvedCount : BASELINE_PROBLEMS_SOLVED;
  });

  const [syncStatus, setSyncStatus] = useState<SyncStatus>(() => {
    const cached = getCachedStats();
    if (cached && Date.now() - cached.timestamp < REFRESH_INTERVAL_MS) {
      return 'cached';
    }
    return 'loading';
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchLiveStats = async () => {
      const endpoints = [
        `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`,
        `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`,
      ];

      setSyncStatus('loading');

      let liveCount: number | null = null;

      for (const endpoint of endpoints) {
        try {
          liveCount = await fetchFromEndpoint(endpoint, controller.signal);
          break; // First successful endpoint wins
        } catch {
          // Continue to next endpoint on error
        }
      }

      if (!isMounted) return;

      if (liveCount !== null) {
        setSolvedCount(liveCount);
        setSyncStatus('live');
        saveCachedStats(liveCount);
      } else {
        // Fetching failed: check last known valid count in cache
        const cached = getCachedStats();
        if (cached) {
          setSolvedCount(cached.solvedCount);
          setSyncStatus('cached');
        } else {
          setSolvedCount(BASELINE_PROBLEMS_SOLVED);
          setSyncStatus('offline');
        }
      }
    };

    // Check if we need an immediate fetch or can rely on fresh cache
    const cached = getCachedStats();
    const isCacheFresh = cached && Date.now() - cached.timestamp < REFRESH_INTERVAL_MS;

    if (!isCacheFresh) {
      fetchLiveStats();
    } else {
      setSyncStatus('cached');
    }

    // Set up auto-refresh: no more than once every 30 minutes while page remains open
    const intervalId = setInterval(() => {
      fetchLiveStats();
    }, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      controller.abort();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="problem-solving" className="py-24 sm:py-32 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] mb-3 block">
            Algorithmic Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7] mb-4">
            Problem Solving & DSA
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            {problemSolvingData.description}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: LeetCode Progress & Key Metric */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#14171C] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-subtle-card relative overflow-hidden group">
            {/* Subtle background ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6EA8FE]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#6EA8FE] group-hover:border-[#6EA8FE]/40 transition-colors">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F5F5F7] block tracking-tight">
                      LeetCode
                    </span>
                    <span className="text-xs font-mono text-[#71717A] block">
                      @{LEETCODE_USERNAME}
                    </span>
                  </div>
                </div>

                {/* Primary Language Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F5F5F7]">
                  <Terminal className="w-3.5 h-3.5 text-[#6EA8FE]" />
                  <span>Primary: {problemSolvingData.primaryLanguage}</span>
                </div>
              </div>

              {/* Main Metric Showcase */}
              <div className="my-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                    Problems Solved
                  </span>

                  {/* Sync status indicator */}
                  {syncStatus === 'loading' && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#6EA8FE]">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Syncing live stats...</span>
                    </span>
                  )}
                  {syncStatus === 'live' && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Sync</span>
                    </span>
                  )}
                  {syncStatus === 'cached' && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A1A1AA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE]" />
                      <span>Synced recently</span>
                    </span>
                  )}
                  {syncStatus === 'offline' && (
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400/90"
                      title="Live data temporarily unavailable. Showing confirmed baseline."
                    >
                      <AlertCircle className="w-3 h-3 text-amber-400/90" />
                      <span>Live sync offline</span>
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-3">
                  <span
                    className={`text-5xl sm:text-6xl font-bold font-mono tracking-tight text-[#F5F5F7] transition-opacity duration-300 ${
                      syncStatus === 'loading' ? 'opacity-70' : 'opacity-100'
                    }`}
                  >
                    {solvedCount}
                  </span>
                  <span className="text-base sm:text-lg text-[#A1A1AA] font-normal">
                    Problems Solved on LeetCode
                  </span>
                </div>

                {/* Restrained progress-inspired graphic indicator */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#101216] border border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        syncStatus === 'offline'
                          ? 'bg-amber-400'
                          : 'bg-emerald-400 animate-pulse'
                      }`}
                    />
                    <span className="text-xs font-medium text-[#F5F5F7]">
                      {syncStatus === 'offline'
                        ? 'Confirmed Baseline · Live sync unavailable'
                        : 'Continuous Practice & Pattern Mastery'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#71717A]">
                    Java DSA
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer / Call-To-Action */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#71717A]">
                <span>Language: </span>
                <span className="text-[#F5F5F7] font-medium">{problemSolvingData.primaryLanguage}</span>
              </div>

              <a
                href={problemSolvingData.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#6EA8FE] hover:bg-[#8BBAFF] text-[#08090B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA8FE] group/btn"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Core Focus & Systems Application */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#14171C] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-subtle-card group">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#6EA8FE] group-hover:border-[#6EA8FE]/40 transition-colors">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F5F7] tracking-tight">
                    Focus & Methodology
                  </h3>
                  <span className="text-xs font-mono text-[#71717A] block">
                    Core DSA Principles
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#71717A] leading-relaxed mb-6">
                Strengthening algorithmic foundations to write efficient, clean, and reliable solutions for backend and cloud systems.
              </p>

              {/* Focus Areas */}
              <div className="space-y-3">
                {problemSolvingData.focusAreas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#101216] border border-white/[0.04] hover:border-white/10 transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#F5F5F7] mb-1">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
              <span>Career Direction: Cloud Engineering & Backend Development</span>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
