import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const FeatureTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'ask' | 'miss' | 'summary'>('details');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const tabData = {
    details: {
      title: 'Get the details right.',
      italicWord: 'details',
      text: 'From uncommon names to industry jargon, Wispr uses your dictionary and calendar to help capture the meeting details that matter in your meeting transcript and summary.',
    },
    ask: {
      title: 'Stop digging. Just ask.',
      italicWord: 'Just ask.',
      text: 'Notetaker searches across your prior meeting notes and the web for the answer, then links you to the source.',
    },
    miss: {
      title: 'Zoned out? Catch up in seconds.',
      italicWord: 'Catch up',
      text: 'No more sorry, can you repeat that? Tap "What did I miss?" and Notetaker gives you a summary of the last few minutes. You\'re caught up before anyone notices.',
    },
    summary: {
      title: "Get a summary you'll actually read.",
      italicWord: 'actually read.',
      text: 'Notetaker pulls out timelines, decisions, and next steps, then organizes everything by topic so you can find what matters.',
    },
  };

  const handleAsk = (q: string, a: string) => {
    setSearchQuery(q);
    setSearchResult(a);
  };

  return (
    <section className="py-16 md:py-28 px-5 max-w-[1200px] mx-auto bg-[#FDFBF5]">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Tabs */}
        <div className="w-full md:w-[200px] shrink-0 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {(['details', 'ask', 'miss', 'summary'] as const).map((tabKey) => {
            const labels: Record<string, string> = {
              details: 'The details',
              ask: 'Ask anything',
              miss: 'What did I miss?',
              summary: 'Summary',
            };
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => {
                  setActiveTab(tabKey);
                  setSearchResult(null);
                }}
                className={`py-3 px-4 text-left font-editorial text-base cursor-pointer transition-all border-l-3 whitespace-nowrap md:whitespace-normal ${
                  isActive
                    ? 'border-[#E8654A] text-[#1a1a1a] font-semibold bg-stone-100/50 md:bg-transparent'
                    : 'border-transparent text-[#999] hover:text-[#1a1a1a]'
                }`}
              >
                {labels[tabKey]}
              </button>
            );
          })}
        </div>

        {/* Center Visual + Right Description */}
        <div className="flex-1 flex flex-col lg:flex-row gap-10 items-center w-full">
          {/* Visual Container */}
          <div className="flex-1 w-full min-h-[440px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {/* PANEL 1: THE DETAILS */}
              {activeTab === 'details' && (
                <motion.div
                  key="panel-details"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[420px] bg-[#e8e5dd] rounded-[20px] p-7 relative shadow-sm"
                >
                  {/* Floating Participant Badges matching reference */}
                  <div className="absolute -top-4 right-10 w-14 h-14 rounded-xl border-3 border-white shadow-md bg-gradient-to-br from-[#f0d0a0] to-[#e0b080] flex items-center justify-center text-xs font-bold text-[#8B6914] z-10">
                    Mike
                  </div>
                  <div className="absolute top-14 -right-3 w-14 h-14 rounded-xl border-3 border-white shadow-md bg-gradient-to-br from-[#a0d0f0] to-[#80b0d0] flex items-center justify-center text-[11px] font-bold text-[#1a5a7a] z-10">
                    Stephen
                  </div>
                  <div className="absolute bottom-10 -left-3 w-14 h-14 rounded-xl border-3 border-white shadow-md bg-gradient-to-br from-[#d0a0f0] to-[#b080d0] flex items-center justify-center text-[11px] font-bold text-[#5a1a7a] z-10">
                    Nathalie
                  </div>

                  {/* Transcript bubbles */}
                  <div className="space-y-3 relative z-0 pr-6 pl-2">
                    <div>
                      <div className="text-xs font-semibold text-[#c97a2a] mb-1">Nathalie</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        Stephen, how's the process review going?
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#2a7ac9] mb-1">Stephen</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        Too many approvals along the way.
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#c97a2a] mb-1">Mike</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        That's always been an issue.
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#2a7ac9] mb-1">Nathalie</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        Especially with design.
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#c97a2a] mb-1">Stephen</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        I'd give Raphael carte blanche.
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#2a7ac9] mb-1">Mike</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        What about all the status meetings?
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#c97a2a] mb-1">Stephen</div>
                      <div className="bg-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#1a1a1a] shadow-2xs inline-block">
                        Will you be ready to present the Miro board on Monday?
                      </div>
                    </div>
                  </div>

                  {/* Recording indicator */}
                  <div className="flex items-center justify-center gap-2 mt-6 pt-2">
                    <div className="flex items-end gap-1 h-5">
                      <span className="w-1 bg-[#0d5c4a] rounded-sm h-2 animate-bar-1" />
                      <span className="w-1 bg-[#0d5c4a] rounded-sm h-4 animate-bar-2" />
                      <span className="w-1 bg-[#0d5c4a] rounded-sm h-3 animate-bar-3" />
                      <span className="w-1 bg-[#0d5c4a] rounded-sm h-5 animate-bar-4" />
                    </div>
                    <span className="w-3 h-3 bg-[#0d5c4a] rounded-full animate-rec-dot" />
                  </div>
                </motion.div>
              )}

              {/* PANEL 2: ASK ANYTHING */}
              {activeTab === 'ask' && (
                <motion.div
                  key="panel-ask"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[420px] bg-[#e8e5dd] rounded-[20px] p-8 text-center shadow-sm space-y-5"
                >
                  <div className="text-5xl mb-2">🔍</div>
                  <h4 className="font-editorial text-2xl font-normal text-[#1a1a1a]">
                    Ask anything about <br />
                    <em className="italic font-normal">your meetings</em>
                  </h4>

                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ask anything..."
                      className="w-full bg-white border border-[#ddd] rounded-full px-6 py-3.5 text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#0d5c4a]"
                    />
                  </div>

                  {/* Clickable Quick Questions */}
                  <div className="pt-2 text-left space-y-2">
                    <div className="text-[11px] font-semibold text-[#888] uppercase tracking-wider">
                      Suggested prompts:
                    </div>
                    <button
                      onClick={() =>
                        handleAsk(
                          'What was decided about the budget?',
                          'Cut paid ad spend by 20% based on last quarter results; reallocate to editorial partners.'
                        )
                      }
                      className="w-full text-left p-2.5 bg-white/70 hover:bg-white rounded-xl text-xs text-[#1a1a1a] transition-colors cursor-pointer border border-[#ddd]"
                    >
                      “What was decided about the budget?”
                    </button>
                    <button
                      onClick={() =>
                        handleAsk(
                          'When is the Miro board presentation?',
                          'Stephen is scheduled to present the Miro board on Monday after syncing with Siobhan.'
                        )
                      }
                      className="w-full text-left p-2.5 bg-white/70 hover:bg-white rounded-xl text-xs text-[#1a1a1a] transition-colors cursor-pointer border border-[#ddd]"
                    >
                      “When is the Miro board presentation?”
                    </button>
                  </div>

                  {searchResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-white rounded-xl text-xs text-[#1a1a1a] text-left border border-emerald-300 shadow-2xs"
                    >
                      <strong className="text-[#0d5c4a] block mb-1">Answer from Notetaker:</strong>
                      {searchResult}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* PANEL 3: WHAT DID I MISS? */}
              {activeTab === 'miss' && (
                <motion.div
                  key="panel-miss"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[420px] rounded-[20px] p-8 text-center shadow-lg text-white"
                  style={{ background: 'linear-gradient(135deg,#1a2a3a,#2a1a0a)' }}
                >
                  <div className="text-sm text-[#aaa] mb-5 font-sans font-medium">What did I miss?</div>
                  <div className="text-base leading-[1.8] text-left space-y-3">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <strong className="text-[#f0a050] text-sm block">Budget</strong>
                      <span className="text-xs text-[#ccc]">
                        Cut paid ad spend by 20% and reallocate. Last quarter didn't justify what we're spending.
                      </span>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl">
                      <strong className="text-[#f0a050] text-sm block">Loyalty Offer</strong>
                      <span className="text-xs text-[#ccc]">
                        Testing the loyalty offer next week.
                      </span>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl">
                      <strong className="text-[#f0a050] text-sm block">Design Brief</strong>
                      <span className="text-xs text-[#ccc]">
                        Design brief by end of day.
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PANEL 4: SUMMARY */}
              {activeTab === 'summary' && (
                <motion.div
                  key="panel-summary"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[420px] bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e0ddd6]"
                >
                  <h4 className="text-lg font-bold text-[#1a1a1a] mb-1 font-sans">
                    Q3 Campaign Planning
                  </h4>

                  <div className="flex items-center gap-3 my-3 text-xs text-[#888]">
                    <span>My thoughts</span>
                    <span>Transcript</span>
                    <span className="text-[#1a1a1a] font-semibold">✦ Summary</span>
                    <span>⋯</span>
                    <span>Share</span>
                  </div>

                  <div className="text-xs sm:text-sm leading-relaxed text-[#555] mb-4 space-y-1">
                    <p>• Cut paid ad spend by 20% based on last quarter's results</p>
                    <p>• Reallocate with editorial partners marketing next week</p>
                    <p>• Update email and SMS results in marketing tracker</p>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <h5 className="text-xs font-bold text-[#1a1a1a] mb-2 font-sans uppercase tracking-wider">
                      Next Steps
                    </h5>
                    <ul className="text-xs text-[#555] space-y-1.5 list-none pl-4 relative">
                      <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-[#1a1a1a]">
                        Emily to send Tom's the design brief by end of day
                      </li>
                      <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-[#1a1a1a]">
                        Stephen to update the budget plan with the 20% reallocation
                      </li>
                      <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-[#1a1a1a]">
                        Tomás to deliver Q3 campaign assets by Friday
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Description */}
          <div className="w-full lg:w-[380px] shrink-0 text-left">
            <h3 className="font-editorial text-3xl font-normal mb-4 text-[#1a1a1a]">
              {activeTab === 'details' && (
                <>Get the <em className="italic font-normal">details</em> right.</>
              )}
              {activeTab === 'ask' && (
                <>Stop digging. <em className="italic font-normal">Just ask.</em></>
              )}
              {activeTab === 'miss' && (
                <>Zoned out? <em className="italic font-normal">Catch up</em> in seconds.</>
              )}
              {activeTab === 'summary' && (
                <>Get a summary you'll <em className="italic font-normal">actually read.</em></>
              )}
            </h3>
            <p className="text-base leading-[1.7] text-[#555] font-sans">
              {tabData[activeTab].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
