import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  AlertCircle,
  Loader2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | 'fallback' | null
  const [statusMsg, setStatusMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setStatusMsg('Please fill in your Name, Email, and Message before submitting.');
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    const accessKey = personalInfo.placeholders.WEB3FORMS_ACCESS_KEY;

    // Check if key is configured
    if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New Contact Message from ${formData.name}`,
            message: formData.message,
            from_name: `${formData.name} (Portfolio Inquiry)`,
            to_email: personalInfo.email
          })
        });

        const data = await response.json();

        if (data.success) {
          setFormStatus('success');
          setStatusMsg(`Message submitted! An instant Gmail notification has been dispatched to ${personalInfo.email}.`);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Email API Error:', err);
        // Fallback to mailto if API fails
        triggerMailtoFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Key not set yet -> trigger mailto & show instructions for free instant key
      triggerMailtoFallback();
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormStatus('fallback');
    setStatusMsg(`Opened default email app for ${personalInfo.email}. To enable background Gmail notifications, paste your free 10-second Web3Forms access key in portfolioData.js!`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#f5fcff] border-t border-slate-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <p className="sub--title text-[#282938] uppercase tracking-wider text-sm font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#282938] font-heading tracking-tight mb-4">
            Contact <span className="text-[#5e3bee]">Me</span>
          </h2>
          <p className="text-base text-[#1c1e53] max-w-xl">
            Interested in hiring me for software engineering roles or internships? Fill out the form below to send an instant message directly to <strong>{personalInfo.email}</strong>.
          </p>
        </div>

        {/* Direct Quick Email / Social Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          
          {/* Email Quick Copy */}
          <div className="white-card p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2">
            <Mail className="w-6 h-6 text-[#5e3bee]" />
            <div className="text-xs font-mono text-[#1c1e53] font-bold">{personalInfo.email}</div>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-[#5e3bee] font-semibold hover:underline flex items-center gap-1 mt-1"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Location */}
          <div className="white-card p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-1">
            <MapPin className="w-6 h-6 text-[#5e3bee]" />
            <div className="text-sm font-bold text-[#282938] font-heading">{personalInfo.location}</div>
            <div className="text-xs text-slate-500 font-mono">India (IST)</div>
          </div>

          {/* GitHub / LinkedIn */}
          <div className="white-card p-5 rounded-xl border border-slate-200 flex items-center justify-center gap-3">
            <a
              href={personalInfo.placeholders.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#273c58] text-white hover:opacity-90 transition-opacity"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.placeholders.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Contact Form matching reference style */}
        <div className="white-card p-8 sm:p-10 rounded-2xl border border-slate-200 text-left shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          
          {/* Success Banner */}
          {formStatus === 'success' && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-start gap-3 animate-fadeIn">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Message Dispatched!</strong>
                <p className="mt-1 text-emerald-700">{statusMsg}</p>
              </div>
            </div>
          )}

          {/* Fallback Banner */}
          {formStatus === 'fallback' && (
            <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-300 text-blue-800 text-sm flex items-start gap-3 animate-fadeIn">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong>Mail App Opened & Gmail Direct Notification Ready!</strong>
                <p className="mt-1 text-blue-700">{statusMsg}</p>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {formStatus === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-sm flex items-center gap-3 animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#282938] uppercase tracking-wider mb-2" htmlFor="name">
                  First & Last Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#5e3bee] text-[#1c1e53] text-sm focus:outline-none focus:ring-2 focus:ring-[#5e3bee]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#282938] uppercase tracking-wider mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#5e3bee] text-[#1c1e53] text-sm focus:outline-none focus:ring-2 focus:ring-[#5e3bee]/40 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#282938] uppercase tracking-wider mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Software Developer Role / Internship Inquiry"
                className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#5e3bee] text-[#1c1e53] text-sm focus:outline-none focus:ring-2 focus:ring-[#5e3bee]/40 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#282938] uppercase tracking-wider mb-2" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#5e3bee] text-[#1c1e53] text-sm focus:outline-none focus:ring-2 focus:ring-[#5e3bee]/40 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary text-base font-semibold py-3.5 px-10 shadow-lg shadow-[#5e3bee]/25 w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Sending to Gmail...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

          
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
