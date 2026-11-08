import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'TRANSPARENT PRICING',
      question: 'What are your standard service rates and billing structure?',
      answer: 'We maintain clear, transparent pricing with zero hidden agency markups: Website Development is Rs. 20,000 (one-time) + Rs. 10,000/mo maintenance (+ Rs. 7,000-8,000/yr domain hosting); SEO Optimization is Rs. 15,000/month; Meta & Google Ads management is Rs. 12,000/month (ad spend paid directly by client); Shopify Store Connection is Rs. 5,000 (one-time); Social Media Management (12 produced reels + monthly analytics) is Rs. 20,000/month; and Point of Sale (POS) Software is Rs. 20,000 (one-time) + Rs. 3,000/month subscription.',
    },
    {
      category: 'OPERATING MODEL',
      question: 'How does your online-first delivery model work with clients?',
      answer: 'We operate as an agile digital agency with direct communication via WhatsApp (+92 309 9489168) and email (m.bluds2@gmail.com). Clients receive rapid turnaround, live staging previews, and weekly reviews directly with our founding partners.',
    },
    {
      category: 'EXPANSION ROADMAP',
      question: 'When is BLUDS Agency transitioning to physical onsite tech studios?',
      answer: 'Phase 1 is our current lean, high-velocity online agency. Phase 2 (scheduled for 2026) will introduce physical innovation studios and client war-rooms in key tech hubs, allowing clients to schedule in-person strategy and POS hardware sessions with the founders.',
    },
    {
      category: 'INTELLECTUAL PROPERTY',
      question: 'Who owns the code, design assets, and intellectual property?',
      answer: 'You own 100% of all source code, domain ownership, credentials, Figma design files, and deployment configurations from Day 1. There is zero vendor lock-in.',
    },
    {
      category: 'DELIVERY TIMELINE',
      question: 'What is your typical delivery timeline from concept to launch?',
      answer: 'Custom websites and Shopify store setups typically deploy in 1 to 2 weeks. POS software setups and barcode integrations deploy within 1 to 2 weeks. SEO, Meta Ads, and Social Media management operate on monthly growth cycles with real-time analytics reports.',
    },
    {
      category: 'DIRECT LEADERSHIP',
      question: 'How do the 3 founders personally supervise our project?',
      answer: 'Unlike traditional agencies that hand off client accounts to junior freelancers, Ghulam (Website Development & Cloud Hosting), Hamza (POS Software & Shopify Integrations), and Daniyal (SEO, Meta Ads & Viral Reels) personally engineer and manage every deliverable.',
    },
    {
      category: 'SECURITY & PERFORMANCE',
      question: 'What security, performance, and data protection standards do you provide?',
      answer: 'All websites and stores feature free SSL certificates (HTTPS), sub-second load times (95+ Google PageSpeed), secure payment gateway integrations (Cash on Delivery, Stripe, bank wire), and encrypted automated daily database backups.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engagement, IP & Delivery
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Direct answers on partnering with our 3-founder engineering squad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 font-medium uppercase tracking-wider block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-[#1c1c1c]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <div className="text-xs text-neutral-300">
              Have specific compliance or architectural constraints? We sign bilateral NDAs upfront.
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors whitespace-nowrap"
          >
            Direct Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};
