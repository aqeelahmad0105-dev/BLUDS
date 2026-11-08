import React from 'react';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { HeroSection } from './HeroSection';
import { TrustedBrandsSection } from './TrustedBrandsSection';
import { TechMarquee } from './TechMarquee';
import { ServicesSection } from './ServicesSection';
import { TechMatrixSection } from './TechMatrixSection';
import { CostEstimatorSection } from './CostEstimatorSection';
import { WorkSection } from './WorkSection';
import { FoundersStorySection } from './FoundersStorySection';
import { ProcessSection } from './ProcessSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import { CaseStudyModal } from '../common/CaseStudyModal';
import { ServiceDetailModal } from '../common/ServiceDetailModal';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';

export const ClientLandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-cobalt-600 selection:text-white bg-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedBrandsSection />
        <TechMarquee />
        <ServicesSection />
        <TechMatrixSection />
        <CostEstimatorSection />
        <WorkSection />
        <FoundersStorySection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Global Modals & Floating Quick Actions */}
      <CaseStudyModal />
      <ServiceDetailModal />
      <FloatingWhatsApp />
    </div>
  );
};
