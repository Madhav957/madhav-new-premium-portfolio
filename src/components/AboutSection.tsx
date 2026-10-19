import React from 'react';
import { Terminal, Shield, Cpu, RefreshCw, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const engineeringPrinciples = [
    {
      icon: Terminal,
      title: 'Repeatable over manual',
      description: 'If an operation has to be performed twice in the cloud, it belongs in a Boto3 script or Terraform declaration, not in console clicks.'
    },
    {
      icon: Shield,
      title: 'Least-privilege mindset',
      description: 'Starting with locked-down security groups, private VPC subnets, and tightly scoped IAM roles before ever introducing external access.'
    },
    {
      icon: Cpu,
      title: 'Under the hood',
      description: 'Understanding why systems fail under load, how packets navigate routing tables, and how OS system calls handle disk and memory.'
    },
    {
      icon: RefreshCw,
      title: 'Iterative building',
      description: 'Translating theoretical CS coursework into hands-on repositories, breaking things in test sandboxes, and documenting every fix.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] block">
              03 · About Me
            </span>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F7] leading-[1.15]">
              Curious by nature.<br />
              <span className="text-[#A1A1AA]">An engineer in progress.</span>
            </h2>

            <div className="space-y-4 text-base text-[#A1A1AA] leading-relaxed pt-2">
              {personalInfo.aboutBody.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Stats Banner */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
              <div className="p-3.5 rounded-xl bg-[#14171C] border border-white/[0.08]">
                <span className="text-xl font-semibold text-[#F5F5F7] block">6+</span>
                <span className="text-[11px] text-[#71717A] leading-tight block mt-0.5">AWS services automated</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#14171C] border border-white/[0.08]">
                <span className="text-xl font-semibold text-[#6EA8FE] block">100%</span>
                <span className="text-[11px] text-[#71717A] leading-tight block mt-0.5">CLI-first workflow</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#14171C] border border-white/[0.08] col-span-2 sm:col-span-1">
                <span className="text-xl font-semibold text-emerald-400 block">Foundations</span>
                <span className="text-[11px] text-[#71717A] leading-tight block mt-0.5">AWS Cloud Practitioner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Philosophy */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-2">
              Engineering Principles
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringPrinciples.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#14171C] border border-white/[0.08] hover:border-white/20 transition-all duration-200 space-y-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#6EA8FE]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#F5F5F7]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Note on Transparency */}
            <div className="p-4 rounded-xl bg-[#101216] border border-white/[0.06] flex items-center gap-3 text-xs text-[#71717A]">
              <BookOpen className="w-4 h-4 text-[#6EA8FE] shrink-0" />
              <span>
                Committed to technical honesty: Every project, script, and architecture on this site reflects code I have personally written and tested.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
