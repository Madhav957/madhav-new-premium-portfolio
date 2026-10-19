import React from 'react';
import { CheckCircle2, Clock, Compass, FileText } from 'lucide-react';
import { journeyMilestones, engineeringArticles } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] mb-3 block">
            05 · Learning Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7] mb-4">
            Where I've been, where I'm headed.
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            I believe engineering is best learned in the open through implementation, debugging, and iterative milestones.
          </p>
        </div>

        {/* 3-Column Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {journeyMilestones.map((milestone) => {
            const isCompleted = milestone.phase === 'Completed';
            const isCurrent = milestone.phase === 'Currently Exploring';

            return (
              <div
                key={milestone.phase}
                className="p-6 sm:p-7 rounded-2xl bg-[#14171C] border border-white/10 flex flex-col justify-between shadow-subtle-card relative overflow-hidden"
              >
                {/* Phase Badge */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isCompleted
                          ? 'bg-emerald-400'
                          : isCurrent
                          ? 'bg-[#6EA8FE] animate-pulse'
                          : 'bg-zinc-600'
                      }`}
                    />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">
                      {milestone.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#F5F5F7] mb-6">
                    {milestone.title}
                  </h3>

                  <ul className="space-y-3">
                    {milestone.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#A1A1AA] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span>{isCompleted ? 'Verified Skillset' : isCurrent ? 'In Active Development' : 'Roadmap'}</span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : isCurrent ? (
                    <Clock className="w-3.5 h-3.5 text-[#6EA8FE]" />
                  ) : (
                    <Compass className="w-3.5 h-3.5 text-[#71717A]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Writing & Engineering Notes */}
        <div className="rounded-2xl bg-[#101216] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#6EA8FE] uppercase tracking-wider mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Technical Writing &amp; Notes</span>
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F7]">
                Documenting the build process
              </h3>
            </div>
            <span className="text-xs font-mono text-[#71717A] bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
              Upcoming Publications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringArticles.map((article, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#14171C] border border-white/[0.06] flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6EA8FE] block mb-2">
                    {article.topic}
                  </span>
                  <h4 className="text-sm font-semibold text-[#F5F5F7] mb-2 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#71717A] leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span>Status: Draft / Notes</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-[#A1A1AA]">
                    In Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
