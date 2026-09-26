"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/layout/Container";

const services = [
  "Website",
  "Landing Page",
  "System",
  "Consulting",
  "Application",
  "Blog",
  "SaaS",
  "Monthly Fee",
  "Hiring of Hours",
  "Design System",
  "Single Screens",
];

const budgets = [
  "Less than ₹10 thousand",
  "₹10,000 to ₹50,000",
  "Above ₹50 thousand",
];

export default function TalkToUsSection() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add your API / email service here later.
    console.log({
      service: selectedService,
      budget: selectedBudget,
    });
  };

  return (
    <section
      data-navbar-hide
      className="bg-black text-white"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 xl:grid-cols-[1fr_1.05fr] xl:gap-24">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-[560px] lg:sticky lg:top-16 xl:top-20">
            {/* Eyebrow */}

            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
              Talk to us
            </p>

            {/* Heading */}

            <h2 className="mt-5 max-w-[560px] text-[48px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[56px] md:text-[64px] lg:text-[58px] xl:text-[68px]">
              Your next project
              <br />
              starts here
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-[500px] text-[14px] leading-[1.5] text-white/70 md:text-[15px]">
              We understand your timing, your goals, and show you how design
              and code can transform your idea into a high-end digital
              product.
            </p>

            {/* Divider */}

            <div className="mt-7 border-t border-white/15" />

            {/* Benefits */}

            <div className="space-y-4 py-6">
              <div className="flex items-start gap-4">
                <span className="mt-[2px] text-[16px] text-white/70">×</span>

                <p className="text-[13px] leading-[1.45] text-white/80 md:text-[14px]">
                  Understanding of the project, objectives and needs;
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-[2px] text-[16px] text-white/70">×</span>

                <p className="text-[13px] leading-[1.45] text-white/80 md:text-[14px]">
                  Clear next steps to get the project off the ground.
                </p>
              </div>
            </div>

            {/* Divider */}

            <div className="border-t border-white/15" />

            {/* Email */}

            <a
              href="mailto:hello@youragency.com"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                text-[13px]
                text-white/80
                underline
                underline-offset-4
                transition-colors
                hover:text-white
              "
            >
              <span className="text-[15px]">✉</span>
              hello@youragency.com
            </a>

            {/* WhatsApp */}

            <div className="mt-7">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[#c8ff32]
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-black
                  transition-transform
                  duration-300
                  hover:scale-[1.03]
                "
              >
                WhatsApp Service
              </a>
            </div>
          </div>

          {/* =====================================================
              FORM CARD
          ===================================================== */}

          <div className="rounded-[7px] bg-white p-6 text-black sm:p-7 md:p-8 lg:p-7 xl:p-8">
            <form onSubmit={handleSubmit}>
              {/* Form heading */}

              <h3 className="text-[28px] font-medium leading-[1] tracking-[-0.04em] sm:text-[30px] md:text-[32px]">
                Tell us what you want to build.
              </h3>

              {/* =================================================
                  NAME + TELEPHONE
              ================================================= */}

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[12px] font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name..."
                    required
                    className="
                      h-10
                      w-full
                      rounded-[6px]
                      border
                      border-black/15
                      bg-white
                      px-3
                      text-[12px]
                      outline-none
                      placeholder:text-black/25
                      focus:border-black/40
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-2 block text-[12px] font-medium"
                  >
                    Telephone
                  </label>

                  <div className="flex h-10 overflow-hidden rounded-[6px] border border-black/15">
                    <select
                      defaultValue="+91"
                      className="
                        w-[75px]
                        shrink-0
                        border-r
                        border-black/10
                        bg-white
                        px-2
                        text-[11px]
                        outline-none
                      "
                      aria-label="Country code"
                    >
                      <option value="+91">IN +91</option>
                      <option value="+1">US +1</option>
                      <option value="+44">UK +44</option>
                      <option value="+971">AE +971</option>
                    </select>

                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="98765 43210"
                      className="
                        min-w-0
                        flex-1
                        bg-white
                        px-3
                        text-[12px]
                        outline-none
                        placeholder:text-black/25
                      "
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  COMPANY + EMAIL
              ================================================= */}

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-[12px] font-medium"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company..."
                    className="
                      h-10
                      w-full
                      rounded-[6px]
                      border
                      border-black/15
                      bg-white
                      px-3
                      text-[12px]
                      outline-none
                      placeholder:text-black/25
                      focus:border-black/40
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[12px] font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email..."
                    required
                    className="
                      h-10
                      w-full
                      rounded-[6px]
                      border
                      border-black/15
                      bg-white
                      px-3
                      text-[12px]
                      outline-none
                      placeholder:text-black/25
                      focus:border-black/40
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  SERVICES
              ================================================= */}

              <fieldset className="mt-5">
                <legend className="mb-3 text-[12px] font-medium">
                  What service do you seek from us?*
                </legend>

                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const selected = selectedService === service;

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`
                          rounded-full
                          border
                          px-4
                          py-2
                          text-[12px]
                          transition-all
                          duration-200
                          ${
                            selected
                              ? "border-black bg-black text-white"
                              : "border-black/15 bg-white text-black hover:border-black/35"
                          }
                        `}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* =================================================
                  BUDGET
              ================================================= */}

              <fieldset className="mt-5">
                <legend className="mb-3 text-[12px] font-medium">
                  Do you have any budget in mind yet?
                </legend>

                <div className="flex flex-wrap gap-2">
                  {budgets.map((budget) => {
                    const selected = selectedBudget === budget;

                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`
                          rounded-full
                          border
                          px-4
                          py-2
                          text-[12px]
                          transition-all
                          duration-200
                          ${
                            selected
                              ? "border-black bg-black text-white"
                              : "border-black/15 bg-white text-black hover:border-black/35"
                          }
                        `}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* =================================================
                  PROJECT DETAILS
              ================================================= */}

              <div className="mt-5">
                <label
                  htmlFor="details"
                  className="mb-2 block text-[12px] font-medium"
                >
                  Project details
                </label>

                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Describe..."
                  className="
                    w-full
                    resize-none
                    rounded-[6px]
                    border
                    border-black/15
                    bg-white
                    px-3
                    py-3
                    text-[12px]
                    leading-[1.5]
                    outline-none
                    placeholder:text-black/25
                    focus:border-black/40
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="
                  mt-4
                  flex
                  h-[50px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-[13px]
                  font-medium
                  text-white
                  transition-transform
                  duration-300
                  hover:scale-[1.01]
                  active:scale-[0.99]
                "
              >
                To send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}