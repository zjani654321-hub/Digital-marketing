import React, { useState } from 'react';
import { TrendingUp, Award, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const GrowthChart3D: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'traffic' | 'leads' | 'revenue'>('traffic');

  const metricData = {
    traffic: {
      title: 'Organic Search Traffic Growth',
      value: '+385%',
      subtext: 'Compounded over 6 months of systematic content & technical SEO',
      bars: [30, 48, 62, 75, 94, 128, 160],
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'],
      badge: 'Zero Paid Ads Required'
    },
    leads: {
      title: 'Monthly Inbound Leads',
      value: '4.2x',
      subtext: 'High-intent prospects generated through tailored lead magnets & CRO',
      bars: [22, 35, 52, 68, 88, 115, 142],
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'],
      badge: 'Sales-Ready MQLs'
    },
    revenue: {
      title: 'Attributed Digital Revenue',
      value: '$148,000+',
      subtext: 'Direct return from multi-channel email automation and retargeting',
      bars: [28, 42, 59, 78, 98, 130, 175],
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'],
      badge: 'Profitable Unit Economics'
    }
  };

  const current = metricData[activeMetric];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-6 shadow-3d-card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <Zap size={14} />
              Interactive 3D Growth Metrics
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {current.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {current.subtext}
          </p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {(['traffic', 'leads', 'revenue'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveMetric(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                activeMetric === key
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Perspective Chart Visualization */}
      <div className="relative pt-8 pb-4 perspective-1000">
        <div 
          className="flex items-end justify-between gap-2 sm:gap-4 h-48 sm:h-56 transform-style-3d px-2 sm:px-6"
          style={{ transform: 'rotateX(10deg)' }}
        >
          {current.bars.map((val, i) => {
            const maxVal = Math.max(...current.bars);
            const heightPct = Math.round((val / maxVal) * 100);
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                {/* Value tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-800 px-1.5 py-0.5 rounded shadow-sm">
                  {val}%
                </div>

                {/* 3D Bar Element with simulated side & top lighting */}
                <div className="w-full max-w-[42px] relative flex flex-col justify-end" style={{ height: `${heightPct}%` }}>
                  {/* Top face of 3D column */}
                  <div className="w-full h-2 rounded-t-md bg-indigo-300 dark:bg-indigo-400 transform -skew-x-12 origin-bottom transition-all duration-300 group-hover:brightness-125" />
                  
                  {/* Front face of 3D column */}
                  <div className="w-full h-full rounded-b-md bg-gradient-to-t from-indigo-600 via-indigo-500 to-indigo-400 shadow-lg shadow-indigo-500/20 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mt-1">
                  {current.labels[i]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Ambient base grid line */}
        <div className="w-full h-px bg-slate-200 dark:bg-slate-800 -mt-7" />
      </div>

      {/* Bottom KPI Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Growth Impact</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{current.value}</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Award size={18} />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Validation</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white truncate">{current.badge}</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">AdSense Safe</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">100% Policy Friendly</div>
          </div>
        </div>
      </div>
    </div>
  );
};
