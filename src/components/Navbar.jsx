import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'about', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white shadow-[0_5px_30px_rgba(0,0,0,0.08)] border-b border-slate-100'
          : 'py-5 bg-white/95 backdrop-blur-md border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#5e3bee] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#5e3bee]/25 group-hover:scale-105 transition-transform font-heading">
            SP
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl text-[#282938] tracking-tight flex items-center gap-1.5">
              Sujal Prajapati
              <span className="w-2 h-2 rounded-full bg-[#5e3bee] inline-block animate-pulse"></span>
            </span>
            <span className="text-[11px] font-mono text-[#5e3bee] font-medium tracking-wide">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 py-1 relative ${
                  isActive
                    ? 'text-[#5e3bee] font-semibold'
                    : 'text-[#1c1e53] hover:text-[#5e3bee]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5e3bee] rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personalInfo.placeholders.RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="Sujal_Prajapati_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-[#273c58] bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <FileText className="w-4 h-4 text-[#5e3bee]" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="btn btn-outline-primary text-sm font-medium py-2.5 px-5"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slate-100 text-[#282938] hover:text-[#5e3bee] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white mx-4 mt-3 p-5 rounded-2xl border border-slate-200 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#282938] hover:text-[#5e3bee] hover:bg-[#f5fcff] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#5e3bee]">→</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn btn-primary justify-center text-sm py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
