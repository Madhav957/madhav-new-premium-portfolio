import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileDown, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="rounded-3xl bg-gradient-to-b from-[#14171C] to-[#101216] border border-white/10 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top glow */}
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#6EA8FE]/[0.08] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6EA8FE] mb-3 block">
              06 · Connect
            </span>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F7] leading-tight mb-4">
              Have something interesting to build?
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-10">
              I'm always interested in connecting with people building useful software and exploring cloud technology.
            </p>

            {/* Email Action Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#08090B] border border-white/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#6EA8FE]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#71717A] block font-mono">Direct Email</span>
                  <span className="text-sm sm:text-base font-semibold text-[#F5F5F7]">
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors inline-flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-[#08090B] bg-[#6EA8FE] hover:bg-[#8BBAFF] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open Mail Client</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Verified Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#6EA8FE]" />
                  <span className="text-xs font-medium text-[#F5F5F7]">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#F5F5F7]" />
                  <span className="text-xs font-medium text-[#F5F5F7]">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white transition-colors" />
              </a>

              {/* Resume */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <FileDown className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-[#F5F5F7]">Download Resume</span>
                </div>
                <span className="text-[10px] font-mono text-[#71717A]">PDF</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
