/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TestimonialDark } from './components/TestimonialDark';
import { GreenSection } from './components/GreenSection';
import { TransitionHeading } from './components/TransitionHeading';
import { FeatureTabsSection } from './components/FeatureTabsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { FaqSection } from './components/FaqSection';
import { ProductsSection } from './components/ProductsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dictation' | 'notetaker'>('notetaker');
  const [os, setOs] = useState<'windows' | 'mac'>('windows');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF5] text-[#1a1a1a] selection:bg-[#E8D5F5] selection:text-[#1a1a1a] overflow-x-hidden font-sans">
      {/* 1. Floating Pill Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        os={os}
        setOs={setOs}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Dictation Banner if user toggles Dictation */}
      {activeTab === 'dictation' && (
        <div className="pt-24 pb-2 bg-[#E8D5F5] text-[#1a1a1a] text-xs text-center font-medium border-b border-[#c9a8e8]">
          Viewing Dictation mode. Switch to <strong>Notetaker</strong> for the full meeting notes experience.
          <button
            onClick={() => setActiveTab('notetaker')}
            className="ml-2 underline font-bold cursor-pointer"
          >
            Switch to Notetaker
          </button>
        </div>
      )}

      {/* Main Page Flow matching user reference */}
      <main>
        {/* 2. Hero Section */}
        <Hero os={os} onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* 3. Steven Bartlett Testimonial Dark Section */}
        <TestimonialDark />

        {/* 4. Green Section with Floating Frosted Bubbles */}
        <GreenSection />

        {/* 5. Transition Text */}
        <TransitionHeading />

        {/* 6. Feature Tabs Section (The details, Ask anything, What did I miss?, Summary) */}
        <FeatureTabsSection />

        {/* 7. Workflow Section (WISPR MAKES IT EASY) */}
        <WorkflowSection />

        {/* 8. Testimonials Infinite Marquee Carousel */}
        <TestimonialsCarousel />

        {/* 9. FAQ Section (2 Column layout with interactive answers) */}
        <FaqSection />

        {/* 10. Products Section (Dictation & Notetaker cards) */}
        <ProductsSection onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* 11. Final CTA Section */}
        <CtaSection os={os} onOpenDownload={() => setIsDownloadOpen(true)} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        os={os}
        setOs={setOs}
      />
    </div>
  );
}
