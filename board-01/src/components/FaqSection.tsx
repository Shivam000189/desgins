import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Sparkles, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqItems = [
    {
      q: 'How does the creative handoff actually work?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            100% asynchronous and designed to protect your deep creative flow.
          </p>
          You drop your raw A-roll, phone clips, camera cards, or voice memos into your private workspace (Dropbox, Google Drive, or Frame.io).
          <br /><br />
          Our dedicated creative pod immediately tags the footage, scripts compelling narrative hooks, handles color and sound design, renders custom 3D thumbnails, and prepares multi-platform distribution assets.
          <br /><br />
          <span className="text-[#0d5c4a] font-medium text-xs sm:text-sm bg-[#0d5c4a]/10 px-2.5 py-1 rounded-md inline-block">
            ✦ Zero calendar bookings, zero unnecessary check-in calls.
          </span>
        </>
      ),
    },
    {
      q: 'How do you preserve my unique voice and editorial style?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            We build a bespoke "Creator Bible" during onboarding.
          </p>
          Before touching your footage, our team dissects your top-performing videos, tone of voice, pacing preferences, color grading, sound design cues, and typography.
          <br /><br />
          Your account is spearheaded by a dedicated Creative Director who studies your cadence so your audience feels 100% authenticity with zero disconnect.
        </>
      ),
    },
    {
      q: 'What platforms and content formats do you produce?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            End-to-end multi-platform syndication from a single recording.
          </p>
          We produce YouTube long-form (documentaries, podcasts, video essays), high-retention short-form (TikTok, YouTube Shorts, Instagram Reels), viral X/LinkedIn carousels, and companion newsletters (Substack, Beehiiv).
          <br /><br />
          One 45-minute recording turns into 15–20 high-converting distribution assets across every major algorithmic feed.
        </>
      ),
    },
    {
      q: 'What is your turnaround time for edits and packaging?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            48 hours for short-form; 3–4 business days for long-form.
          </p>
          Short-form clips, carousels, and thumbnail variations are delivered within 48 hours. Comprehensive YouTube documentary or podcast productions are turned around in 3–4 business days.
          <br /><br />
          Fast-track 24-hour sprints are also available for timely cultural trends or breaking news commentary.
        </>
      ),
    },
    {
      q: 'Do you handle thumbnail packaging and title A/B testing?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            Packaging is half the battle—we engineer it scientifically.
          </p>
          For every YouTube video, our 3D design team creates 3–4 distinct thumbnail concepts with psychological hook variations.
          <br /><br />
          We set up and monitor native A/B testing inside YouTube Studio until we identify the variant with the highest click-through rate (CTR) and average watch duration.
        </>
      ),
    },
    {
      q: 'Can I scale up, pause, or cancel whenever I want?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            Flexible monthly creator partnerships with zero lock-in.
          </p>
          You can pause your plan during filming breaks or vacations, scale up your capacity during product launches or podcast seasons, or adjust deliverables as your channel evolves.
        </>
      ),
    },
    {
      q: 'How do you handle brand sponsorships and monetization?',
      a: (
        <>
          <p className="font-semibold text-[#1a1a1a] mb-3 text-base">
            Seamless sponsor integrations that protect audience retention.
          </p>
          We craft contextual sponsor reads and motion overlays that feel natural instead of intrusive, preventing viewer drop-off.
          <br /><br />
          We also help creators build media kits, negotiate higher sponsorship CPMs, and launch high-margin digital products, communities, and newsletters.
        </>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-5 text-center bg-[#FDFBF5] border-t border-[#e0ddd6]/70 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-[11px] tracking-[0.16em] uppercase text-stone-600 font-semibold mb-4 font-sans shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#0d5c4a]" />
            <span>CLEAR ANSWERS FOR CREATORS</span>
          </div>

          <h2 className="font-editorial text-[36px] sm:text-[46px] md:text-[56px] font-normal text-[#1a1a1a] leading-tight mb-3">
            You might <em className="italic font-normal text-[#0d5c4a]">be wondering.</em>
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Everything you need to know about partnering with our creative studio, production cycles, and creative ownership.
          </p>
        </div>

        {/* Interactive 2-Column FAQ Layout */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 text-left items-start">
          {/* Questions column */}
          <div className="w-full md:w-[45%] space-y-2">
            {faqItems.map((item, index) => {
              const isActive = activeFaq === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFaq(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-sm sm:text-[15px] font-medium transition-all duration-200 cursor-pointer font-sans flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#0d5c4a] text-white shadow-md'
                      : 'bg-white/70 hover:bg-white text-[#1a1a1a] border border-stone-200/70 hover:border-stone-300'
                  }`}
                >
                  <span className="pr-3 leading-snug">{item.q}</span>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-emerald-300 translate-x-0.5' : 'text-stone-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Answer column */}
          <div className="w-full md:w-[55%] md:sticky md:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaq}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-7 sm:p-9 text-sm sm:text-[15px] leading-[1.75] text-[#444] font-sans min-h-[300px] border border-stone-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#0d5c4a] font-bold mb-3">
                    Question 0{activeFaq + 1}
                  </div>
                  <div>{faqItems[activeFaq].a}</div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-stone-500 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#0d5c4a]" />
                    <span>Dedicated Creator Studio SLA</span>
                  </span>
                  <span>100% Creator IP Ownership</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
