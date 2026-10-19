import React from 'react';
import { Cloud, Code2, Network, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Cloud;
      case 1:
        return Code2;
      case 2:
      default:
        return Network;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] mb-3 block">
            04 · Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7] mb-4">
            Tools I reach for.
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            Technologies grounded in real implementation, script writing, and system architecture. No arbitrary percentage bars—just practical familiarity.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#14171C] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-subtle-card group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#6EA8FE] group-hover:border-[#6EA8FE]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#F5F5F7] tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#71717A] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#101216] border border-white/[0.04] hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-[#F5F5F7]">
                            {skill.name}
                          </span>
                        </div>
                        {skill.context && (
                          <span className="text-[11px] font-mono text-[#71717A] block">
                            {skill.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span>Practical application</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
