"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3D Card Hover Tilt tracking
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for rotation and scale
  const springConfig = { stiffness: 220, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const cardScale = useSpring(1, springConfig);

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    cardScale.set(1.03);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    cardScale.set(1);
  };

  return (
    <section className="hero">

      {/* ================= NAVBAR ================= */}

      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="logo">
          EXPANCE<span>✦</span>
        </div>

        <div className="nav-right">

          {/* GitHub Link */}
          <a
            href="https://github.com/Shivam000189"
            target="_blank"
            rel="noopener noreferrer"
            className="github-nav-link"
            aria-label="GitHub Profile"
          >
            <svg
              className="github-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Three Dots Menu Button */}
          <button
            className="menu-btn"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </button>

          <button className="language" aria-label="Change language">
            EN
            <span>⌄</span>
          </button>

          <button
            className="contact-btn"
            onClick={() => {
              const el = document.getElementById("book-a-call");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact us
          </button>

        </div>
      </motion.nav>


      {/* ================= LEFT CARD ================= */}

      <div className="card-positioner">
        <motion.div
          className="card-wrapper"
          initial={{
            opacity: 0,
            x: -70,
            rotate: -2,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <motion.div
            className="card-float"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <motion.div
              ref={cardRef}
              className="card-tilt-inner"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                rotateX,
                rotateY,
                scale: cardScale,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glowing red gradient aura radiating behind the card */}
              <div className="card-ambient-glow" aria-hidden="true" />

              <img
                src="/images/hero-card.png"
                alt="Hero visual"
                draggable={false}
              />
            </motion.div>

          </motion.div>

        </motion.div>
      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="hero-content">

        <motion.div
          className="eyebrow"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
        >
          BRANDING & DIGITAL
        </motion.div>


        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          A brand that keeps up
          <br />
          with your ambition.
        </motion.h1>


        <motion.div
          className="hero-bottom"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <p>
            Branding & web agency based in Brussels.
            <br />
            We create visual identities and websites
            <br />
            that truly reflect who you are.
          </p>

          <motion.button
            className="explore-btn"
            onClick={() => {
              const el = document.getElementById("work");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Explore our work
            <span>↗</span>
          </motion.button>

        </motion.div>

      </div>


      {/* ================= FULLSCREEN MENU DRAWER ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="hero-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar */}
            <div className="drawer-top-bar">
              <div className="logo">
                EXPANCE<span>✦</span>
              </div>

              <button
                className="drawer-close-btn"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Content Grid */}
            <div className="drawer-body">
              <nav className="drawer-links">
                {[
                  { id: "work", num: "01", label: "Projects" },
                  { id: "why-us", num: "02", label: "Why Us" },
                  { id: "how-i-work", num: "03", label: "How I Work" },
                  { id: "faq", num: "04", label: "FAQ" },
                  { id: "book-a-call", num: "05", label: "Book a call" },
                ].map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="drawer-link-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 * idx + 0.08,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="drawer-link-num">{item.num}</span>
                    <span className="drawer-link-title">{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="drawer-aside"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <span className="drawer-aside-tag">EXPANCE.STUDIO</span>
                <p className="drawer-aside-desc">
                  Branding &amp; web agency based in Brussels. We craft high-impact identities and websites that truly reflect who you are.
                </p>
                <div className="drawer-aside-contact">
                  <span className="drawer-aside-label">Email us</span>
                  <a href="mailto:shivamsharmass9897@gmail.com" className="drawer-aside-email">
                    shivamsharmass9897@gmail.com
                  </a>
                  <a
                    href="https://github.com/Shivam000189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drawer-aside-email"
                    style={{ marginTop: "6px" }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ================= STYLE ================= */}

      <style>{`

        /* =========================================
           HERO
        ========================================= */

        .hero {
          position: relative;

          width: 100%;
          height: 100svh;
          min-height: 680px;

          overflow: hidden;

          background: #000;

          color: #fff;

          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
        }


        /* =========================================
           NAVBAR
        ========================================= */

        .navbar {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 82px;

          padding: 0 38px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          z-index: 20;
        }


        .logo {
          display: flex;
          align-items: center;

          gap: 3px;

          font-size: 17px;

          font-weight: 600;

          letter-spacing: -0.8px;
        }


        .logo span {
          color: #ff3d00;

          font-size: 13px;
        }


        .nav-right {
          display: flex;
          align-items: center;

          gap: 27px;
        }


        /* GITHUB LINK IN NAVBAR */

        .github-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #fff;
          text-decoration: none;
          font-family: inherit;
          font-size: 11.5px;
          font-weight: 500;
          opacity: 0.85;
          cursor: pointer;
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .github-nav-link:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .github-icon {
          width: 14px;
          height: 14px;
        }


        /* THREE-DOT MENU BUTTON (CLEAN TRANSPARENT STYLE) */

        .menu-btn {
          border: none;
          background: transparent;
          padding: 8px 4px;
          display: flex;
          align-items: center;
          gap: 4.5px;
          cursor: pointer;
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .menu-btn:hover {
          opacity: 0.75;
          transform: scale(1.08);
        }

        .menu-btn .dot {
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          display: block;
          background: #ffffff;
        }


        /* LANGUAGE */

        .language {
          border: none;

          background: transparent;

          color: #fff;

          font-family: inherit;

          font-size: 12px;

          display: flex;
          align-items: center;

          gap: 5px;

          cursor: pointer;

          transition: opacity 0.25s ease;
        }

        .language:hover {
          opacity: 0.75;
        }

        .language span {
          opacity: 0.7;

          transform: translateY(-1px);
        }


        /* CONTACT */

        .contact-btn {
          height: 39px;

          padding: 0 17px;

          border: none;

          border-radius: 0;

          background: #fff;

          color: #111;

          font-family: inherit;

          font-size: 11px;

          font-weight: 500;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);

          background: #ededed;
        }


        /* =========================================
           CARD POSITIONER & WRAPPER
        ========================================= */

        .card-positioner {
          position: absolute;

          left: 5%;

          top: 50%;

          transform: translateY(-50%);

          width: min(38vw, 530px);

          max-height: 76vh;

          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 3;

          perspective: 1200px;
        }

        /* Ambient wide red glow backdrop */
        .card-positioner::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 135%;
          height: 135%;
          background: radial-gradient(
            ellipse 60% 60% at 50% 50%,
            rgba(220, 30, 0, 0.32) 0%,
            rgba(150, 15, 0, 0.16) 45%,
            rgba(0, 0, 0, 0) 75%
          );
          filter: blur(65px);
          pointer-events: none;
          z-index: 0;
        }

        .card-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }


        .card-float {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .card-tilt-inner {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          will-change: transform;
          cursor: pointer;
        }

        /* Intense inner red gradient core moving with the card */
        .card-ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: radial-gradient(
            circle at center,
            rgba(255, 65, 0, 0.42) 0%,
            rgba(215, 25, 0, 0.28) 40%,
            rgba(140, 10, 0, 0.12) 60%,
            rgba(0, 0, 0, 0) 80%
          );
          filter: blur(45px);
          border-radius: 40px;
          pointer-events: none;
          z-index: 0;
        }

        .card-float img {
          position: relative;
          z-index: 1;
          width: 100%;

          max-height: 70vh;

          height: auto;

          display: block;

          object-fit: contain;

          user-select: none;

          -webkit-user-drag: none;

          filter:
            drop-shadow(
              0 30px 60px rgba(0, 0, 0, 0.55)
            );
        }


        /* =========================================
           CONTENT
        ========================================= */

        .hero-content {
          position: absolute;

          left: 45%;

          top: 50%;

          transform: translateY(-50%);

          z-index: 5;
        }


        .eyebrow {
          margin-bottom: 20px;

          font-size: 10px;

          font-weight: 500;

          letter-spacing: 1.8px;

          opacity: 0.6;
        }


        .hero-content h1 {
          margin: 0;

          font-size: clamp(
            45px,
            4.35vw,
            74px
          );

          line-height: 0.95;

          font-weight: 400;

          letter-spacing: -3.8px;

          white-space: nowrap;
        }


        /* =========================================
           BOTTOM CONTENT
        ========================================= */

        .hero-bottom {
          margin-top: 55px;

          display: flex;
          align-items: flex-end;

          justify-content: space-between;

          gap: 80px;
        }


        .hero-bottom p {
          margin: 0;

          font-size: 11px;

          line-height: 1.45;

          letter-spacing: -0.1px;

          color: rgba(
            255,
            255,
            255,
            0.72
          );
        }


        /* =========================================
           EXPLORE BUTTON (SQUARE)
        ========================================= */

        .explore-btn {
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 0;
          background: #fff;
          color: #111;
          height: 42px;
          padding: 0 22px;
          font-family: inherit;
          font-size: 11.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .explore-btn:hover {
          background: #f0f0f4;
          border-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.16);
        }

        .explore-btn span {
          font-size: 15px;
        }


        /* =========================================
           FULLSCREEN MENU DRAWER
        ========================================= */

        .hero-drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(6, 6, 8, 0.96);
          backdrop-filter: blur(24px);
          padding: 32px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #ffffff;
          overflow-y: auto;
        }

        .drawer-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .drawer-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 15px;
          transition: all 0.25s ease;
        }

        .drawer-close-btn:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(90deg);
        }

        .drawer-body {
          max-width: 1240px;
          margin: auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          padding: 40px 0;
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .drawer-link-item {
          display: flex;
          align-items: baseline;
          gap: 22px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.82);
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .drawer-link-item:hover {
          color: #ffffff;
          transform: translateX(12px);
        }

        .drawer-link-num {
          font-family: inherit;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
        }

        .drawer-link-title {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 600;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .drawer-aside {
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding-left: 48px;
        }

        .drawer-aside-tag {
          font-size: 11px;
          letter-spacing: 2px;
          color: #ff3d00;
          font-weight: 600;
        }

        .drawer-aside-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .drawer-aside-contact {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .drawer-aside-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.45);
        }

        .drawer-aside-email {
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
        }

        .drawer-aside-email:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .hero-drawer-overlay {
            padding: 24px;
          }
          .drawer-body {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .drawer-aside {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-left: 0;
            padding-top: 24px;
          }
          .drawer-link-title {
            font-size: 32px;
          }
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .card-positioner {
            width: 37vw;
            left: 3%;
          }


          .hero-content {
            left: 43%;
          }


          .hero-content h1 {
            font-size: clamp(
              38px,
              4.6vw,
              58px
            );
          }


          .hero-bottom {
            gap: 30px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .hero {
            min-height: 760px;
          }


          .navbar {
            height: 70px;

            padding: 0 20px;
          }


          .nav-right {
            gap: 16px;
          }


          .github-nav-link span {
            display: none;
          }


          .language {
            display: none;
          }


          .contact-btn {
            height: 35px;

            padding: 0 13px;

            font-size: 10px;

            border-radius: 0;
          }


          /* CARD */

          .card-positioner {
            left: 20px;
            right: 20px;

            top: 28%;

            width: auto;
            max-height: 40vh;
          }


          /* CONTENT */

          .hero-content {
            left: 20px;
            right: 20px;

            top: auto;
            bottom: 9%;

            transform: none;
          }


          .eyebrow {
            margin-bottom: 13px;

            font-size: 8px;

            letter-spacing: 1.4px;
          }


          .hero-content h1 {
            font-size: clamp(
              38px,
              9.5vw,
              52px
            );

            line-height: 0.96;

            letter-spacing: -2.5px;

            white-space: normal;
          }


          .hero-bottom {
            margin-top: 30px;

            display: block;
          }


          .hero-bottom p {
            font-size: 10px;

            line-height: 1.4;
          }


          .hero-bottom p br {
            display: none;
          }


          .explore-btn {
            margin-top: 20px;

            height: 38px;

            font-size: 10px;

            border-radius: 0;
          }

        }

      `}</style>

    </section>
  );
}
