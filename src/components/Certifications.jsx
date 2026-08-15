import React from 'react';
import { Award, Calendar, CheckCircle, Star, BookCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <p className="sub--title text-[#282938] uppercase tracking-wider text-sm font-semibold mb-2">
            Certifications
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282938] font-heading tracking-tight">
            Verified <span className="text-[#5e3bee]">Accreditations</span>
          </h2>
        </div>

        {/* Certifications Grid matching reference card styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="white-card p-7 rounded-2xl border-l-4 border-l-[#5e3bee] border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(94,59,238,0.1)] transition-all group"
            >
              <div>
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#5e3bee]" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#282938] font-heading mb-2 group-hover:text-[#5e3bee] transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer & Platform */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#1c1e53] mb-4">
                  <BookCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{cert.issuer}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[#5e3bee]">{cert.platform}</span>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
                <span className="text-xs font-mono text-slate-400">{cert.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
