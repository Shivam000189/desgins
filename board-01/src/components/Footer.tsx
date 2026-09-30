import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-10 px-5 bg-[#FDFBF5] border-t border-[#e0ddd6]">
      {/* 4 Column Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-[1200px] mx-auto mb-16">
        {/* Col 1 */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Get Started
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#" className="block hover:text-[#555] transition-colors">Pricing</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Privacy & Security</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Web demo</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Why Flow vs. Built-in Dictation</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Microphone guide</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Merch store</a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Professionals
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#" className="block hover:text-[#555] transition-colors">Leaders</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Developers</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Creators</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Customer Support</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Students</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Lawyers</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Accessibility</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Sales</a>
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Resources
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#" className="block hover:text-[#555] transition-colors">Case studies</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Blog</a>
            <a href="#" className="block hover:text-[#555] transition-colors">AI prompting guide</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Workflows</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Flow vs Gboard voice typing</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Flow vs Apple Dictation</a>
            <a href="#" className="block hover:text-[#555] transition-colors">What's new</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Vibe coding</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Bug bounty</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Talk to support</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Talk to sales</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Help center</a>
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Company
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#" className="block hover:text-[#555] transition-colors">About</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Careers</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Trust Center</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Become an affiliate</a>
            <a href="#" className="block hover:text-[#555] transition-colors">Media Kit</a>
          </div>
        </div>
      </div>

      {/* Giant Brand Lockup matching reference */}
      <div className="flex items-center gap-5 max-w-[1200px] mx-auto mb-8 pt-10 border-t border-[#e0ddd6]">
        <svg viewBox="0 0 120 120" fill="none" className="w-20 sm:w-28 md:w-[120px] h-20 sm:h-28 md:h-[120px] shrink-0">
          <rect x="10" y="40" width="12" height="40" rx="6" fill="#1a1a1a" />
          <rect x="30" y="25" width="12" height="70" rx="6" fill="#1a1a1a" />
          <rect x="50" y="50" width="12" height="20" rx="6" fill="#1a1a1a" />
          <rect x="70" y="30" width="12" height="60" rx="6" fill="#1a1a1a" />
          <rect x="90" y="10" width="12" height="100" rx="6" fill="#1a1a1a" />
        </svg>
        <div className="text-6xl sm:text-8xl md:text-[120px] font-black tracking-[-4px] leading-none text-[#1a1a1a] select-none">
          Flow
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto text-[13px] text-[#888] gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span>© Wispr Flow 2026</span>
          <div className="flex gap-4">
            <a href="#" className="text-[#888] hover:underline">Terms</a>
            <a href="#" className="text-[#888] hover:underline">Privacy</a>
            <a href="#" className="text-[#888] hover:underline">Data Controls</a>
          </div>
        </div>

        {/* Social Icons matching template: ▶, ⊞, ◉, 𝕏, in */}
        <div className="flex gap-4 text-lg text-[#1a1a1a]">
          <a href="#" className="hover:opacity-75 transition-opacity" title="Play">▶</a>
          <a href="#" className="hover:opacity-75 transition-opacity" title="Apps">⊞</a>
          <a href="#" className="hover:opacity-75 transition-opacity" title="Podcast">◉</a>
          <a href="#" className="hover:opacity-75 transition-opacity" title="X">𝕏</a>
          <a href="#" className="hover:opacity-75 transition-opacity" title="LinkedIn">in</a>
        </div>
      </div>
    </footer>
  );
};
