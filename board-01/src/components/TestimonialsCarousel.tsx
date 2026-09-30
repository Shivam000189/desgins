import React from 'react';
import { motion } from 'motion/react';
import {
  DaveGilboaAvatar,
  ChelcieTaylorAvatar,
  DeedyDasAvatar,
  StevenBartlettAvatar,
  ChiHuaAvatar,
} from './AvatarSvgs';

export const TestimonialsCarousel: React.FC = () => {
  const cards = [
    {
      colorClass: 'bg-[#F5A623] text-[#1a1a1a]',
      quote:
        "“Wispr Flow's dictation has always felt like magic. With Notetaker, that magic has gone multiplayer with no extra setup, perfectly formatted notes, and summaries that are actually useful.”",
      name: 'Dave Gilboa',
      role: 'CEO of Warby Parker',
      avatar: <DaveGilboaAvatar />,
      photoFirst: false,
    },
    {
      colorClass: 'bg-[#E8654A] text-white',
      quote:
        "“I've connected Wispr Flow Notetaker to the other agents I run, and they do noticeably better work with its transcripts. The accuracy makes a difference beyond the meeting itself.”",
      name: 'Chelcie Taylor',
      role: 'Principal at Notable Capital',
      avatar: <ChelcieTaylorAvatar />,
      photoFirst: true,
    },
    {
      colorClass: 'bg-[#E8A0D0] text-[#1a1a1a]',
      quote:
        '“There are many notetakers in the market, but Wispr Notetaker is the most seamless experience I\'ve seen.”',
      name: 'Deedy Das',
      role: 'Partner at Menlo Ventures',
      avatar: <DeedyDasAvatar />,
      photoFirst: true,
    },
    {
      colorClass: 'bg-[#D4C5F0] text-[#1a1a1a]',
      quote:
        '“Every important thing I do starts with a conversation. I trust Wispr Notetaker to capture it accurately, so I can focus on what comes next.”',
      name: 'Steven Bartlett',
      role: 'Host of The Diary of a CEO',
      avatar: <StevenBartlettAvatar />,
      photoFirst: false,
    },
    {
      colorClass: 'bg-[#5DD4A0] text-[#1a1a1a]',
      quote:
        '“Notetaker has become my constant companion for all meetings. It helps me to focus much more on the meeting content with the confidence that high-quality notes and next steps will be magically produced.”',
      name: 'Chi-Hua Chien',
      role: 'Co-founder & Managing Partner at Goodwater Capital',
      avatar: <ChiHuaAvatar />,
      photoFirst: true,
    },
  ];

  // Duplicate for infinite seamless scroll
  const fullTrack = [...cards, ...cards];

  return (
    <section className="bg-[#1a1a1a] text-white py-24 sm:py-28 px-5 rounded-t-[40px] overflow-hidden">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[3px] uppercase text-[#888] font-semibold mb-4 font-sans">
          EARLY ACCESS, REAL RESULTS
        </div>
        <h2 className="font-editorial text-[36px] sm:text-[46px] md:text-[56px] font-normal text-white leading-[1.15]">
          From the first <br />
          <em className="italic font-normal">people to use it.</em>
        </h2>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing">
        <div className="animate-marquee flex gap-7 w-max">
          {fullTrack.map((c, i) => (
            <div
              key={i}
              className={`shrink-0 w-[360px] sm:w-[420px] rounded-[24px] p-7 flex gap-5 items-center shadow-lg transition-transform hover:scale-[1.02] ${c.colorClass}`}
            >
              {c.photoFirst ? (
                <>
                  <div className="w-[120px] sm:w-[150px] h-[170px] sm:h-[190px] rounded-2xl overflow-hidden shrink-0 shadow-xs border border-black/10">
                    {c.avatar}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="font-editorial text-base sm:text-lg leading-[1.45] mb-4">
                      {c.quote}
                    </p>
                    <div>
                      <div className="text-sm font-bold font-sans">{c.name}</div>
                      <div className="text-xs opacity-75 font-sans">{c.role}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="font-editorial text-base sm:text-lg leading-[1.45] mb-4">
                      {c.quote}
                    </p>
                    <div>
                      <div className="text-sm font-bold font-sans">{c.name}</div>
                      <div className="text-xs opacity-75 font-sans">{c.role}</div>
                    </div>
                  </div>
                  <div className="w-[120px] sm:w-[150px] h-[170px] sm:h-[190px] rounded-2xl overflow-hidden shrink-0 shadow-xs border border-black/10">
                    {c.avatar}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
