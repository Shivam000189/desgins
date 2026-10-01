"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookACall({
  kicker = "NEXT STEP",
  title = "I take on one or two\nassignments at a time",
  description = "Embedded in your team, and owning the outcome together with you. If you're scaling a digital product and it's moving slower than your ambition, book a call.",
  buttonText = "Book an intro call",
  email = "shivamsharmass9897@gmail.com",
  linkedin = "https://linkedin.com",
  github = "https://github.com/Shivam000189",
  copyright = "© 2026 Expance Studio AB",
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2200);
  };

  return (
    <section className="book-call-section" id="book-a-call">
      <div className="book-call-container">
        {/* Kicker */}
        <motion.span
          className="book-call-kicker"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {kicker}
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="book-call-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h2>

        {/* Subtitle / Paragraph */}
        <motion.p
          className="book-call-description"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            type="button"
            className="book-call-btn"
            onClick={() => setModalOpen(true)}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Bottom Footer Credits & Links */}
        <motion.div
          className="book-call-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="footer-link"
          >
            {email}
          </a>
          <span className="footer-copyright">{copyright}</span>
        </motion.div>
      </div>

      {/* Booking / Contact Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {submitted ? (
                <div className="modal-success">
                  <div className="success-icon">✓</div>
                  <h3>Request Received</h3>
                  <p>We'll review your project details and get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="modal-header">
                    <span className="modal-kicker">DISCOVERY CALL</span>
                    <h3 className="modal-title">Book an intro call</h3>
                    <p className="modal-subtitle">
                      Tell us about what you're building and where you want to take it.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Scope & Goals</label>
                      <textarea
                        id="message"
                        rows={3}
                        required
                        placeholder="Briefly describe what your product is and your timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="modal-submit-btn">
                      Confirm intro request
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        /* =========================================
           BOOK A CALL SECTION
           Exact minimalist, centered editorial design
           Hero font family & styling
        ========================================= */

        .book-call-section {
          position: relative;
          width: 100%;
          background: #000000;
          color: #ffffff;
          padding: 160px 24px 70px;
          overflow: hidden;
          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .book-call-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Kicker */
        .book-call-kicker {
          display: inline-block;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          opacity: 0.6;
          margin-bottom: 26px;
        }

        /* Headline */
        .book-call-title {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: clamp(38px, 5.2vw, 66px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -2px;
          color: #ffffff;
          margin: 0 0 28px 0;
          max-width: 820px;
        }

        /* Description */
        .book-call-description {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: clamp(14.5px, 1.6vw, 16.5px);
          line-height: 1.68;
          letter-spacing: -0.15px;
          color: rgba(255, 255, 255, 0.68);
          max-width: 640px;
          margin: 0 0 44px 0;
          font-weight: 400;
        }

        /* Button with stroke */
        .book-call-btn {
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: #f1f1f4;
          color: #0b0b0e;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          letter-spacing: -0.2px;
          padding: 14px 32px;
          border-radius: 9999px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.08);
          transition: background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .book-call-btn:hover {
          background: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 6px 28px rgba(255, 255, 255, 0.22);
        }

        /* Bottom Footer Bar */
        .book-call-footer {
          margin-top: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.38);
        }

        /* Interactive Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(12px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-box {
          position: relative;
          background: #0d0d10;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          width: 100%;
          max-width: 480px;
          padding: 38px 32px 34px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.9);
          text-align: left;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close-btn:hover {
          color: #ffffff;
        }

        .modal-kicker {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.55);
          display: block;
          margin-bottom: 6px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .modal-subtitle {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 24px 0;
          line-height: 1.5;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .form-group input,
        .form-group textarea {
          background: #141418;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px 14px;
          color: #ffffff;
          font-family: inherit;
          font-size: 13.5px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: rgba(255, 255, 255, 0.35);
        }

        .modal-submit-btn {
          margin-top: 8px;
          border: none;
          background: #ffffff;
          color: #0b0b0e;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .modal-submit-btn:hover {
          background: #ededed;
        }

        .modal-success {
          text-align: center;
          padding: 30px 10px;
        }

        .success-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 18px;
        }

        .modal-success h3 {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .modal-success p {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile Adjustments */
        @media (max-width: 640px) {
          .book-call-section {
            padding: 110px 20px 50px;
          }

          .book-call-title {
            font-size: 32px;
            letter-spacing: -1.2px;
          }

          .book-call-description {
            font-size: 14px;
            margin-bottom: 34px;
          }

          .book-call-footer {
            margin-top: 100px;
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
