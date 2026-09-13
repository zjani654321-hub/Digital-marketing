import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Megaphone, Search, BarChart3, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero3DScene: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const rotateX = -mousePos.y * 12;
  const rotateY = mousePos.x * 15;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] mx-auto perspective-1200 flex items-center justify-center select-none"
      aria-label="Interactive 3D Digital Marketing Growth Engine Illustration"
    >
      {/* Background Ambient Glowing 3D Orbs */}
      <div 
        className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl pointer-events-none -top-10 -left-10 animate-pulse-glow"
      />
      <div 
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-emerald-400/15 blur-3xl pointer-events-none -bottom-10 -right-10 animate-pulse-glow"
        style={{ animationDelay: '2.5s' }}
      />

      {/* Main 3D Interactive Stage */}
      <div 
        className="relative w-full h-full flex items-center justify-center transform-style-3d transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Isometric 3D Base Platform */}
        <div 
          className="absolute w-[86%] h-[72%] rounded-3xl bg-gradient-to-b from-white/90 via-slate-50/80 to-slate-200/90 dark:from-slate-800/90 dark:via-slate-900/95 dark:to-slate-950/90 border border-slate-200/80 dark:border-slate-700/60 shadow-3d-card p-6 flex flex-col justify-between"
          style={{
            transform: 'translateZ(-15px)',
          }}
        >
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 rounded-3xl pointer-events-none" />

          {/* Platform Header */}
          <div className="flex items-center justify-between z-10 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400">ZeeMark Engine v3.0</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Organic Traffic
            </div>
          </div>

          {/* 3D Visual Bars inside platform */}
          <div className="grid grid-cols-5 gap-3 items-end h-28 my-auto z-10 px-2">
            {[
              { label: 'Q1', height: '42%', color: 'from-blue-500 to-indigo-600' },
              { label: 'Q2', height: '58%', color: 'from-indigo-500 to-violet-600' },
              { label: 'Q3', height: '76%', color: 'from-violet-500 to-purple-600' },
              { label: 'Q4', height: '92%', color: 'from-purple-500 to-cyan-500' },
              { label: 'Goal', height: '100%', color: 'from-cyan-400 to-emerald-500' },
            ].map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                <div 
                  className={`w-full rounded-t-lg bg-gradient-to-t ${bar.color} transition-all duration-500 shadow-md group-hover:brightness-110 relative overflow-hidden`}
                  style={{ height: bar.height }}
                >
                  <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">{bar.label}</span>
              </div>
            ))}
          </div>

          {/* Footer metrics bar */}
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 z-10">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={13} className="text-indigo-500" />
              Multi-Channel Synced
            </span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">+312% Growth</span>
          </div>
        </div>

        {/* Floating 3D Element 1: 3D Megaphone Card (Top Right) */}
        <div 
          className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-4 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/40 transform-style-3d animate-float-slow"
          style={{
            transform: 'translateZ(45px)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <Megaphone size={20} className="transform -rotate-12" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold">Campaign Reach</div>
              <div className="text-base font-extrabold tracking-tight">4.9B Users</div>
            </div>
          </div>
        </div>

        {/* Floating 3D Element 2: 3D SEO #1 Rank Card (Bottom Left) */}
        <div 
          className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 shadow-2xl border border-slate-200 dark:border-slate-700 transform-style-3d animate-float-medium"
          style={{
            transform: 'translateZ(55px)',
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
              <Search size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <TrendingUp size={13} />
                <span>Rank #1 Organic</span>
              </div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Keyword: <span className="font-mono text-slate-900 dark:text-white font-semibold">ZeeMark SEO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D Element 3: 3D Conversion Multiplier Badge (Center Floating) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 shadow-2xl shadow-cyan-500/40 border border-white/40 flex items-center gap-2 transform-style-3d pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%) translateZ(70px)',
          }}
        >
          <Sparkles size={16} className="text-cyan-200 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs font-black tracking-wide uppercase">3.2x Average ROI</span>
        </div>

        {/* Floating 3D Pill 4: Analytics Pulse (Middle Right) */}
        <div 
          className="absolute top-1/3 -right-6 hidden sm:flex items-center gap-1.5 rounded-full bg-slate-900/90 text-white text-[11px] font-semibold px-3 py-1.5 border border-slate-700 shadow-xl transform-style-3d animate-float-slow"
          style={{
            transform: 'translateZ(30px)',
            animationDelay: '1.5s',
          }}
        >
          <BarChart3 size={13} className="text-indigo-400" />
          <span>ROAS 480%</span>
        </div>
      </div>
    </div>
  );
};
