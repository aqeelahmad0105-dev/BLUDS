import React from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Store, 
  Search, 
  Megaphone, 
  Video, 
  Code2, 
  Layers, 
  Cloud, 
  BarChart2, 
  CreditCard 
} from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const techList = [
    { name: 'Website Development', tag: 'Next.js 14 & React 19', icon: Globe },
    { name: 'Shopify Connection', tag: 'Storefront & COD Checkout', icon: ShoppingBag },
    { name: 'POS Software', tag: 'Barcode & Thermal Billing', icon: Store },
    { name: 'Page-1 SEO', tag: 'Google Search Console & GA4', icon: Search },
    { name: 'Meta Ads Manager', tag: 'High-ROI FB & IG Campaigns', icon: Megaphone },
    { name: '12 Viral Reels / Mo', tag: 'Social Media Management', icon: Video },
    { name: 'Google Ads (PMax)', tag: 'High-Intent Search Traffic', icon: BarChart2 },
    { name: 'Domain & Cloud Hosting', tag: 'High-Speed 99.99% Uptime', icon: Cloud },
    { name: 'Tailwind CSS', tag: 'Mobile-First Design Systems', icon: Layers },
    { name: 'Clean Architecture', tag: 'TypeScript & Node.js', icon: Code2 },
    { name: 'Payment Gateways', tag: 'COD, Stripe & Bank Linkage', icon: CreditCard },
  ];

  return (
    <div className="relative py-6 bg-black border-y border-[#1f1f1f] overflow-hidden">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-4 hover:[animation-play-state:paused]">
        {[...techList, ...techList, ...techList].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0c0c0c] border border-[#222222] text-neutral-300 hover:border-neutral-700 transition-colors cursor-default"
            >
              <Icon className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-medium text-white">
                  {tech.name}
                </div>
                <div className="text-[10px] text-neutral-400">
                  {tech.tag}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
