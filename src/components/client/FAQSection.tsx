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
      category: 'OPERATING MODEL',
      question: 'How does your online-first delivery model work across global time zones?',
      answer: 'We operate as a distributed digital engineering engine with synchronous coverage across North America, Europe, and APAC. Clients receive direct Slack communication channels, asynchronous video walkthroughs on every pull request, and weekly architecture reviews directly with the 3 founders.',
    },
    {
      category: 'EXPANSION ROADMAP',
      question: 'When is BLUDS Agency transitioning to physical onsite tech studios?',
      answer: 'Phase 1 is our current lean, high-velocity online agency. Phase 2 (scheduled for 2026) will introduce physical innovation studios and client war-rooms in key tech hubs, allowing clients to schedule intensive in-person architectural sprints with the founders.',
    },
    {
      category: 'INTELLECTUAL PROPERTY',
      question: 'Who owns the code, design assets, and intellectual property?',
      answer: 'You own 100% of all intellectual property, source code, Figma design files, and deployment configurations from Day 1. Code is committed directly to your organization’s private Git repositories under mutual NDA.',
    },
    {
      category: 'SPRINT VELOCITY',
      question: 'What is your typical delivery timeline from concept to production?',
      answer: 'Most high-growth MVPs and SaaS platforms reach staging within 4 to 8 weeks. We work in disciplined 2-week bi-weekly sprints, deploying tested features to a live staging environment at the end of each cycle so you can test working software continuously.',
    },
    {
      category: 'DIRECT LEADERSHIP',
      question: 'How do the 3 founders personally supervise our engineering?',
      answer: 'Unlike traditional software houses that pitch senior partners and delegate execution to junior developers, Ghulam (CTO), Hamza (CPO), and Daniyal (Head of AI) personally architect your infrastructure, design your data schemas, and review every pull request.',
    },
    {
      category: 'SECURITY & HARDENING',
      question: 'What are your enterprise security and data privacy standards?',
      answer: 'All systems are engineered following SOC2 Type II, HIPAA, and GDPR compliance best practices. We implement TLS 1.3 encryption in transit, AES-256 at rest, automated vulnerability scanning in GitHub Actions, and zero-data-retention safeguards for custom AI LLM pipelines.',
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
