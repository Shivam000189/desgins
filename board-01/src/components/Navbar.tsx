import React from 'react';

interface NavbarProps {
  activeTab: 'dictation' | 'notetaker';
  setActiveTab: (tab: 'dictation' | 'notetaker') => void;
  os: 'windows' | 'mac';
  setOs: (os: 'windows' | 'mac') => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  os,
  onOpenDownload,
}) => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#FDFBF5] border border-[#ddd] rounded-xl px-5 py-2.5 flex items-center gap-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] max-w-[900px] w-[calc(100%-40px)]">
      {/* Brand logo: 4 equalizer bars + Flow wordmark */}
      <a href="#" className="flex items-center gap-1.5 font-bold text-lg text-[#1a1a1a] no-underline shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="2" y="8" width="3" height="8" rx="1.5" fill="#1a1a1a" />
          <rect x="7" y="4" width="3" height="16" rx="1.5" fill="#1a1a1a" />
          <rect x="12" y="10" width="3" height="4" rx="1.5" fill="#1a1a1a" />
          <rect x="17" y="6" width="3" height="12" rx="1.5" fill="#1a1a1a" />
        </svg>
        <span>Flow</span>
      </a>

      {/* Switcher pills */}
      <div className="flex gap-1 bg-[#e8e4dc] rounded-lg p-[3px]">
        <button
          onClick={() => setActiveTab('dictation')}
          className={`px-3.5 py-1.5 rounded-md text-sm font-sans transition-all cursor-pointer border-none ${
            activeTab === 'dictation'
              ? 'bg-white text-[#1a1a1a] shadow-[0_1px_3px_rgba(0,0,0,0.1)] font-medium'
              : 'bg-transparent text-[#666] hover:text-[#1a1a1a]'
          }`}
        >
          Dictation
        </button>
        <button
          onClick={() => setActiveTab('notetaker')}
          className={`px-3.5 py-1.5 rounded-md text-sm font-sans transition-all cursor-pointer border-none ${
            activeTab === 'notetaker'
              ? 'bg-white text-[#1a1a1a] shadow-[0_1px_3px_rgba(0,0,0,0.1)] font-medium'
              : 'bg-transparent text-[#666] hover:text-[#1a1a1a]'
          }`}
        >
          Notetaker
        </button>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        <a href="#business" className="text-[#1a1a1a] text-sm font-medium hover:text-[#555] transition-colors">
          Business
        </a>
        <a href="#pricing" className="text-[#1a1a1a] text-sm font-medium hover:text-[#555] transition-colors">
          Pricing
        </a>
        <a href="#lab" className="text-[#1a1a1a] text-sm font-medium hover:text-[#555] transition-colors">
          Lab
        </a>
      </div>

      {/* Purple Action CTA */}
      <button
        onClick={onOpenDownload}
        className="ml-auto md:ml-0 bg-[#E8D5F5] border border-[#c9a8e8] hover:bg-[#dec2f0] px-4 py-2 rounded-lg text-sm font-semibold text-[#1a1a1a] cursor-pointer flex items-center gap-1.5 transition-transform hover:scale-[1.02] shrink-0 font-sans shadow-2xs"
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
          <rect x="1" y="1" width="6" height="6" rx="1" />
          <rect x="9" y="1" width="6" height="6" rx="1" />
          <rect x="1" y="9" width="6" height="6" rx="1" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
        </svg>
        <span>Get started on {os === 'windows' ? 'Windows' : 'Mac'}</span>
      </button>
    </nav>
  );
};
