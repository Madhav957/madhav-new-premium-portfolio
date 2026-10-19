import React from 'react';
import { Cloud, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#08090B] border-t border-white/[0.08] text-xs text-[#71717A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-md bg-[#14171C] border border-white/10 flex items-center justify-center text-[#6EA8FE]">
            <Cloud className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="text-[#F5F5F7] font-medium tracking-tight">Madhav Jayanti</span>
            <span className="mx-2 text-white/20">·</span>
            <span>© {currentYear} All rights reserved</span>
          </div>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F7] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F7] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="hover:text-[#F5F5F7] transition-colors"
          >
            Resume
          </a>
          
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
