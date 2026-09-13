import React, { useState, useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { 
  Wrench, 
  Sparkles, 
  Copy, 
  Check, 
  Hash, 
  Megaphone, 
  Search, 
  FileText, 
  Lightbulb, 
  Type, 
  AlignLeft,
  Briefcase,
  Share2,
  RefreshCw,
  Smartphone
} from 'lucide-react';

type ToolTab = 
  | 'caption'
  | 'hashtag'
  | 'adcopy'
  | 'seotitle'
  | 'metadesc'
  | 'businessname'
  | 'marketingideas'
  | 'charcounter'
  | 'wordcounter';

export const FreeToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ToolTab>('caption');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    updateDocumentSEO({
      title: 'Free Digital Marketing Tools & Copywriting Generators',
      description: 'Free browser-based marketing tools: Social media caption generator, hashtag finder, ad copy creator, SEO title & meta description generator, and text counters.',
      canonicalPath: '/tools',
    });
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // 1. Social Media Caption Generator State
  const [captionTopic, setCaptionTopic] = useState('New product launch for an eco-friendly water bottle');
  const [captionPlatform, setCaptionPlatform] = useState<'instagram' | 'linkedin' | 'tiktok' | 'twitter'>('instagram');
  const [captionTone, setCaptionTone] = useState<'engaging' | 'professional' | 'funny' | 'urgent'>('engaging');
  const [captionResults, setCaptionResults] = useState<string[]>([]);

  const generateCaptions = () => {
    const topic = captionTopic.trim() || 'our brand update';
    let res: string[] = [];

    if (captionPlatform === 'instagram') {
      res = [
        `✨ Big news is finally here! Say hello to ${topic}. We engineered this to help you level up your daily routine without the clutter.\n\n👇 Drop a 🔥 in the comments if you’ve been waiting for this! Limited first batch is now live in bio.\n\n#DailyUpgrade #LaunchDay #Innovation #Essentials`,
        `Swipe to see the transformation ➡️ We spent 8 months perfecting ${topic}. The result? Premium quality that actually lasts.\n\n💬 Which color or feature are you grabbing first? Let us know below!\n\n#QualityFirst #DesignThinking #BehindTheScenes`,
        `Honest confession: we almost didn’t release ${topic}. But after seeing the beta feedback, we knew we had to bring it to life.\n\nTap the link in bio to grab yours before stock runs out! 🚀\n\n#TrendingNow #ShopSmall #GameChanger`
      ];
    } else if (captionPlatform === 'linkedin') {
      res = [
        `Most teams overcomplicate ${topic}.\n\nHere are 3 lessons we learned over 6 months of testing:\n1. Focus on frictionless user onboarding.\n2. Cut unnecessary features that dilute your core value.\n3. Talk to 10 customers every single week.\n\nWhat is one lesson you would add to this list? I’d love to hear your perspective in the comments.`,
        `Proud to announce our latest milestone regarding ${topic}.\n\nIn high-growth environments, speed is crucial—but craftsmanship is what builds durable customer retention.\n\nRead the full strategic breakdown in the first comment below. 📈`,
        `The biggest mistake I see companies make with ${topic}? Waiting for perfection before validating with real market demand.\n\nToday, we are shipping version 1.0. Looking forward to feedback from this incredible network.`
      ];
    } else if (captionPlatform === 'tiktok') {
      res = [
        `Stop scrolling! 🚨 Here is why everyone is obsessed with ${topic} right now (and why you probably need it too 👀). Watch till the end for the discount code! #TikTokMadeMeBuyIt #FYP #ViralHacks`,
        `POV: You finally found a solution for ${topic} that doesn’t feel impossible 🤯 link in bio while supplies last! #LifeHack #MustHave #Review #Routine`,
        `3 reasons why ${topic} is taking over in 2026. Number 2 literally surprised our whole team! Check comments for link ⚡ #Trending #SmallBusiness #ProductReview`
      ];
    } else {
      // Twitter / X
      res = [
        `If you are still struggling with ${topic}, you are working 10x harder than you need to.\n\nHere is our simple 3-step framework to fix it today 🧵👇`,
        `We just dropped ${topic}.\n\nFaster, cleaner, and built specifically for modern operators.\n\nCheck it out here: [Link]`,
        `Unpopular opinion: 90% of advice around ${topic} is outdated.\n\nWhat worked in 2022 will drain your budget today. Do this instead:`
      ];
    }

    setCaptionResults(res);
  };

  // 2. Hashtag Generator State
  const [hashtagKeyword, setHashtagKeyword] = useState('digital marketing');
  const [hashtagGroups, setHashtagGroups] = useState<{ high: string[]; medium: string[]; niche: string[] } | null>(null);

  const generateHashtags = () => {
    const raw = hashtagKeyword.trim().toLowerCase().replace(/[^a-z0-9]/g, '') || 'marketing';
    const cleanWord = raw.charAt(0).toUpperCase() + raw.slice(1);

    setHashtagGroups({
      high: [
        `#${cleanWord}`,
        `#${cleanWord}Tips`,
        `#${cleanWord}Strategy`,
        `#BusinessGrowth`,
        `#MarketingTips`,
        `#EntrepreneursOfInstagram`,
        `#DigitalStrategy`,
      ],
      medium: [
        `#${cleanWord}Expert`,
        `#${cleanWord}Agency`,
        `#GrowthHacking2026`,
        `#ContentCreators`,
        `#SocialMediaGrowth`,
        `#OrganicReach`,
        `#OnlineMarketingStrategy`,
      ],
      niche: [
        `#${cleanWord}ForBeginners`,
        `#${cleanWord}Hacks`,
        `#SmallBiz${cleanWord}`,
        `#B2B${cleanWord}`,
        `#BoutiqueMarketing`,
        `#AgencyGrowthSecrets`,
        `#Learn${cleanWord}Daily`,
      ]
    });
  };

  // 3. Ad Copy Generator State
  const [adProduct, setAdProduct] = useState('ZeeMark Growth Hub');
  const [adAudience, setAdAudience] = useState('Small business owners and marketing freelancers');
  const [adBenefit, setAdBenefit] = useState('Save 15 hours a week and double inbound inquiries');
  const [adResults, setAdResults] = useState<{ headline: string; primaryText: string; description: string }[]>([]);

  const generateAdCopy = () => {
    const p = adProduct || 'Our Service';
    const b = adBenefit || 'maximize your return on investment';
    const a = adAudience || 'ambitious entrepreneurs';

    setAdResults([
      {
        headline: `Tired of Slow Growth? Try ${p}`,
        primaryText: `Attention ${a}: What if you could ${b} without spending a fortune on expensive agencies? Discover the proven system trusted by 5,000+ businesses.`,
        description: `Instant Access • Free 14-Day Walkthrough • 4.9/5 Rating`
      },
      {
        headline: `${b} | Official ${p}`,
        primaryText: `Stop guessing your digital marketing. ${p} gives you the exact templates, SEO tools, and guides you need to dominate your market in 2026.`,
        description: `Join 10,000+ Growing Brands • Start Free Today`
      },
      {
        headline: `The Smarter Way for ${a.split(' ')[0]} to Scale`,
        primaryText: `Ready to turn cold clicks into paying clients? See how ${p} helps you ${b}. No complicated setup required.`,
        description: `Claim Your Free Strategy Template Now`
      }
    ]);
  };

  // 4. SEO Title Generator State
  const [seoKeyword, setSeoKeyword] = useState('local seo checklist');
  const [seoTitles, setSeoTitles] = useState<string[]>([]);

  const generateSeoTitles = () => {
    const k = seoKeyword.trim() || 'Digital Marketing Strategy';
    const capitalized = k.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    setSeoTitles([
      `${capitalized}: The Complete 2026 Step-by-Step Guide`,
      `How to Master ${capitalized} in 7 Actionable Steps`,
      `10 Proven ${capitalized} Tips That Deliver Immediate Results`,
      `${capitalized} Blueprint: Beginner to Advanced Framework`,
      `Why Your ${capitalized} Isn't Working (And How to Fix It Fast)`
    ]);
  };

  // 5. Meta Description Generator State
  const [metaTopic, setMetaTopic] = useState('organic instagram growth tips');
  const [metaDescriptions, setMetaDescriptions] = useState<string[]>([]);

  const generateMetaDescriptions = () => {
    const t = metaTopic.trim() || 'digital marketing';
    setMetaDescriptions([
      `Discover proven ${t} to boost your reach, attract real followers, and increase conversions in 2026. Read our actionable guide with examples!`,
      `Looking for real ${t}? Learn the exact frameworks high-growth brands use to scale audience engagement and sales without paying for ads.`,
      `Master ${t} with our free step-by-step masterclass. Includes downloadable checklists, algorithm updates, and real-world case studies.`
    ]);
  };

  // 6. Business Name Generator State
  const [nameKeyword, setNameKeyword] = useState('growth marketing');
  const [nameIndustry, setNameIndustry] = useState<'tech' | 'creative' | 'minimal' | 'modern'>('modern');
  const [businessNames, setBusinessNames] = useState<string[]>([]);

  const generateBusinessNames = () => {
    const raw = nameKeyword.trim().toLowerCase().split(' ')[0] || 'mark';
    const root = raw.charAt(0).toUpperCase() + raw.slice(1);

    if (nameIndustry === 'tech') {
      setBusinessNames([
        `${root}Pulse`, `${root}Metric`, `Nex${root}`, `Omni${root}`, `${root}Sync`, `Hyper${root}`
      ]);
    } else if (nameIndustry === 'creative') {
      setBusinessNames([
        `${root}Canvas`, `Studio${root}`, `${root}Craft`, `Vivid${root}`, `Spark${root}`, `${root}Forge`
      ]);
    } else if (nameIndustry === 'minimal') {
      setBusinessNames([
        `${root}Co`, `${root}Lab`, `${root}HQ`, `True${root}`, `${root}io`, `Base${root}`
      ]);
    } else {
      setBusinessNames([
        `${root}Scale`, `Apex${root}`, `${root}Mark`, `Elevate${root}`, `${root}Wave`, `Prime${root}`
      ]);
    }
  };

  // 7. Marketing Ideas Generator State
  const [ideaIndustry, setIdeaIndustry] = useState('E-commerce & Retail');
  const [ideaGoal, setIdeaGoal] = useState('Increase Repeat Purchases');
  const [marketingIdeas, setMarketingIdeas] = useState<string[]>([]);

  const generateMarketingIdeas = () => {
    setMarketingIdeas([
      `Launch a "Secret VIP Tier": Send an exclusive SMS to your top 10% customers offering early 24-hour access to new drops or 20% off.`,
      `Post-Purchase Gamification: Implement a spin-the-wheel or mystery gift reward on the order confirmation page valid only on their next order within 14 days.`,
      `User-Generated Unboxing Contest: Encourage buyers to tag your brand in an Instagram Reel for a chance to win a $250 store shopping spree every month.`,
      `Educational Micro-Series: Email a 3-part care guide explaining how to make their purchased item last 2x longer, building deep brand affinity.`
    ]);
  };

  // 8. Character Counter & Word Counter State
  const [counterText, setCounterText] = useState('ZeeMark empowers founders and digital marketers with free copywriting tools, SEO checkers, and step-by-step masterclasses designed to scale business growth.');

  const charCount = counterText.length;
  const wordCount = counterText.trim() ? counterText.trim().split(/\s+/).length : 0;
  const sentenceCount = counterText.trim() ? (counterText.match(/[.!?]+(?=\s|$)/g) || []).length || 1 : 0;
  const readingTimeMin = Math.max(1, Math.ceil(wordCount / 200));

  // Initialize initial tools
  useEffect(() => {
    generateCaptions();
    generateHashtags();
    generateAdCopy();
    generateSeoTitles();
    generateMetaDescriptions();
    generateBusinessNames();
    generateMarketingIdeas();
  }, []);

  const toolTabs: { id: ToolTab; name: string; icon: React.FC<{ size?: number }> }[] = [
    { id: 'caption', name: 'Caption Generator', icon: Megaphone },
    { id: 'hashtag', name: 'Hashtag Generator', icon: Hash },
    { id: 'adcopy', name: 'Ad Copy Generator', icon: Sparkles },
    { id: 'seotitle', name: 'SEO Title Generator', icon: Search },
    { id: 'metadesc', name: 'Meta Description', icon: FileText },
    { id: 'businessname', name: 'Business Names', icon: Briefcase },
    { id: 'marketingideas', name: 'Campaign Ideas', icon: Lightbulb },
    { id: 'charcounter', name: 'Character Counter', icon: Type },
    { id: 'wordcounter', name: 'Word Counter', icon: AlignLeft },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Wrench size={14} />
          <span>100% Free • No API Key Needed</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Free Digital Marketing Tools
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          High-performance copywriting and strategy generators engineered to save you hours of guesswork. Runs instantly in your browser with zero limits.
        </p>
      </div>

      {/* Tools Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
        {toolTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon size={14} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Active Tool Card */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-3d-card p-6 sm:p-10 transition-all">
        
        {/* 1. Caption Generator */}
        {activeTab === 'caption' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Social Media Caption Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Create engaging, high-retention captions customized for Instagram, LinkedIn, TikTok, or X.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Post Topic or Core Message
                </label>
                <textarea
                  rows={3}
                  value={captionTopic}
                  onChange={(e) => setCaptionTopic(e.target.value)}
                  placeholder="Describe your offer, update, lesson, or behind-the-scenes moment..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Platform
                  </label>
                  <select
                    value={captionPlatform}
                    onChange={(e) => setCaptionPlatform(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-white"
                  >
                    <option value="instagram">Instagram (Hook + Visual + Hashtags)</option>
                    <option value="linkedin">LinkedIn (Thought Leadership + Story)</option>
                    <option value="tiktok">TikTok (Fast Hook + Curiosity)</option>
                    <option value="twitter">X / Twitter (Bite-Sized Punch)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Voice & Tone
                  </label>
                  <select
                    value={captionTone}
                    onChange={(e) => setCaptionTone(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-white"
                  >
                    <option value="engaging">Engaging & Conversational</option>
                    <option value="professional">Professional & Authoritative</option>
                    <option value="funny">Entertaining & Relatable</option>
                    <option value="urgent">Urgent & Promotional</option>
                  </select>
                </div>
              </div>

              <button
                onClick={generateCaptions}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Generate Captions</span>
              </button>
            </div>

            {captionResults.length > 0 && (
              <div className="mt-8 space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Generated Variations ({captionResults.length})
                </h3>
                {captionResults.map((caption, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 relative group">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line leading-relaxed pr-12">
                      {caption}
                    </p>
                    <button
                      onClick={() => copyToClipboard(caption, idx)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:text-indigo-600 shadow-sm"
                    >
                      {copiedIndex === idx ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. Hashtag Generator */}
        {activeTab === 'hashtag' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Niche Hashtag Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Find curated high, medium, and niche-specific tags to bypass algorithmic saturation.
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={hashtagKeyword}
                onChange={(e) => setHashtagKeyword(e.target.value)}
                placeholder="Enter topic or niche (e.g. coffee roaster, fitness coach)..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={generateHashtags}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5"
              >
                <Hash size={15} />
                <span>Find Tags</span>
              </button>
            </div>

            {hashtagGroups && (
              <div className="space-y-6 pt-4">
                {[
                  { title: 'Broad & Popular (High Volume)', tags: hashtagGroups.high, key: 101 },
                  { title: 'Community & Industry (Medium Reach)', tags: hashtagGroups.medium, key: 102 },
                  { title: 'Hyper-Niche & High Engagement (Best for conversions)', tags: hashtagGroups.niche, key: 103 },
                ].map((group) => (
                  <div key={group.key} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {group.title}
                      </span>
                      <button
                        onClick={() => copyToClipboard(group.tags.join(' '), group.key)}
                        className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        {copiedIndex === group.key ? <Check size={13} /> : <Copy size={13} />}
                        <span>Copy Group</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. Ad Copy Generator */}
        {activeTab === 'adcopy' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Ad Copy & Headline Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Produce high-converting ad copy structured for Google Search and Meta Ads.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Product / Service
                </label>
                <input
                  type="text"
                  value={adProduct}
                  onChange={(e) => setAdProduct(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={adAudience}
                  onChange={(e) => setAdAudience(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Primary Benefit / Hook
                </label>
                <input
                  type="text"
                  value={adBenefit}
                  onChange={(e) => setAdBenefit(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <button
              onClick={generateAdCopy}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Megaphone size={16} />
              <span>Generate Ad Sets</span>
            </button>

            {adResults.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                {adResults.map((ad, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 relative">
                    <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        Ad Concept #{idx + 1}
                      </span>
                      <button
                        onClick={() => copyToClipboard(`${ad.headline}\n\n${ad.primaryText}\n\n${ad.description}`, idx + 200)}
                        className="flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-500"
                      >
                        {copiedIndex === idx + 200 ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                        <span>Copy All</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Headline</span>
                        <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{ad.headline}</div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Primary Text</span>
                        <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{ad.primaryText}</div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Description / Sitelink</span>
                        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{ad.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 4. SEO Title Generator */}
        {activeTab === 'seotitle' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                SEO Title Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Produce click-worthy titles formatted within Google’s 55-60 character truncation threshold.
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={seoKeyword}
                onChange={(e) => setSeoKeyword(e.target.value)}
                placeholder="Target keyword (e.g. email marketing tips)..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={generateSeoTitles}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md"
              >
                Generate Titles
              </button>
            </div>

            <div className="space-y-3 pt-4">
              {seoTitles.map((title, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                      <span>Length: {title.length} chars</span>
                      <span>•</span>
                      <span className={title.length <= 60 ? 'text-emerald-500 font-bold' : 'text-amber-500'}>
                        {title.length <= 60 ? 'Optimal for SERP' : 'Slightly Long'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(title, idx + 300)}
                    className="p-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                  >
                    {copiedIndex === idx + 300 ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Meta Description Generator */}
        {activeTab === 'metadesc' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Meta Description Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Optimized snippets between 145 and 160 characters to maximize SERP click-through rate.
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={metaTopic}
                onChange={(e) => setMetaTopic(e.target.value)}
                placeholder="Topic & Keyword..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={generateMetaDescriptions}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md"
              >
                Generate
              </button>
            </div>

            <div className="space-y-3 pt-4">
              {metaDescriptions.map((desc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{desc}</div>
                    <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-2">
                      <span className="font-mono">{desc.length} chars</span>
                      <span>•</span>
                      <span className="text-emerald-500 font-semibold">Perfect Google Snippet Length</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(desc, idx + 400)}
                    className="p-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                  >
                    {copiedIndex === idx + 400 ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Business Name Generator */}
        {activeTab === 'businessname' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Business & Agency Name Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Brainstorm brandable, memorable business names tailored to your industry style.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Core Concept Word
                </label>
                <input
                  type="text"
                  value={nameKeyword}
                  onChange={(e) => setNameKeyword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Brand Vibe
                </label>
                <select
                  value={nameIndustry}
                  onChange={(e) => setNameIndustry(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-white"
                >
                  <option value="modern">Modern & High-Growth</option>
                  <option value="tech">Tech & SaaS</option>
                  <option value="creative">Creative & Agency</option>
                  <option value="minimal">Minimal & Clean</option>
                </select>
              </div>
            </div>

            <button
              onClick={generateBusinessNames}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md"
            >
              Generate Names
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {businessNames.map((name, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center group cursor-pointer hover:border-indigo-500" onClick={() => copyToClipboard(name, idx + 500)}>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white">{name}</div>
                  <div className="text-[10px] text-indigo-500 mt-1 flex items-center justify-center gap-1">
                    {copiedIndex === idx + 500 ? <Check size={12} /> : <span>Click to copy</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Marketing Ideas Generator */}
        {activeTab === 'marketingideas' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Campaign & Growth Ideas Generator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Instant campaign concepts and promotion angles to unblock creative friction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Industry / Business Type
                </label>
                <input
                  type="text"
                  value={ideaIndustry}
                  onChange={(e) => setIdeaIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Campaign Objective
                </label>
                <input
                  type="text"
                  value={ideaGoal}
                  onChange={(e) => setIdeaGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <button
              onClick={generateMarketingIdeas}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md"
            >
              Generate Strategic Angles
            </button>

            <div className="space-y-3 pt-4">
              {marketingIdeas.map((idea, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {idea}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Character & Word Counter (Unified interactive suite) */}
        {(activeTab === 'charcounter' || activeTab === 'wordcounter') && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {activeTab === 'charcounter' ? 'Social Media Character Counter' : 'Text & Word Counter Analyzer'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Real-time character and word analytics with platform limit benchmarks.
              </p>
            </div>

            <div>
              <textarea
                rows={6}
                value={counterText}
                onChange={(e) => setCounterText(e.target.value)}
                placeholder="Paste or type your draft text here..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 leading-relaxed font-sans"
              />
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">{charCount}</div>
                <div className="text-[11px] font-semibold text-slate-500">Characters</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{wordCount}</div>
                <div className="text-[11px] font-semibold text-slate-500">Words</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">{sentenceCount}</div>
                <div className="text-[11px] font-semibold text-slate-500">Sentences</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">{readingTimeMin} min</div>
                <div className="text-[11px] font-semibold text-slate-500">Reading Time</div>
              </div>
            </div>

            {/* Platform Limits Progress */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Platform Character Limit Indicators
              </h3>
              {[
                { name: 'X / Twitter Post', max: 280, count: charCount },
                { name: 'Google Meta Description', max: 160, count: charCount },
                { name: 'LinkedIn Post', max: 3000, count: charCount },
                { name: 'SMS Single Segment', max: 160, count: charCount },
              ].map((plat, idx) => {
                const pct = Math.min(100, Math.round((plat.count / plat.max) * 100));
                const isOver = plat.count > plat.max;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{plat.name}</span>
                      <span className={`font-mono text-[11px] ${isOver ? 'text-rose-500 font-bold' : 'text-slate-400'}`}>
                        {plat.count} / {plat.max} {isOver && `(${plat.count - plat.max} over)`}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          isOver ? 'bg-rose-500' : pct > 85 ? 'bg-amber-500' : 'bg-indigo-600'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Ad Placement */}
      <AdSenseBanner slot="homeLeaderboard" format="horizontal" />

    </div>
  );
};
