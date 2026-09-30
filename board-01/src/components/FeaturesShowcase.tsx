import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Check, Share2, CornerDownRight, Mic, Video, Volume2 } from 'lucide-react';
import { NatashaAvatar, StephenAvatar } from './AvatarSvgs';

export const FeaturesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'ask' | 'missed' | 'summary'>('details');

  // Interactive states for Tab 2 ("Ask anything")
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);

  // Interactive state for Tab 3 ("What did I miss?")
  const [showRecap, setShowRecap] = useState(false);

  // Interactive state for Tab 4 ("Summary")
  const [summaryView, setSummaryView] = useState<'thoughts' | 'transcript' | 'summary'>('summary');

  const tabs = [
    { id: 'details', label: 'The details' },
    { id: 'ask', label: 'Ask anything' },
    { id: 'missed', label: 'What did I miss?' },
    { id: 'summary', label: 'Summary' },
  ] as const;

  const handleAsk = (sampleQuestion: string, sampleAnswer: string) => {
    setQuery(sampleQuestion);
    setAnswer(sampleAnswer);
  };

  return (
    <section className="py-24 md:py-32 bg-[#fbf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1c1917] font-editorial leading-[1.12]">
            So you can answer the questions, write the follow-up, and keep things moving.
          </h2>
        </motion.div>

        {/* Tabbed Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Vertical Tab Selector (3 cols) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'missed') setShowRecap(false);
                  }}
                  className={`text-left px-5 py-3 rounded-2xl transition-all duration-200 cursor-pointer whitespace-nowrap lg:whitespace-normal font-sans text-sm font-semibold flex items-center justify-between group ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tabArrow"
                      className="hidden lg:block w-1.5 h-1.5 rounded-full bg-emerald-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Central Interactive Screen (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 min-h-[460px] flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {/* TAB 1: THE DETAILS */}
              {activeTab === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Speaker Heads Overlay */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                          <NatashaAvatar />
                        </div>
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                          <StephenAvatar />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                          <span>Natasha & Stephen</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <p className="text-[11px] text-stone-500">Weekly Product & Design Alignment</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                      HD AUDIO
                    </span>
                  </div>

                  {/* Transcript thread */}
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-stone-600 shrink-0 mt-0.5">Natasha:</span>
                      <p className="bg-stone-50 p-2.5 rounded-xl text-stone-800 border border-stone-100">
                        What’s slowing us down right now?
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-bold text-stone-600 shrink-0 mt-0.5">Stephen:</span>
                      <p className="bg-stone-50 p-2.5 rounded-xl text-stone-800 border border-stone-100">
                        Too many approvals along the way.
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-bold text-stone-600 shrink-0 mt-0.5">Natasha:</span>
                      <p className="bg-stone-50 p-2.5 rounded-xl text-stone-800 border border-stone-100">
                        That’s always been an issue. Especially with design.
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-bold text-emerald-700 shrink-0 mt-0.5">Stephen:</span>
                      <p className="bg-emerald-50/80 p-2.5 rounded-xl text-stone-900 border border-emerald-200">
                        I’d give Raphael <strong className="bg-amber-200 px-1 py-0.5 rounded text-stone-900 font-semibold">carte blanche</strong>.
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-bold text-stone-600 shrink-0 mt-0.5">Stephen:</span>
                      <p className="bg-stone-50 p-2.5 rounded-xl text-stone-800 border border-stone-100">
                        What about all the status meetings?
                      </p>
                    </div>
                  </div>

                  {/* Bottom Audio Status Bar */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                    <div className="flex items-center gap-1.5">
                      <Mic className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Wispr dictionary active · 0 errors detected</span>
                    </div>
                    <span>44.1 kHz lossless</span>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ASK ANYTHING */}
              {activeTab === 'ask' && (
                <motion.div
                  key="ask"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  {/* Retro calendar / note illustration card */}
                  <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#e8dfcf] flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center shrink-0 text-amber-800">
                      <Search className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 font-sans">
                        Ask anything about your meetings
                      </h4>
                      <p className="text-xs text-stone-600">
                        Search decisions, deadlines, people commitments, and rationale.
                      </p>
                    </div>
                  </div>

                  {/* Search prompt input */}
                  <div className="relative">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask anything... e.g. What did Sarah commit to for Friday?"
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  </div>

                  {/* Suggested Quick Prompts */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                      Try asking:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() =>
                          handleAsk(
                            'What was the budget approved for Q1?',
                            'Dave approved a 20% budget reallocation from digital experiments during the 10:04 AM product sync.'
                          )
                        }
                        className="px-3 py-1.5 text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-left transition-colors cursor-pointer"
                      >
                        “What was the budget approved for Q1?”
                      </button>
                      <button
                        onClick={() =>
                          handleAsk(
                            'When will Raphael deliver design specs?',
                            'Raphael was given carte blanche; final specs are due Tuesday after running it by Sridhar.'
                          )
                        }
                        className="px-3 py-1.5 text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-left transition-colors cursor-pointer"
                      >
                        “When will Raphael deliver design specs?”
                      </button>
                    </div>
                  </div>

                  {/* Answer display with source citation */}
                  {answer && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-stone-800 space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-purple-700 font-bold text-[11px]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Answer found in 1 meeting note</span>
                      </div>
                      <p className="font-medium text-stone-900">{answer}</p>
                      <div className="text-[10px] text-purple-600 underline cursor-pointer">
                        Source: Marketing & Product Sync (10:04 AM)
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* TAB 3: WHAT DID I MISS? */}
              {activeTab === 'missed' && (
                <motion.div
                  key="missed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <div className="flex items-center justify-between text-xs text-amber-800 font-medium mb-2">
                      <span className="flex items-center gap-1.5">
                        <Volume2 className="w-4 h-4 animate-pulse text-amber-600" />
                        Active conversation (last 3 minutes)
                      </span>
                      <span className="text-[11px] text-amber-700 font-mono">10:14 AM</span>
                    </div>

                    <div className="space-y-1 text-xs text-stone-600 italic">
                      <p>“...spend up to 20% and reallocate. Last I'm justify what we're spending.”</p>
                      <p>“...out testing the loyalty offer next week?”</p>
                      <p>“Get it to the Design team? Let's talk about it.”</p>
                    </div>
                  </div>

                  {/* The interactive "What did I miss?" button */}
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setShowRecap(!showRecap)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{showRecap ? 'Hide catch-up recap' : 'What did I miss?'}</span>
                    </button>
                    <p className="text-[11px] text-stone-400 mt-2">
                      Tap anytime you zone out or step away from your desk.
                    </p>
                  </div>

                  {/* Instant catch-up card */}
                  <AnimatePresence>
                    {showRecap && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="p-4 rounded-2xl bg-white border-2 border-purple-300 shadow-lg space-y-2 text-left"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-purple-900 border-b border-purple-100 pb-2">
                          <span>Caught up in 3 seconds</span>
                          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Ready to speak
                          </span>
                        </div>
                        <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4 font-sans">
                          <li>Dave confirmed 20% budget reallocation from digital experiments.</li>
                          <li>Loyalty offer testing was postponed to next Thursday.</li>
                          <li>Sarah needs to sync with Design team before 3 PM today.</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* TAB 4: SUMMARY */}
              {activeTab === 'summary' && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Meeting document header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <div>
                      <h4 className="text-base font-bold text-stone-900 font-editorial">
                        Q1 Campaign Planning
                      </h4>
                      <p className="text-[11px] text-stone-500">October 14 · 42 minutes · 4 attendees</p>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sub-tabs: My thoughts | Transcript | Summary */}
                  <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                    {(['thoughts', 'transcript', 'summary'] as const).map((view) => (
                      <button
                        key={view}
                        onClick={() => setSummaryView(view)}
                        className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors capitalize cursor-pointer ${
                          summaryView === view
                            ? 'bg-stone-900 text-white'
                            : 'text-stone-500 hover:text-stone-900'
                        }`}
                      >
                        {view === 'thoughts' ? 'My thoughts' : view}
                      </button>
                    ))}
                  </div>

                  {/* Summary content */}
                  {summaryView === 'summary' && (
                    <div className="space-y-3 text-xs text-stone-700">
                      <div>
                        <span className="font-bold text-[11px] text-stone-900 uppercase tracking-wide">
                          Executive Summary
                        </span>
                        <p className="mt-1 text-stone-600 leading-relaxed">
                          Budget was increased by 20% based on last quarter’s test results; team will reallocate existing spend across top channels.
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-[11px] text-emerald-800 uppercase tracking-wide">
                          Decisions
                        </span>
                        <ul className="mt-1 list-disc pl-4 space-y-1 text-stone-600">
                          <li>Expand TikTok ad pilot with $15K initial test budget.</li>
                          <li>Give Raphael carte blanche on campaign direction.</li>
                        </ul>
                      </div>

                      <div>
                        <span className="font-bold text-[11px] text-purple-800 uppercase tracking-wide">
                          Next Steps & Owners
                        </span>
                        <ul className="mt-1 list-disc pl-4 space-y-1 text-stone-600">
                          <li><strong>Emmert:</strong> Send priority accounts list to Yao by tomorrow AM.</li>
                          <li><strong>Josh:</strong> Ensure Tableau performance dashboard is updated.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {summaryView === 'transcript' && (
                    <div className="text-xs text-stone-600 space-y-2 max-h-48 overflow-y-auto pr-2">
                      <p><strong>10:04 AM Josh:</strong> Make sure the Tableau dashboard is ready.</p>
                      <p><strong>10:04 AM Emmert:</strong> 25 over the course of three days. We need Sales targeting priority accounts ASAP.</p>
                      <p><strong>10:05 AM Sridhar:</strong> Who's handling the list?</p>
                      <p><strong>10:05 AM Emmert:</strong> I'll send it to Yao tomorrow morning.</p>
                    </div>
                  )}

                  {summaryView === 'thoughts' && (
                    <div className="text-xs text-stone-600 italic p-3 bg-stone-50 rounded-xl">
                      “Check in with Sridhar about the final budget approval before Friday’s client review.”
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Contextual Copy (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === 'details' && (
                <motion.div
                  key="copy-details"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-editorial leading-tight">
                    Get the details right.
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                    From uncommon names to industry jargon, Wispr uses your dictionary and calendar to help capture the meeting details that matter in the meeting transcript and summary.
                  </p>
                </motion.div>
              )}

              {activeTab === 'ask' && (
                <motion.div
                  key="copy-ask"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-editorial leading-tight">
                    Stop digging. Just ask.
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                    Notetaker searches across your prior meeting notes and the web for the answer, then links you to the source.
                  </p>
                </motion.div>
              )}

              {activeTab === 'missed' && (
                <motion.div
                  key="copy-missed"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-editorial leading-tight">
                    Zoned out? Catch up in seconds.
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                    No more “sorry, can you repeat that?” Tap “What did I miss?” and Notetaker gives you a summary of the last few minutes. You’re caught up before anyone notices.
                  </p>
                </motion.div>
              )}

              {activeTab === 'summary' && (
                <motion.div
                  key="copy-summary"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-editorial leading-tight">
                    Get a summary you'll actually read.
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                    Notetaker pulls out timelines, decisions, and next steps, then organizes everything by topic so you can find what matters.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
