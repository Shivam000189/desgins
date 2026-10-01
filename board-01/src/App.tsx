/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TestimonialDark } from './components/TestimonialDark';
import { GreenSection } from './components/GreenSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dictation' | 'notetaker'>('notetaker');
  const [os, setOs] = useState<'windows' | 'mac'>('windows');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF5] text-[#1a1a1a] selection:bg-[#E8D5F5] selection:text-[#1a1a1a] overflow-x-clip font-sans">
      {/* 1. Floating Pill Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        os={os}
        setOs={setOs}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Main Page Flow matching user reference */}
      <main>
        {/* 2. Hero Section */}
        <Hero os={os} onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* 3. Elena Vance Testimonial Dark Section */}
        <TestimonialDark />

        {/* 4. Creative Cards Green Section */}
        <GreenSection />

        {/* 5. Workflow Section (Fits into your workflow. Doesn't change it.) */}
        <WorkflowSection />

        {/* 6. Testimonials Infinite Marquee Carousel */}
        <TestimonialsCarousel />

        {/* 7. FAQ Section (2 Column layout with interactive answers) */}
        <FaqSection />

        {/* 8. Studio Partnership Application & Contact Form */}
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
