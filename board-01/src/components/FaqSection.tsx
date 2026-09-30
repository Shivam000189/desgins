import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqItems = [
    {
      q: 'How accurate are the transcripts?',
      a: (
        <>
          Notetaker was built by the team behind Flow, where getting words right is what we do.
          <br /><br />
          Most meeting tools transcribe your conversation cold. Notetaker starts with your context: the people on your calendar, the names and jargon in your personal dictionary, and information from connected tools like Gmail and Slack.
          <br /><br />
          That means names like "Aditya" are spelled correctly, product names stay intact, and every transcript gets a second pass from a more powerful model to catch mistakes.
          <br /><br />
          <span className="text-[#999] text-xs sm:text-sm">
            The best way to see the difference: record one meeting with Notetaker alongside your current tool.
          </span>
        </>
      ),
    },
    {
      q: 'How does Notetaker know who said what?',
      a: 'Notetaker uses speaker diarization combined with your calendar and contact information to identify who is speaking. It cross-references voice patterns with known participants to accurately attribute each statement.',
    },
    {
      q: 'What apps and tools does Notetaker work with?',
      a: 'Notetaker works with Google Meet, Microsoft Teams, Zoom, Slack Huddles, and any other meeting platform. It also works for in-person meetings when used with your device microphone.',
    },
    {
      q: 'Do I need to get user consent?',
      a: 'Consent requirements vary by jurisdiction. Notetaker provides optional consent acknowledgment features for organizations that require them. Check your local regulations and company policies.',
    },
    {
      q: 'Can I use my meeting notes in Claude, ChatGPT, or other AI tools?',
      a: "Yes! You can export your meeting notes and use them with Claude, ChatGPT, or any other AI tool. Notetaker's accurate transcripts make AI-assisted workflows much more effective.",
    },
    {
      q: 'Does it work for in-person meetings?',
      a: "Absolutely. Notetaker works great for in-person meetings. Just open the app on your laptop or phone and it will capture the conversation using your device's microphone.",
    },
  ];

  return (
    <section className="py-24 sm:py-28 px-5 text-center bg-[#FDFBF5]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-editorial text-[36px] sm:text-[46px] md:text-[56px] font-normal text-[#1a1a1a] mb-14 leading-tight">
          You might <em className="italic font-normal">be wondering.</em>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 text-left items-start">
          {/* Questions column */}
          <div className="w-full md:w-[45%] space-y-1.5">
            {faqItems.map((item, index) => {
              const isActive = activeFaq === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFaq(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-sm sm:text-[15px] font-medium transition-all cursor-pointer font-sans ${
                    isActive
                      ? 'bg-[#0d5c4a] text-white shadow-xs'
                      : 'text-[#1a1a1a] hover:bg-stone-200/50'
                  }`}
                >
                  {item.q}
                </button>
              );
            })}
          </div>

          {/* Answer column */}
          <div className="w-full md:w-[55%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaq}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-[#f0ede6] rounded-2xl p-7 sm:p-8 text-sm sm:text-[15px] leading-[1.75] text-[#555] font-sans min-h-[240px] border border-[#e5e0d4]"
              >
                {faqItems[activeFaq].a}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
