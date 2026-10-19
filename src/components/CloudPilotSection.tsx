import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  FileCode,
  ShieldCheck,
  Network,
  Sparkles,
  Info,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { flagshipProject } from '../data/portfolioData';

export const CloudPilotSection: React.FC = () => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<number>(0);

  const samplePrompt =
    'Create a private application environment with a VPC, public load balancer, private application subnet, and restricted network access.';

  const terraformSnippet = `# Generated Terraform Plan (Audited for Least Privilege)
resource "aws_vpc" "app_network" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "cloudpilot-vpc-main" }
}

resource "aws_subnet" "public_lb" {
  vpc_id                  = aws_vpc.app_network.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
}

resource "aws_subnet" "private_app" {
  vpc_id                  = aws_vpc.app_network.id
  cidr_block              = "10.0.2.0/24"
  map_public_ip_on_launch = false # Enforces strict private network boundary
}

resource "aws_security_group" "lb_sg" {
  name        = "alb-restricted-ingress"
  vpc_id      = aws_vpc.app_network.id
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`;

  return (
    <section id="cloudpilot" className="py-24 sm:py-32 bg-[#08090B] relative overflow-hidden">
      {/* Subtle top divider line with electric blue glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EA8FE]/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EA8FE]/10 border border-[#6EA8FE]/20 text-[#6EA8FE] text-xs font-mono tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F7] leading-[1.15] mb-6">
            Cloud infrastructure.<br />
            <span className="text-[#6EA8FE]">A more natural interface.</span>
          </h2>

          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            {flagshipProject.description}
          </p>
        </div>

        {/* Showcase Interface Container */}
        <div className="rounded-2xl bg-[#101216] border border-white/10 shadow-2xl overflow-hidden mb-16">
          
          {/* Top Interface Bar */}
          <div className="px-6 py-4 bg-[#14171C] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#6EA8FE]/10 border border-[#6EA8FE]/30 flex items-center justify-center text-[#6EA8FE]">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-[#F5F5F7]">CloudPilot AI</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    Prototype Preview
                  </span>
                </div>
                <span className="text-xs text-[#71717A]">Human-in-the-Loop Infrastructure Synthesis</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {flagshipProject.githubUrl && (
                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#F5F5F7] bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#71717A]" />
                </a>
              )}
            </div>
          </div>

          {/* Conceptual Workflow Tabs */}
          <div className="bg-[#0C0E12] border-b border-white/[0.08] px-6 py-3 flex items-center overflow-x-auto gap-2">
            {[
              { id: 0, label: '1. Natural Intent', icon: Sparkles },
              { id: 1, label: '2. Proposed Architecture', icon: Network },
              { id: 2, label: '3. Terraform Plan', icon: FileCode },
              { id: 3, label: '4. Human Review Gate', icon: UserCheck },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveWorkflowTab(step.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    activeWorkflowTab === step.id
                      ? 'bg-[#181C23] text-[#F5F5F7] border border-[#6EA8FE]/40 shadow-sm'
                      : 'text-[#71717A] hover:text-[#A1A1AA] hover:bg-white/[0.03]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${activeWorkflowTab === step.id ? 'text-[#6EA8FE]' : ''}`} />
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Workflow Viewer Area */}
          <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-center">
            
            {/* Step 0: Natural Language Input */}
            {activeWorkflowTab === 0 && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] mb-2 block">
                    Developer Input Prompt
                  </span>
                  <div className="p-4 rounded-xl bg-[#14171C] border border-white/10 text-sm sm:text-base text-[#F5F5F7] leading-relaxed shadow-inner">
                    "{samplePrompt}"
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#A1A1AA] space-y-2">
                  <div className="font-semibold text-[#F5F5F7] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Intent Parser Breakdown
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                    <li className="bg-black/40 p-2 rounded border border-white/[0.04]">
                      <span className="text-[#6EA8FE]">Target Provider:</span> AWS (us-east-1)
                    </li>
                    <li className="bg-black/40 p-2 rounded border border-white/[0.04]">
                      <span className="text-[#6EA8FE]">CIDR Allocation:</span> 10.0.0.0/16
                    </li>
                    <li className="bg-black/40 p-2 rounded border border-white/[0.04]">
                      <span className="text-[#6EA8FE]">Subnet Strategy:</span> Public LB + Private App Subnet
                    </li>
                    <li className="bg-black/40 p-2 rounded border border-white/[0.04]">
                      <span className="text-[#6EA8FE]">Security Boundary:</span> Restrict ingress to Port 443
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveWorkflowTab(1)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#6EA8FE] hover:text-[#8BBAFF] transition-colors"
                >
                  <span>Proceed to proposed architecture layout</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 1: Proposed Architecture Diagram */}
            {activeWorkflowTab === 1 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                  <span>Visual Topology Synthesis</span>
                  <span className="text-emerald-400">Strict Layer Isolation Enforced</span>
                </div>

                {/* SVG Architecture Diagram */}
                <div className="p-6 rounded-xl bg-[#08090B] border border-white/[0.08] relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    
                    {/* Zone 1: Internet Ingress */}
                    <div className="p-4 rounded-xl bg-[#14171C] border border-white/10 text-center space-y-2">
                      <span className="text-[10px] font-mono uppercase text-[#71717A] tracking-wider block">
                        Ingress Tier
                      </span>
                      <div className="w-10 h-10 mx-auto rounded-lg bg-[#6EA8FE]/10 border border-[#6EA8FE]/30 flex items-center justify-center text-[#6EA8FE]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="font-semibold text-xs text-[#F5F5F7]">Internet Gateway</div>
                      <div className="text-[10px] font-mono text-emerald-400">HTTPS (Port 443)</div>
                    </div>

                    {/* Zone 2: Public Subnet Load Balancer */}
                    <div className="p-4 rounded-xl bg-[#14171C] border border-white/10 text-center space-y-2">
                      <span className="text-[10px] font-mono uppercase text-[#71717A] tracking-wider block">
                        Public Subnet (10.0.1.0/24)
                      </span>
                      <div className="w-10 h-10 mx-auto rounded-lg bg-[#6EA8FE]/10 border border-[#6EA8FE]/30 flex items-center justify-center text-[#6EA8FE]">
                        <Network className="w-5 h-5" />
                      </div>
                      <div className="font-semibold text-xs text-[#F5F5F7]">Application Load Balancer</div>
                      <div className="text-[10px] font-mono text-[#71717A]">Health Checked</div>
                    </div>

                    {/* Zone 3: Private Subnet Workloads */}
                    <div className="p-4 rounded-xl bg-[#14171C] border border-[#6EA8FE]/30 text-center space-y-2 relative">
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#6EA8FE]" />
                      <span className="text-[10px] font-mono uppercase text-[#6EA8FE] tracking-wider block">
                        Private Subnet (10.0.2.0/24)
                      </span>
                      <div className="w-10 h-10 mx-auto rounded-lg bg-[#6EA8FE]/10 border border-[#6EA8FE]/30 flex items-center justify-center text-[#6EA8FE]">
                        <FileCode className="w-5 h-5" />
                      </div>
                      <div className="font-semibold text-xs text-[#F5F5F7]">App Workloads (EC2 / ECS)</div>
                      <div className="text-[10px] font-mono text-[#A1A1AA]">No Public IP · Secure</div>
                    </div>

                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveWorkflowTab(0)}
                    className="text-xs text-[#71717A] hover:text-[#A1A1AA]"
                  >
                    ← Back to Intent
                  </button>
                  <button
                    onClick={() => setActiveWorkflowTab(2)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6EA8FE] hover:text-[#8BBAFF]"
                  >
                    <span>View Generated Terraform Plan</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Terraform Plan Output */}
            {activeWorkflowTab === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A1A1AA]">main.tf — Clean HCL Configuration</span>
                  <span className="text-[10px] bg-white/[0.06] px-2 py-0.5 rounded text-[#6EA8FE]">
                    Ready for Human Review
                  </span>
                </div>

                <div className="rounded-xl bg-[#08090B] border border-white/10 p-4 font-mono text-xs overflow-x-auto text-[#A1A1AA] leading-relaxed max-h-[260px] overflow-y-auto">
                  <pre>
                    <code>{terraformSnippet}</code>
                  </pre>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveWorkflowTab(1)}
                    className="text-xs text-[#71717A] hover:text-[#A1A1AA]"
                  >
                    ← Back to Architecture
                  </button>
                  <button
                    onClick={() => setActiveWorkflowTab(3)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6EA8FE] hover:text-[#8BBAFF]"
                  >
                    <span>Proceed to Safety Review Gate</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Human Review & Verification Gate */}
            {activeWorkflowTab === 3 && (
              <div className="space-y-6 max-w-3xl">
                <div className="p-4 rounded-xl bg-[#14171C] border border-[#6EA8FE]/30 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F5F7]">
                    <ShieldCheck className="w-5 h-5 text-[#6EA8FE]" />
                    <span>Human-in-the-Loop Verification Gate</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    CloudPilot AI strictly prevents autonomous or unreviewed infrastructure modifications. Before any provisioning step or `terraform apply` invocation, an engineer inspects the proposed diff, verifies permission boundaries, and authorizes execution.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
                      <span className="text-[10px] text-[#71717A] block">Additions</span>
                      <span className="text-emerald-400 font-medium">+ 4 Resources</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
                      <span className="text-[10px] text-[#71717A] block">Changes</span>
                      <span className="text-amber-400 font-medium">~ 0 Modifications</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
                      <span className="text-[10px] text-[#71717A] block">Destructions</span>
                      <span className="text-[#A1A1AA] font-medium">- 0 Destroys</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Human Review Passed
                  </span>
                  <span className="text-xs text-[#71717A]">
                    Simulated dry-run validation complete
                  </span>
                </div>

                <button
                  onClick={() => setActiveWorkflowTab(0)}
                  className="text-xs text-[#71717A] hover:text-[#A1A1AA] block pt-2"
                >
                  ← Restart conceptual walkthrough
                </button>
              </div>
            )}

          </div>

          {/* Technical Honesty & Limitations Note */}
          <div className="px-6 py-4 bg-[#0C0E12] border-t border-white/[0.06] flex items-start gap-3 text-xs text-[#71717A]">
            <Info className="w-4 h-4 text-[#6EA8FE] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#A1A1AA]">Engineering Note &amp; Project Status:</strong> This interactive walkthrough presents the actual conceptual workflow and syntax generator of CloudPilot AI. CloudPilot AI generates and validates Terraform configurations locally; it requires a developer’s configured AWS credentials and explicit human approval before any physical cloud provisioning takes place.
            </p>
          </div>

        </div>

        {/* Deep Dive Architecture & Problem Statement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#14171C] border border-white/[0.08] space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F5F7] tracking-tight">The Problem</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {flagshipProject.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#14171C] border border-white/[0.08] space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F5F7] tracking-tight">The Approach</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {flagshipProject.solution}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#14171C] border border-white/[0.08] space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F5F7] tracking-tight">Technology Stack</h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {flagshipProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-[11px] font-mono text-[#A1A1AA] bg-white/[0.04] border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
