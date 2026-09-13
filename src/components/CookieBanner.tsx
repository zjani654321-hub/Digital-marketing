import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { NavigationPage } from '../types';

interface CookieBannerProps {
  onNavigate: (page: NavigationPage) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zeemark_cookie_consent');
    if (!consent) {
      // Delay slightly so it does not interfere with initial page render
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zeemark_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('zeemark_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Cookie Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-5 shadow-2xl transition-all animate-fadeIn"
    >
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
          <Cookie size={20} />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            Cookie & Privacy Choices
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            ZeeMark uses cookies to ensure security, understand site performance, and serve relevant, non-intrusive advertisements compliant with Google AdSense standards.
          </p>
          <div className="mt-2">
            <button
              onClick={() => onNavigate('cookies')}
              className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Read our full Cookie Policy →
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie banner"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X size={16} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={handleDecline}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          Essential Only
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm flex items-center gap-1"
        >
          <Check size={14} />
          <span>Accept All</span>
        </button>
      </div>
    </aside>
  );
};
