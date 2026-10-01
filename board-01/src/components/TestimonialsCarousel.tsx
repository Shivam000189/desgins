import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, TrendingUp, Sparkles } from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const cards = [
    {
      name: 'Marcus Vance',
      handle: '@marcusvance',
      channel: 'YouTube Verified · 1.4M Subs',
      stat: '+380% Avg Views',
      format: 'Tech Docu-series',
      delivery: '48h Turnaround · 88% Retention',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
      quote:
        '“They took over our post-production and packaging completely. In 90 days, our average views skyrocketed from 45k to 420k, and I finally have my weekends back to focus purely on storytelling.”',
    },
    {
      name: 'Elena Rostova',
      handle: '@elenarostova',
      channel: 'Top 1% Spotify Podcast',
      stat: '3.8x Sponsorship Value',
      format: 'The Modern Mind Podcast',
      delivery: '18M Monthly Impressions',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
      quote:
        '“Before Shivam Studio, we left 80% of our reach on the table. Their syndicated short-form clips and newsletter breakdowns turned every single 1-hour interview into a 20-asset distribution engine.”',
    },
    {
      name: 'Julian Reid',
      handle: '@julianreid',
      channel: '850K Followers · TikTok & X',
      stat: '+38% CTR Lift',
      format: 'Design & Product Essays',
      delivery: '14M Monthly Reach',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
      quote:
        '“The pacing, sound design, and motion feel like high-budget cinema. Our retention graph used to fall off at 15 seconds; now over 72% of viewers watch all the way to the end.”',
    },
    {
      name: 'Sofia Chen',
      handle: '@sofiachen',
      channel: '120K Readers · Substack',
      stat: '$92k/mo Net Revenue',
      format: 'Visual Culture & Strategy',
      delivery: '3.4x Conversion Lift',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80',
      quote:
        '“They didn’t just edit footage; they designed an entire brand ecosystem. Paid subscriber conversions tripled in our first month, and major brand sponsors now pitch us directly.”',
    },
    {
      name: "David O'Connor",
      handle: '@doconnor.media',
      channel: '2.1M Subscribers · YouTube',
      stat: '+45% Retention Lift',
      format: 'Expedition & History Films',
      delivery: 'A/B Packaging Tested',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&h=160&q=80',
      quote:
        '“The 3D thumbnail packaging and title A/B testing alone paid for the agency ten times over. It feels like having an elite Hollywood post-production studio in your pocket.”',
    },
    {
      name: 'Maya Lin',
      handle: '@mayalin.studio',
      channel: '620K Followers · Multi-Platform',
      stat: '5.2x Faster Output',
      format: 'Architecture & Visual Arts',
      delivery: '100% Async Handoff',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
      quote:
        '“I drop raw voice memos and rough footage in our shared drive on Monday, and by Wednesday morning my multi-platform content calendar is completely edited, packaged, and scheduled.”',
    },
  ];

  // Duplicate for seamless infinite marquee scroll
  const fullTrack = [...cards, ...cards];

  return (
    <section className="bg-[#0f1013] text-white py-24 sm:py-32 px-5 rounded-t-[44px] overflow-hidden border-t border-white/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-emerald-500/10 via-emerald-900/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-300 mb-4 font-sans shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>EARLY ACCESS, REAL RESULTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-editorial text-[36px] sm:text-[48px] md:text-[58px] font-normal text-white leading-[1.14] tracking-[-0.02em] mb-4"
        >
          From the first <br />
          <em className="italic font-normal text-emerald-200">people to use it.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed max-w-xl mx-auto"
        >
          Over 45M+ organic views engineered and $4.2M+ in creator brand deals unlocked for our early roster.
        </motion.p>
      </div>

      {/* Infinite Scrolling Track with Real-looking Cards */}
      <div className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing">
        {/* Soft edge blur masks for continuous cinematic feel */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0f1013] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0f1013] to-transparent z-20" />

        <div className="animate-marquee flex gap-6 sm:gap-7 w-max">
          {fullTrack.map((c, i) => (
            <div
              key={i}
              className="shrink-0 w-[380px] sm:w-[440px] rounded-[26px] p-6 sm:p-7 bg-[#16171d] hover:bg-[#1a1c23] border border-white/10 hover:border-emerald-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-all duration-300 flex flex-col justify-between group select-none relative overflow-hidden"
            >
              {/* Subtle card top glow */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              <div>
                {/* Creator Header Row */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <img
                        src={c.avatar}
                        alt={c.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30 shadow-xs"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 bg-[#0f1013] rounded-full p-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-white tracking-tight flex items-center gap-1.5 font-sans">
                        <span>{c.name}</span>
                        <span className="text-[11px] text-neutral-400 font-normal">{c.handle}</span>
                      </div>
                      <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                        {c.channel}
                      </div>
                    </div>
                  </div>

                  {/* Growth Stat Badge */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-300">
                    <TrendingUp className="w-3 h-3" />
                    <span>{c.stat}</span>
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3.5 text-amber-400">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-mono text-neutral-400 ml-1.5">5.0</span>
                </div>

                {/* Quote */}
                <p className="font-editorial text-base sm:text-[17px] text-neutral-200 leading-[1.48] mb-6 font-normal">
                  {c.quote}
                </p>
              </div>

              {/* Bottom Verification Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 relative z-10 font-sans">
                <span className="font-medium text-neutral-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                  {c.format}
                </span>
                <span className="text-emerald-400/90 font-medium flex items-center gap-1">
                  <span>✓ {c.delivery}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
