import React from 'react';
import { X, ExternalLink, CheckCircle, Code2, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="white-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 shadow-2xl bg-white text-left p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-[#282938] hover:bg-slate-200 transition-colors focus:outline-none"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5fcff] border border-[#5e3bee]/30 text-[#5e3bee] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#282938] font-heading mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-[#5e3bee] font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Overview Description */}
        <div className="mb-8 p-5 rounded-xl bg-[#f5fcff] border border-slate-200">
          <h4 className="text-xs font-bold text-[#282938] uppercase tracking-wider mb-2">Architecture Overview</h4>
          <p className="text-sm text-[#1c1e53] leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Features List */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-[#282938] mb-4 flex items-center gap-2 font-heading">
            <Layers className="w-4 h-4 text-[#5e3bee]" />
            Key Technical Features & Highlights
          </h4>
          <div className="space-y-3">
            {project.features.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#5e3bee]/40 transition-colors shadow-2xs"
              >
                <CheckCircle className="w-4 h-4 text-[#5e3bee] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#1c1e53] leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badge Group */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-[#282938] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-[#5e3bee]" />
            Technologies & Libraries Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-md bg-[#f5fcff] border border-slate-200 text-[#5e3bee] text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl || portfolioData.personalInfo.placeholders.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github text-xs py-2.5 px-5 gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#282938] text-xs font-medium transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
