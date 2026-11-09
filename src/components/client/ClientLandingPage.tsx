import React from 'react';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { BundlesSection } from './BundlesSection';
import { WorkSection } from './WorkSection';
import { ProcessSection } from './ProcessSection';
import { TechMatrixSection } from './TechMatrixSection';
import { FoundersStorySection } from './FoundersStorySection';
import { ContactSection } from './ContactSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ChevronDown } from 'lucide-react';
import { CaseStudyModal } from '../common/CaseStudyModal';
import { ServiceDetailModal } from '../common/ServiceDetailModal';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';

export const ClientLandingPage: React.FC = React.memo(() => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-lime-300 selection:text-slate-900 bg-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BundlesSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
        <div className="border-t border-[#1f1f1f] bg-black px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl divide-y divide-[#222222]">
            <details className="group py-2">
              <summary
                aria-controls="technology"
                className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden"
              >
                The tools we use
                <ChevronDown className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180" />
              </summary>
              <TechMatrixSection />
            </details>
            <details className="group py-2">
              <summary
                aria-controls="founders"
                className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden"
              >
                About us
                <ChevronDown className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180" />
              </summary>
              <FoundersStorySection />
            </details>
            <details className="group py-2">
              <summary
                aria-controls="testimonials"
                className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden"
              >
                Client Feedback
                <ChevronDown className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180" />
              </summary>
              <TestimonialsSection />
            </details>
          </div>
        </div>
      </main>
      <Footer />
      <CaseStudyModal />
      <ServiceDetailModal />
      <FloatingWhatsApp />
    </div>
  );
});
