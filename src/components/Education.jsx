import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-[#f5fcff] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <p className="sub--title text-[#282938] uppercase tracking-wider text-sm font-semibold mb-2">
            Academic Foundation
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282938] font-heading tracking-tight">
            Education & <span className="text-[#5e3bee]">Academic Credentials</span>
          </h2>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl">
          <div className="white-card p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: SPI Badge & Institution */}
              <div className="lg:col-span-5 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
                <div className="w-14 h-14 rounded-2xl bg-[#5e3bee] text-white flex items-center justify-center mb-6 shadow-md shadow-[#5e3bee]/30">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold font-mono mb-4">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>SPI: {education.spi}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#282938] font-heading mb-1">
                  {education.institution}
                </h3>
                
                <p className="text-xs font-mono text-[#5e3bee] flex items-center gap-1.5 mb-4 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#1c1e53] bg-[#f5fcff] px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-[#5e3bee]" />
                  <span>{education.duration}</span>
                </div>
              </div>

              {/* Right Column: Degree & Core Subject Pills */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#5e3bee] font-bold mb-1 uppercase tracking-wider">
                    Degree Program
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#282938] mb-4 font-heading">
                    {education.degree}
                  </h4>
                  <p className="text-[#1c1e53] text-sm leading-relaxed mb-6">
                    {education.description}
                  </p>
                </div>

                {/* Core Focus Badges */}
                <div>
                  <h5 className="text-xs font-bold text-[#282938] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#5e3bee]" />
                    Core Subjects & Engineering Focus:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#f5fcff] border border-slate-200 text-xs text-[#1c1e53] font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5e3bee]" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
