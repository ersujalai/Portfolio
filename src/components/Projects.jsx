import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects, personalInfo } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'Full-Stack & ML', 'Full-Stack & Web', 'Java & Desktop'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.categoryGroup === selectedFilter);

  return (
    <section id="projects" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Header Row matching parth-green.vercel.app portfolio--container-box */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col items-start text-left">
            <p className="sub--title text-[#282938] uppercase tracking-wider text-sm font-semibold mb-2">
              Recent Projects
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282938] font-heading tracking-tight">
              My <span className="text-[#5e3bee]">Portfolio</span>
            </h2>
          </div>

          <a
            href={personalInfo.placeholders.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github text-sm font-medium py-3 px-6 gap-3"
          >
            <GithubIcon className="w-5 h-5" />
            <span>Visit My GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-[#5e3bee] text-white shadow-md shadow-[#5e3bee]/25'
                  : 'bg-[#f5fcff] text-[#282938] hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="white-card rounded-2xl border border-slate-200 p-8 flex flex-col justify-between group transition-all duration-300 relative hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#f5fcff] border border-[#5e3bee]/30 text-[#5e3bee] text-xs font-bold font-mono">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    0{projects.findIndex(p => p.id === project.id) + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-[#282938] font-heading mb-3 group-hover:text-[#5e3bee] transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-[#1c1e53] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features Preview */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-bold text-[#282938] uppercase tracking-wider block mb-1">
                    Key Features:
                  </span>
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#1c1e53]">
                      <span className="text-[#5e3bee] font-bold">›</span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#f5fcff] border border-slate-200 text-[#1c1e53] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons matching reference links */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f5fcff] hover:bg-[#5e3bee] text-[#282938] hover:text-white border border-slate-200 hover:border-[#5e3bee] text-xs font-semibold transition-all"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.githubUrl || personalInfo.placeholders.GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5e3bee] hover:text-[#4b2ecc] p-2 hover:underline"
                  >
                    <span>View In GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProjectModal && (
          <ProjectModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
          />
        )}

      </div>
    </section>
  );
}
