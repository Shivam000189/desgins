import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Mic, Sparkles } from 'lucide-react';

interface DownloadSectionProps {
  os: 'windows' | 'mac';
  onOpenDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ os, onOpenDownload }) => {
  return (
    <section className="py-20 md:py-28 bg-[#fbf9f5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered CTA Action */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {os === 'windows' ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.03-.49 2.65-1.24z" />
                </svg>
              )}
              <span>Get started on {os === 'windows' ? 'Windows' : 'Mac'}</span>
            </button>
            <p className="text-xs text-stone-500 font-medium">Available on Mac and Windows</p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="pt-8">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">
            PRODUCTS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product 1: Wispr Flow Dictation */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center">
                    <Mic className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-normal text-stone-900 font-editorial">
                  Wispr Flow Dictation
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                  The voice-to-text AI that turns speech into clear, polished writing in every app on your system.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <button
                  onClick={onOpenDownload}
                  className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-purple-600 transition-colors cursor-pointer group"
                >
                  <span>Download free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Product 2: Wispr Flow Notetaker */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#dcfce7] text-[#15803d] flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#fef08a] text-stone-900 border border-amber-300">
                    New
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-stone-900 font-editorial">
                  Wispr Flow Notetaker
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed font-sans">
                  Meeting notes that are accurate enough to action on. Works in all meetings with zero annoying bots.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <button
                  onClick={onOpenDownload}
                  className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-emerald-700 transition-colors cursor-pointer group"
                >
                  <span>Download free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
