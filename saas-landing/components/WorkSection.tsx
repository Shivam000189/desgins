"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  aspect: "portrait" | "landscape";
  className?: string;
};


function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group ${className}`}
    >
      <a href="#" className="block">

        {/* IMAGE */}
        <div
          className={`
            relative
            w-full
            overflow-hidden
            bg-[#f2f2f2]
            ${
              project.aspect === "portrait"
                ? "aspect-[4/5]"
                : "aspect-[4/3]"
            }
          `}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.045 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="
                (max-width: 768px) 100vw,
                33vw
              "
              className="object-cover"
            />
          </motion.div>
        </div>


        {/* PROJECT INFO */}
        <div className="mt-4">

          {/* Number */}
          <div className="flex items-center gap-2">
            <span
              className="
                text-[8px]
                text-black/70
                transition-opacity
                duration-500
                group-hover:text-black
              "
            >
              •
            </span>

            <span
              className="
                text-[9px]
                tabular-nums
                text-black/50
                transition-colors
                duration-500
                group-hover:text-black
              "
            >
              {project.id}
            </span>
          </div>


          {/* Title */}
          <motion.h3
            className="
              mt-3
              font-serif
              text-[18px]
              leading-none
              tracking-[-0.02em]
            "
            animate={{
              x: 0,
            }}
            whileHover={{
              x: 3,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {project.title}
          </motion.h3>


          {/* Description */}
          <div
            className="
              grid
              grid-rows-[0fr]
              opacity-0
              transition-all
              duration-500
              ease-out
              group-hover:grid-rows-[1fr]
              group-hover:opacity-100
            "
          >
            <div className="overflow-hidden">
              <p
                className="
                  pt-3
                  text-[9px]
                  font-medium
                  uppercase
                  leading-[1.5]
                  tracking-[0.04em]
                  text-black/60
                "
              >
                {project.description}
              </p>
            </div>
          </div>

        </div>
      </a>
    </motion.article>
  );
}

const projects: Project[] = [
  {
    id: "01",
    title: "Components Desgin",
    image: "/workImages/Img-01.png",
    description: "Two legacies, one identity",
    aspect: "portrait",
  },
  {
    id: "02",
    title: "Static Sites",
    image: "/workImages/Img-02.png",
    description: "Building a new visual language",
    aspect: "landscape",
  },
  {
    id: "03",
    title: "Modern Tax",
    image: "/workImages/Img-03.png",
    description: "Making finance feel human",
    aspect: "portrait",
  },
  {
    id: "04",
    title: "supermodular.ai",
    image: "/workImages/Img-04.png",
    description: "The future of intelligent products",
    aspect: "landscape",
  },
  {
    id: "05",
    title: "Dasbaord",
    image: "/workImages/Img-05.png",
    description: "Technology built around people",
    aspect: "portrait",
  },
  {
    id: "06",
    title: "Task Manager",
    image: "/workImages/Img-06.png",
    description: "Creating brands with character",
    aspect: "landscape",
  },
];




export default function WorkSection() {
  return (
    <section className="bg-white text-black">
      <Container className="py-24 md:py-32">

        {/* --------------------------------
            SECTION HEADER
        -------------------------------- */}
        <div className="mb-12 md:mb-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.08em]">
            Featured work
          </p>
        </div>


        {/* --------------------------------
            PROJECT GRID
        -------------------------------- */}

        <div className="grid grid-cols-1 gap-x-5 gap-y-20 md:grid-cols-12 md:gap-y-28">

          {/* =========================
              PROJECT 01
          ========================= */}

          <ProjectCard
            project={projects[0]}
            className="md:col-span-4"
          />


          {/* =========================
              PROJECT 02
          ========================= */}

          <ProjectCard
            project={projects[1]}
            className="md:col-span-4"
          />


          {/* =========================
              PROJECT 03
          ========================= */}

          <ProjectCard
            project={projects[2]}
            className="md:col-span-4"
          />


          {/* =========================
              PROJECT 04
          ========================= */}

          <ProjectCard
            project={projects[3]}
            className="md:col-span-4 md:col-start-1"
          />


          {/* =========================
              PROJECT 05
          ========================= */}

          <ProjectCard
            project={projects[4]}
            className="md:col-span-4 md:col-start-5"
          />


          {/* =========================
              PROJECT 06
          ========================= */}

          <ProjectCard
            project={projects[5]}
            className="md:col-span-4 md:col-start-9"
          />

        </div>
      </Container>
    </section>
  );
}