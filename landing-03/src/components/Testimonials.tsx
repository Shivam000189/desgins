import React, { useState } from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  kicker: string;
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  kicker,
  title,
  subtitle,
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Header with Title and Nav Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 block">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 mt-2">
            {subtitle}
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* Testimonials Carousel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`bg-[#0c0c0e] border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 min-h-[300px] ${
              idx === currentIndex
                ? 'border-orange-500/40 ring-1 ring-orange-500/20'
                : 'border-white/5 hover:border-white/15'
            }`}
          >
            {/* Top item: Company or Quote mark */}
            <div className="mb-6 flex items-center justify-between">
              {item.logoText ? (
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="text-xs font-bold text-white tracking-tight">{item.logoText}</span>
                </div>
              ) : (
                <span className="text-2xl font-serif text-neutral-500 font-bold leading-none">“</span>
              )}
              <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal my-auto">
              "{item.quote}"
            </blockquote>

            {/* Author lockup */}
            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="font-semibold text-xs sm:text-sm text-white tracking-tight">
                {item.author}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                {item.role ? `${item.role} · ` : ''}{item.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
