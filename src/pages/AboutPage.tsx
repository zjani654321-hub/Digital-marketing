import React, { useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { NavigationPage } from '../types';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Wrench, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'About ZeeMark - Grow Your Business Digitally',
      description: 'Learn about ZeeMark, our mission to democratize digital marketing education, our editorial standards, and our suite of free browser tools.',
      canonicalPath: '/about',
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Target size={14} />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About ZeeMark
        </h1>
        <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400">
          "Grow Your Business Digitally"
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          ZeeMark was founded to solve a massive pain point in the online business world: noisy, overhyped marketing blogs that lock basic tools behind expensive monthly subscriptions or publish thin, low-value articles solely to game search engines.
        </p>
      </div>

      {/* Core Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mb-4">
            <BookOpen size={20} />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Actionable Education</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Every guide we publish contains verified frameworks, real case studies, and practical blueprints that founders can implement immediately.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
            <Wrench size={20} />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Free Practical Tools</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            We build browser-based generators for captions, hashtags, ad copy, and SEO verification that work without paid API keys, tokens, or signups.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold mb-4">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Editorial Integrity</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            We strictly separate editorial advice from clearly designated advertising zones, adhering to Google AdSense Quality Guidelines.
          </p>
        </div>
      </div>

      {/* Editorial Principles & E-E-A-T */}
      <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Our Editorial Philosophy & Standards
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Google’s Search Essentials emphasize Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). At ZeeMark, our editorial team adheres to strict quality guidelines:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
            <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">No Thin or Automated Content</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We refuse to publish generic filler articles. Every guide must solve a real business challenge with concrete steps.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
            <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Regular Algorithm Audits</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Digital marketing changes rapidly. Our guides are regularly audited and updated to reflect current algorithms.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
            <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">No Misleading Ad Placements</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We never trick users into clicking advertisements. Ads are clearly labeled and separated from buttons.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
            <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Accessible & Fast by Design</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Our 3D visuals are built with modern CSS and vector mathematics, ensuring lightning-fast load times on all devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Meet the Editorial Specialists
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Experienced strategists and technical marketers behind ZeeMark's research and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white text-xl font-bold flex items-center justify-center mx-auto mb-3 shadow-md">
              SL
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Sarah Lin</h3>
            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Head of Growth Strategy</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Former growth director with 9+ years managing multi-channel B2B and e-commerce acquisition funnels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white text-xl font-bold flex items-center justify-center mx-auto mb-3 shadow-md">
              MV
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Marcus Vance</h3>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Technical SEO & PPC Specialist</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Specializes in Google Search algorithms, schema architecture, Core Web Vitals, and Performance Max bidding.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-400 text-white text-xl font-bold flex items-center justify-center mx-auto mb-3 shadow-md">
              AP
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Aisha Patel</h3>
            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Social Media Strategist</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Creator and consultant focused on organic TikTok virality, Instagram Reels retention, and community engagement.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-indigo-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl shadow-indigo-600/20">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Accelerate Your Digital Growth?</h2>
        <p className="text-xs sm:text-sm text-indigo-100 max-w-xl mx-auto">
          Explore our guides, launch your first campaign with our free copywriting tools, or contact our team for questions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('guides')}
            className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-bold text-xs sm:text-sm shadow-md hover:bg-indigo-50 transition-colors"
          >
            Explore All Guides
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs sm:text-sm transition-colors border border-indigo-500"
          >
            Contact the Team
          </button>
        </div>
      </div>

    </div>
  );
};
