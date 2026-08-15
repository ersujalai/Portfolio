import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Wrench, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillsCategories } = portfolioData;

  const categoryIcons = {
    languages: <Code2 className="w-7 h-7 text-[#5e3bee]" />,
    frameworks: <Cpu className="w-7 h-7 text-[#5e3bee]" />,
    databases: <Database className="w-7 h-7 text-[#5e3bee]" />,
    tools: <Wrench className="w-7 h-7 text-[#5e3bee]" />
  };

  return (
    <section id="skills" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <p className="sub--title text-[#282938] uppercase tracking-wider text-sm font-semibold mb-2">
            My Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282938] font-heading tracking-tight">
            My Technical <span className="text-[#5e3bee]">Expertise</span>
          </h2>
        </div>

        {/* 4-Column Responsive Grid matching parth-green.vercel.app */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category) => (
            <div
              key={category.id}
              className="reference-card reference-card-hover p-8 rounded-xl flex flex-col justify-between group cursor-pointer min-h-[280px]"
            >
              <div>
                {/* Icon Container with soft shadow */}
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-[0_0_16px_rgba(0,0,0,0.08)] group-hover:scale-110 transition-transform">
                  {categoryIcons[category.id] || <Terminal className="w-7 h-7 text-[#5e3bee]" />}
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-[#282938] mb-4 font-heading group-hover:text-[#5e3bee] transition-colors">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-[#1c1e53] text-xs font-medium shadow-2xs group-hover:border-[#5e3bee]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5e3bee]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom skill count indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{category.skills.length} Technical Skills</span>
                <span className="text-[#5e3bee] font-bold">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
