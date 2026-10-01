import React, { useState } from 'react';
import { BrandEmblem } from './BrandEmblem';

interface FooterProps {
  copyright: string;
  linkedin: string;
  instagram: string;
  terms: string;
  privacy: string;
  cookies: string;
}

export const Footer: React.FC<FooterProps> = ({
  copyright = '© 2026 Expance Studio AB',
  linkedin = 'LinkedIn',
  instagram = 'Instagram',
  terms = 'Terms',
  privacy = 'Privacy',
  cookies = 'Cookies',
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="pt-16 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden border-t border-white/5">
      {/* Huge Monumental Wordmark: EXPANCE ✹ STUDIO */}
      <div className="w-full flex items-center justify-between select-none py-10 md:py-16">
        <div className="w-full flex items-center justify-between text-neutral-100 font-extrabold tracking-tight">
          <span className="text-[14vw] lg:text-[13rem] leading-none uppercase font-sans">
            EXPANCE
          </span>
          <div className="shrink-0 flex items-center justify-center mx-2 md:mx-6">
            <BrandEmblem
              size={120}
              className="w-[11vw] h-[11vw] max-w-[150px] max-h-[150px] min-w-[40px] min-h-[40px]"
              animate={true}
            />
          </div>
          <span className="text-[14vw] lg:text-[13rem] leading-none uppercase font-sans">
            STUDIO
          </span>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Socials, Legal */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
        <div>{copyright || '© 2026 Expance Studio AB'}</div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Shivam000189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {linkedin}
          </a>
          <a
            href="mailto:shivamsharmass9897@gmail.com"
            className="hover:text-white transition-colors"
          >
            shivamsharmass9897@gmail.com
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {instagram}
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {terms}
          </button>
          <button
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {privacy}
          </button>
          <button
            onClick={() => setActiveModal('cookies')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {cookies}
          </button>
        </div>
      </div>

      {/* Legal Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#111114] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg cursor-pointer"
              aria-label="Close legal modal"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white mb-4 capitalize">
              {activeModal === 'terms' ? terms : activeModal === 'privacy' ? privacy : cookies}
            </h3>
            <p className="text-neutral-300 text-xs leading-relaxed mb-6">
              EXPANCE is a registered design and digital engineering agency based in Brussels, Belgium (Avenue Louise 231, 1050 Ixelles). All creative materials, brand assets, code implementations, and project deliveries are subject to Belgian intellectual property laws and GDPR compliance regulations.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-white text-black font-semibold text-xs px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
