import React from 'react';
import { BrandEmblem } from './BrandEmblem';
import { Language } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  onLanguageChange,
  onNavigate,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (sectionId: string) => {
    onClose();
    if (sectionId === 'contact') {
      onOpenContact();
    } else {
      onNavigate(sectionId);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#060608]/95 backdrop-blur-xl animate-in fade-in duration-300 flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
    >
      {/* Top Bar of Drawer */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">EXPANCE</span>
          <BrandEmblem size={20} />
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer text-lg"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Center Nav Links */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <nav className="md:col-span-7 flex flex-col space-y-6">
          {[
            { id: 'projects', number: '01', label: lang === 'en' ? 'Projects' : 'Projets' },
            { id: 'services', number: '02', label: lang === 'en' ? 'Services' : 'Services' },
            { id: 'studio', number: '03', label: lang === 'en' ? 'Studio' : 'Studio' },
            { id: 'faq', number: '04', label: 'FAQ' },
            { id: 'contact', number: '05', label: lang === 'en' ? 'Contact' : 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="group flex items-baseline gap-6 text-left cursor-pointer transition-transform hover:translate-x-3 duration-300"
            >
              <span className="text-xs font-mono text-neutral-500 group-hover:text-orange-500 transition-colors">
                {item.number}
              </span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Right Info Column */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
          <div>
            <span className="text-xs uppercase tracking-wider text-orange-500 font-semibold block mb-2">
              EXPANCE.STUDIO
            </span>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {lang === 'en'
                ? 'Branding & web agency based in Brussels. We craft high-impact identities and websites that truly reflect who you are.'
                : 'Agence de branding et création web à Bruxelles. Nous créons des identités et des plateformes à la hauteur de vos ambitions.'}
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
              Studio
            </span>
            <p className="text-sm text-neutral-300">Avenue Louise 231</p>
            <p className="text-sm text-neutral-300">1050 Ixelles · Brussels, BE</p>
            <a
              href="mailto:shivamsharmass9897@gmail.com"
              className="text-sm text-orange-400 hover:underline mt-2 block"
            >
              shivamsharmass9897@gmail.com
            </a>
            <a
              href="https://github.com/Shivam000189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-300 hover:text-white hover:underline mt-1 block"
            >
              GitHub ↗
            </a>
          </div>

          {/* Quick Language Toggle */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-4">
            <span className="text-xs text-neutral-400">Language:</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`text-xs font-semibold px-3 py-1 rounded cursor-pointer ${
                lang === 'en' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('fr')}
              className={`text-xs font-semibold px-3 py-1 rounded cursor-pointer ${
                lang === 'fr' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              FR
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex justify-between items-center text-xs text-neutral-500">
        <span>2026 © EXPANCE.STUDIO</span>
        <span>Avenue Louise, Brussels</span>
      </div>
    </div>
  );
};
