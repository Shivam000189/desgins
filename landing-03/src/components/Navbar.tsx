import React, { useState, useEffect, useRef } from 'react';
import { BrandEmblem } from './BrandEmblem';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: () => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenContact,
  onToggleMenu,
  isMenuOpen,
}) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060606]/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Zone: EXPANCE + Spiral Emblem */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="EXPANCE Homepage"
        >
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-sans">
            EXPANCE
          </span>
          <BrandEmblem size={18} animate={true} />
        </a>

        {/* Right Action Zone: Menu + Language + Contact Us */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* GitHub link */}
          <a
            href="https://github.com/Shivam000189"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-300 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Hamburger / Menu toggle (= two horizontal lines as in the video) */}
          <button
            onClick={onToggleMenu}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-5 h-[2px] bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-200 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
              aria-haspopup="true"
              aria-expanded={isLangDropdownOpen}
            >
              {/* Flag icon */}
              {lang === 'en' ? (
                <svg className="w-4 h-3 rounded-xs shadow-xs" viewBox="0 0 640 480" fill="none">
                  <path fill="#012169" d="M0 0h640v480H0z"/>
                  <path stroke="#fff" strokeWidth="60" d="m0 0 640 480M640 0 0 480"/>
                  <path stroke="#C8102E" strokeWidth="40" d="m0 0 640 480M640 0 0 480"/>
                  <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640"/>
                  <path stroke="#C8102E" strokeWidth="60" d="M320 0v480M0 240h640"/>
                </svg>
              ) : (
                <svg className="w-4 h-3 rounded-xs shadow-xs" viewBox="0 0 640 480" fill="none">
                  <path fill="#002395" d="M0 0h213.3v480H0z"/>
                  <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
                  <path fill="#ED2939" d="M426.7 0H640v480H426.7z"/>
                </svg>
              )}
              <span className="uppercase">{lang}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isLangDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#111114] border border-white/10 rounded-xl shadow-2xl py-1.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => {
                    onLanguageChange('fr');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                    lang === 'fr'
                      ? 'text-orange-400 bg-white/5 font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <svg className="w-3.5 h-2.5 rounded-xs" viewBox="0 0 640 480" fill="none">
                    <path fill="#002395" d="M0 0h213.3v480H0z"/>
                    <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
                    <path fill="#ED2939" d="M426.7 0H640v480H426.7z"/>
                  </svg>
                  FRANÇAIS
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('en');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                    lang === 'en'
                      ? 'text-orange-400 bg-white/5 font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <svg className="w-3.5 h-2.5 rounded-xs" viewBox="0 0 640 480" fill="none">
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path stroke="#fff" strokeWidth="60" d="m0 0 640 480M640 0 0 480"/>
                    <path stroke="#C8102E" strokeWidth="40" d="m0 0 640 480M640 0 0 480"/>
                    <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640"/>
                    <path stroke="#C8102E" strokeWidth="60" d="M320 0v480M0 240h640"/>
                  </svg>
                  ENGLISH
                </button>
              </div>
            )}
          </div>

          {/* Contact us Button: Pill button with white bg, dark text */}
          <button
            onClick={onOpenContact}
            className="bg-white hover:bg-neutral-100 text-black text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap cursor-pointer"
          >
            {lang === 'en' ? 'Contact us' : 'Nous contacter'}
          </button>
        </div>
      </div>
    </header>
  );
};
