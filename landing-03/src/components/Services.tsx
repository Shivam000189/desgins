import React, { useState } from 'react';
import { Service } from '../types';
import { ServiceGlassIcon } from './ServiceGlassIcon';

interface ServicesProps {
  kicker: string;
  title: string;
  linkText: string;
  items: Service[];
  onOpenServiceModal?: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({
  kicker,
  title,
  linkText,
  items,
  onOpenServiceModal,
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    if (onOpenServiceModal) {
      onOpenServiceModal(service);
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 block">
          {kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
      </div>

      {/* 2x2 Bento / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {items.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service)}
            className="group relative bg-[#0d0d0f] hover:bg-[#121215] border border-white/5 hover:border-orange-500/30 rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden min-h-[290px]"
          >
            {/* Top row: Number */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-neutral-400">
                {service.number}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-500 text-xs font-semibold">
                Explore ›
              </span>
            </div>

            {/* Bottom row: Text on left + 3D Glass Icon on right */}
            <div className="flex items-end justify-between gap-6 mt-12">
              <div className="max-w-[260px] z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* 3D Glass Sculpture Asset */}
              <div className="shrink-0 flex items-center justify-center">
                <ServiceGlassIcon type={service.iconType} size={110} />
              </div>
            </div>

            {/* Subtle bottom-right amber corner glow */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-orange-600/10 rounded-full blur-2xl group-hover:bg-orange-600/20 transition-all pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Centered link below grid */}
      <div className="mt-14 text-center">
        <button
          onClick={() => handleCardClick(items[0])}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer group"
        >
          <span>{linkText}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
        </button>
      </div>

      {/* Service Details Modal if clicked */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#111114] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg cursor-pointer"
              aria-label="Close service modal"
            >
              ✕
            </button>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-orange-500 font-bold">{selectedService.number}</span>
              <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>
            <div className="border-t border-white/10 pt-5">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Deliverables & Scope
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="bg-white text-black font-semibold text-xs px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
