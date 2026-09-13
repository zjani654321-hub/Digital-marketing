import React, { useEffect } from 'react';
import { updateDocumentSEO } from '../utils/seo';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Privacy Policy - ZeeMark',
      description: 'ZeeMark Privacy Policy. Learn how we protect your personal information, handle cookies, and adhere to Google AdSense, GDPR, and CCPA privacy standards.',
      canonicalPath: '/privacy',
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Header */}
      <header className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
          <Shield size={14} className="text-indigo-500" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last updated: January 10, 2026 • Effective Date: January 1, 2026
        </p>
      </header>

      {/* Policy Sections */}
      <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
          <p>
            Welcome to ZeeMark ("we," "our," or "us"). At ZeeMark (accessible from https://zeemark.io and associated domains), one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by ZeeMark and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>contact@zeemark.io</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Log Files</h2>
          <p>
            ZeeMark follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
        </section>

        <section className="space-y-3 p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60">
          <h2 className="text-xl font-bold text-indigo-950 dark:text-indigo-200">
            3. Google AdSense & DoubleClick DART Cookie Compliance
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites on the internet.
            </li>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">www.aboutads.info</a>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Cookies and Web Beacons</h2>
          <p>
            Like any other website, ZeeMark uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
          <p>
            For more general information on cookies, please read our dedicated <strong className="text-indigo-600 dark:text-indigo-400">Cookie Policy</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Free Marketing Tools & Browser Data</h2>
          <p>
            All free marketing generators on ZeeMark (such as the Caption Generator, Hashtag Generator, SEO Title Checker, and Word Counter) run locally inside your web browser. Any text or keywords you input into these client-side tools are processed directly on your device and are <strong>not stored, logged, or harvested on our servers</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Request that a business disclose the categories and specific pieces of personal data collected.</li>
            <li>Request that a business delete any personal data about the consumer collected by the business.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data (ZeeMark does not sell personal data).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">7. GDPR Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights under the General Data Protection Regulation (GDPR). Every user is entitled to: The right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">8. Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. ZeeMark does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">9. Contact Us</h2>
          <p>
            If you have any questions or suggestions regarding our Privacy Policy, please contact us at:
            <br />
            <strong>ZeeMark Digital Media</strong>
            <br />
            Email: contact@zeemark.io
          </p>
        </section>

      </div>

    </div>
  );
};
