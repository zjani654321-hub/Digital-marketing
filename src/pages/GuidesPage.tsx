import React, { useState, useEffect } from 'react';
import { GUIDES_DATA } from '../data/guidesData';
import { NavigationPage } from '../types';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { updateDocumentSEO } from '../utils/seo';
import { 
  Search, 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Sparkles,
  Filter
} from 'lucide-react';

interface GuidesPageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectGuide: (guideId: string) => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({ onNavigate, onSelectGuide }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updateDocumentSEO({
      title: 'Digital Marketing Guides & Playbooks (2026 Edition)',
      description: 'Comprehensive, step-by-step digital marketing guides covering SEO, Social Media, Google Ads, TikTok, Email sequences, and Growth strategies.',
      canonicalPath: '/guides',
    });
  }, []);

  const categories = [
    'All',
    'Fundamentals',
    'SEO',
    'Social Media',
    'Advertising',
    'Content & Email',
    'Growth & Strategy',
  ];

  const filteredGuides = GUIDES_DATA.filter((guide) => {
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen size={14} />
          <span>Complete Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Digital Marketing Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          In-depth, actionable masterclasses designed to help you generate qualified traffic, build high-converting funnels, and scale revenue predictably.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search guides by keyword, topic, or channel (e.g. SEO, TikTok, Ads)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 shadow-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Ad Placement */}
      <AdSenseBanner slot="homeLeaderboard" format="horizontal" />

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <article
            key={guide.id}
            onClick={() => {
              onSelectGuide(guide.id);
              onNavigate('guide-detail');
            }}
            className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between p-6"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2.5 py-0.5 rounded-full">
                  {guide.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                  <Clock size={12} />
                  {guide.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                {guide.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                {guide.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-700 dark:text-slate-200">
                  {guide.author.avatar}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {guide.author.name}
                </div>
              </div>

              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide <ArrowRight size={13} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <BookOpen className="mx-auto text-slate-400 mb-3" size={32} />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">No guides matched your criteria</h3>
          <p className="text-xs text-slate-500 mt-1">Try searching for other terms like SEO, TikTok, or Email.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
