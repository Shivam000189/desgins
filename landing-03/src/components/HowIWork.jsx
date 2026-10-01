"use client";

import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Read",
    description:
      "I embed with your team and find where the product is leaking: conversion, velocity, quality. I trace each leak to its cause. Nothing gets reorganised in phase one.",
  },
  {
    number: "02",
    title: "Direct",
    description:
      "With your product leadership, we settle what's worth building and map every initiative to its effect on the business. Bets with expected returns, not a feature list.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I ship alongside your team and build the patterns they ship with. Every release gets measured against the outcome we set. Coaching happens in the work itself.",
  },
  {
    number: "04",
    title: "Hand over",
    description:
      "Direction, system and standards get documented and owned by your team. The bar holds whether I'm in the room or not.",
  },
];

export default function HowIWork() {
  return (
    <section className="how-it-works-section" id="how-i-work">
      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="how-it-works-header">
          <motion.span
            className="how-it-works-kicker"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            HOW I WORK
          </motion.span>

          <motion.h2
            className="how-it-works-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Four phases,
            <br />
            measurable outcomes
          </motion.h2>
        </div>

        {/* Four Cards Grid */}
        <div className="how-it-works-grid">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.number}
              className="phase-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: 0.12 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            >
              {/* Card Header: Pill + Title */}
              <div className="phase-card-header">
                <span className="phase-badge">{phase.number}</span>
                <h3 className="phase-title">{phase.title}</h3>
              </div>

              {/* Card Body */}
              <p className="phase-description">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          position: relative;
          width: 100%;
          background: #000000;
          color: #ffffff;
          padding: 130px 32px 150px;
          overflow: hidden;
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .how-it-works-container {
          position: relative;
          max-width: 1320px;
          margin: 0 auto;
          width: 100%;
        }

        /* Centered Header */
        .how-it-works-header {
          text-align: center;
          margin-bottom: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .how-it-works-kicker {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7d7d87;
          margin-bottom: 22px;
        }

        .how-it-works-title {
          font-size: clamp(2.2rem, 4.4vw, 3.4rem);
          font-weight: 500;
          line-height: 1.16;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0;
        }

        /* 4 Cards Grid */
        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          width: 100%;
        }

        @media (max-width: 1100px) {
          .how-it-works-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .how-it-works-section {
            padding: 90px 20px 100px;
          }
          .how-it-works-header {
            margin-bottom: 48px;
          }
          .how-it-works-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* Phase Card */
        .phase-card {
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 34px 28px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 290px;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .phase-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: #0e0e12;
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.07);
        }

        /* Phase Header */
        .phase-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        /* Number Badge */
        .phase-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #000000;
          font-size: 12px;
          font-weight: 700;
          line-height: 1;
          padding: 3.5px 7.5px;
          border-radius: 5px;
          letter-spacing: -0.01em;
          flex-shrink: 0;
        }

        /* Phase Title */
        .phase-title {
          font-size: 1.28rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.015em;
          margin: 0;
        }

        /* Phase Description */
        .phase-description {
          font-size: 14.5px;
          line-height: 1.66;
          color: #8f9099;
          font-weight: 400;
          margin: 0;
          letter-spacing: -0.005em;
        }
      `}</style>
    </section>
  );
}
