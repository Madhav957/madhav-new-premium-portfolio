import React from 'react';
import { Code2, Terminal, ExternalLink, Cpu, Check } from 'lucide-react';
import { problemSolvingData } from '../data/portfolioData';

export const ProblemSolvingSection: React.FC = () => {
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
                      @Mdhv20
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
                <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-2">
                  Problems Solved
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-bold font-mono tracking-tight text-[#F5F5F7]">
                    {problemSolvingData.problemsSolved}
                  </span>
                  <span className="text-base sm:text-lg text-[#A1A1AA] font-normal">
                    Problems Solved on LeetCode
                  </span>
                </div>

                {/* Restrained progress-inspired graphic indicator */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#101216] border border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-[#F5F5F7]">
                      Continuous Practice & Pattern Mastery
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
