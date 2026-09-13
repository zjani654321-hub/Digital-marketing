import React, { useEffect, useState } from 'react';
import { GUIDES_DATA } from '../data/guidesData';
import { NavigationPage } from '../types';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { updateDocumentSEO } from '../utils/seo';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Bookmark, 
  ChevronRight, 
  Sparkles, 
  Lightbulb, 
  HelpCircle,
  MessageSquare,
  Twitter,
  Linkedin,
  Copy
} from 'lucide-react';

interface GuideDetailPageProps {
  guideId: string;
  onNavigate: (page: NavigationPage) => void;
  onSelectGuide: (guideId: string) => void;
}

export const GuideDetailPage: React.FC<GuideDetailPageProps> = ({
  guideId,
  onNavigate,
  onSelectGuide,
}) => {
  const [copied, setCopied] = useState(false);

  const guide = GUIDES_DATA.find((g) => g.id === guideId) || GUIDES_DATA[0];

  const currentIndex = GUIDES_DATA.findIndex((g) => g.id === guide.id);
  const prevGuide = currentIndex > 0 ? GUIDES_DATA[currentIndex - 1] : null;
  const nextGuide = currentIndex < GUIDES_DATA.length - 1 ? GUIDES_DATA[currentIndex + 1] : null;

  useEffect(() => {
    updateDocumentSEO({
      title: `${guide.title} - Step by Step Guide`,
      description: guide.excerpt,
      canonicalPath: `/guides/${guide.slug}`,
      ogType: 'article',
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.excerpt,
        "datePublished": guide.publishedDate,
        "dateModified": guide.updatedDate,
        "author": {
          "@type": "Person",
          "name": guide.author.name,
          "jobTitle": guide.author.role
        },
        "publisher": {
          "@type": "Organization",
          "name": "ZeeMark"
        }
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [guide]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Master ${guide.title} with this comprehensive guide on ZeeMark:`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
        <button onClick={() => onNavigate('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400">
          Home
        </button>
        <ChevronRight size={12} />
        <button onClick={() => onNavigate('guides')} className="hover:text-indigo-600 dark:hover:text-indigo-400">
          Guides
        </button>
        <ChevronRight size={12} />
        <span className="text-slate-600 dark:text-slate-300 font-semibold truncate max-w-[200px] sm:max-w-xs">
          {guide.title}
        </span>
      </nav>

      {/* Guide Header */}
      <header className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Clock size={13} />
            {guide.readTime}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar size={13} />
            Updated {guide.updatedDate}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {guide.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {guide.excerpt}
        </p>

        {/* Author details & Social Share Actions */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
              {guide.author.avatar}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">{guide.author.name}</div>
              <div className="text-xs text-slate-400">{guide.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareTwitter}
              aria-label="Share on X (Twitter)"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <Twitter size={16} />
            </button>
            <button
              onClick={handleShareLinkedIn}
              aria-label="Share on LinkedIn"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <Linkedin size={16} />
            </button>
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Table of Contents Box */}
      <section className="my-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
          <Bookmark size={14} className="text-indigo-500" />
          <span>Table of Contents</span>
        </h2>
        <ul className="space-y-2">
          {guide.tableOfContents.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* In-Article Content Sections */}
      <div className="space-y-10 py-4 text-slate-800 dark:text-slate-200 text-base leading-relaxed">
        {guide.contentSections.map((section, idx) => (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-2">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {p}
              </p>
            ))}

            {/* Bullet points checklist */}
            {section.bulletPoints && (
              <ul className="my-4 space-y-2.5 pl-2">
                {section.bulletPoints.map((bp, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Pro Tip Box */}
            {section.proTip && (
              <div className="my-6 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/80 flex items-start gap-3">
                <Lightbulb size={20} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block mb-1">
                    ZeeMark Strategy Pro-Tip
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {section.proTip}
                  </p>
                </div>
              </div>
            )}

            {/* Real World Example Box */}
            {section.exampleBox && (
              <div className="my-6 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles size={14} />
                  <span>{section.exampleBox.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {section.exampleBox.description}
                </p>
              </div>
            )}

            {/* In-Article Advertisement Placement after section 2 */}
            {idx === 1 && (
              <AdSenseBanner slot="guideInArticle" format="auto" />
            )}
          </section>
        ))}
      </div>

      {/* Guide Specific FAQs */}
      {guide.faqs && guide.faqs.length > 0 && (
        <section id="faqs" className="my-12 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle size={15} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Common Inquiries About {guide.title.split(':')[0]}
          </h2>
          <div className="space-y-3 pt-2">
            {guide.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next Guides Navigation */}
      <div className="my-10 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevGuide ? (
          <button
            onClick={() => onSelectGuide(prevGuide.id)}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-500 transition-colors group"
          >
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">← Previous Guide</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
              {prevGuide.title}
            </span>
          </button>
        ) : <div />}

        {nextGuide && (
          <button
            onClick={() => onSelectGuide(nextGuide.id)}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-right hover:border-indigo-500 transition-colors group"
          >
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Next Guide →</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
              {nextGuide.title}
            </span>
          </button>
        )}
      </div>

    </article>
  );
};
