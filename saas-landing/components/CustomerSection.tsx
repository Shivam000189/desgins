"use client";

import { motion } from "framer-motion";

const customers = [
  "Figma",
  "Vercel",
  "Notion",
  "Linear",
  "Stripe",
  "Framer",
  "Webflow",
  "Arc",
  "Raycast",
  "Loom",
  "Superhuman",
  "Read.cv",
];

export default function CustomerSection() {
  return (
    <section data-navbar-dark className="relative overflow-hidden bg-[#111111] text-white">
      {/* Top border */}
      <div className="border-t border-white/15" />

      <div className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 md:px-10 md:py-32 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[30%_70%]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-white/50">
              Our customers
            </p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                max-w-[750px]
                text-[38px]
                font-normal
                leading-[1]
                tracking-[-0.04em]
                md:text-[58px]
                lg:text-[72px]
              "
            >
              Trusted by teams
              <br />
              building what&apos;s next.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="
                mt-8
                max-w-[460px]
                text-[13px]
                leading-[1.6]
                text-white/45
              "
            >
              We work with ambitious companies and people who care about
              creating meaningful digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Customers */}
        <div className="mt-24">
          {/* Section label */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Selected clients
            </span>

            <span className="text-[10px] tabular-nums text-white/30">
              01 — {String(customers.length).padStart(2, "0")}
            </span>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3 md:grid-cols-4">
            {customers.map((customer, index) => (
              <motion.div
                key={customer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.5,
                }}
                className="
                  group
                  relative
                  flex
                  h-[130px]
                  items-center
                  justify-center
                  border-b
                  border-r
                  border-white/15
                  transition-colors
                  duration-500
                  hover:bg-white
                "
              >
                <span
                  className="
                    text-[18px]
                    font-medium
                    tracking-[-0.03em]
                    text-white/70
                    transition-colors
                    duration-500
                    group-hover:text-black
                    md:text-[21px]
                  "
                >
                  {customer}
                </span>

                {/* index */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    text-[8px]
                    tabular-nums
                    text-white/20
                    transition-colors
                    duration-500
                    group-hover:text-black/30
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/15 pt-6 md:flex-row">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Digital products / Brand / Development
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Based everywhere
          </span>
        </div>
      </div>
    </section>
  );
}