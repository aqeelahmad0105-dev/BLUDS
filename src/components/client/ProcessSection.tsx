import React from 'react';
import { 
  MessageSquare, 
  Wrench, 
  Rocket,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Talk to Us on WhatsApp',
      timeline: 'Day 1 - 2 • 10-Minute Chat',
      desc: 'Tell Aqeel Ahmad what your business needs (a website, shop billing software, Shopify store, or ads). We listen, answer all questions in plain language, and give you an exact fixed price in PKR.',
      icon: MessageSquare,
      highlight: 'Free Advice • Exact PKR Price',
      buttonText: 'Message Aqeel on WhatsApp',
      buttonLink: 'https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20want%20to%20discuss%20a%20project%20for%20my%20business.'
    },
    {
      num: '02',
      title: 'We Build & Set Everything Up',
      timeline: 'Day 3 - 10 • We Build & Polish',
      desc: 'Our founders handle the entire work — designing your website, connecting your domain, setting up POS software with your barcode scanner, or scripting your 12 reels. You get a private link to review and test.',
      icon: Wrench,
      highlight: 'Test Everything Before Launch',
      buttonText: null,
      buttonLink: null
    },
    {
      num: '03',
      title: 'Launch Live & Start Growing',
      timeline: 'Day 14 • Final Launch & Scale',
      desc: 'We launch your website live, train your shop staff on the billing software, and start running your ads. We stay with you every month to provide maintenance, updates, and fast WhatsApp help.',
      icon: Rocket,
      highlight: 'Direct Ongoing Support',
      buttonText: null,
      buttonLink: null
    }
  ];

  return (
    <section id="process" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header in Plain Layman Language */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How It Works (Fast & Stress-Free)
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2.5 leading-relaxed">
            No confusing project management, no endless meetings. Here is our straightforward process from first message to launch:
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-neutral-500 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Timeline */}
                  <div className="mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/40 text-blue-400 border border-blue-900/40 inline-block mb-1.5">
                      {step.timeline}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Simple Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Highlight & Optional WhatsApp Button */}
                <div className="pt-3 border-t border-[#1c1c1c] space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{step.highlight}</span>
                  </div>

                  {step.buttonLink && (
                    <a
                      href={step.buttonLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full mt-2 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-black" />
                      <span>{step.buttonText}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
