import React, { useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { AlertCircle, ShieldAlert } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Disclaimer - ZeeMark',
      description: 'Earnings disclaimer, educational disclosures, and third-party advertising transparency for ZeeMark.',
      canonicalPath: '/disclaimer',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      <header className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
          <AlertCircle size={14} />
          <span>Transparency & Disclosures</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Website Disclaimer
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last updated: January 10, 2026
        </p>
      </header>

      <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Informational & Educational Purposes Only</h2>
          <p>
            The information and guides provided on ZeeMark (the "Website") are published in good faith and for general educational and informational purposes only. Digital marketing strategies, search engine algorithms, and advertising platform policies change frequently. While we strive to ensure our content is accurate and up to date, ZeeMark makes no representations or warranties of any kind regarding completeness, accuracy, or reliability.
          </p>
        </section>

        <section className="space-y-3 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. No Guarantee of Earnings, Traffic, or Rankings</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Any references to revenue metrics, ROAS, click-through rates, or search engine positions (e.g. "Rank #1 Organic", "3.2x Average ROI") represent historical case study benchmarks or industry averages. They are not a guarantee or promise that you or your business will achieve the same or similar results. Your success depends on your market demand, product quality, execution diligence, and external platform algorithm conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Third-Party Advertising (Google AdSense)</h2>
          <p>
            This website contains clearly labeled advertising placements ("Advertisement") powered by Google AdSense and third-party advertising networks. The appearance of advertisements on ZeeMark does not constitute an endorsement, recommendation, or warranty of the products or services advertised. We encourage users to perform their own due diligence before purchasing any third-party products.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. External Links Disclaimer</h2>
          <p>
            ZeeMark may contain links to external websites that are not provided or maintained by or in any way affiliated with ZeeMark. Please note that ZeeMark does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Contact Us</h2>
          <p>
            If you have any questions concerning this Disclaimer, please reach out to:
            <br />
            Email: legal@zeemark.io
          </p>
        </section>

      </div>

    </div>
  );
};
