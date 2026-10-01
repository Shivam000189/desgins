import React from 'react';
import { FlameAura } from './FlameAura';

interface PreFooterProps {
  bannerText: string;
  contactTitle: string;
  contactSubtitle: string;
  ctaButton: string;
  pagesLabel: string;
  emailLabel: string;
  addressLabel: string;
  addressLines: string[];
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const PreFooter: React.FC<PreFooterProps> = ({
  bannerText,
  contactTitle,
  contactSubtitle,
  ctaButton,
  pagesLabel,
  emailLabel,
  addressLabel,
  addressLines,
  onOpenContact,
  onNavigate,
}) => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Horizon Radiant Fiery Wave */}
      <FlameAura variant="horizon" />

      {/* Big Headline */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-24 md:mb-32">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          {bannerText}
        </h2>
      </div>

      {/* Grid: Left CTA block + Right Navigation Columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-12 border-t border-white/5">
        {/* Left Column: You have a project idea? */}
        <div className="md:col-span-5 flex flex-col items-start justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {contactTitle}
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-neutral-400 tracking-tight mt-0.5">
              {contactSubtitle}
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenContact}
              className="bg-white hover:bg-neutral-200 text-black text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              {ctaButton}
            </button>
          </div>
        </div>

        {/* Right Columns: Pages, Email, Address */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Pages */}
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-4 block">
              {pagesLabel}
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Studio
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-4 block">
              {emailLabel}
            </span>
            <a
              href="mailto:shivamsharmass9897@gmail.com"
              className="text-xs sm:text-sm text-neutral-300 hover:text-orange-400 transition-colors block"
            >
              shivamsharmass9897@gmail.com
            </a>
            <a
              href="https://github.com/Shivam000189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors block mt-2"
            >
              GitHub ↗
            </a>
          </div>

          {/* Address */}
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-4 block">
              {addressLabel}
            </span>
            <address className="not-italic text-xs sm:text-sm text-neutral-300 space-y-1">
              {addressLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};
