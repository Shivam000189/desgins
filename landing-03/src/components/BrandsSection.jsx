"use client";

import { motion } from "framer-motion";

const topBrands = [
  {
    name: "Klarna.",
    type: "klarna",
  },
  {
    name: "benify",
    type: "benify",
  },
  {
    name: "UNIBET",
    type: "unibet",
  },
  {
    name: "webhallen",
    type: "webhallen",
  },
  {
    name: "BRITTFURN",
    type: "britt",
  },
  {
    name: "Electrolux",
    type: "electrolux",
  },
  {
    name: "Studentapan",
    type: "studentapan",
  },
  {
    name: "Pundler",
    type: "pundler",
  },
];

const bottomBrands = [
  {
    name: "Pundler",
    type: "pundler",
  },
  {
    name: "SYSTEM BOLAGET",
    type: "systembolaget",
  },
  {
    name: "Clarion Hotel",
    type: "clarion",
  },
  {
    name: "RENAULT",
    type: "renault",
  },
  {
    name: "Studentapan",
    type: "studentapan",
  },
  {
    name: "Klarna.",
    type: "klarna",
  },
  {
    name: "benify",
    type: "benify",
  },
  {
    name: "webhallen",
    type: "webhallen",
  },
];

/*
  Duplicate the arrays so the second copy
  can seamlessly enter when the first copy leaves.
*/
const topLoop = [...topBrands, ...topBrands];
const bottomLoop = [...bottomBrands, ...bottomBrands];

