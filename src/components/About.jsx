import React from 'react';
import { GraduationCap, Award, CheckCircle2, Layers, ShieldCheck, Database, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo, stats } = portfolioData;

  const coreFocusAreas = [
    {
      icon: <Layers className="w-5 h-5 text-[#5e3bee]" />,
      title: "Full-Stack Web Engineering",
      description: "Building scalable web applications using Django REST Framework, React, and Node.js with modern architecture."
    },
    {
      icon: <Database className="w-5 h-5 text-[#5e3bee]" />,
      title: "Database Architecture",
      description: "Designing relational database schemas across MySQL, PostgreSQL, MongoDB, and SQLite with optimized queries."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#5e3bee]" />,
      title: "REST APIs & Security",
      description: "Engineering secure REST APIs with JWT authentication, Role-Based Access Control (RBAC), and WebSocket real-time updates."
    },
    {
      icon: <Brain className="w-5 h-5 text-[#5e3bee]" />,
      title: "Applied Machine Learning",
      description: "Applying scikit-learn algorithms (including Random Forest classification) to solve real-world creator-business matching."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#f5fcff] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header matching reference */}
        <div className="flex flex-col items-start mb-12 text-left">
          <p className="sub--title text-[#282938] uppercase tracking-wider text-sm font-semibold mb-2">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282938] font-heading tracking-tight">
            About <span className="text-[#5e3bee]">Me</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Interactive Academic Card */}
          <div className="lg:col-span-5">
            <div className="white-card p-8 rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-[#5e3bee]/10 flex items-center justify-center text-[#5e3bee] mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-200">
                <Award className="w-3.5 h-3.5" />
                <span>Current SPI: 8.58 / 10</span>
              </div>

              <h3 className="text-2xl font-bold text-[#282938] font-heading mb-2">
                LJ University, Ahmedabad
              </h3>
              <p className="text-sm font-mono text-[#5e3bee] mb-4">
                B.E. / B.Tech in Computer Engineering (2024 – 2028)
              </p>
              
              <p className="text-sm text-[#1c1e53] leading-relaxed mb-6">
                Dedicated Computer Engineering student with a passion for software design, backend infrastructure, relational databases, and machine learning systems.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                {stats.map((st, idx) => (
                  <div key={idx} className="p-3 bg-[#f5fcff] rounded-xl border border-slate-200">
                    <div className="text-lg font-bold text-[#5e3bee] font-heading">{st.value}</div>
                    <div className="text-xs text-[#282938] font-medium">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Paragraphs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <p className="text-xl font-medium text-[#282938] leading-relaxed mb-6 font-heading">
              "Computer Engineering student and aspiring Software Developer with hands-on experience building full-stack web applications and intelligent machine learning models."
            </p>

            <p className="text-base text-[#1c1e53] leading-relaxed mb-6">
              I am currently pursuing my Computer Engineering degree at LJ University, Ahmedabad. My technical journey is defined by building complete end-to-end applications across full-stack web development and desktop software engineering.
            </p>

            <p className="text-base text-[#1c1e53] leading-relaxed mb-8">
              My engineering stack centers around <strong>Django REST Framework, React, Node.js, Express, MySQL, PostgreSQL, and Java</strong>. Additionally, I apply machine learning using <strong>scikit-learn</strong> to engineer smart recommendation systems.
            </p>

            {/* Capability Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {coreFocusAreas.map((area, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#f5fcff]">
                    {area.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#282938]">{area.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{area.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
