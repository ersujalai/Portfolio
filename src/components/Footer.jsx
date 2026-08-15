import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 relative bg-[#f5fcff] border-t border-slate-200 text-[#1c1e53]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Header Row matching reference footer--link--container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5e3bee] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#5e3bee]/20 font-heading">
              SP
            </div>
            <span className="font-heading font-extrabold text-xl text-[#282938]">
              Sujal Prajapati
            </span>
          </a>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-[#282938]">
            <a href="#hero" className="hover:text-[#5e3bee] transition-colors">Home</a>
            <a href="#projects" className="hover:text-[#5e3bee] transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-[#5e3bee] transition-colors">About Me</a>
            <a href="#skills" className="hover:text-[#5e3bee] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#5e3bee] transition-colors">Education</a>
            <a href="#certifications" className="hover:text-[#5e3bee] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#5e3bee] transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.placeholders.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#273c58] hover:text-[#5e3bee] hover:border-[#5e3bee] transition-colors shadow-2xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.placeholders.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#0077b5] hover:border-[#5e3bee] transition-colors shadow-2xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#5e3bee] text-white hover:bg-[#4b2ecc] transition-colors shadow-md shadow-[#5e3bee]/20"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Reference Divider Line */}
        <div className="h-[1.33px] bg-slate-300/80 my-6 w-full"></div>

        {/* Bottom Copyright Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Sujal Prajapati. Built for Software Engineering Opportunities.
          </div>
          <div className="flex items-center gap-4">
            <span>LJ University (SPI: 8.58 / 10)</span>
            <span>•</span>
            <span>Ahmedabad, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