export default function BrandsSection() {
  return (
    <section className="brands-section">

      {/* =========================================
          SECTION TITLE (Aligned Right)
      ========================================= */}

      <motion.div
        className="brands-title"
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
        Brands I've worked with
      </motion.div>


      {/* =========================================
          TOP ROW (Moves to the Left, Smooth & Slower)
      ========================================= */}

      <div className="marquee">

        <motion.div
          className="marquee-track"
          initial={{ x: "0%" }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {topLoop.map((brand, index) => (
            <BrandCard
              key={`top-${brand.type}-${index}`}
              brand={brand}
            />
          ))}

        </motion.div>

      </div>


      {/* =========================================
          BOTTOM ROW (Moves to the Right, Smooth & Slower)
      ========================================= */}

      <div className="marquee bottom-marquee">

        <motion.div
          className="marquee-track"
          initial={{ x: "-50%" }}
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 56,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {bottomLoop.map((brand, index) => (
            <BrandCard
              key={`bottom-${brand.type}-${index}`}
              brand={brand}
            />
          ))}

        </motion.div>

      </div>


      <style>{`

        /* =========================================
           SECTION
        ========================================= */

        .brands-section {
          position: relative;

          width: 100%;

          padding-top: 60px;
          padding-bottom: 70px;

          overflow: hidden;

          background: #000000;

          color: #b7b7b7;

          font-family:
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
        }


        /* =========================================
           TITLE (Right-aligned)
        ========================================= */

        .brands-title {
          position: relative;

          text-align: right;

          margin-right: 4.25%;
          margin-left: auto;

          margin-bottom: 45px;

          font-size: 24px;

          line-height: 1.2;

          font-weight: 400;

          letter-spacing: -0.6px;

          color: #a9a9ad;
        }


        /* =========================================
           MARQUEE WINDOW
        ========================================= */

        .marquee {
          position: relative;

          width: 100%;

          overflow: hidden;

          padding: 8px 0;

          margin-bottom: 16px;

          /*
            Fade mask at the edges
          */

          mask-image:
            linear-gradient(
              to right,
              transparent 0%,
              black 3%,
              black 97%,
              transparent 100%
            );

          -webkit-mask-image:
            linear-gradient(
              to right,
              transparent 0%,
              black 3%,
              black 97%,
              transparent 100%
            );
        }


        .bottom-marquee {
          margin-top: 0;
          margin-bottom: 0;
        }


        /* =========================================
           MOVING TRACK
        ========================================= */

        .marquee-track {
          width: max-content;

          display: flex;

          align-items: center;

          gap: 16px;

          will-change: transform;
        }


        /* =========================================
           COMPACT BRAND CARDS
        ========================================= */

        .brand-card {
          position: relative;

          flex: 0 0 295px;

          width: 295px;

          height: 165px;

          display: flex;

          align-items: center;

          justify-content: center;

          border: 1px solid #2d2d31;

          border-radius: 12px;

          background: #060606;

          overflow: hidden;

          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

          transition:
            border-color 0.35s ease,
            background 0.35s ease;
        }


        .brand-card:hover {
          border-color: #55555c;

          background: #090909;
        }


        /* =========================================
           LOGO BASE
        ========================================= */

        .brand-logo {
          display: flex;

          align-items: center;

          justify-content: center;

          color: #b5b5b8;

          user-select: none;

          white-space: nowrap;
        }


        /* =========================================
           KLARNA
        ========================================= */

        .logo-klarna {
          font-size: 36px;

          font-weight: 700;

          letter-spacing: -2.2px;
        }


        /* =========================================
           BENIFY
        ========================================= */

        .logo-benify {
          gap: 8px;

          font-size: 28px;

          font-weight: 400;

          letter-spacing: -1.4px;
        }


        .benify-mark {
          position: relative;

          width: 28px;
          height: 28px;

          border-radius: 50%;

          background:
            repeating-linear-gradient(
              -35deg,
              #aaa 0px,
              #aaa 4px,
              transparent 4px,
              transparent 7px
            );

          opacity: 0.85;
        }


        /* =========================================
           UNIBET
        ========================================= */

        .logo-unibet {
          flex-direction: column;

          gap: 4px;

          font-size: 28px;

          font-weight: 800;

          letter-spacing: -1.2px;
        }


        .unibet-dots {
          display: flex;

          gap: 3.5px;
        }


        .unibet-dots span {
          width: 6.5px;
          height: 6.5px;

          border-radius: 50%;

          background: #777;
        }


        /* =========================================
           WEBHALLEN
        ========================================= */

        .logo-webhallen {
          gap: 6px;

          font-size: 24px;

          font-weight: 500;

          letter-spacing: -1.2px;
        }


        .webhallen-dots {
          width: 32px;
          height: 32px;

          border-radius: 50%;

          border: 5px dotted #aaa;
        }


        /* =========================================
           BRITTFURN
        ========================================= */

        .logo-britt {
          font-family: Georgia, serif;

          font-size: 15px;

          letter-spacing: 6px;

          color: #aaa;
        }


        /* =========================================
           ELECTROLUX
        ========================================= */

        .logo-electrolux {
          gap: 8px;

          font-size: 22px;

          font-weight: 500;

          letter-spacing: -1.2px;
        }


        .electrolux-mark {
          width: 22px;
          height: 22px;

          border: 1.5px solid #aaa;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .electrolux-mark::after {
          content: "E";

          font-size: 13px;

          font-weight: 700;
        }


        /* =========================================
           STUDENTAPAN
        ========================================= */

        .logo-studentapan {
          font-size: 20px;

          font-weight: 600;

          letter-spacing: -1.1px;
        }


        /* =========================================
           PUNDLER
        ========================================= */

        .logo-pundler {
          font-size: 36px;

          font-weight: 400;

          letter-spacing: -2.2px;
        }


        .pundler-p {
          font-size: 42px;

          font-weight: 300;
        }


        /* =========================================
           SYSTEMBOLAGET
        ========================================= */

        .logo-systembolaget {
          width: 86px;
          height: 50px;

          border: 2.5px double #aaa;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          font-family: Georgia, serif;

          font-size: 10px;

          line-height: 1.1;

          font-weight: 700;

          letter-spacing: 0;
        }


        /* =========================================
           CLARION
        ========================================= */

        .logo-clarion {
          width: 60px;
          height: 68px;

          border: 1px solid #777;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 4px;

          font-family: Georgia, serif;

          font-size: 10px;

          text-align: center;
        }


        .clarion-symbol {
          font-size: 22px;

          font-weight: 700;

          font-style: italic;
        }


        /* =========================================
           RENAULT
        ========================================= */

        .logo-renault {
          flex-direction: column;

          gap: 7px;

          font-size: 13px;

          font-weight: 600;

          letter-spacing: 0.8px;
        }


        .renault-mark {
          width: 34px;
          height: 34px;

          transform: rotate(45deg);

          border: 2.5px solid #aaa;

          position: relative;
        }


        .renault-mark::after {
          content: "";

          position: absolute;

          left: 5px;
          top: 5px;

          width: 18px;
          height: 18px;

          border: 2.5px solid #aaa;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .brands-section {
            padding-top: 50px;
            padding-bottom: 55px;
          }


          .brands-title {
            text-align: right;
            margin-right: 30px;
            margin-left: auto;

            margin-bottom: 35px;

            font-size: 20px;
          }


          .brand-card {
            flex-basis: 250px;

            width: 250px;

            height: 140px;

            border-radius: 11px;
          }


          .marquee-track {
            gap: 13px;
          }


          .logo-klarna {
            font-size: 30px;
          }


          .logo-pundler {
            font-size: 30px;
          }

          .logo-benify {
            font-size: 24px;
          }

          .logo-unibet {
            font-size: 24px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .brands-section {
            padding-top: 40px;
            padding-bottom: 45px;
          }


          .brands-title {
            text-align: right;
            margin-right: 20px;
            margin-left: auto;

            margin-bottom: 28px;

            font-size: 18px;

            letter-spacing: -0.4px;
          }


          .brand-card {
            flex-basis: 200px;

            width: 200px;

            height: 115px;

            border-radius: 9px;
          }


          .marquee {
            padding: 4px 0;
            margin-bottom: 12px;
          }


          .marquee-track {
            gap: 10px;
          }


          .logo-klarna {
            font-size: 24px;
          }


          .logo-benify {
            font-size: 20px;
          }


          .logo-unibet {
            font-size: 20px;
          }


          .logo-webhallen {
            font-size: 18px;
          }


          .logo-pundler {
            font-size: 24px;
          }


          .logo-studentapan {
            font-size: 16px;
          }


          .logo-renault {
            transform: scale(0.75);
          }

        }

      `}</style>
    </section>
  );
}


/* =================================================
   BRAND CARD
================================================= */

function BrandCard({ brand }) {
  return (
    <div className="brand-card">

      {brand.type === "klarna" && (
        <div className="brand-logo logo-klarna">
          Klarna.
        </div>
      )}


      {brand.type === "benify" && (
        <div className="brand-logo logo-benify">

          <span className="benify-mark" />

          <span>benify</span>

        </div>
      )}


      {brand.type === "unibet" && (
        <div className="brand-logo logo-unibet">

          <span>UNIBET</span>

          <span className="unibet-dots">
            {[1, 2, 3, 4, 5, 6].map((dot) => (
              <span key={dot} />
            ))}
          </span>

        </div>
      )}


      {brand.type === "webhallen" && (
        <div className="brand-logo logo-webhallen">

          <span className="webhallen-dots" />

          <span>webhallen</span>

        </div>
      )}


      {brand.type === "britt" && (
        <div className="brand-logo logo-britt">
          BRITTFURN
        </div>
      )}


      {brand.type === "electrolux" && (
        <div className="brand-logo logo-electrolux">

          <span className="electrolux-mark" />

          <span>Electrolux</span>

        </div>
      )}


      {brand.type === "studentapan" && (
        <div className="brand-logo logo-studentapan">
          Studentapan
        </div>
      )}


      {brand.type === "pundler" && (
        <div className="brand-logo logo-pundler">

          <span className="pundler-p">P</span>
          undler

        </div>
      )}


      {brand.type === "systembolaget" && (
        <div className="brand-logo logo-systembolaget">
          SYSTEM
          <br />
          BOLAGET
        </div>
      )}


      {brand.type === "clarion" && (
        <div className="brand-logo logo-clarion">

          <span className="clarion-symbol">
            e
          </span>

          <span>Clarion</span>

          <span>Hotel</span>

        </div>
      )}


      {brand.type === "renault" && (
        <div className="brand-logo logo-renault">

          <span className="renault-mark" />

          <span>RENAULT</span>

        </div>
      )}

    </div>
  );
}
