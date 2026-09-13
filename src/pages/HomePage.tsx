import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { GUIDES_DATA } from '../data/guidesData';
import { Hero3DScene } from '../components/3d/Hero3DScene';
import { GrowthChart3D } from '../components/3d/GrowthChart3D';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { updateDocumentSEO } from '../utils/seo';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp, 
  CheckCircle2, 
  Zap,
  Layers,
  Users,
  Award,
  Globe2,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectGuide: (guideId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectGuide }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    updateDocumentSEO({
      title: 'Grow Your Business Digitally with 3D Marketing & SEO Tools',
      description: 'Master digital marketing with comprehensive 2026 guides, interactive 3D growth analytics, and free SEO and copywriting tools designed for modern entrepreneurs.',
      canonicalPath: '/',
    });
  }, []);

  const featuredGuides = GUIDES_DATA.slice(0, 4);

  const homeFaqs = [
    {
      q: 'What makes ZeeMark different from typical marketing blogs?',
      a: 'ZeeMark is engineered to provide actionable, original marketing playbooks and functional browser tools with zero paywalls. We focus on real strategies—such as conversion API setups, topical authority clusters, and long-tail SEO frameworks—without requiring credit cards or expensive SaaS subscriptions.'
    },
    {
      q: 'Are all the marketing and SEO tools on ZeeMark completely free?',
      a: 'Yes. Every tool—from the Social Media Caption Generator to the Keyword Density Checker and Ad Copy Creator—runs securely in your browser without requiring paid third-party API tokens or account registration.'
    },
    {
      q: 'How does digital marketing compare to traditional advertising in 2026?',
      a: 'Digital marketing provides real-time bid agility, transparent return on ad spend (ROAS), precision audience segmentation, and multi-channel attribution. Unlike traditional print or billboard advertising, you can test 20 different creative hooks in a single morning and immediately double down on what works.'
    },
    {
      q: 'Can beginners start seeing results without a large budget?',
      a: 'Absolutely. By building an authoritative content engine (SEO) and leveraging organic short-form video (TikTok, Instagram Reels), founders and local businesses can generate high-intent inbound inquiries before spending their first dollar on paid search or social ads.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide uppercase">
                <Sparkles size={14} className="text-indigo-500" />
                <span>Modern Digital Marketing Engine</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Grow Your Business <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                  Digitally in 2026
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Elevate your reach, traffic, and sales. ZeeMark combines deep strategic marketing guides with interactive 3D growth analytics and an entire suite of 100% free copywriting and SEO tools.
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('guides')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <BookOpen size={18} />
                  <span>Explore Marketing Guides</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('tools')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Wrench size={17} className="text-indigo-500" />
                  <span>Use Free Generators</span>
                </button>

                <button
                  onClick={() => onNavigate('seo-tools')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Search size={17} className="text-emerald-500" />
                  <span>SEO Checkers</span>
                </button>
              </div>

              {/* Trust & Policy Badge Checklist */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-600 dark:text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  No Paid API Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  AdSense-Friendly Layout
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  Reduced-Motion Ready
                </span>
              </div>
            </div>

            {/* 3D Marketing Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <Hero3DScene />
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card">
          <div className="text-center p-3 border-r border-slate-100 dark:border-slate-800 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono">+312%</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Average Organic Growth</div>
          </div>
          <div className="text-center p-3 sm:border-r border-slate-100 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">4.9 Billion</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Global Social Audience</div>
          </div>
          <div className="text-center p-3 border-r border-slate-100 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">3.2x</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Average Meta/Google ROAS</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">100% Free</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Open Marketing Tools</div>
          </div>
        </div>
      </section>

      {/* AdSense Placement 1: Top Leaderboard Unit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner slot="homeLeaderboard" format="horizontal" />
      </section>

      {/* Explaining Digital Marketing Clearly */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Clear & Actionable Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              What is Digital Marketing and Why Does It Matter Today?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              At its core, digital marketing is the practice of connecting with prospective buyers through the digital channels they already use every day. Rather than hoping someone notices a magazine advertisement or billboard, digital marketing enables you to present the exact solution someone is looking for at the precise moment they search for it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Intent-Driven Reach</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Reach prospects who have active buying intent through search keywords and contextual social feeds, eliminating wasted advertising dollars.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Transparent ROI</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Track every dollar spent, every click received, and every customer acquired with granular conversion tracking and attribution modeling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Compounding Equity</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Organic SEO articles, YouTube videos, and an owned email newsletter continue delivering qualified customers for years without continuous ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Growth Analytics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Visualized Performance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Data-Driven Marketing Trajectories
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Switch between growth metrics to visualize how comprehensive SEO, content funnels, and automation compound over time.
          </p>
        </div>

        <GrowthChart3D />
      </section>

      {/* Featured Free Marketing Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Functional Utilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Marketing & SEO Tools
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Generate captivating captions, viral hashtags, ad copy, and verify SEO length in seconds.
            </p>
          </div>
          <button
            onClick={() => onNavigate('tools')}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1"
          >
            <span>View All 13 Tools</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Social Media Caption Generator',
              desc: 'Generate engaging, platform-specific captions with hooks, emojis, and calls to action.',
              category: 'Social',
              badge: 'Most Popular',
              action: () => onNavigate('tools')
            },
            {
              name: 'SEO Title & SERP Checker',
              desc: 'Analyze title length, pixel width, power words, and preview Google search snippets live.',
              category: 'SEO',
              badge: 'High Impact',
              action: () => onNavigate('seo-tools')
            },
            {
              name: 'High-Converting Ad Copy Generator',
              desc: 'Craft persuasive Google Search & Meta ad headlines, primary texts, and punchy descriptions.',
              category: 'Advertising',
              badge: 'Conversion Focused',
              action: () => onNavigate('tools')
            },
            {
              name: 'Hashtag Group Generator',
              desc: 'Discover high-engagement, niche-specific hashtags for Instagram, TikTok, and LinkedIn.',
              category: 'Social',
              badge: 'Algorithm Ready',
              action: () => onNavigate('tools')
            },
            {
              name: 'Keyword Density Analyzer',
              desc: 'Check single and multi-word phrase frequencies to avoid penalties and optimize topical depth.',
              category: 'SEO',
              badge: 'Editorial Safe',
              action: () => onNavigate('seo-tools')
            },
            {
              name: 'Meta Description Generator',
              desc: 'Create compelling 150-160 character descriptions guaranteed to boost click-through rates.',
              category: 'SEO',
              badge: 'Fast & Clean',
              action: () => onNavigate('tools')
            }
          ].map((tool, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {tool.category}
                  </span>
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full">
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <button
                onClick={tool.action}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-300 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Launch Tool</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Marketing Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              In-Depth Editorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Essential Marketing Guides
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Original, step-by-step masterclasses with frameworks, blueprints, and real scenarios.
            </p>
          </div>
          <button
            onClick={() => onNavigate('guides')}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1"
          >
            <span>Read All 11 Guides</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredGuides.map((guide) => (
            <article
              key={guide.id}
              onClick={() => {
                onSelectGuide(guide.id);
                onNavigate('guide-detail');
              }}
              className="cursor-pointer group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2.5 py-0.5 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {guide.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                  {guide.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-[10px] text-slate-700 dark:text-slate-200">
                    {guide.author.avatar}
                  </div>
                  <span>{guide.author.name}</span>
                </div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose ZeeMark */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle 3D background lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Editorial Integrity & Speed
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Why Forward-Thinking Businesses Rely on ZeeMark
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              We reject shallow marketing hype. ZeeMark is built from the ground up to provide practical, evidence-backed education and reliable utilities that empower you to grow your business sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative z-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Award className="text-indigo-400 mb-3" size={24} />
              <h3 className="text-sm font-bold text-white">Original Research</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Zero AI-filler articles. Every guide is crafted with verified marketing frameworks and actionable steps.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Zap className="text-cyan-400 mb-3" size={24} />
              <h3 className="text-sm font-bold text-white">Instant Free Tools</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                No credit cards, sign-ups, or token limits. Generate captions, hashtags, and titles immediately.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="text-emerald-400 mb-3" size={24} />
              <h3 className="text-sm font-bold text-white">AdSense Compliant</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Clear distinction between content and sponsored placements, fully compliant with Webmaster Quality guidelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Layers className="text-purple-400 mb-3" size={24} />
              <h3 className="text-sm font-bold text-white">Modern 3D Architecture</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Interactive spatial visualization optimized for high performance with built-in reduced-motion support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Schema Support */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
