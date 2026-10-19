import React, { useState } from 'react';
import {
  Github,
  ShieldAlert,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { selectedProjects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] mb-3 block">
              02 · Selected Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7]">
              Engineered for reliability,<br />
              built with intent.
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-sm">
            Focused on cloud infrastructure, automated telemetry, and developer ergonomics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project Card: CyberShield */}
          <div className="rounded-2xl bg-[#14171C] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-subtle-card">
            
            {/* Visual Top Preview: Security Telemetry UI */}
            <div className="p-6 bg-[#101216] border-b border-white/[0.08]">
              <div className="rounded-xl bg-[#08090B] border border-white/[0.06] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    CyberShield Security Telemetry
                  </span>
                  <span className="text-[10px] text-[#71717A] bg-white/[0.04] px-2 py-0.5 rounded">
                    MySQL Engine v8.0
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#14171C] border border-white/[0.04]">
                    <span className="text-[10px] text-[#71717A] block">Threat Level</span>
                    <span className="text-amber-400 font-semibold">Elevated (L2)</span>
                  </div>
                  <div className="p-2 rounded bg-[#14171C] border border-white/[0.04]">
                    <span className="text-[10px] text-[#71717A] block">Schema State</span>
                    <span className="text-emerald-400 font-semibold">Normalized</span>
                  </div>
                  <div className="p-2 rounded bg-[#14171C] border border-white/[0.04]">
                    <span className="text-[10px] text-[#71717A] block">Incident Logs</span>
                    <span className="text-[#F5F5F7] font-semibold">Indexed</span>
                  </div>
                </div>

                <div className="bg-black/40 p-2.5 rounded border border-white/[0.04] text-[11px] text-[#A1A1AA] flex items-center justify-between">
                  <span>SELECT * FROM security_incidents WHERE severity &gt; 3;</span>
                  <span className="text-emerald-400 text-[10px]">0.02ms query</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase text-[#6EA8FE] tracking-wider">
                    Cybersecurity Analytics
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A]">MySQL / Python</span>
                </div>

                <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 tracking-tight group-hover:text-white transition-colors">
                  CyberShield Analytics Dashboard
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {selectedProjects.find(p => p.id === 'cybershield')?.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['MySQL', 'Python', 'SQL Analytics', 'JavaScript', 'Incident Monitoring'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setSelectedProject(selectedProjects.find(p => p.id === 'cybershield') || null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F5F7] hover:text-[#6EA8FE] transition-colors"
                >
                  <span>Case Study &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://github.com/Madhav957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                  aria-label="View CyberShield on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Project Card: AWS Cloud Resource Automation & FinOps */}
          <div className="rounded-2xl bg-[#14171C] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-subtle-card">
            
            {/* Visual Top Preview: AWS Automation CLI / Serverless Execution */}
            <div className="p-6 bg-[#101216] border-b border-white/[0.08]">
              <div className="rounded-xl bg-[#08090B] border border-white/[0.06] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-[#6EA8FE] font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    AWS FinOps &amp; Resource Manager
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                    Cron Schedule Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#14171C] border border-white/[0.04]">
                    <span className="text-[10px] text-[#71717A] block">Lambda Runtime</span>
                    <span className="text-[#F5F5F7] font-semibold">Python 3.12</span>
                  </div>
                  <div className="p-2 rounded bg-[#14171C] border border-white/[0.04]">
                    <span className="text-[10px] text-[#71717A] block">Trigger</span>
                    <span className="text-[#6EA8FE] font-semibold">EventBridge</span>
                  </div>
                  <div className="p-2 rounded bg-[#14171C] border border-white/[0.04]">
                    <span className="text-[10px] text-[#71717A] block">Target Services</span>
                    <span className="text-[#F5F5F7] font-semibold">EC2, S3, IAM</span>
                  </div>
                </div>

                <div className="bg-black/40 p-2.5 rounded border border-white/[0.04] text-[11px] text-[#A1A1AA] flex items-center justify-between">
                  <span>[FinOps Scan] Flagged 2 unattached EBS volumes</span>
                  <span className="text-amber-400 text-[10px]">Cost Alert Sent</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase text-[#6EA8FE] tracking-wider">
                    Cloud Automation &amp; FinOps
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A]">Boto3 / Lambda</span>
                </div>

                <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 tracking-tight group-hover:text-white transition-colors">
                  AWS Cloud Resource Automation &amp; FinOps
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {selectedProjects.find(p => p.id === 'aws-automation')?.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {['Python', 'Boto3', 'AWS Lambda', 'Amazon S3', 'Amazon EC2', 'EventBridge'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setSelectedProject(selectedProjects.find(p => p.id === 'aws-automation') || null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F5F7] hover:text-[#6EA8FE] transition-colors"
                >
                  <span>Case Study &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://github.com/Madhav957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                  aria-label="View AWS Automation on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
