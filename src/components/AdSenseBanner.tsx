import React, { useEffect } from 'react';
import { ADSENSE_CONFIG } from '../config/adsenseConfig';
import { Info } from 'lucide-react';

interface AdSenseBannerProps {
  slot: 'homeLeaderboard' | 'guideInArticle' | 'toolsSidebar' | 'footerBanner';
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  showHelperBadge?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  slot,
  format = 'auto',
  className = '',
  showHelperBadge = true,
}) => {
  const slotId = ADSENSE_CONFIG.slots[slot];

  useEffect(() => {
    if (ADSENSE_CONFIG.enabled && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn('Google AdSense error:', err);
      }
    }
  }, [slot]);

  // When AdSense is enabled with a real publisher ID
  if (ADSENSE_CONFIG.enabled && ADSENSE_CONFIG.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX') {
    return (
      <aside 
        aria-label="Sponsored Advertisement"
        className={`my-8 flex flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-3 text-center ${className}`}
      >
        <div className="mb-2 text-[10px] font-semibold tracking-wider text-slate-600 dark:text-slate-300 uppercase">
          Advertisement
        </div>
        <ins
          className="adsbygoogle block w-full text-center"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CONFIG.publisherId}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  // Pre-approval clean placeholder that strictly complies with Google AdSense policies
  // (No fake ads, no deceptive buttons, clearly identified layout reservation)
  return (
    <aside 
      aria-label="Reserved Advertising Space"
      className={`my-8 mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/30 p-4 transition-all ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-2 mb-3">
        <span className="text-[11px] font-semibold tracking-widest text-slate-600 dark:text-slate-300 uppercase">
          Advertisement Area
        </span>
        {showHelperBadge && (
          <span className="inline-flex items-center gap-1 text-[11px] text-indigo-500 dark:text-indigo-400 font-medium">
            <Info size={13} />
            Configured for AdSense
          </span>
        )}
      </div>

      <div className="flex flex-col items-center justify-center py-4 px-3 text-center">
        <p className="text-xs font-medium text-slate-700 dark:text-slate-200">
          Reserved Advertising Unit ({format === 'rectangle' ? '300x250 Box' : 'Responsive Leaderboard'})
        </p>
        <p className="mt-1 max-w-md text-[11px] text-slate-600 dark:text-slate-300">
          This container is structured for Google AdSense compliance. Content remains separate and unobstructed.
        </p>
      </div>
    </aside>
  );
};
