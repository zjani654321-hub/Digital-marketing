import React, { useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { GUIDES_DATA } from '../data/guidesData';
import { NavigationPage } from '../types';
import { Network, ExternalLink, BookOpen, Wrench, Search, Shield, ChevronRight } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectGuide: (guideId: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate, onSelectGuide }) => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'HTML Sitemap - Directory of All Guides & Tools | ZeeMark',
      description: 'Comprehensive directory and HTML sitemap of all ZeeMark digital marketing guides, free copywriting tools, SEO checkers, and legal policies.',
      canonicalPath: '/sitemap',
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      <header className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Network size={14} />
          <span>Complete Website Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Website Sitemap
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Browse our structured directory of digital marketing resources, free browser-based tools, and legal compliance pages.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Core Marketing Guides (Full List) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card space-y-4">
          <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-bold text-base border-b border-slate-100 dark:border-slate-800 pb-3">
            <BookOpen size={18} />
            <h2>Comprehensive Marketing Guides ({GUIDES_DATA.length})</h2>
          </div>

          <ul className="space-y-3">
            {GUIDES_DATA.map((guide) => (
              <li key={guide.id} className="group">
                <button
                  onClick={() => onSelectGuide(guide.id)}
                  className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-start justify-between gap-3"
                >
                  <div>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-0.5">
                      {guide.category} • {guide.readTime}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                      {guide.title}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform mt-2 flex-shrink-0" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Interactive Utilities */}
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-base border-b border-slate-100 dark:border-slate-800 pb-3">
              <Wrench size={18} />
              <h2>Free Marketing Generators</h2>
            </div>

            <ul className="space-y-2 text-sm">
              {[
                'Social Media Caption Generator',
                'Niche Hashtag Generator',
                'Ad Copy & Headline Creator',
                'Business & Agency Name Generator',
                'Campaign Ideas Generator',
                'Character Counter for Social Media',
                'Word Counter & Reading Speed Timer'
              ].map((toolName, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('tools')}
                    className="w-full text-left py-1.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 font-medium flex items-center justify-between"
                  >
                    <span>{toolName}</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card space-y-4">
            <div className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 font-bold text-base border-b border-slate-100 dark:border-slate-800 pb-3">
              <Search size={18} />
              <h2>Technical SEO Tools</h2>
            </div>

            <ul className="space-y-2 text-sm">
              {[
                'SEO Title Tag & Pixel Width Checker',
                'Meta Description & SERP Snippet Preview',
                'Keyword Density & N-Gram Analyzer',
                'Flesch Reading Ease & Complexity Score'
              ].map((seoTool, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('seo-tools')}
                    className="w-full text-left py-1.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 font-medium flex items-center justify-between"
                  >
                    <span>{seoTool}</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Main Pages & Legal Information Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Navigation</h3>
          <ul className="space-y-2 text-xs font-semibold">
            <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-600">Home Page</button></li>
            <li><button onClick={() => onNavigate('guides')} className="hover:text-indigo-600">All Marketing Guides</button></li>
            <li><button onClick={() => onNavigate('tools')} className="hover:text-indigo-600">Copywriting Tools</button></li>
            <li><button onClick={() => onNavigate('seo-tools')} className="hover:text-indigo-600">SEO Checkers</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Company & Mission</h3>
          <ul className="space-y-2 text-xs font-semibold">
            <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-600">About ZeeMark</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-600">Editorial Standards (E-E-A-T)</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-600">Contact & Support</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-600">WhatsApp Instant Support</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Legal & Compliance</h3>
          <ul className="space-y-2 text-xs font-semibold">
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-indigo-600">Privacy Policy (GDPR / CCPA)</button></li>
            <li><button onClick={() => onNavigate('terms')} className="hover:text-indigo-600">Terms and Conditions</button></li>
            <li><button onClick={() => onNavigate('disclaimer')} className="hover:text-indigo-600">Earnings & Ad Disclaimer</button></li>
            <li><button onClick={() => onNavigate('cookies')} className="hover:text-indigo-600">Cookie Policy</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">AdSense Compliance</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            All content on ZeeMark is original, human-curated, and regularly updated. Advertisements are clearly delineated from interactive tools.
          </p>
        </div>
      </div>

    </div>
  );
};
