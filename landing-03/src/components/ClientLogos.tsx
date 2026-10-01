import React from 'react';

export const ClientLogos: React.FC = () => {
  const logos = [
    {
      name: 'SELENA',
      render: () => (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          <span className="font-serif tracking-widest text-sm md:text-base font-bold text-neutral-300">SELENA</span>
        </div>
      ),
    },
    {
      name: 'KS ARCHITECTES',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-neutral-300 grid grid-cols-2 gap-0.5 p-0.5">
            <div className="bg-neutral-300" />
            <div className="bg-neutral-300" />
          </div>
          <span className="font-sans tracking-wider text-xs md:text-sm font-extrabold text-neutral-300">KS ARCHITECTES</span>
        </div>
      ),
    },
    {
      name: 'ROBUMI',
      render: () => (
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <span className="font-mono tracking-tight text-xs md:text-sm font-black text-neutral-300">ROBUMI</span>
        </div>
      ),
    },
    {
      name: 'EPACA',
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="font-sans tracking-widest text-xs md:text-sm font-black text-neutral-200">EPACA</span>
          <span className="text-[9px] text-neutral-400 font-serif">★</span>
        </div>
      ),
    },
    {
      name: 'VEGA',
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="font-serif tracking-widest text-sm md:text-base font-bold text-neutral-300">VEGA</span>
          <span className="text-[10px] text-neutral-400">⚖</span>
        </div>
      ),
    },
    {
      name: 'Holea',
      render: () => (
        <div className="flex items-center">
          <span className="font-sans tracking-tight text-sm md:text-base font-black text-neutral-300">Holea</span>
        </div>
      ),
    },
    {
      name: 'OrangeBleu',
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <span className="font-sans text-xs md:text-sm font-bold text-neutral-300 tracking-tight">OrangeBleu</span>
        </div>
      ),
    },
    {
      name: 'C-Carré',
      render: () => (
        <div className="flex items-center gap-1">
          <span className="text-xs md:text-sm font-black text-neutral-300">C-Carré</span>
          <span className="text-[9px] text-orange-400 font-bold">PEB</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-[#08080a]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
              title={logo.name}
            >
              {logo.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
