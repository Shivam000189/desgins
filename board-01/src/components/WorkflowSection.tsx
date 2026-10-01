import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      badge: 'ASYNC HANDOFF',
      title: 'Drop & forget',
      desc: 'Drop raw A-roll, phone clips, or unedited voice memos into your private workspace. Our dedicated pod takes over instantly with zero back-and-forth.',
      metric: 'Instant Sync',
      icon: (
        <svg width="64" height="64" viewBox="0 0 72 72" className="overflow-visible">
          <circle cx="36" cy="36" r="32" fill="#FAF7F0" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="36" cy="36" r="24" fill="white" stroke="#1a1a1a" strokeWidth="2" />
          <path d="M36 44 L36 28" stroke="#0D5C4A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 34 L36 28 L42 34" stroke="#0D5C4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="22" r="4.5" fill="#E8654A" />
          <circle cx="23" cy="48" r="3" fill="#0D5C4A" opacity="0.4" />
        </svg>
      ),
    },
    {
      step: '02',
      badge: 'OMNICHANNEL SYNC',
      title: 'Native to your stack',
      desc: 'YouTube, TikTok, Substack, Frame.io, or Notion. We operate directly within the platforms and toolchains you already use every day.',
      metric: 'Zero New Tools',
      icon: (
        <svg width="72" height="64" viewBox="0 0 84 72" className="overflow-visible">
          <rect x="6" y="24" width="22" height="24" rx="7" fill="#1a1a1a" />
          <circle cx="17" cy="36" r="4" fill="#5DD4A0" />
          <path d="M28 36 L38 36" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="2 2" />
          <rect x="38" y="16" width="26" height="40" rx="8" fill="#0D5C4A" />
          <circle cx="51" cy="28" r="5" fill="#FDFBF5" />
          <rect x="44" y="38" width="14" height="3" rx="1.5" fill="#5DD4A0" />
          <path d="M64 36 L74 36" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="2 2" />
          <rect x="74" y="24" width="22" height="24" rx="7" fill="#E8654A" />
          <circle cx="85" cy="36" r="3.5" fill="#FDFBF5" />
        </svg>
      ),
    },
    {
      step: '03',
      badge: 'RETENTION CRAFT',
      title: 'Precision pacing & sound',
      desc: 'Hook-engineering, dynamic color grading, tactile sound effects, and custom motion graphics tailored specifically to your visual tone.',
      metric: '85%+ Avg Retention',
      icon: (
        <svg width="64" height="64" viewBox="0 0 72 72" className="overflow-visible">
          <rect x="12" y="18" width="48" height="36" rx="8" fill="#FAF7F0" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* Audio waveforms */}
          <line x1="22" y1="36" x2="22" y2="44" stroke="#0D5C4A" strokeWidth="3" strokeLinecap="round" />
          <line x1="28" y1="30" x2="28" y2="50" stroke="#0D5C4A" strokeWidth="3" strokeLinecap="round" />
          <line x1="34" y1="24" x2="34" y2="56" stroke="#E8654A" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="40" y1="32" x2="40" y2="48" stroke="#0D5C4A" strokeWidth="3" strokeLinecap="round" />
          <line x1="46" y1="28" x2="46" y2="52" stroke="#0D5C4A" strokeWidth="3" strokeLinecap="round" />
          <line x1="52" y1="35" x2="52" y2="45" stroke="#0D5C4A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      step: '04',
      badge: 'PACKAGING LAB',
      title: 'A/B packaging & click science',
      desc: 'Custom 3D-rendered thumbnails, high-curiosity title sets, and psychological hook framing tested to win in algorithmic recommendations.',
      metric: '+38% CTR Lift',
      icon: (
        <svg width="68" height="64" viewBox="0 0 76 72" className="overflow-visible">
          <rect x="10" y="16" width="38" height="40" rx="8" fill="#1a1a1a" />
          <circle cx="29" cy="32" r="7" fill="#FDFBF5" />
          <rect x="18" y="44" width="22" height="4" rx="2" fill="#5DD4A0" />

          {/* Overlapping A/B winning variant */}
          <rect x="28" y="24" width="38" height="40" rx="8" fill="#FAF7F0" stroke="#0D5C4A" strokeWidth="2" />
          <circle cx="47" cy="40" r="7" fill="#0D5C4A" />
          <path d="M44 40 L46 42 L50 38" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="18" r="4.5" fill="#E8654A" />
        </svg>
      ),
    },
    {
      step: '05',
      badge: 'COMPOUNDING REACH',
      title: 'Syndicated distribution',
      desc: 'One core recording transforms into high-converting short-form videos, viral X threads, newsletters, and custom branded visual assets.',
      metric: '10x Content Output',
      icon: (
        <svg width="72" height="64" viewBox="0 0 84 72" className="overflow-visible">
          <circle cx="20" cy="36" r="14" fill="#0D5C4A" />
          <text x="15" y="41" fontSize="14" fill="#FDFBF5">✦</text>
          <path d="M34 36 Q50 22 62 20" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          <path d="M34 36 L60 36" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          <path d="M34 36 Q50 50 62 52" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          <circle cx="68" cy="20" r="8" fill="#F5A623" />
          <circle cx="68" cy="36" r="8" fill="#1a1a1a" />
          <circle cx="68" cy="52" r="8" fill="#E8654A" />
          <circle cx="68" cy="20" r="3" fill="white" />
          <circle cx="68" cy="36" r="3" fill="#5DD4A0" />
          <circle cx="68" cy="52" r="3" fill="white" />
        </svg>
      ),
    },
    {
      step: '06',
      badge: 'AUTONOMOUS GROWTH',
      title: 'Data loop & scaling',
      desc: 'We analyze audience retention drop-offs, optimize subsequent drops, and handle inbound brand deal integrations on complete autopilot.',
      metric: 'Compounding Scale',
      icon: (
        <svg width="68" height="64" viewBox="0 0 76 72" className="overflow-visible">
          <circle cx="38" cy="36" r="30" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="38" cy="36" r="22" fill="#FAF7F0" />
          {/* Exponential growth curve */}
          <path d="M24 46 Q34 44 42 34 T54 22" stroke="#0D5C4A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="52,20 57,21 54,26" fill="#0D5C4A" />
          <circle cx="42" cy="34" r="3.5" fill="#E8654A" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-32 px-5 sm:px-8 bg-[#FDFBF5] border-t border-[#e0ddd6]/70 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          
          {/* Left Column (Full height of the workflow section track) */}
          <div className="lg:col-span-5 relative">
            {/* Sticky Wrapper - stays locked on screen from section start to section end */}
            <div className="lg:sticky lg:top-28 text-left pb-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] tracking-[0.16em] uppercase text-stone-600 font-semibold mb-5 font-sans shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C4A]" />
                <span>BUILT FOR CREATOR VELOCITY</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-editorial text-[36px] sm:text-[48px] md:text-[54px] font-normal text-[#1a1a1a] mb-5 leading-[1.12] tracking-[-0.02em]"
              >
                Fits into your workflow. <br />
                <em className="italic font-normal text-[#0D5C4A]">Doesn't change it.</em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed mb-8 max-w-lg"
              >
                You focus completely on your vision and raw ideas. We engineer the packaging, production, and distribution engine that scales your audience.
              </motion.p>

              {/* Stage Counter Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D5C4A]/10 border border-[#0D5C4A]/20 text-xs font-semibold text-[#0D5C4A] mb-8">
                <Sparkles className="w-3.5 h-3.5 text-[#0D5C4A]" />
                <span>6-Stage Autonomous Creator Pipeline</span>
              </div>

              {/* Creator Agency Key Guarantees */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3 pt-6 border-t border-stone-200/80"
              >
                {[
                  'Zero calendar booking or unnecessary sync calls',
                  'Drop files directly from phone, desktop, or cloud',
                  'Guaranteed 48-hour turnarounds on all core formats',
                  'Dedicated creative director assigned to your brand',
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C4A] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Scrolls past while left column remains sticky */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative bg-white/80 hover:bg-white border border-stone-200/80 hover:border-[#0D5C4A]/40 rounded-[26px] p-6 sm:p-7 text-left transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 overflow-hidden"
              >
                {/* Visual Icon Box */}
                <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform duration-300">
                  <span className="absolute top-2 left-2.5 text-[10px] font-mono font-bold text-stone-400">
                    {step.step}
                  </span>
                  {step.icon}
                </div>

                {/* Content Box */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#0D5C4A] bg-[#0D5C4A]/10 px-2.5 py-0.5 rounded-full">
                      {step.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                      {step.metric}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#1a1a1a] mb-1.5 group-hover:text-[#0D5C4A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Action Arrow */}
                <div className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-stone-100 group-hover:bg-[#0D5C4A] items-center justify-center text-stone-400 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
