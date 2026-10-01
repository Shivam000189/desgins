import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectsProps {
  kicker: string;
  subtitle: string;
  linkText: string;
  items: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({
  kicker,
  subtitle,
  linkText,
  items,
}) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top Header Row: Kicker on left, description on right */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 pb-8 border-b border-white/5">
        <div>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 block">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Selected Works
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Projects 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14">
        {items.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between group cursor-pointer"
            onClick={() => setActiveProject(project)}
          >
            {/* Device Mockup Canvas */}
            <div className="rounded-xl overflow-hidden mb-6 bg-[#0c0c0e] border border-white/5 group-hover:border-white/15 transition-all duration-300">
              <ProjectMockup project={project} onOpenModal={() => setActiveProject(project)} />
            </div>

            {/* Tags / Pills bar as seen in the video */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] md:text-xs font-medium text-neutral-300 bg-neutral-900 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 mt-2.5 leading-relaxed font-normal">
              {project.description}
            </p>
          </article>
        ))}
      </div>

      {/* View All Projects link */}
      <div className="mt-16 flex justify-end">
        <button
          onClick={() => setActiveProject(items[0])}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer group"
        >
          <span>{linkText}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
        </button>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#0f0f13] border border-white/10 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-xl cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              {activeProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-medium text-orange-400 bg-orange-950/40 border border-orange-500/20 px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {activeProject.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
              <span>{activeProject.client}</span>
              <span>·</span>
              <span>{activeProject.location}</span>
              <span>·</span>
              <span>{activeProject.year}</span>
            </div>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
              {activeProject.fullDescription || activeProject.description}
            </p>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black p-4 mb-6">
              <ProjectMockup project={activeProject} />
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-xs text-neutral-400">EXPANCE Bespoke Delivery</span>
              <button
                onClick={() => setActiveProject(null)}
                className="bg-white text-black font-semibold text-xs px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
