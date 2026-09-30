import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Download, Monitor, Laptop, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  os: 'windows' | 'mac';
  setOs: (os: 'windows' | 'mac') => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  os,
  setOs,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => {
      // simulated auto-reset after download finishes
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#faf8f4] rounded-3xl border border-stone-200 shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold tracking-widest text-[#7c3aed] uppercase block mb-1">
              WISPR FLOW DESKTOP
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-editorial">
              Get started with Wispr Notetaker
            </h3>
            <p className="text-xs text-stone-600 mt-2 font-sans">
              Native background intelligence for all your meetings. No bot required.
            </p>
          </div>

          {/* OS Switcher */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => {
                setOs('windows');
                setDownloadStarted(false);
              }}
              className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                os === 'windows'
                  ? 'bg-white border-[#7c3aed] ring-2 ring-[#7c3aed]/20 shadow-xs'
                  : 'bg-stone-100/80 border-stone-200 hover:bg-white text-stone-600'
              }`}
            >
              <Monitor className={`w-5 h-5 ${os === 'windows' ? 'text-[#7c3aed]' : 'text-stone-500'}`} />
              <div>
                <span className="text-xs font-bold block text-stone-900">Windows</span>
                <span className="text-[10px] text-stone-500">Windows 10/11 (64-bit)</span>
              </div>
            </button>

            <button
              onClick={() => {
                setOs('mac');
                setDownloadStarted(false);
              }}
              className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                os === 'mac'
                  ? 'bg-white border-[#7c3aed] ring-2 ring-[#7c3aed]/20 shadow-xs'
                  : 'bg-stone-100/80 border-stone-200 hover:bg-white text-stone-600'
              }`}
            >
              <Laptop className={`w-5 h-5 ${os === 'mac' ? 'text-[#7c3aed]' : 'text-stone-500'}`} />
              <div>
                <span className="text-xs font-bold block text-stone-900">macOS</span>
                <span className="text-[10px] text-stone-500">Apple Silicon & Intel</span>
              </div>
            </button>
          </div>

          {/* Action Download Button */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full py-3.5 px-6 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              {downloadStarted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Downloading Wispr Flow for {os === 'windows' ? 'Windows' : 'macOS'}...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download for {os === 'windows' ? 'Windows (.exe)' : 'macOS (.dmg)'}</span>
                </>
              )}
            </button>

            {downloadStarted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Installer downloaded! Open file to install and log in to your account.</span>
              </motion.div>
            )}

            <p className="text-[11px] text-stone-500 text-center">
              Free plan includes unlimited personal meeting notes and custom glossary.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
