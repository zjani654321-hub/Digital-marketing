import React, { useState, useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  Sparkles,
  Phone
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    updateDocumentSEO({
      title: 'Contact ZeeMark - Inquiries, Feedback & Editorial Support',
      description: 'Get in touch with the ZeeMark digital marketing team. Reach out via email, contact form, or direct WhatsApp support.',
      canonicalPath: '/contact',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields before submitting.');
      return;
    }

    if (!email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
    // In a production backend, this sends to /api/contact
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Mail size={14} />
          <span>Direct Communication</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact ZeeMark
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Have a question about our guides, feedback on our free tools, or a strategic partnership proposal? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Our editorial team reviews every message and will respond to <strong>{email}</strong> within 24 to 48 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                  setName('');
                  setEmail('');
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Message</h2>
                <p className="text-xs text-slate-500 mt-0.5">Fill out the form below and we’ll get back to you promptly.</p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Tools Feedback">Feedback on Free Marketing Tools</option>
                  <option value="Editorial Correction">Editorial Feedback or Correction</option>
                  <option value="Partnership">Partnership / Advertising Opportunity</option>
                  <option value="Privacy / Data">Privacy & Data Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we assist with your marketing goals?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>Submit Message</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-2">
                We respect your privacy. Your email will never be sold or shared with third parties.
              </p>
            </form>
          )}
        </div>

        {/* Contact Info & WhatsApp (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Direct Chat Card */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 sm:p-8 shadow-xl shadow-emerald-600/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <MessageCircle size={26} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                Instant Messaging
              </span>
              <h3 className="text-xl font-extrabold mt-0.5">Chat via WhatsApp</h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed">
                Need a rapid response or want to discuss strategic digital marketing consulting? Connect directly with our team on WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/15551234567?text=Hi%20ZeeMark%20Team%2C%20I%20have%20an%20inquiry%20regarding%20digital%20marketing%20growth."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle size={17} />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>

          {/* Official Information Details */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Contact Information</h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="text-indigo-500 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Email Support</div>
                  <div className="text-xs text-slate-500">contact@zeemark.io</div>
                  <div className="text-xs text-slate-500">editorial@zeemark.io</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <Clock className="text-indigo-500 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Operating Hours</div>
                  <div className="text-xs text-slate-500">Monday - Friday: 9:00 AM - 6:00 PM (EST)</div>
                  <div className="text-xs text-slate-500">Inquiry Response Time: &lt; 24 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="text-indigo-500 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Headquarters</div>
                  <div className="text-xs text-slate-500">ZeeMark Digital Media Group</div>
                  <div className="text-xs text-slate-500">Tech Innovation Corridor, Boston, MA, USA</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Ad Placement */}
      <AdSenseBanner slot="footerBanner" format="horizontal" />

    </div>
  );
};
