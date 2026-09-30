import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ToggleRight, ToggleLeft, Users, Lock, Sliders } from 'lucide-react';

export const BusinessSection: React.FC = () => {
  const [notetakerAccess, setNotetakerAccess] = useState(true);
  const [consentRequired, setConsentRequired] = useState(true);
  const [retentionPolicy, setRetentionPolicy] = useState('30');

  return (
    <section id="business" className="py-20 md:py-28 bg-[#fbf9f5] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#78716c] uppercase block mb-2">
            FOR BUSINESS
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-stone-900 font-editorial leading-tight">
            Bring Notetaker to your team.
          </h2>
          <p className="mt-4 text-base text-stone-600 font-sans leading-relaxed">
            Help your team move work forward, with the controls and compliance you need.
          </p>
        </div>

        {/* Enterprise Controls Dashboard Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Central Notetaker access */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-sans">
                Control Notetaker access
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed font-sans">
                Turn Notetaker on or off across your organization, or restrict to specific engineering, product, or sales workspaces.
              </p>
            </div>

            {/* Interactive Toggle */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-700">Organization status:</span>
              <button
                onClick={() => setNotetakerAccess(!notetakerAccess)}
                className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-stone-800"
              >
                {notetakerAccess ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <ToggleRight className="w-6 h-6 text-emerald-600 fill-emerald-600" /> Enabled
                  </span>
                ) : (
                  <span className="text-stone-400 flex items-center gap-1">
                    <ToggleLeft className="w-6 h-6 text-stone-300" /> Disabled
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Optional consent acknowledgment */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-sans">
                Optional consent acknowledgment
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed font-sans">
                Choose to require users to confirm they’ve obtained participant consent before recording each session.
              </p>
            </div>

            {/* Interactive Toggle */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-700">Mandatory prompt:</span>
              <button
                onClick={() => setConsentRequired(!consentRequired)}
                className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-stone-800"
              >
                {consentRequired ? (
                  <span className="text-purple-700 flex items-center gap-1">
                    <ToggleRight className="w-6 h-6 text-purple-600 fill-purple-600" /> Required
                  </span>
                ) : (
                  <span className="text-stone-400 flex items-center gap-1">
                    <ToggleLeft className="w-6 h-6 text-stone-300" /> Optional
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Enterprise Data Governance */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-sans">
                Data privacy & zero training
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed font-sans">
                SOC 2 Type II certified. Transcripts are encrypted with AES-256 and never retained to train public artificial intelligence models.
              </p>
            </div>

            {/* Selector */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-700">Retention:</span>
              <select
                value={retentionPolicy}
                onChange={(e) => setRetentionPolicy(e.target.value)}
                className="text-xs font-semibold bg-stone-100 rounded-lg px-2 py-1 text-stone-800 border-none focus:ring-1 focus:ring-purple-500 cursor-pointer"
              >
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="custom">Custom enterprise</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
