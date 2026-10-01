import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X, Github } from 'lucide-react';

interface NavbarProps {
  activeTab?: 'dictation' | 'notetaker';
  setActiveTab?: (tab: 'dictation' | 'notetaker') => void;
  os?: 'windows' | 'mac';
  setOs?: (os: 'windows' | 'mac') => void;
  onOpenDownload?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownload,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="pointer-events-auto bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-full pl-3 pr-2.5 py-2 flex items-center justify-between shadow-[0_6px_30px_rgba(0,0,0,0.06)] w-full max-w-[660px]"
      >
        {/* Brand logo: Shivam */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-neutral-900 font-semibold text-lg tracking-tight no-underline pl-1 group"
        >
          {/* Black circle icon with modern S monogram */}
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 font-editorial font-bold text-base leading-none select-none">
            S
          </div>
          <span className="font-bold text-[17px] text-neutral-900 tracking-[-0.02em]">Shivam</span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden sm:flex items-center gap-7 text-[14px] font-medium text-neutral-600">
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#workflow" className="hover:text-black transition-colors">
            Workflow
          </a>
          <a href="#faq" className="hover:text-black transition-colors">
            FAQ
          </a>
        </div>

        {/* Right CTA Button & GitHub Icon */}
        <div className="flex items-center gap-2">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/Shivam000189/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-full border border-neutral-200 hover:border-black text-neutral-700 hover:text-black flex items-center justify-center transition-all hover:scale-105 shrink-0 bg-white"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="bg-black hover:bg-neutral-800 text-white pl-4 pr-1.5 py-1.5 rounded-full text-[13px] font-medium flex items-center gap-2.5 shadow-sm transition-all group cursor-pointer no-underline"
          >
            <span>Contact us</span>
            <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-neutral-700 hover:text-black"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto sm:hidden absolute top-20 left-4 right-4 bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl flex flex-col gap-3 text-center"
        >
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-700 font-medium hover:text-black"
          >
            About
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-700 font-medium hover:text-black"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-700 font-medium hover:text-black"
          >
            Pricing
          </a>
        </motion.div>
      )}
    </header>
  );
};
