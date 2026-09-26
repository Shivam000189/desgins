"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useState } from "react";
import Container from "@/components/layout/Container";

type Service = {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "Brand Identity",
    location: "Strategy",
    description:
      "We build identities around what makes your business different — not just something that looks good.",
    image: "/workImages/Img-05.png",
  },
  {
    id: "02",
    title: "Website Design",
    location: "Digital",
    description:
      "Websites designed around your audience, your story and what you actually need them to do.",
    image: "/workImages/Img-01.png",
  },
  {
    id: "03",
    title: "Development",
    location: "Technology",
    description:
      "Fast, scalable digital products built with thoughtful engineering and a strong design foundation.",
    image: "/workImages/Img-02.png",
  },
  {
    id: "04",
    title: "Digital Products",
    location: "Product",
    description:
      "From early ideas to complete products, we turn complex problems into simple digital experiences.",
    image: "/workImages/Img-03.png",
  },
  {
    id: "05",
    title: "Creative Direction",
    location: "Creative",
    description:
      "A clear creative direction that connects your brand, product and communication into one system.",
    image: "/workImages/Img-04.png",
  },
];

const springTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white text-black">
      <Container className="py-24 md:py-32">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-14 flex items-end justify-between md:mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-black/45">
              Our services
            </p>

            <h2 className="mt-5 max-w-[650px] text-[42px] font-medium leading-[0.95] tracking-[-0.045em] md:text-[64px]">
              What we can
              <br />
              build together.
            </h2>
          </div>

          <div className="hidden text-[10px] uppercase tracking-[0.16em] text-black/40 md:block">
            {String(activeIndex + 1).padStart(2, "0")} —{" "}
            {String(services.length).padStart(2, "0")}
          </div>
        </div>

        {/* =====================================================
            SERVICE CAROUSEL
        ===================================================== */}

        <div
          className="
            relative
            flex
            h-[520px]
            w-full
            gap-3
            overflow-hidden
            md:h-[620px]
            md:gap-4
          "
        >
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={service.id}
                layout
                role="button"
                tabIndex={0}
                aria-label={`View ${service.title}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="
                  group
                  relative
                  h-full
                  min-w-0
                  cursor-pointer
                  overflow-hidden
                  rounded-[24px]
                  outline-none
                  md:rounded-[28px]
                "
                initial={false}
                animate={{
                  flexGrow: isActive ? 7 : 1,
                  flexBasis: 0,
                }}
                transition={springTransition}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isActive ? 1 : 1.02,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={index === 0}
                    sizes={
                      isActive
                        ? "(max-width: 768px) 70vw, 70vw"
                        : "(max-width: 768px) 20vw, 10vw"
                    }
                    className="object-cover"
                  />
                </motion.div>

                {/* =================================================
                    IMAGE OVERLAY

                    Active card = subtle darkening
                    Inactive card = stronger overlay
                ================================================= */}

                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundColor: isActive
                      ? "rgba(0,0,0,0.04)"
                      : "rgba(0,0,0,0.28)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />

                {/* =================================================
                    INACTIVE CARD
                    Vertical title + plus button
                ================================================= */}

                <AnimatePresence initial={false}>
                  {!isActive && (
                    <motion.div
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
                        duration: 0.3,
                      }}
                      className="absolute inset-0"
                    >
                      {/* Vertical title */}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.08,
                          }}
                          className="
                            rotate-[-90deg]
                            whitespace-nowrap
                            text-[13px]
                            font-medium
                            tracking-[-0.01em]
                            text-white
                            md:text-[15px]
                          "
                        >
                          {service.title}
                        </motion.span>
                      </div>

                      {/* Plus button */}

                      <div
                        className="
                          absolute
                          bottom-4
                          left-1/2
                          flex
                          h-10
                          w-10
                          -translate-x-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-[21px]
                          font-light
                          leading-none
                          text-black
                          transition-transform
                          duration-500
                          group-hover:scale-110
                          md:bottom-5
                          md:h-11
                          md:w-11
                        "
                      >
                        +
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    ACTIVE CARD CONTENT
                ================================================= */}

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`content-${service.id}`}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        bg-white/75
                        px-6
                        pb-6
                        pt-12
                        backdrop-blur-[4px]
                        md:px-8
                        md:pb-8
                        md:pt-14
                      "
                    >
                      <div className="max-w-[650px]">
                        {/* Location */}

                        <p className="text-[9px] uppercase tracking-[0.18em] text-black/45 md:text-[10px]">
                          {service.location}
                        </p>

                        {/* Title */}

                        <h3 className="mt-2 text-[32px] font-medium leading-[0.95] tracking-[-0.045em] md:text-[48px]">
                          {service.title}
                        </h3>

                        {/* Description */}

                        <p className="mt-4 max-w-[560px] text-[13px] leading-[1.55] text-black/60 md:text-[14px]">
                          {service.description}
                        </p>

                        {/* Learn more */}

                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                          className="
                            mt-4
                            text-[12px]
                            font-medium
                            text-black
                            underline
                            underline-offset-4
                            transition-opacity
                            hover:opacity-50
                            md:text-[13px]
                          "
                        >
                          Learn more →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    ACTIVE CLOSE / RESET BUTTON
                ================================================= */}

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.button
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.2,
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveIndex(0);
                      }}
                      aria-label="Reset services"
                      className="
                        absolute
                        bottom-5
                        right-5
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[20px]
                        font-light
                        leading-none
                        text-black
                        shadow-sm
                        transition-transform
                        hover:scale-105
                        md:bottom-6
                        md:right-6
                        md:h-11
                        md:w-11
                      "
                    >
                      ×
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE INDICATOR
        ===================================================== */}

        <div className="mt-5 flex items-center justify-between md:hidden">
          <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </span>

          <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">
            Tap a service
          </span>
        </div>
      </Container>
    </section>
  );
}