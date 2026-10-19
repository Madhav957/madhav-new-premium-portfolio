import React, { useState } from 'react';
import { ArrowRight, Server, Shield, Database, Cpu, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'cli'>('architecture');

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden apple-bg-mesh">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6EA8FE]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#A1A1AA]">
                {personalInfo.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F5F7] leading-[1.12] mb-6">
              Building thoughtful<br />
              software <span className="text-[#6EA8FE]">for the cloud.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-8 font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#cloudpilot"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#F5F5F7] text-[#08090B] hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-[#F5F5F7] bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Status Availability */}
            <div className="flex items-center gap-2 text-xs text-[#71717A] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#6EA8FE]" />
              <span>{personalInfo.availability}</span>
            </div>
          </div>

          {/* Right Column: Architectural Visual Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#14171C] border border-white/10 shadow-subtle-card overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#101216] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-2 text-xs font-mono text-[#71717A]">cloud-architecture.spec</span>
                </div>

                {/* View Switcher */}
                <div className="flex items-center rounded-lg bg-black/40 p-0.5 border border-white/[0.06]">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-[#71717A] hover:text-[#A1A1AA]'
                    }`}
                  >
                    Topology
                  </button>
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                      activeTab === 'cli'
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-[#71717A] hover:text-[#A1A1AA]'
                    }`}
                  >
                    Terminal
                  </button>
                </div>
              </div>

              {/* Topology Tab Content */}
              {activeTab === 'architecture' ? (
                <div className="p-5 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between text-[#71717A] pb-2 border-b border-white/[0.06]">
                    <span className="flex items-center gap-1.5 text-[#6EA8FE]">
                      <Sparkles className="w-3.5 h-3.5" />
                      AWS Virtual Private Cloud
                    </span>
                    <span className="text-[10px] bg-white/[0.06] px-2 py-0.5 rounded text-[#A1A1AA]">
                      10.0.0.0/16
                    </span>
                  </div>

                  {/* Public Ingress Tier */}
                  <div className="p-3 rounded-xl bg-[#101216] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#6EA8FE]" />
                        Public Ingress Subnet
                      </span>
                      <span className="text-[10px] text-emerald-400">TLS 1.3 Active</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#F5F5F7] bg-black/40 px-2.5 py-1.5 rounded border border-white/[0.04]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE]" />
                      <span>Application Load Balancer (ALB)</span>
                    </div>
                  </div>

                  {/* Private Compute Tier */}
                  <div className="p-3 rounded-xl bg-[#101216] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#6EA8FE]" />
                        Private App Subnet
                      </span>
                      <span className="text-[10px] text-[#71717A]">No Public IP</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#F5F5F7] bg-black/40 px-2.5 py-1.5 rounded border border-white/[0.04]">
                        <Server className="w-3 h-3 text-[#A1A1AA]" />
                        <span>EC2 Workload</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#F5F5F7] bg-black/40 px-2.5 py-1.5 rounded border border-white/[0.04]">
                        <Database className="w-3 h-3 text-[#A1A1AA]" />
                        <span>S3 Data Layer</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#71717A]">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Health Check: Passing
                    </span>
                    <span>State: Verifiable Plan</span>
                  </div>
                </div>
              ) : (
                /* CLI Tab Content */
                <div className="p-5 font-mono text-xs text-[#A1A1AA] space-y-2 bg-[#0C0E12]">
                  <p className="text-[#71717A]">$ boto3.client('ec2').describe_instances()</p>
                  <p className="text-[#6EA8FE]">&gt; Fetching running instances in us-east-1...</p>
                  <div className="bg-black/60 p-2.5 rounded border border-white/[0.06] text-[11px] leading-relaxed text-[#F5F5F7]">
                    <span className="text-[#71717A]">[Instance]</span> i-04a91fbc21 <span className="text-emerald-400">running</span><br />
                    <span className="text-[#71717A]">[Type]</span> t3.micro | VPC: vpc-09e88a<br />
                    <span className="text-[#71717A]">[Audit]</span> No orphaned EBS volumes detected
                  </div>
                  <p className="text-[#71717A] pt-1">$ terraform plan -out=cloudpilot.plan</p>
                  <p className="text-emerald-400">&gt; Plan: 4 to add, 0 to change, 0 to destroy.</p>
                  <div className="flex items-center gap-1 text-[#71717A] pt-1">
                    <span>madhav@cloud-shell:~$</span>
                    <span className="w-2 h-3.5 bg-[#6EA8FE] inline-block animate-pulse" />
                  </div>
                </div>
              )}

              {/* Bottom Subtle Bar */}
              <div className="px-4 py-2.5 bg-[#0C0E12] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#71717A]">
                <span className="flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3 h-3 text-[#6EA8FE]" />
                  Infrastructure as Code
                </span>
                <span className="font-mono text-[10px] text-[#6EA8FE]">Ready for Review</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
