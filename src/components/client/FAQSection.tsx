import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, MessageSquare } from 'lucide-react';

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
      question: 'What are your exact prices and do you have any hidden fees?',
      answer: 'We have zero hidden fees or surprise costs. Website Development is Rs. 20,000 (one-time) + Rs. 10,000/month for maintenance (+ Rs. 7,000-8,000/year for domain & hosting according to the domain you choose). POS Software for shops & restaurants is Rs. 20,000 (one-time) + Rs. 3,000/month cloud sync subscription. Shopify Store Connection is Rs. 5,000 (one-time). SEO Optimization is Rs. 15,000/month. Meta & Google Ads management is Rs. 12,000/month (ad spend paid directly by you). Social Media Management (12 produced reels + monthly analytics) is Rs. 20,000/month.',
    },
    {
      category: 'HOW WE WORK',
      question: 'How do I start and how will we communicate?',
      answer: 'Starting is simple. Message Aqeel Ahmad on WhatsApp (03099489168) or submit our contact form. We discuss your business needs in simple language, agree on the timeline and fixed price, and start building immediately. You receive regular live video and demo updates on WhatsApp.',
    },
    {
      category: 'FULL OWNERSHIP',
      question: 'Do I own my website, domain, and data 100%?',
      answer: 'Yes, 100%. Your domain, website files, database, Shopify store, and ad accounts belong entirely to you from Day 1. There is zero vendor lock-in and no hostage fees.',
    },
    {
      category: 'DELIVERY TIME',
      question: 'How long does it take to build and launch?',
      answer: 'Standard websites and Shopify stores are completed and deployed live within 1 to 2 weeks. POS billing systems with barcode scanners and receipt printers are set up within 1 to 2 weeks. Marketing services (SEO, Ads, and Reels) start immediately on a month-to-month basis.',
    },
    {
      category: 'DEDICATED TEAM',
      question: 'Who actually works on my project?',
      answer: 'You work directly with the agency leadership: Aqeel Ahmad (Lead Solutions Manager & Client Contact), Ghulam (Website Development & Cloud Servers), Hamza (POS Software & Shopify Integrations), and Daniyal (Creative Direction, SEO & Video Reels). No junior interns, no middlemen.',
    },
    {
      category: 'MAINTENANCE & SUPPORT',
      question: 'What happens after my website or software is launched?',
      answer: 'We provide full ongoing support. Our monthly maintenance packages ensure your website stays fast, secure, backed up daily, and updated with any new content or products you want added.',
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
            Common Questions & Honest Answers
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Direct, straightforward answers about our prices, ownership, and how we help your business succeed.
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#1c1c1c]">
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
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs text-neutral-300">
              Have a question not listed here? Talk directly to Aqeel Ahmad on WhatsApp.
            </div>
          </div>
          <a
            href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20have%20a%20question%20about%20BLUDS%20Agency%20services."
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-colors flex items-center gap-1.5 shadow"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>Ask on WhatsApp (03099489168)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
