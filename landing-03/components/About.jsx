"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyUs({
  name = "NINA PERRY",
  role = "manager",
  title = "WHY US",
  description = "Our consulting agency provides consulting, ideas, and resources for people working to create social change. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.",
  linkText = "read more",
  imageSrc = "/images/why-us.jpg",
  secondaryImageSrc = "/images/why-us-detail.jpg",
  onLinkClick,
}) {
  return (
    <section className="why-us-section" id="why-us">
      <div className="why-us-container">
        {/* Left Column: Sticky Editorial Information */}
        <div className="why-us-left-wrapper">
          <motion.div
            className="why-us-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Author Name (matches Hero eyebrow) */}
            <span className="why-us-name">{name}</span>

            {/* Role / Subtitle */}
            <span className="why-us-role">{role}</span>

            {/* Main Headline (matches Hero h1 typography) */}
            <h2 className="why-us-title">{title}</h2>

            {/* Description (matches Hero paragraph typography) */}
            <p className="why-us-description">{description}</p>

            {/* Read More Link (matches Hero action button font style) */}
            <div className="why-us-link-wrapper">
              <button
                type="button"
                className="why-us-link"
                onClick={onLinkClick}
              >
                <span>{linkText}</span>
                <span className="why-us-link-line" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Lifestyle Image Story */}
        <div className="why-us-right">
          <motion.div
            className="why-us-image-card"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={imageSrc}
              alt="Why Us Studio"
              className="why-us-image"
              loading="lazy"
            />
            <div className="why-us-image-glow" />
          </motion.div>

          <motion.div
            className="why-us-image-card secondary-card"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={secondaryImageSrc}
              alt="Why Us Workspace Architecture"
              className="why-us-image"
              loading="lazy"
            />
            <div className="why-us-image-glow" />
          </motion.div>
        </div>
      </div>

      <style>{`
        /* =========================================
           WHY US / WHY CHOOSE US SECTION
           Sticky editorial text on desktop
        ========================================= */

        .why-us-section {
          position: relative;
          width: 100%;
          background: #000000;
          color: #ffffff;
          padding: 130px 48px 160px;
          /* overflow must NOT be hidden for position: sticky to operate properly */
          overflow: visible;
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .why-us-container {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 76px;
          /* align-items: start is essential so the left column spans the full height of the section */
          align-items: start;
        }

        /* Left Column Wrapper & Sticky Element */
        .why-us-left-wrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .why-us-left {
          position: -webkit-sticky;
          position: sticky;
          top: 130px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 520px;
          z-index: 10;
        }

        /* Person Name - Exact Hero Eyebrow typography */
        .why-us-name {
          display: block;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          opacity: 0.6;
          margin-bottom: 8px;
        }

        /* Role - Hero font family styling */
        .why-us-role {
          display: block;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.2px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 26px;
        }

        /* Headline: WHY US - Exact Hero H1 typography */
        .why-us-title {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: clamp(48px, 5.4vw, 76px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -2.8px;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 34px 0;
        }

        /* Description Body - Exact Hero paragraph typography */
        .why-us-description {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 13.5px;
          line-height: 1.62;
          letter-spacing: -0.15px;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 400;
          margin: 0 0 38px 0;
        }

        /* Read More Link */
        .why-us-link-wrapper {
          display: inline-block;
        }

        .why-us-link {
          position: relative;
          background: none;
          border: none;
          padding: 0 0 3px 0;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: opacity 0.25s ease;
        }

        .why-us-link:hover {
          opacity: 0.75;
        }

        .why-us-link-line {
          display: block;
          width: 100%;
          height: 1.5px;
          background: #ffffff;
          margin-top: 4px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .why-us-link:hover .why-us-link-line {
          transform: scaleX(1.12);
          transform-origin: left;
        }

        /* Right Column: Multi-Image Scroll Track */
        .why-us-right {
          display: flex;
          flex-direction: column;
          gap: 36px;
          width: 100%;
        }

        .why-us-image-card {
          position: relative;
          width: 100%;
          max-width: 580px;
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          overflow: hidden;
          background: #09090b;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 56px -12px rgba(0, 0, 0, 0.85);
        }

        .why-us-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.03) brightness(0.98);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .why-us-image-card:hover .why-us-image {
          transform: scale(1.03);
        }

        .why-us-image-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 12px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .why-us-container {
            grid-template-columns: 1fr;
            gap: 52px;
          }

          .why-us-left {
            position: static;
            top: auto;
            max-width: 100%;
          }

          .why-us-image-card {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .why-us-section {
            padding: 90px 24px 100px;
          }

          .why-us-name {
            font-size: 10px;
            letter-spacing: 1.6px;
          }

          .why-us-role {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .why-us-title {
            font-size: 40px;
            letter-spacing: -1.8px;
            margin-bottom: 24px;
          }

          .why-us-description {
            font-size: 12.5px;
            margin-bottom: 30px;
          }

          .why-us-image-card {
            aspect-ratio: 4 / 3;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
}

export { WhyUs as About };
