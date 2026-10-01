import React from 'react';
import { Github, Twitter, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-18 pb-12 px-5 bg-[#FDFBF5] border-t border-[#e8e4dc]">
      {/* 4 Column Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-[1200px] mx-auto mb-16 text-left">
        {/* Col 1: Production Capabilities */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Capabilities
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#services" className="block hover:text-[#0d5c4a] transition-colors">Long-Form YouTube</a>
            <a href="#services" className="block hover:text-[#0d5c4a] transition-colors">3D Thumbnails & Packaging</a>
            <a href="#services" className="block hover:text-[#0d5c4a] transition-colors">High-Retention Shorts & Reels</a>
            <a href="#services" className="block hover:text-[#0d5c4a] transition-colors">Bespoke Creator Bibles</a>
            <a href="#services" className="block hover:text-[#0d5c4a] transition-colors">Sound Design & 4K Color</a>
            <a href="#services" className="block hover:text-[#0d5c4a] transition-colors">Newsletter Syndication</a>
          </div>
        </div>

        {/* Col 2: Formats & Niches */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Specializations
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Tech & AI Breakdowns</a>
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Video Essayists</a>
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Founder & Creator Podcasts</a>
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Documentary Filmmaking</a>
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Multi-Platform Sprints</a>
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Sponsorship Integrations</a>
          </div>
        </div>

        {/* Col 3: Studio & Resources */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Studio
          </h5>
          <div className="space-y-2.5 text-sm text-[#1a1a1a] font-sans">
            <a href="#testimonials" className="block hover:text-[#0d5c4a] transition-colors">Creator Results</a>
            <a href="#workflow" className="block hover:text-[#0d5c4a] transition-colors">Production Pipeline</a>
            <a href="#faq" className="block hover:text-[#0d5c4a] transition-colors">Common Questions</a>
            <a href="#contact" className="block hover:text-[#0d5c4a] transition-colors">Apply for Partnership</a>
            <a href="#contact" className="block hover:text-[#0d5c4a] transition-colors">Brand Inquiries</a>
          </div>
        </div>

        {/* Col 4: Creator / Developer Connect */}
        <div>
          <h5 className="text-xs tracking-[2px] uppercase text-[#888] mb-4 font-bold font-sans">
            Connect
          </h5>
          <p className="text-xs text-[#666] leading-relaxed mb-4 font-sans">
            Crafted with precision for next-generation digital creators.
          </p>
          <div className="space-y-2 font-sans">
            <a
              href="https://portfolio-vxrf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-[#e8e4dc] hover:border-[#1a1a1a] text-sm text-[#1a1a1a] transition-all group"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0d5c4a]" />
                <span className="font-medium">Portfolio</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#999] group-hover:text-[#1a1a1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/Shivam000189/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-[#e8e4dc] hover:border-[#1a1a1a] text-sm text-[#1a1a1a] transition-all group"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#1a1a1a]" />
                <span className="font-medium">GitHub</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#999] group-hover:text-[#1a1a1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://x.com/shivam_s0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-[#e8e4dc] hover:border-[#1a1a1a] text-sm text-[#1a1a1a] transition-all group"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-[#1a1a1a]" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-medium">X (Twitter)</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#999] group-hover:text-[#1a1a1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Giant Brand Lockup */}
      <div className="flex items-center gap-5 max-w-[1200px] mx-auto mb-8 pt-10 border-t border-[#e8e4dc]">
        <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-2xl bg-[#0d5c4a] text-[#FDFBF5] flex items-center justify-center shrink-0 shadow-sm font-editorial text-3xl sm:text-4xl md:text-5xl font-normal select-none">
          S
        </div>
        <div className="text-5xl sm:text-7xl md:text-[100px] font-black tracking-[-3px] sm:tracking-[-5px] leading-none text-[#1a1a1a] select-none font-sans uppercase">
          Shivam
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto text-[13px] text-[#777] gap-4 font-sans">
        <div className="flex items-center gap-4 flex-wrap text-center sm:text-left">
          <span>© 2026 Shivam. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-[#1a1a1a] hover:underline">Terms</a>
            <a href="#contact" className="hover:text-[#1a1a1a] hover:underline">Privacy</a>
            <a href="#contact" className="hover:text-[#1a1a1a] hover:underline">Creator IP Agreement</a>
          </div>
        </div>

        {/* Creator Social Icon Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://portfolio-vxrf.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            title="Portfolio"
            className="w-8 h-8 rounded-full bg-white border border-[#e8e4dc] hover:border-[#1a1a1a] text-neutral-700 hover:text-black flex items-center justify-center transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#0d5c4a]" />
          </a>
          <a
            href="https://github.com/Shivam000189/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
            className="w-8 h-8 rounded-full bg-white border border-[#e8e4dc] hover:border-[#1a1a1a] text-neutral-700 hover:text-black flex items-center justify-center transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://x.com/shivam_s0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
            title="X (Twitter)"
            className="w-8 h-8 rounded-full bg-white border border-[#e8e4dc] hover:border-[#1a1a1a] text-neutral-700 hover:text-black flex items-center justify-center transition-colors"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
