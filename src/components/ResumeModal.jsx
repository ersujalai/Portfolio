import React, { useEffect } from 'react';
import { FileText, Download, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const resumeUrl = portfolioData.personalInfo.placeholders.RESUME_URL;

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5e3bee] flex items-center justify-center text-white shadow-md shadow-[#5e3bee]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-lg text-white">
                  Sujal Prajapati — Official Resume
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                  <CheckCircle2 className="w-3 h-3" /> Updated 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Computer Engineering Student @ LJ University (SPI: 8.58 / 10)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Primary Download Button */}
            <a
              href={resumeUrl}
              download="Sujal_Prajapati_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#5e3bee] hover:bg-[#4b2ecc] active:scale-95 transition-all shadow-md shadow-[#5e3bee]/30"
              title="Download PDF Resume"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF Previewer */}
        <div className="flex-1 bg-slate-800 relative w-full h-full">
          <object
            data={`${resumeUrl}#view=FitH`}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            {/* Fallback if browser iframe/object PDF viewing is disabled */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-900 text-white">
              <FileText className="w-16 h-16 text-[#5e3bee] mb-4" />
              <h4 className="text-xl font-bold font-heading mb-2">Sujal Prajapati's Resume</h4>
              <p className="text-slate-400 text-sm max-w-md mb-6">
                Your browser doesn't support direct embedded PDF preview. You can view or download the PDF file directly below.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={resumeUrl}
                  download="Sujal_Prajapati_Resume.pdf"
                  className="btn btn-primary text-sm px-6 py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary text-sm px-6 py-3"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open PDF in New Tab
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Modal Footer Banner */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 font-mono">
          <div>
            📍 Sujal Prajapati • sbprajapati310707@gmail.com • Ahmedabad, India
          </div>
          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download="Sujal_Prajapati_Resume.pdf"
              className="text-[#5e3bee] hover:underline font-semibold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              Click here to download PDF
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
