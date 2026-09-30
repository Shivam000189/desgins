import React from 'react';

interface ProductsSectionProps {
  onOpenDownload: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-20 px-5 bg-[#FDFBF5]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-xs tracking-[3px] uppercase text-[#888] font-semibold text-center mb-8 font-sans">
          PRODUCTS
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          {/* Card 1: Dictation */}
          <div className="flex-1 min-w-[300px] border border-[#e0ddd6] rounded-2xl p-7 sm:p-8 bg-white shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-16 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'linear-gradient(135deg,#e8d5f5,#d4c5f0)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" fill="#1a1a1a" />
                    <path d="M8 12 Q12 8 16 12 Q12 16 8 12" fill="white" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1a1a1a] font-sans">
                    Wispr Flow Dictation
                  </h4>
                  <span className="inline-block bg-[#1a1a1a] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    ✓
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed mb-4 font-sans">
                The voice-to-text AI that turns speech into clear, polished writing in every app.
              </p>
            </div>
            <button
              onClick={onOpenDownload}
              className="text-sm font-semibold text-[#1a1a1a] hover:text-[#0d5c4a] inline-flex items-center gap-1 cursor-pointer transition-colors text-left"
            >
              Download free →
            </button>
          </div>

          {/* Card 2: Notetaker */}
          <div className="flex-1 min-w-[300px] border border-[#e0ddd6] rounded-2xl p-7 sm:p-8 bg-white shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-16 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'linear-gradient(135deg,#0d5c4a,#1a7a5a)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect x="4" y="2" width="16" height="20" rx="2" fill="white" />
                    <line x1="8" y1="7" x2="16" y2="7" stroke="#0d5c4a" strokeWidth="1.5" />
                    <line x1="8" y1="11" x2="16" y2="11" stroke="#0d5c4a" strokeWidth="1.5" />
                    <line x1="8" y1="15" x2="13" y2="15" stroke="#0d5c4a" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1a1a1a] font-sans">
                    Wispr Flow Notetaker
                  </h4>
                  <span className="inline-block bg-[#0d5c4a] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    New
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed mb-4 font-sans">
                Meeting notes that are accurate enough to action on. Works in all meetings.
              </p>
            </div>
            <button
              onClick={onOpenDownload}
              className="text-sm font-semibold text-[#1a1a1a] hover:text-[#0d5c4a] inline-flex items-center gap-1 cursor-pointer transition-colors text-left"
            >
              Download free →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
