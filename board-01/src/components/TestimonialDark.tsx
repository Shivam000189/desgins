import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Radio, 
  Bookmark, 
  Film, 
  Mic, 
  Camera, 
  Layers, 
  Zap, 
  TrendingUp, 
  Target, 
  CheckCircle2 
} from 'lucide-react';

export const TestimonialDark: React.FC = () => {
  // Creator platform logos for the marquee carousel
  const companies = [
    { name: 'YouTube', icon: <Play className="w-3.5 h-3.5 text-red-400 fill-current" /> },
    { name: 'Spotify Podcasts', icon: <Radio className="w-3.5 h-3.5 text-emerald-400" /> },
    { name: 'Substack', icon: <Bookmark className="w-3.5 h-3.5 text-orange-400" /> },
    { 
      name: 'X', 
      icon: (
        <svg className="w-3 h-3 fill-current text-neutral-300" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ) 
    },
    { name: 'TikTok', icon: <Film className="w-3.5 h-3.5 text-cyan-400" /> },
    { name: 'Apple Podcasts', icon: <Mic className="w-3.5 h-3.5 text-purple-400" /> },
    { name: 'Frame.io', icon: <Layers className="w-3.5 h-3.5 text-indigo-400" /> },
    { name: 'Instagram', icon: <Camera className="w-3.5 h-3.5 text-pink-400" /> },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...companies, ...companies];

  const pillars = [
    {
      stat: '3.4x',
      badge: '+42% MoM',
      title: 'Execution Velocity',
      desc: 'Align strategic quarterly OKRs with weekly sprint cadences to eliminate project drift.',
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
      accent: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/20',
    },
    {
      stat: '85%',
      badge: 'Time Saved',
      title: 'Operational Overhead',
      desc: 'Replace fragmented syncs and manual status reporting with autonomous live dashboards.',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      accent: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/20',
    },
    {
      stat: '$140M+',
      badge: 'Value Generated',
      title: 'Compounded Growth',
      desc: 'Directly connect cross-functional team output to tangible bottom-line expansion.',
      icon: <Target className="w-4 h-4 text-sky-400" />,
      accent: 'from-sky-500/10 to-transparent',
      borderColor: 'border-sky-500/20',
    },
  ];

  return (
    <section className="bg-[#0e0f13] text-white rounded-t-[36px] sm:rounded-t-[44px] -mt-1 relative z-20 overflow-hidden border-t border-white/10 shadow-[0_-12px_45px_rgba(0,0,0,0.35)]">
      
      {/* 1. Continuous Company Logo Carousel */}
      <div className="py-4 sm:py-5 border-b border-white/5 relative overflow-hidden bg-black/30">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0e0f13] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0e0f13] to-transparent z-10 pointer-events-none" />

        <div className="flex select-none">
          <div className="animate-marquee flex items-center gap-10 sm:gap-14 shrink-0">
            {marqueeItems.map((company, idx) => (
              <div
                key={company.name + idx}
                className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium tracking-wide text-neutral-400 hover:text-white transition-colors shrink-0 group cursor-default"
              >
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  {typeof company.icon === 'string' ? (
                    <span className="text-[11px] font-bold text-neutral-300 leading-none">{company.icon}</span>
                  ) : (
                    company.icon
                  )}
                </div>
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient background light spot */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. Main Section Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-16 relative z-10">
        
        {/* Top Eyebrow Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[12px] font-medium text-neutral-300 mb-5 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>The Shivam Growth Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-[38px] md:text-[44px] font-bold tracking-[-0.03em] leading-[1.14] text-white mb-5 font-sans"
          >
            Turn operational friction into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              predictable compounding growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-[17px] text-neutral-400 font-normal leading-relaxed max-w-[620px] mx-auto"
          >
            We replace disconnected tools, spreadsheet chaos, and siloed guesswork with an integrated operating system engineered for high-velocity teams.
          </motion.p>
        </div>

        {/* 3. Three Growth Pillar Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * idx }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative bg-white/[0.03] hover:bg-white/[0.05] border ${pillar.borderColor} rounded-[22px] p-6 sm:p-7 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
            >
              {/* Subtle top glow */}
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${pillar.accent} opacity-40 pointer-events-none`} />

              <div>
                {/* Header row with Icon and Badge */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide text-neutral-300 bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/5">
                    {pillar.badge}
                  </span>
                </div>

                {/* Big Stat */}
                <div className="text-[36px] sm:text-[40px] font-bold text-white tracking-tight leading-none mb-3">
                  {pillar.stat}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Standardized Production</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Strategic Founder Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-[24px] bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-7 sm:p-9 text-center overflow-hidden"
        >
          {/* Subtle quote accent mark */}
          <div className="text-[54px] font-serif text-white/10 leading-none select-none -mb-6">
            “
          </div>

          <blockquote className="font-editorial text-[19px] sm:text-[23px] md:text-[26px] font-normal leading-[1.4] italic text-neutral-100 max-w-[720px] mx-auto mb-6">
            “Shivam gave us the creative and operational clarity we were missing. We cut our editing cycle in half and scaled our reach to 22M+ views without increasing management overhead.”
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Elena Vance"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20 shadow-sm"
            />
            <div className="text-center sm:text-left">
              <div className="text-sm font-semibold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                <span>Elena Vance</span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Scaled 5.5x
                </span>
              </div>
              <div className="text-xs text-neutral-400">
                Founder & CEO at ScaleFlow • Y Combinator Alumni
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};
