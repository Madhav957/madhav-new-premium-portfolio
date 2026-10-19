import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#14171C] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#F5F5F7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#101216] border-b border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6EA8FE] block mb-1">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-xl font-semibold tracking-tight text-[#F5F5F7]">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Summary / Headline */}
          <p className="text-base text-[#F5F5F7] font-medium leading-relaxed">
            {project.headline}
          </p>

          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            {project.description}
          </p>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase text-[#A1A1AA] block">Problem Statement</span>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase text-[#6EA8FE] block">Implemented Solution</span>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && project.architectureNotes.length > 0 && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] block flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#6EA8FE]" />
                Key Engineering &amp; Architecture Notes
              </span>
              <div className="space-y-2">
                {project.architectureNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0C0E12] border border-white/[0.04] text-xs text-[#A1A1AA] flex items-start gap-2.5 font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase text-[#71717A] block">Technologies Used</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-[#F5F5F7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Repo */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#F5F5F7] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#71717A]" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#08090B] bg-[#6EA8FE] hover:bg-[#8BBAFF] transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <span className="text-xs font-mono text-[#71717A]">
              Status: {project.statusLabel || 'Documented Work'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
