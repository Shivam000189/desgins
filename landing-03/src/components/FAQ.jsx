"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultFaqData = [
  {
    id: "01",
    question: "What do you actually offer?",
    answer:
      "We partner with ambitious teams across brand identity, digital design, and end-to-end product strategy. From foundational visual systems to high-velocity design systems and conversion-focused web architecture, we embed directly with your team to deliver measurable outcomes.",
  },
  {
    id: "02",
    question: "What's the return on investment?",
    answer:
      "Our engagements are structured around clear commercial and product metrics: increased conversion rates, faster design and engineering velocity, and elevated market authority. Rather than vague deliverable lists, every initiative is mapped directly to its business impact.",
  },
  {
    id: "03",
    question: "When is this the right fit?",
    answer:
      "We are the right fit for founders and product leaders looking to upgrade their brand presence, overhaul a plateauing product experience, or establish scalable design foundations before scaling up or raising their next round.",
  },
  {
    id: "04",
    question: "When is it not the right fit?",
    answer:
      "If you're seeking a quick commodity freelancer, unstrategic pixel production, or someone to simply execute a rigid spec without interrogating the underlying product hypothesis, we are not the right partner.",
  },
  {
    id: "05",
    question: "How does an engagement work?",
    answer:
      "We operate through our four proven phases: Read (identifying where the product is leaking), Direct (mapping business bets), Build (shipping alongside your team), and Hand over (documenting standards and empowering internal ownership).",
  },
];

export default function FAQ({ items = defaultFaqData }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Centered Header */}
        <div className="faq-header">
          <motion.span
            className="faq-kicker"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            FAQ
          </motion.span>

          <motion.h2
            className="faq-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Before you book
          </motion.h2>
        </div>

        {/* Accordion Box Card */}
        <motion.div
          className="faq-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-row ${isOpen ? "faq-row-open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span
                    className={`faq-chevron ${isOpen ? "faq-chevron-rotated" : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        /* =========================================
           FAQ SECTION
           Matches exact centered card accordion design
           Uses Hero typography style
        ========================================= */

        .faq-section {
          position: relative;
          width: 100%;
          background: #000000;
          color: #ffffff;
          padding: 130px 24px 160px;
          overflow: hidden;
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .faq-container {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          width: 100%;
        }

        /* Centered Header */
        .faq-header {
          text-align: center;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faq-kicker {
          display: inline-block;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          opacity: 0.6;
          margin-bottom: 20px;
        }

        .faq-title {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: clamp(38px, 4.4vw, 56px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -1.6px;
          color: #ffffff;
          margin: 0;
        }

        /* Accordion Consolidated Box Card */
        .faq-card {
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.85);
        }

        /* Each Row */
        .faq-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: background-color 0.25s ease;
        }

        .faq-row:last-child {
          border-bottom: none;
        }

        .faq-row:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .faq-question-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          text-align: left;
          cursor: pointer;
          color: #ffffff;
        }

        .faq-question-text {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 16.5px;
          font-weight: 600;
          letter-spacing: -0.2px;
          color: #ffffff;
          line-height: 1.35;
          transition: opacity 0.2s ease;
        }

        .faq-row:hover .faq-question-text {
          opacity: 0.92;
        }

        /* Chevron Icon */
        .faq-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.55);
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease;
        }

        .faq-row:hover .faq-chevron {
          color: #ffffff;
        }

        .faq-chevron-rotated {
          transform: rotate(180deg);
          color: #ffffff;
        }

        /* Answer Content */
        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer-text {
          padding: 0 32px 28px;
          margin: 0;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 14.5px;
          line-height: 1.68;
          letter-spacing: -0.1px;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 400;
        }

        /* Mobile Breakpoint */
        @media (max-width: 640px) {
          .faq-section {
            padding: 90px 18px 110px;
          }

          .faq-header {
            margin-bottom: 44px;
          }

          .faq-title {
            font-size: 32px;
            letter-spacing: -1px;
          }

          .faq-question-btn {
            padding: 20px 22px;
          }

          .faq-question-text {
            font-size: 15px;
          }

          .faq-answer-text {
            padding: 0 22px 22px;
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}
