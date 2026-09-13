import React, { useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { Cookie, Info } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Cookie Policy - ZeeMark',
      description: 'Understand how ZeeMark uses cookies, local storage, analytics, and advertising pixels in accordance with ePrivacy and Google AdSense guidelines.',
      canonicalPath: '/cookies',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      <header className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
          <Cookie size={14} className="text-amber-500" />
          <span>Tracking & Cookies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Cookie Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last updated: January 10, 2026
        </p>
      </header>

      <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. How We Use Cookies</h2>
          <p>
            ZeeMark uses cookies for several reasons explained below:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">Essential / Functional Cookies</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Used to remember your theme preference (Dark/Light mode) and cookie consent status across sessions.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">Advertising Cookies (Google AdSense)</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Used to serve relevant ads, prevent the same ad from repeatedly appearing, and measure advertising efficiency.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">Performance & Analytics Cookies</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Help us understand how visitors interact with our guides and tools to optimize site speed and layout.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">Client-Side Local Storage</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Stores tool draft inputs temporarily in your local browser so your work isn't lost if you refresh.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. How to Disable or Manage Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies may affect the functionality of this and many other websites that you visit.
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            For Google Ads personalization opt-out, visit: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">https://adssettings.google.com</a>.
          </p>
        </section>

      </div>

    </div>
  );
};
