import React, { useState, useEffect } from 'react';
import { NavigationPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { GuidesPage } from './pages/GuidesPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { FreeToolsPage } from './pages/FreeToolsPage';
import { SeoToolsPage } from './pages/SeoToolsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { SitemapPage } from './pages/SitemapPage';

import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedGuideId, setSelectedGuideId] = useState<string>('guide-what-is-digital-marketing');
  
  // Theme state: defaults to dark mode for rich 3D lighting, with user toggle and persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('zeemark_theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark for high-contrast 3D visuals
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('zeemark_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('zeemark_theme', 'light');
    }
  }, [isDark]);

  // Handle URL hash changes for browser history back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('guide/')) {
        const guideId = hash.replace('guide/', '');
        setSelectedGuideId(guideId);
        setCurrentPage('guide-detail');
      } else if (
        [
          'home',
          'guides',
          'tools',
          'seo-tools',
          'about',
          'contact',
          'privacy',
          'terms',
          'disclaimer',
          'cookies',
          'sitemap',
        ].includes(hash)
      ) {
        setCurrentPage(hash as NavigationPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGuide = (guideId: string) => {
    setSelectedGuideId(guideId);
    setCurrentPage('guide-detail');
    window.location.hash = `guide/${guideId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased transition-colors duration-200 selection:bg-indigo-500 selection:text-white">
      
      {/* Universal Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectGuide={handleSelectGuide}
          />
        )}

        {currentPage === 'guides' && (
          <GuidesPage
            onNavigate={handleNavigate}
            onSelectGuide={handleSelectGuide}
          />
        )}

        {currentPage === 'guide-detail' && (
          <GuideDetailPage
            guideId={selectedGuideId}
            onNavigate={handleNavigate}
            onSelectGuide={handleSelectGuide}
          />
        )}

        {currentPage === 'tools' && (
          <FreeToolsPage />
        )}

        {currentPage === 'seo-tools' && (
          <SeoToolsPage />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage />
        )}

        {currentPage === 'terms' && (
          <TermsPage />
        )}

        {currentPage === 'disclaimer' && (
          <DisclaimerPage />
        )}

        {currentPage === 'cookies' && (
          <CookiePolicyPage />
        )}

        {currentPage === 'sitemap' && (
          <SitemapPage
            onNavigate={handleNavigate}
            onSelectGuide={handleSelectGuide}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectGuide={handleSelectGuide}
      />

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-1 focus:outline-none"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* GDPR / ePrivacy Cookie Banner */}
      <CookieBanner onNavigate={handleNavigate} />

    </div>
  );
}
