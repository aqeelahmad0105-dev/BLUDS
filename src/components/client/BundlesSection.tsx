import React from 'react';
import { ArrowRight, CheckCircle2, PackageCheck } from 'lucide-react';

const bundles = [
  {
    name: 'Website + SEO Growth Package',
    badge: 'Popular combo',
    price: 'Rs. 22,000',
    priceDetail: 'per month (+ Rs. 20k custom web setup — Save Rs. 3k/mo)',
    description: 'High-speed business website + monthly Google Page-1 ranking to capture organic clients actively searching for your service.',
    features: [
      'Custom responsive business website built by Ghulam (loads in <1s)',
      'Google Page-1 ranking SEO optimization managed by Daniyal',
      'Google Search Console & Google Maps local profile setup',
      'Domain, annual hosting, SSL security & WhatsApp chat buttons',
      'Monthly keyword ranking reports & visitor growth analysis',
    ],
    badgeClass: 'border-emerald-800/40 bg-emerald-950/40 text-emerald-400',
    message: 'Hello Aqeel, I am interested in the Website + SEO Growth Package (Rs. 22,000/mo). Let us discuss my business website and Google ranking.',
  },
  {
    name: 'Retail Shop Complete Setup',
    badge: 'Best for shops',
    price: 'Rs. 35,000',
    priceDetail: 'One-time setup (Save Rs. 5,000)',
    description: 'Everything a supermarket, clothing boutique, pharmacy, or grocery store needs to replace manual paper receipts.',
    features: [
      'Custom POS software installed on your computer / laptop',
      'Barcode scanner integration & fast receipt printer configuration',
      'Initial product catalog & inventory upload assistance',
      'Google Business Profile setup with Google Maps pin verification',
      '1st month of cloud backups & priority WhatsApp support included',
    ],
    badgeClass: 'border-amber-800/40 bg-amber-950/40 text-amber-400',
    message: 'Hello Aqeel, I am interested in the Retail Shop Complete Setup bundle (Rs. 35,000). Please share details for my shop.',
  },
  {
    name: 'E-Commerce Online Growth Bundle',
    badge: 'For brands',
    price: 'Rs. 32,000',
    priceDetail: 'per month (+ Rs. 5k one-time store setup)',
    description: 'The complete launchpad to sell products online across Pakistan with Cash on Delivery and daily orders.',
    features: [
      'Complete Shopify store setup with mobile-optimized 1-click checkout',
      'Meta Ads (Facebook & Instagram) management by Daniyal',
      '12 professionally edited video reels/shorts produced every month',
      'Cash on Delivery (COD) courier integration (Trax/Leopards/PostEx)',
      'Weekly sales & return on ad spend (ROAS) report',
    ],
    badgeClass: 'border-blue-800/40 bg-blue-950/40 text-blue-400',
    message: 'Hello Aqeel, I am interested in the E-Commerce Online Growth Bundle (Rs. 32,000/mo). Let us discuss my online store.',
  },
  {
    name: 'Full Authority Brand Bundle',
    badge: 'Maximum reach',
    price: 'Rs. 40,000',
    priceDetail: 'per month (+ Rs. 20k custom web setup)',
    description: 'For corporate companies, clinics, agencies, and high-ticket service businesses wanting total market authority.',
    features: [
      'High-speed custom website with sub-second loading time',
      'Google Page-1 SEO ranking for high-intent customer search terms',
      'Meta & Google Search Ads management for continuous client calls',
      'Direct WhatsApp CRM integration with lead tracking dashboard',
      'Dedicated senior developer & marketing manager support 24/7',
    ],
    badgeClass: 'border-purple-800/40 bg-purple-950/40 text-purple-400',
    message: 'Hello Aqeel, I am interested in the Full Authority Brand Bundle (Rs. 40,000/mo). Please tell me how we can get started.',
  },
];

export const BundlesSection: React.FC = () => (
  <section className="border-t border-[#1f1f1f] bg-black py-16 text-white sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="mb-3 inline-block rounded-full border border-blue-800/50 bg-blue-950/60 px-3 py-1 text-xs font-mono font-semibold text-blue-400">
          All-in-one value packages
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Pre-Packaged Bundles for Maximum Growth
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Combine services for a complete digital setup, bundled rates, and one direct contact on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bundles.map((bundle) => (
          <article
            key={bundle.name}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#222222] bg-[#0c0c0c] p-5 transition-colors hover:border-blue-500/50 sm:p-6"
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className={`rounded border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase ${bundle.badgeClass}`}>
                  {bundle.badge}
                </span>
                <PackageCheck className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-blue-400" />
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-white">{bundle.name}</h3>
              <p className="mb-4 text-xs leading-relaxed text-neutral-400">{bundle.description}</p>

              <div className="mb-5 rounded-xl border border-[#222222] bg-[#121212] p-3">
                <div className="text-2xl font-bold tracking-tight text-white">{bundle.price}</div>
                <div className="mt-1 text-[10px] leading-relaxed text-neutral-500">{bundle.priceDetail}</div>
              </div>

              <ul className="mb-6 space-y-2 border-t border-[#1c1c1c] pt-4">
                {bundle.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-neutral-300">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/923099489168?text=${encodeURIComponent(bundle.message)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
            >
              Get This Bundle on WhatsApp
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
