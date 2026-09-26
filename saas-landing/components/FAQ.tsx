"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: "01",
    question: "How do you set the deadline for a project?",
    answer:
      "The deadline is set after we understand the size of the project, what needs to be created, and what steps will be involved. Before we begin, we organize the entire process and present a clear timeline, with key deliverables and expected dates for each phase.",
  },
  {
    id: "02",
    question: "Can you handle just one step?",
    answer:
      "Yes. If you already have part of the project structured, we can focus on the specific stage where you need support, whether that is strategy, design, development, or another part of the process.",
  },
  {
    id: "03",
    question: "Who will work on my project?",
    answer:
      "Your project is handled by the people whose skills are most relevant to the work. We keep the team focused and involve the right specialists throughout the project.",
  },
  {
    id: "04",
    question: "Do I need to arrive with the project fully structured?",
    answer:
      "Not at all. You can come with an early idea, a defined problem, or an existing product. We can help structure the project and define the right direction together.",
  },
  {
    id: "05",
    question: "How does a project's budget work?",
    answer:
      "The budget depends on the scope, complexity, timeline, and level of involvement required. After understanding the project, we define the scope and provide a clear proposal.",
  },
  {
    id: "06",
    question: "Do you offer follow-up after publication?",
    answer:
      "Yes. We can continue supporting the product after launch with improvements, maintenance, iterations, and additional design or development work.",
  },
  {
    id: "07",
    question: "Do you work with products that are already running?",
    answer:
      "Yes. We can work with existing websites and digital products, improving their design, experience, performance, or technical foundation without requiring a complete rebuild.",
  },
  {
    id: "08",
    question: "Is it possible to develop a project in a reduced time?",
    answer:
      "Depending on the scope, we can adapt the process to a tighter timeline. We first identify the essential deliverables and determine what can realistically be completed within the required timeframe.",
  },
  {
    id: "09",
    question: "How does communication work during the project?",
    answer:
      "We establish a clear communication process at the beginning of the project. Progress, decisions, feedback, and important milestones are shared throughout the process so everyone stays aligned.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="bg-white text-black">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.9fr)_minmax(280px,0.8fr)] lg:gap-20 xl:gap-28">
          {/* =====================================================
              FAQ LIST
          ===================================================== */}

          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id}
                  className="border-t border-black/15 last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-5
                      py-5
                      text-left
                      md:py-6
                    "
                  >
                    {/* Number */}

                    <span
                      className="
                        w-6
                        shrink-0
                        text-[10px]
                        font-medium
                        tracking-[0.08em]
                        text-black/45
                        md:w-8
                        md:text-[11px]
                      "
                    >
                      {faq.id}
                    </span>

                    {/* Question */}

                    <span
                      className="
                        min-w-0
                        flex-1
                        text-[16px]
                        font-medium
                        leading-[1.25]
                        tracking-[-0.025em]
                        md:text-[18px]
                        lg:text-[19px]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Plus / Minus */}

                    <span
                      className="
                        relative
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        text-black/30
                      "
                    >
                      {/* Horizontal line */}

                      <span className="absolute h-px w-3 bg-current" />

                      {/* Vertical line */}

                      <motion.span
                        animate={{
                          rotate: isOpen ? 90 : 0,
                          opacity: isOpen ? 0 : 1,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="absolute h-3 w-px bg-current"
                      />
                    </span>
                  </button>

                  {/* =================================================
                      ANSWER
                  ================================================= */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-[24px_1fr] gap-5 pb-7 md:grid-cols-[32px_1fr]">
                          <div />

                          <p className="max-w-[760px] text-[14px] leading-[1.55] text-black/60 md:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT SIDE CONTENT
          ===================================================== */}

          <div className="lg:pt-0">
            <p className="text-[10px] uppercase tracking-[0.16em] text-black/45">
              FAQ
            </p>

            <h2 className="mt-4 max-w-[420px] text-[36px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[42px] lg:text-[44px]">
              Still have questions?
            </h2>

            <p className="mt-6 max-w-[320px] text-[14px] leading-[1.55] text-black/55 md:text-[15px]">
              Have more questions? We will be happy to answer them. Do not
              hesitate to get in touch.
            </p>

            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-black
                px-5
                py-3
                text-[12px]
                font-medium
                text-white
                transition-transform
                duration-300
                hover:scale-[1.03]
              "
            >
              Start a project
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}