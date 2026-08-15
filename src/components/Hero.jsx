import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin,
  GraduationCap,
  Sparkles,
  Award,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" className="hero--section pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f5fcff] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#5e3bee]/10 blur-[130px] rounded-full pointer-events-none animate-soft-pulse"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Greeting Sub-title */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#5e3bee]/30 text-[#5e3bee] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hey, I'm Sujal Prajapati</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282938] font-heading leading-[1.15] mb-6">
              Computer Engineering Student & <span className="text-[#5e3bee]">Software Developer</span>
            </h1>

            {/* Quick Spec Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#1c1e53] mb-6">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#5e3bee]" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                LJ University (SPI: 8.58 / 10)
              </span>
            </div>

            {/* Sub-description paragraph */}
            <p className="text-lg sm:text-xl text-[#1c1e53] leading-relaxed mb-8 max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="btn btn-primary text-base font-medium"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#projects"
                className="btn btn-outline-primary text-base font-medium"
              >
                <span>View Projects</span>
              </a>

              <a
                href={personalInfo.placeholders.RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Sujal_Prajapati_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-[#282938] bg-[#ffffff] border border-slate-300 hover:border-[#5e3bee] hover:text-[#5e3bee] transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4 text-[#5e3bee]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200/80 w-full">
              <span className="text-xs font-mono text-[#282938] font-bold uppercase tracking-wider">Social Profiles:</span>
              
              <a
                href={personalInfo.placeholders.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={`GitHub Profile (${personalInfo.placeholders.GITHUB_URL})`}
                className="btn btn-github text-xs font-mono py-2 px-4 gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit My GitHub</span>
              </a>

              <a
                href={personalInfo.placeholders.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={`LinkedIn Profile (${personalInfo.placeholders.LINKEDIN_URL})`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-[#1c1e53] hover:text-[#5e3bee] hover:border-[#5e3bee] text-xs font-mono transition-all shadow-2xs"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Developer Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Background Card Accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5e3bee] to-cyan-500 rounded-3xl transform rotate-3 scale-102 opacity-20 blur-md pointer-events-none"></div>

              {/* Main Photo Frame Card */}
              <div className="relative bg-white p-3.5 rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_rgba(94,59,238,0.18)]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 group">
                  <img
                    src={personalInfo.profileImage}
                    alt="Sujal Prajapati - Computer Engineer & Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Soft Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Bottom Image Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Available for Internships & Roles</span>
                    </div>
                    <div className="text-xl font-bold font-heading text-white">
                      Sujal Prajapati
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      Computer Engineering @ LJ University
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-Left Floating Badge: SPI Academic Standing */}
              <div className="absolute -top-4 -left-4 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Academic SPI</div>
                  <div className="text-sm font-extrabold text-[#282938] font-heading">8.58 / 10</div>
                </div>
              </div>

              {/* Bottom-Right Floating Badge: Developer Stack */}
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#5e3bee]/10 text-[#5e3bee] flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Specialization</div>
                  <div className="text-xs font-bold text-[#5e3bee] font-heading">Full-Stack & ML</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
