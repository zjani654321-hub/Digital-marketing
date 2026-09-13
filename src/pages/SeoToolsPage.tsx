import React, { useState, useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Gauge, 
  FileText, 
  Hash, 
  Sparkles,
  Info
} from 'lucide-react';

export const SeoToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'title' | 'description' | 'density' | 'readability'>('title');

  useEffect(() => {
    updateDocumentSEO({
      title: 'Free SEO Audit Tools: Title, Meta & Keyword Density Checkers',
      description: 'Analyze SEO title tags, verify meta description length with live SERP preview, check keyword density, and measure readability scores online for free.',
      canonicalPath: '/seo-tools',
    });
  }, []);

  // 1. SEO Title Checker State
  const [titleInput, setTitleInput] = useState('SEO for Beginners: How to Rank #1 on Google in 2026');
  const [keywordTarget, setKeywordTarget] = useState('SEO for Beginners');
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');

  const titleLength = titleInput.length;
  const estimatedPixelWidth = Math.round(titleLength * 9.5); // Average character width ~9.5px in Arial 18-20px
  const hasKeyword = keywordTarget.trim() ? titleInput.toLowerCase().includes(keywordTarget.toLowerCase().trim()) : true;
  const hasNumbers = /\d/.test(titleInput);
  const powerWords = ['best', 'guide', 'complete', 'how to', 'proven', 'master', 'top', 'fast', 'free', 'checklist', 'secrets', 'strategy'];
  const matchedPowerWords = powerWords.filter(pw => titleInput.toLowerCase().includes(pw));

  // Compute Title Score
  let titleScore = 100;
  const titleIssues: string[] = [];
  const titleWins: string[] = [];

  if (titleLength < 35) {
    titleScore -= 25;
    titleIssues.push('Title is too short (< 35 characters). You may be wasting valuable keyword space.');
  } else if (titleLength > 60) {
    titleScore -= 20;
    titleIssues.push('Title exceeds 60 characters and will likely be truncated with an ellipsis (...) in Google search results.');
  } else {
    titleWins.push('Optimal character length (between 40 and 60 characters).');
  }

  if (keywordTarget.trim()) {
    if (hasKeyword) {
      titleWins.push(`Target keyword "${keywordTarget}" is present.`);
    } else {
      titleScore -= 30;
      titleIssues.push(`Target keyword "${keywordTarget}" was not found in the title.`);
    }
  }

  if (hasNumbers) {
    titleWins.push('Includes numbers, which increases click-through rates by up to 36%.');
  } else {
    titleIssues.push('Tip: Adding a number (e.g. 2026, 7 Steps) often improves clickability.');
  }

  if (matchedPowerWords.length > 0) {
    titleWins.push(`Includes engaging power words: ${matchedPowerWords.join(', ')}.`);
  }

  titleScore = Math.max(10, Math.min(100, titleScore));

  // 2. Meta Description Checker State
  const [descInput, setDescInput] = useState('Demystify search engine optimization with our step-by-step masterclass on keyword research, on-page optimization, and authoritative backlink building.');
  const descLength = descInput.length;
  const ctaWords = ['discover', 'learn', 'read', 'find out', 'explore', 'get', 'start', 'click', 'guide'];
  const hasCta = ctaWords.some(c => descInput.toLowerCase().includes(c));

  // 3. Keyword Density Checker State
  const [densityText, setDensityText] = useState(`Digital marketing encompasses any promotional effort that leverages an electronic device or the internet. Search engine optimization (SEO) is a core pillar of digital marketing. When optimizing for search engines, high quality content and keyword relevance are essential. Organic digital marketing builds sustainable brand awareness, whereas pay-per-click digital advertising delivers immediate traffic. Combining SEO with strategic email marketing forms a reliable digital marketing foundation.`);

  // Compute 1-word, 2-word, and 3-word n-grams
  const wordsArray = densityText
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2);

  const totalDensityWords = wordsArray.length;

  const stopWords = new Set(['the', 'and', 'for', 'that', 'with', 'this', 'from', 'are', 'was', 'were', 'which', 'can', 'will', 'have', 'has', 'your', 'our']);

  const singleWordFreq: { [key: string]: number } = {};
  wordsArray.forEach(w => {
    if (!stopWords.has(w)) {
      singleWordFreq[w] = (singleWordFreq[w] || 0) + 1;
    }
  });

  const sortedSingleWords = Object.entries(singleWordFreq)
    .map(([word, count]) => ({
      word,
      count,
      density: totalDensityWords > 0 ? ((count / totalDensityWords) * 100).toFixed(1) : '0'
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // 2-word phrases
  const twoWordFreq: { [key: string]: number } = {};
  for (let i = 0; i < wordsArray.length - 1; i++) {
    const phrase = `${wordsArray[i]} ${wordsArray[i + 1]}`;
    twoWordFreq[phrase] = (twoWordFreq[phrase] || 0) + 1;
  }

  const sortedTwoWords = Object.entries(twoWordFreq)
    .filter(([_, count]) => count > 1)
    .map(([phrase, count]) => ({
      phrase,
      count,
      density: totalDensityWords > 0 ? ((count / totalDensityWords) * 100).toFixed(1) : '0'
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // 4. Readability State
  const rawWords = densityText.trim() ? densityText.trim().split(/\s+/).length : 0;
  const rawSentences = densityText.trim() ? (densityText.match(/[.!?]+(?=\s|$)/g) || []).length || 1 : 1;
  const rawCharacters = densityText.length;
  // Approximation of syllables
  const rawSyllables = wordsArray.reduce((acc, w) => {
    const syllables = w.replace(/(?:[^laeiouy]|ed|es|e)$/i, '').match(/[aeiouy]{1,2}/g)?.length || 1;
    return acc + Math.max(1, syllables);
  }, 0);

  // Flesch Reading Ease Score
  // 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)
  const asl = rawWords > 0 ? rawWords / rawSentences : 0;
  const asw = rawWords > 0 ? rawSyllables / rawWords : 0;
  const fleschScore = rawWords > 5 ? Math.round(206.835 - (1.015 * asl) - (84.6 * asw)) : 70;
  const clampedFlesch = Math.max(0, Math.min(100, fleschScore));

  const getFleschGrade = (score: number) => {
    if (score >= 90) return { grade: '5th Grade (Very Easy)', color: 'text-emerald-500' };
    if (score >= 80) return { grade: '6th Grade (Easy)', color: 'text-emerald-500' };
    if (score >= 70) return { grade: '7th Grade (Fairly Easy)', color: 'text-emerald-500' };
    if (score >= 60) return { grade: '8th-9th Grade (Optimal Web Content)', color: 'text-indigo-500' };
    if (score >= 50) return { grade: '10th-12th Grade (Fairly Difficult)', color: 'text-amber-500' };
    return { grade: 'College Level (Complex & Dense)', color: 'text-rose-500' };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Search size={14} />
          <span>Organic Search Optimization Suite</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Free Professional SEO Tools
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Verify title lengths, preview Google SERP snippets, audit keyword densities, and optimize readability to climb search engine rankings.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto">
        {[
          { id: 'title', label: 'SEO Title Checker' },
          { id: 'description', label: 'Meta Description' },
          { id: 'density', label: 'Keyword Density' },
          { id: 'readability', label: 'Readability Analyzer' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === t.id
                ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Main Tool Container */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card p-6 sm:p-10">
        
        {/* 1. SEO Title Checker */}
        {activeTab === 'title' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  SEO Title Tag & Pixel Width Checker
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Evaluate character length and Google SERP visibility.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className={`text-2xl font-black font-mono ${titleScore >= 80 ? 'text-emerald-500' : titleScore >= 60 ? 'text-amber-500' : 'text-rose-500'}`}>
                  {titleScore}/100
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Title Score</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Page Title (Title Tag)
                </label>
                <input
                  type="text"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Target Keyword (Optional)
                </label>
                <input
                  type="text"
                  value={keywordTarget}
                  onChange={(e) => setKeywordTarget(e.target.value)}
                  placeholder="e.g. SEO for Beginners..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Character & Pixel Meter */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-400 font-semibold">Characters</div>
                  <div className={`text-lg font-black font-mono ${titleLength > 60 ? 'text-rose-500' : 'text-slate-900 dark:text-white'}`}>
                    {titleLength} / 60
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-400 font-semibold">Estimated Pixels</div>
                  <div className={`text-lg font-black font-mono ${estimatedPixelWidth > 580 ? 'text-rose-500' : 'text-emerald-500'}`}>
                    {estimatedPixelWidth}px / 580px
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-400 font-semibold">Google Truncation</div>
                  <div className="text-xs font-bold mt-1 text-slate-700 dark:text-slate-300">
                    {titleLength > 60 || estimatedPixelWidth > 580 ? '⚠️ Likely Cut Off' : '✅ Visible'}
                  </div>
                </div>
              </div>
            </div>

            {/* Google SERP Live Simulation */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Google Search Snippet Preview
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setDevicePreview('desktop')}
                    className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 ${devicePreview === 'desktop' ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-400'}`}
                  >
                    <Monitor size={13} />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setDevicePreview('mobile')}
                    className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 ${devicePreview === 'mobile' ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-400'}`}
                  >
                    <Smartphone size={13} />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* SERP Box */}
              <div className={`p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 ${devicePreview === 'mobile' ? 'max-w-sm mx-auto shadow-md' : 'w-full'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                    ZM
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono truncate">
                    https://zeemark.io › guides › {keywordTarget ? keywordTarget.toLowerCase().replace(/\s+/g, '-') : 'seo-article'}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
                  {titleLength > 60 ? `${titleInput.substring(0, 58)}...` : titleInput}
                </h3>
                <p className="text-xs text-[#4d5156] dark:text-[#bdc1c6] mt-1 leading-relaxed line-clamp-2">
                  {descInput}
                </p>
              </div>
            </div>

            {/* Recommendations & Feedback */}
            <div className="space-y-2 pt-4">
              {titleWins.map((win, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={14} className="flex-shrink-0" />
                  <span>{win}</span>
                </div>
              ))}
              {titleIssues.map((issue, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <AlertTriangle size={14} className="flex-shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Meta Description Checker */}
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Meta Description Checker & Snippet Optimizer
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Google typically shows 150-160 characters on desktop and up to 120 characters on mobile.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                    Meta Description Text
                  </label>
                  <span className={`text-xs font-mono font-bold ${descLength > 160 ? 'text-rose-500' : descLength < 120 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {descLength} / 160 characters
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={descInput}
                  onChange={(e) => setDescInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    descLength > 160 ? 'bg-rose-500' : descLength >= 140 ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.min(100, (descLength / 160) * 100)}%` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${hasCta ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600' : 'bg-amber-100 dark:bg-amber-950/60 text-amber-600'}`}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Call to Action</div>
                    <div className="text-[11px] text-slate-500">
                      {hasCta ? 'Action verb detected' : 'Add an active verb (e.g., Learn, Discover, Download)'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${descLength >= 145 && descLength <= 160 ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600' : 'bg-slate-200 dark:bg-slate-700 text-slate-600'}`}>
                    <Gauge size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Length Evaluation</div>
                    <div className="text-[11px] text-slate-500">
                      {descLength > 160 ? 'Too long (truncated)' : descLength >= 140 ? 'Perfect length' : 'Can be more detailed'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Keyword Density Checker */}
        {activeTab === 'density' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Keyword Density & Over-Optimization Analyzer
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Calculate 1-word and 2-word phrase frequencies to maintain safe keyword density (ideal: 1% to 2.5%).
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                Paste Article or Content Draft
              </label>
              <textarea
                rows={6}
                value={densityText}
                onChange={(e) => setDensityText(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 leading-relaxed font-sans"
              />
              <div className="text-[11px] text-slate-400 mt-1">
                Analyzed: <span className="font-mono font-bold text-slate-600 dark:text-slate-300">{totalDensityWords}</span> total words
              </div>
            </div>

            {/* Results Tables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              
              {/* Single Words */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Top Single Keywords
                </h3>
                <div className="space-y-2">
                  {sortedSingleWords.map((item, idx) => {
                    const d = parseFloat(item.density);
                    const isHigh = d > 3.0;
                    return (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.word}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-mono">{item.count}x</span>
                          <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] ${isHigh ? 'bg-rose-100 dark:bg-rose-950 text-rose-600' : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600'}`}>
                            {item.density}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2-Word Phrases */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Top 2-Word Keyphrases
                </h3>
                <div className="space-y-2">
                  {sortedTwoWords.length > 0 ? (
                    sortedTwoWords.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.phrase}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-mono">{item.count}x</span>
                          <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 text-[11px]">
                            {item.density}%
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-400 p-4 text-center">
                      Paste longer text to analyze repeated 2-word phrases.
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 4. Readability Analyzer */}
        {activeTab === 'readability' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Flesch Reading Ease & Complexity Score
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Search engines and readers favor clear, accessible writing that anyone can understand easily.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-3xl font-black font-mono text-indigo-600 dark:text-indigo-400">{clampedFlesch}</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Flesch Reading Ease</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Score between 0 and 100</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                <div className={`text-sm font-bold ${getFleschGrade(clampedFlesch).color} mt-2`}>
                  {getFleschGrade(clampedFlesch).grade}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Target Reading Level</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Recommended for high engagement</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                  {asl.toFixed(1)} words
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Avg. Sentence Length</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Under 20 words is ideal</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div className="font-bold text-indigo-700 dark:text-indigo-300">SEO Writing Tip:</div>
              <p>
                Break long, rambling paragraphs into 2-3 sentence chunks. Use bullet points and bolding to allow skim-reading, which lowers bounce rates and signals content relevance to Google.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* AdSense Placement */}
      <AdSenseBanner slot="homeLeaderboard" format="horizontal" />

    </div>
  );
};
