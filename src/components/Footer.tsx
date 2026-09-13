import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { 
  ShieldCheck, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUp, 
  Sparkles,
  MessageCircle,
  FileText
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectGuide?: (guideId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectGuide }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px] shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-white text-sm">
                  ZM
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">ZeeMark</span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              <strong className="text-white">Grow Your Business Digitally.</strong> ZeeMark delivers original, in-depth digital marketing guides, real-time copywriting generators, and practical SEO checkers built for modern founders, creators, and marketers.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/15551234567?text=Hello%20ZeeMark%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20resources"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
              >
                <span>Direct Contact</span>
              </button>
            </div>
          </div>

          {/* Newsletter / Growth Dispatch */}
          <div className="lg:col-span-7 bg-slate-950/60 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles size={14} />
                <span>Weekly Growth Breakdown</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Get actionable digital marketing playbooks in your inbox
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Zero spam. Only high-converting strategies, SEO algorithm updates, and free tools.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20"
              >
                <Send size={15} />
                <span>Join Free</span>
              </button>
            </form>

            {subscribed && (
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-400 animate-fadeIn">
                <CheckCircle2 size={14} />
                <span>Thank you! You are now subscribed to the ZeeMark Growth Dispatch.</span>
              </div>
            )}
          </div>
        </div>

        {/* Middle Section: Organized Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-sm">
          
          {/* Column 1: Featured Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Marketing Guides
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('guide-detail');
                    if (onSelectGuide) onSelectGuide('what-is-digital-marketing');
                  }} 
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  What is Digital Marketing?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('guide-detail');
                    if (onSelectGuide) onSelectGuide('seo-for-beginners');
                  }} 
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  SEO for Beginners 2026
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('guide-detail');
                    if (onSelectGuide) onSelectGuide('social-media-marketing');
                  }} 
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('guide-detail');
                    if (onSelectGuide) onSelectGuide('google-ads-basics');
                  }} 
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Google Ads PPC Basics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('guide-detail');
                    if (onSelectGuide) onSelectGuide('digital-marketing-strategy');
                  }} 
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Growth Marketing Strategy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guides')} className="text-indigo-400 font-semibold hover:underline">
                  View All 11 Guides →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Free Marketing Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Copy & Social Tools
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Caption Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Hashtag Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Ad Copy Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-400 transition-colors text-left">
                  SEO Title Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Meta Description Creator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Business Name Generator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SEO Audit Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              SEO Analyzers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('seo-tools')} className="hover:text-indigo-400 transition-colors text-left">
                  SEO Title Checker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seo-tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Meta Description Checker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seo-tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Keyword Density Checker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seo-tools')} className="hover:text-indigo-400 transition-colors text-left">
                  Text & Word Counter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seo-tools')} className="hover:text-indigo-400 transition-colors text-left">
                  SERP Snippet Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & AdSense Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors text-left">
                  About ZeeMark
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors text-left">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-indigo-400 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-indigo-400 transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('disclaimer')} className="hover:text-indigo-400 transition-colors text-left">
                  Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cookies')} className="hover:text-indigo-400 transition-colors text-left">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sitemap')} className="hover:text-indigo-400 transition-colors text-left font-semibold text-indigo-300">
                  HTML Sitemap
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ZeeMark. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck size={13} className="text-emerald-400" />
              AdSense Ready Architecture
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
