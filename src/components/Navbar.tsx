import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cloud } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'CloudPilot AI', href: '#cloudpilot' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090B]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-[#F5F5F7] font-medium tracking-tight text-base hover:text-white transition-colors"
          aria-label="Madhav Jayanti Home"
        >
          <span className="w-7 h-7 rounded-lg bg-[#14171C] border border-white/10 flex items-center justify-center text-[#6EA8FE] group-hover:border-[#6EA8FE]/40 transition-colors">
            <Cloud className="w-4 h-4" />
          </span>
          <span className="font-semibold tracking-tight">Madhav Jayanti</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6EA8FE]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#F5F5F7] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 transition-all"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6EA8FE]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#A1A1AA] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA8FE]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090B]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-[#A1A1AA] hover:text-white py-2 border-b border-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-[#A1A1AA] bg-white/[0.04] border border-white/10 hover:text-white"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-[#08090B] bg-[#6EA8FE] hover:bg-[#8BBAFF] transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
