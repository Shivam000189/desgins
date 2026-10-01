"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "Financial AI Dashboard",
    image: "finace-01.png",
    position: "one",
  },
  {
    id: "02",
    name: "Fintech Website Redesign",
    image: "finace-02.png",
    position: "two",
  },
  {
    id: "03",
    name: "Fintech Investment Platform",
    image: "finace-03.png",
    position: "three",
  },
  {
    id: "04",
    name: "Online Learning Platform",
    image: "finace-04.png",
    position: "four",
  },
  {
    id: "05",
    name: "Online Trading help",
    image: "finace-05.png",
    position: "five",
  },
  {
    id: "06",
    name: "AI Fitness & Coaching App",
    image: "finace-06.png",
    position: "six",
  },
];

const getImgSrc = (src) => {
  if (!src) return "";
  return src.startsWith("/") ? src : `/${src}`;
};

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(null);

  const active = projects.find(
    (project) => project.id === activeProject
  );

  return (
    <section id="work" className="featured-work">

      {/* =====================================
          HEADER (Right-aligned, matching Brand section style)
      ===================================== */}

      <motion.div
        className="featured-label"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Featured Work
      </motion.div>


      {/* =====================================
          PROJECT ROWS (With expanding box interaction)
      ===================================== */}

      <div className="work-container">

        {/* First Line: 01 (Long), 02 (Standard), 03 (Long) */}
        <div className="work-row">
          {projects.slice(0, 3).map((project, index) => (
            <Project
              key={project.id}
              project={project}
              index={index}
              active={activeProject === project.id}
              isAnyActive={Boolean(activeProject)}
              onClick={() => setActiveProject(project.id)}
            />
          ))}
        </div>

        {/* Second Line: 04 (Standard), 05 (Long), 06 (Standard) */}
        <div className="work-row">
          {projects.slice(3, 6).map((project, index) => (
            <Project
              key={project.id}
              project={project}
              index={index + 3}
              active={activeProject === project.id}
              isAnyActive={Boolean(activeProject)}
              onClick={() => setActiveProject(project.id)}
            />
          ))}
        </div>

      </div>


      {/* =====================================
          ACTIVE PROJECT (ZOOM / FOCUS)
      ===================================== */}

      <AnimatePresence>

        {active && (
          <motion.div
            className="project-focus"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            onClick={() => setActiveProject(null)}
          >

            <motion.div
              className="focus-image-wrapper"
              layoutId={`project-${active.id}`}
              initial={{
                scale: 0.88,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.88,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={getImgSrc(active.image)}
                alt={active.name}
              />

            </motion.div>


            <motion.div
              className="focus-info"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <span>
                {active.id}
              </span>

              <h2>
                {active.name}
              </h2>

            </motion.div>


            <button
              className="close-focus"
              onClick={() => setActiveProject(null)}
              aria-label="Close project"
            >
              Close
            </button>

          </motion.div>
        )}

      </AnimatePresence>


      <style>{`

        /* =====================================
           SECTION
        ===================================== */

        .featured-work {
          position: relative;

          width: 100%;

          min-height: 1200px;

          padding:
            50px
            4.25%
            120px;

          background: #000000;

          color: #fff;

          overflow: hidden;

          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
        }


        /* =====================================
           TITLE (Right-aligned, matching Brand section style)
        ===================================== */

        .featured-label {
          position: relative;
          text-align: right;
          margin-bottom: 45px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.6px;
          color: #a9a9ad;
          text-transform: none;
          opacity: 1;
        }


        /* =====================================
           WORK ROWS CONTAINER
        ===================================== */

        .work-container {
          position: relative;

          width: 100%;

          max-width: 1060px;

          margin: 0 auto;

          display: flex;

          flex-direction: column;

          gap: 64px;
        }

        .work-row {
          display: flex;

          gap: 16px;

          width: 100%;

          align-items: flex-start;
        }


        /* =====================================
           PROJECT (Expanding Box Interaction)
        ===================================== */

        .project {
          position: relative;

          flex: 1 1 0;

          min-width: 0;

          cursor: pointer;

          transition:
            flex 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.4s ease;
        }

        /* Hover on any box: active box expands, neighbors shrink */
        .work-row:hover .project {
          flex: 0.68 1 0;

          opacity: 0.68;
        }

        .work-row .project:hover {
          flex: 1.64 1 0;

          opacity: 1;
        }


        /* =====================================
           IMAGE (No scale zoom, fits expanding box)
        ===================================== */

        .project-image {
          position: relative;

          width: 100%;

          overflow: hidden;

          background: #111;
        }

        .project-image img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;
        }


        /* =====================================
           INDIVIDUAL ASPECT RATIOS
           Row 1: 01 (Long), 02 (Standard), 03 (Long)
           Row 2: 04 (Standard), 05 (Long), 06 (Standard)
        ===================================== */

        .project.one .project-image {
          aspect-ratio: 0.88 / 1;
        }

        .project.two .project-image {
          aspect-ratio: 1.34 / 1;
        }

        .project.three .project-image {
          aspect-ratio: 0.88 / 1;
        }

        .project.four .project-image {
          aspect-ratio: 1.34 / 1;
        }

        .project.five .project-image {
          aspect-ratio: 0.88 / 1;
        }

        .project.six .project-image {
          aspect-ratio: 1.34 / 1;
        }


        /* =====================================
           PROJECT TEXT (Hero Font Family Style)
        ===================================== */

        .project-meta {
          padding-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .project-number {
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.2px;
          line-height: 1;
          color: rgba(255, 255, 255, 0.45);
        }

        .project-name {
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          font-size: 13.5px;
          line-height: 1.25;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 500;
          letter-spacing: -0.2px;
          transition: color 0.25s ease;
        }

        .project:hover .project-name {
          color: #ffffff;
        }


        /* =====================================
           FOCUS MODE (Fullscreen Zoom)
        ===================================== */

        .project-focus {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.96);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6vw;
        }

        .focus-image-wrapper {
          position: relative;
          width: min(
            75vw,
            1100px
          );
          max-height: 78vh;
          overflow: hidden;
        }

        .focus-image-wrapper img {
          width: 100%;
          max-height: 78vh;
          object-fit: contain;
          display: block;
        }


        /* =====================================
           FOCUS INFORMATION (Hero Font Family Style)
        ===================================== */

        .focus-info {
          position: absolute;
          left: 6vw;
          bottom: 7vh;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .focus-info span {
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .focus-info h2 {
          margin: 0;
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          font-size:
            clamp(
              26px,
              3.8vw,
              46px
            );
          font-weight: 500;
          letter-spacing: -1.5px;
          color: #ffffff;
        }


        /* =====================================
           CLOSE (With button stroke)
        ===================================== */

        .close-focus {
          position: absolute;
          right: 5vw;
          bottom: 6vh;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 9999px;
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          opacity: 0.85;
          transition:
            opacity 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .close-focus:hover {
          opacity: 1;
          border-color: rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .featured-work {
            min-height: 900px;

            padding:
              40px
              30px
              80px;
          }


          .featured-label {
            text-align: right;
            margin-bottom: 35px;
            font-size: 20px;
          }


          .work-container {
            max-width: 720px;

            gap: 45px;
          }

          .work-row {
            gap: 12px;
          }


          .project-meta {
            padding-top: 10px;

            gap: 7px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .featured-work {
            min-height: auto;

            padding:
              40px
              20px
              80px;
          }


          .featured-label {
            text-align: right;
            margin-bottom: 28px;
            font-size: 18px;
            letter-spacing: -0.4px;
          }


          .work-container {
            gap: 35px;
          }

          .work-row {
            flex-direction: column;

            gap: 28px;
          }

          .project {
            width: 100%;

            flex: auto !important;

            opacity: 1 !important;
          }


          .project-meta {
            padding-top: 9px;

            gap: 6px;
          }


          .project-number {
            font-size: 7px;
          }


          .project-name {
            font-size: 10px;
          }


          .project-focus {
            padding: 20px;
          }


          .focus-image-wrapper {
            width: 100%;
          }


          .focus-info {
            left: 20px;

            bottom: 30px;
          }


          .close-focus {
            right: 20px;

            bottom: 30px;
          }

        }

      `}</style>

    </section>
  );
}


/* =========================================
   PROJECT COMPONENT
========================================= */

function Project({
  project,
  index,
  active,
  isAnyActive,
  onClick,
}) {
  return (
    <motion.article
      className={`project ${project.position}`}
      layoutId={`project-${project.id}`}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: active ? 1 : isAnyActive ? 0 : 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      animate={{
        opacity: isAnyActive
          ? active
            ? 1
            : 0
          : 1,

        scale: isAnyActive
          ? active
            ? 1.05
            : 0.92
          : 1,
      }}
      transition={{
        duration: 0.65,

        delay:
          isAnyActive
            ? 0
            : index * 0.06,

        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
    >

      <div className="project-image">

        <img
          src={getImgSrc(project.image)}
          alt={project.name}
          loading={
            index < 3
              ? "eager"
              : "lazy"
          }
        />

      </div>


      <div className="project-meta">

        <span className="project-number">
          {project.id}
        </span>

        <span className="project-name">
          {project.name}
        </span>

      </div>

    </motion.article>
  );
}
