import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, RefreshCw, FileText, ArrowUpRight } from 'lucide-react';

export const MigrationSection: React.FC = () => {
  const [importing, setImporting] = useState(false);
  const [imported, setImported] = useState(false);

  const sources = [
    { name: 'Granola', count: '142 meetings', color: 'bg-amber-100 text-amber-900 border-amber-300' },
    { name: 'Otter.ai', count: '286 meetings', color: 'bg-blue-100 text-blue-900 border-blue-300' },
    { name: 'Fathom', count: '94 meetings', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    { name: 'Fireflies', count: '67 meetings', color: 'bg-purple-100 text-purple-900 border-purple-300' },
  ];

  const handleStartImport = () => {
    setImporting(true);
    setTimeout(() => {
      setImporting(false);
      setImported(true);
    }, 1800);
  };

  return (
    <section className="py-20 md:py-28 bg-[#fbf9f5] border-t border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
              MIGRATION READY
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal text-stone-900 font-editorial leading-tight">
              Switch without losing a thing.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed font-sans max-w-lg">
              Import your entire meeting history in a few easy steps. You’ll see the source, meeting date, summary, and transcript preserved in Wispr.
            </p>

            <div className="pt-2">
              <button
                onClick={handleStartImport}
                disabled={importing || imported}
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-[#7c3aed] transition-colors cursor-pointer group"
              >
                <span>{imported ? 'Migration completed!' : importing ? 'Importing meeting archive...' : 'Get started'}</span>
                {importing ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-[#7c3aed]" />
                ) : imported ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Right Interactive Migration Graphic */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#f2ede4] border border-[#ded8cb] shadow-sm">
              {/* Sticky note "MOVE" matching frame 00:11 */}
              <motion.div
                initial={{ rotate: -6 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="absolute -top-4 -right-2 sm:right-6 bg-[#fef08a] border border-amber-300 shadow-md px-4 py-2 rounded-lg font-mono text-xs font-bold text-stone-900 z-20 flex items-center gap-1.5"
              >
                <span>MOVE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>

              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Supported Archives</span>
                <span>Instant Migration</span>
              </div>

              {/* Grid of source cards */}
              <div className="grid grid-cols-2 gap-3">
                {sources.map((src, i) => (
                  <motion.div
                    key={src.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-sm transition-shadow flex items-start justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">{src.name}</span>
                      <span className="text-[11px] text-stone-500">{src.count}</span>
                    </div>
                    {imported ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <FileText className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Status bar */}
              <div className="mt-4 p-3 bg-white/70 rounded-xl border border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-600">Total historical meetings found:</span>
                <span className="font-bold text-stone-900 font-mono">589 meetings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
