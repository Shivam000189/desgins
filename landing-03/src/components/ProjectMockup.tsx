import React from 'react';
import { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
  onOpenModal?: () => void;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  project,
  onOpenModal,
}) => {
  if (project.type === 'mobile') {
    // Smartphone device mockup (e.g. C-Carré)
    return (
      <div 
        onClick={onOpenModal}
        className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-[#181818] to-[#0d0d0d] p-6 rounded-lg cursor-pointer group"
      >
        {/* Smartphone chassis */}
        <div className="relative w-[210px] h-[340px] bg-[#141416] rounded-[36px] p-2.5 shadow-2xl ring-1 ring-white/10 group-hover:ring-orange-500/30 transition-all duration-500 group-hover:-translate-y-1">
          {/* Speaker notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          </div>

          {/* Screen content */}
          <div className="w-full h-full bg-[#0a0a0c] rounded-[28px] overflow-hidden pt-7 px-3.5 pb-4 flex flex-col justify-between select-none">
            {/* Top app status */}
            <div>
              <div className="flex items-center justify-between text-[9px] text-neutral-400 font-mono mb-3">
                <span className="font-semibold text-white">9:41</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>5G</span>
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                <div className="w-6 h-6 rounded-lg bg-orange-600 flex items-center justify-center text-[10px] font-bold text-white">
                  C²
                </div>
                <span className="text-xs font-bold text-white tracking-tight">C-Carré PEB</span>
              </div>

              {/* Metric card */}
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-2.5 rounded-xl border border-white/10 mb-2">
                <div className="text-[9px] text-neutral-400 uppercase tracking-wider mb-1">Certificat Énergétique</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-base font-extrabold text-white">Label B+</span>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">92 kWh/m²</span>
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden flex">
                  <div className="bg-emerald-500 h-full w-3/4 rounded-full" />
                </div>
              </div>

              {/* Small grid icons */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-neutral-900/80 p-2 rounded-lg border border-white/5">
                  <div className="text-[8px] text-neutral-400">Bruxelles</div>
                  <div className="text-[10px] font-semibold text-neutral-200 mt-0.5">Audit Immédiat</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded-lg border border-white/5">
                  <div className="text-[8px] text-neutral-400">Wallonie</div>
                  <div className="text-[10px] font-semibold text-neutral-200 mt-0.5">Prime Région</div>
                </div>
              </div>
            </div>

            {/* Bottom action */}
            <div className="bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-semibold py-1.5 rounded-lg text-center shadow-lg shadow-orange-950/40">
              Réserver un audit
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Laptop device mockup (EPACA, KS ARCHITECTES, VEGA, Varroa Diagnostic)
  return (
    <div 
      onClick={onOpenModal}
      className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-b from-[#161616] to-[#0c0c0c] p-6 rounded-lg cursor-pointer group overflow-hidden relative"
    >
      {/* Background subtle glow on hover */}
      <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-500 pointer-events-none" />

      {/* Modern MacBook style container */}
      <div className="w-full max-w-[480px] transition-transform duration-500 group-hover:-translate-y-1">
        {/* Laptop Display Lid */}
        <div className="bg-[#1a1a1c] p-2 rounded-t-xl ring-1 ring-white/10 shadow-2xl">
          {/* Bezel inner */}
          <div className="bg-black rounded-lg overflow-hidden border border-white/5">
            {/* Screen Top Bar / Browser Shell */}
            <div className="bg-[#121214] px-3 py-1.5 flex items-center justify-between border-b border-white/5 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
              </div>
              <div className="bg-[#1a1a1e] px-4 py-0.5 rounded text-[9px] text-neutral-400 font-mono tracking-tight max-w-[200px] truncate border border-white/5">
                https://{project.id}.be
              </div>
              <div className="w-8" />
            </div>

            {/* Screen Inner Page Content based on Project */}
            <div className="h-[210px] bg-[#09090b] p-4 flex flex-col justify-between relative overflow-hidden select-none">
              {/* Specialized Content for EPACA */}
              {project.id === 'epaca' && (
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[11px] font-bold tracking-wider text-white flex items-center gap-1.5">
                      <span className="text-orange-500 font-serif">★</span> EPACA
                    </span>
                    <div className="flex gap-3 text-[9px] text-neutral-400 font-medium">
                      <span className="text-white">Members</span>
                      <span>Governance</span>
                      <span>EU Affairs</span>
                    </div>
                  </div>
                  <div className="my-auto py-2">
                    <span className="text-[8px] uppercase tracking-widest text-orange-400 font-semibold">Public Affairs Association</span>
                    <h4 className="text-sm font-bold text-white mt-0.5 max-w-[280px] leading-tight">
                      The case of public affairs consulting in Brussels.
                    </h4>
                    <p className="text-[9px] text-neutral-400 mt-1 max-w-[260px] line-clamp-2">
                      Fostering high professional standards and integrity in EU representation.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                    <div className="bg-neutral-900/60 p-1.5 rounded border border-white/5">
                      <div className="text-[7px] text-neutral-400">MEMBERS</div>
                      <div className="text-[10px] font-bold text-white">44 Firms</div>
                    </div>
                    <div className="bg-neutral-900/60 p-1.5 rounded border border-white/5">
                      <div className="text-[7px] text-neutral-400">INSTITUTION</div>
                      <div className="text-[10px] font-bold text-white">Brussels EU</div>
                    </div>
                    <div className="bg-neutral-900/60 p-1.5 rounded border border-white/5">
                      <div className="text-[7px] text-neutral-400">ACCESS</div>
                      <div className="text-[10px] font-bold text-orange-400">Portal</div>
                    </div>
                  </div>
                </>
              )}

              {/* Specialized Content for KS ARCHITECTES */}
              {project.id === 'ks-architectes' && (
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[10px] font-bold tracking-wider text-white">KS ARCHITECTES</span>
                    <div className="flex gap-2 text-[8px] text-neutral-400">
                      <span>Projets</span>
                      <span>Régularisations</span>
                      <span>Atelier</span>
                    </div>
                  </div>
                  {/* Facade illustration */}
                  <div className="my-auto py-2 flex items-center gap-3">
                    <div className="w-24 h-20 bg-neutral-800 rounded overflow-hidden relative border border-white/10 shrink-0">
                      {/* Architectural facade graphic */}
                      <div className="w-full h-full bg-gradient-to-b from-[#222] to-[#111] p-1.5 flex flex-col justify-between">
                        <div className="grid grid-cols-3 gap-1">
                          <div className="h-4 bg-neutral-700/60 rounded-t" />
                          <div className="h-4 bg-neutral-700/60 rounded-t" />
                          <div className="h-4 bg-neutral-700/60 rounded-t" />
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          <div className="h-5 bg-neutral-700/80 rounded" />
                          <div className="h-5 bg-neutral-700/80 rounded" />
                          <div className="h-5 bg-neutral-700/80 rounded" />
                        </div>
                        <div className="h-2 bg-stone-600 rounded-sm" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-orange-400 font-mono">Bruxelles Architecture</span>
                      <h4 className="text-xs font-bold text-white mt-0.5 leading-snug">
                        Habitations & Régularisation d’urbanisme
                      </h4>
                      <p className="text-[8px] text-neutral-400 mt-1 line-clamp-2">
                        10+ ans de créations contemporaines au cœur du patrimoine urbain.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[8px] text-neutral-400 pt-1 border-t border-white/5">
                    <span>Avenue de la Couronne, 1050</span>
                    <span className="text-neutral-200">Découvrir les réalisations →</span>
                  </div>
                </>
              )}

              {/* Specialized Content for VEGA */}
              {project.id === 'vega' && (
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[11px] font-serif font-bold tracking-widest text-neutral-200">VEGA AVOCATS</span>
                    <div className="flex gap-2 text-[8px] text-neutral-400">
                      <span>Expertises</span>
                      <span>Équipe</span>
                      <span>Contact</span>
                    </div>
                  </div>
                  <div className="my-auto py-2">
                    <span className="text-[8px] uppercase tracking-widest text-orange-400 font-mono">Droit des Affaires</span>
                    <h4 className="text-xs font-serif font-bold text-neutral-100 mt-0.5 leading-snug">
                      Sécuriser vos décisions stratégiques.
                    </h4>
                    <p className="text-[8px] text-neutral-400 mt-1 line-clamp-2">
                      Rigueur d’intervention, implication directe des associés et vision d’affaires pragmatique.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-neutral-300 pt-1 border-t border-white/5 font-mono">
                    <span>Bruxelles · Barreau d'affaires</span>
                    <span className="text-orange-400">Prendre conseil →</span>
                  </div>
                </>
              )}

              {/* Specialized Content for Varroa Diagnostic */}
              {project.id === 'varroa-diagnostic' && (
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[10px] font-bold text-white flex items-center gap-1">
                      <span className="text-orange-500">⬡</span> Varroa Diagnostic
                    </span>
                    <span className="text-[8px] px-1.5 py-0.5 bg-orange-950/60 text-orange-400 border border-orange-500/20 rounded">
                      Fédération Apicole Belge
                    </span>
                  </div>
                  <div className="my-auto py-2">
                    <span className="text-[8px] uppercase tracking-wider text-orange-400 font-mono">Santé Apicole</span>
                    <h4 className="text-xs font-bold text-white mt-0.5 leading-snug">
                      Calculateur de seuil d'infestation & Traitements
                    </h4>
                    <p className="text-[8px] text-neutral-400 mt-1 line-clamp-2">
                      Outil scientifique national de référence pour préserver les colonies d’abeilles en Belgique.
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-[8px] text-neutral-400 pt-1 border-t border-white/5 font-mono">
                    <span className="text-emerald-400">● Système opérationnel</span>
                    <span className="text-neutral-200">Accéder au diagnostic →</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Laptop Bottom Base / Keyboard lip */}
        <div className="h-3 bg-[#242428] rounded-b-xl border-t border-neutral-700/60 flex items-center justify-center relative shadow-xl">
          <div className="w-16 h-1 bg-[#151518] rounded-full" />
        </div>
      </div>
    </div>
  );
};
