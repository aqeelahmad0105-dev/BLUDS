import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  Globe,
  Search,
  Megaphone,
  ShoppingBag,
  Video,
  Store,
  Code2, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Printer,
  Barcode,
  PackageCheck,
  ShieldCheck
} from 'lucide-react';
import { Card3D } from '../common/Card3D';
import { BricksAnimation } from '../common/BricksAnimation';

export const ServicesSection: React.FC = () => {
  const { services, setActiveServiceDetails, setIsRateCardOpen, setIsPOSSimulatorOpen } = useAgency();

  const activeServices = services.filter((s) => s.active);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Search': return <Search className="w-5 h-5 text-blue-500" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-blue-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      case 'Video': return <Video className="w-5 h-5 text-blue-500" />;
      case 'Store': return <Store className="w-5 h-5 text-blue-500" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-500" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-500" />;
      default: return <Users className="w-5 h-5 text-blue-500" />;
    }
  };

  const discountBundles = [
    {
      id: 'bundle-web-seo',
      name: 'Website + SEO Growth Package',
      badge: 'POPULAR COMBO',
      badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
      price: 'Rs. 22,000',
      priceDetail: 'per month (+ Rs. 20k custom web setup — Save Rs. 3k/mo)',
      description: 'High-speed business website + monthly Google Page-1 ranking to capture organic clients actively searching for your service.',
      features: [
        'Custom responsive business website built by Ghulam (loads in <1s)',
        'Google Page-1 ranking SEO optimization managed by Daniyal',
        'Google Search Console & Google Maps local profile setup',
        'Domain, annual hosting, SSL security & WhatsApp chat buttons',
        'Monthly keyword ranking reports & visitor growth analysis'
      ],
      whatsappText: 'Hello Aqeel, I am interested in the Website + SEO Growth Package (Rs. 22,000/mo). Let us discuss my business website and Google ranking.'
    },
    {
      id: 'bundle-retail',
      name: 'Retail Shop Complete Setup',
      badge: 'BEST FOR SHOPS',
      badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-800/40',
      price: 'Rs. 35,000',
      priceDetail: 'One-time setup (Save Rs. 5,000)',
      description: 'Everything a supermarket, clothing boutique, pharmacy, or grocery store needs to replace manual paper receipts.',
      features: [
        'Custom POS software installed on your computer / laptop',
        'Barcode scanner integration & fast receipt printer configuration',
        'Initial product catalog & inventory upload assistance',
        'Google Business Profile setup with Google Maps pin verification',
        '1st month of cloud backups & priority WhatsApp support included'
      ],
      whatsappText: 'Hello Aqeel, I am interested in the Retail Shop Complete Setup bundle (Rs. 35,000). Please share details for my shop.'
    },
    {
      id: 'bundle-ecom',
      name: 'E-Commerce Online Growth Bundle',
      badge: 'FOR BRANDS',
      badgeColor: 'text-blue-400 bg-blue-950/40 border-blue-800/40',
      price: 'Rs. 32,000',
      priceDetail: 'per month (+ Rs. 5k one-time store setup)',
      description: 'The complete launchpad to sell products online across Pakistan with Cash on Delivery and daily orders.',
      features: [
        'Complete Shopify store setup with mobile-optimized 1-click checkout',
        'Meta Ads (Facebook & Instagram) management by Daniyal',
        '12 professionally edited video reels/shorts produced every month',
        'Cash on Delivery (COD) courier integration (Trax/Leopards/PostEx)',
        'Weekly sales & return on ad spend (ROAS) report'
      ],
      whatsappText: 'Hello Aqeel, I am interested in the E-Commerce Online Growth Bundle (Rs. 32,000/mo). Let us discuss my online store.'
    },
    {
      id: 'bundle-authority',
      name: 'Full Authority Brand Bundle',
      badge: 'MAXIMUM REACH',
      badgeColor: 'text-purple-400 bg-purple-950/40 border-purple-800/40',
      price: 'Rs. 40,000',
      priceDetail: 'per month (+ Rs. 20k custom web setup)',
      description: 'For corporate companies, clinics, agencies, and high-ticket service businesses wanting total market authority.',
      features: [
        'High-speed custom website with sub-second loading time',
        'Google Page-1 SEO ranking for high-intent customer search terms',
        'Meta & Google Search Ads management for continuous client calls',
        'Direct WhatsApp CRM integration with lead tracking dashboard',
        'Dedicated senior developer & marketing manager support 24/7'
      ],
      whatsappText: 'Hello Aqeel, I am interested in the Full Authority Brand Bundle (Rs. 40,000/mo). Please tell me how we can get started.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Blue SQX Bricks Animation */}
        <div className="relative mb-12 rounded-xl border border-[#222222] bg-[#0c0c0c] overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Heading Typography in Plain Layman Language */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
                Services & Fixed Rates
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Everything Your Business Needs to Grow
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-2.5 leading-relaxed">
                Clear pricing in PKR with zero hidden agency costs. We build your website, set up your shop billing, connect your Shopify store, and run ads that bring you customers.
              </p>

              {/* Action Buttons in Header */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsRateCardOpen(true)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Download / Print 1-Page Rate Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsPOSSimulatorOpen(true)}
                  className="px-4 py-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-blue-400 hover:text-blue-300 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Barcode className="w-3.5 h-3.5" />
                  <span>⚡ Try Live POS Barcode Scanner</span>
                </button>
              </div>
            </div>

            {/* Interactive Blue SQX Bricks Animation Canvas in Heading (stops when not in focus) */}
            <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-[#1f2430] bg-black">
              <div className="px-3 py-2 bg-[#0a0d14] border-b border-[#1f2430] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>Interactive Visual Grid</span>
                </span>
                <span className="text-[10px] text-neutral-500">
                  Hover to illuminate
                </span>
              </div>
              <BricksAnimation
                height={130}
                brickWidth={46}
                brickHeight={20}
                gap={3}
                variant="heading"
                interactive={true}
                showControls={false}
                className="w-full"
              />
            </div>

          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#141414] text-blue-400 border border-[#262626]">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Price Display */}
                {service.startingPrice && (
                  <div className="mb-4 p-2.5 rounded-lg bg-[#111111] border border-[#222222]">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Price in PKR</span>
                    <span className="text-sm font-bold text-white">{service.startingPrice}</span>
                  </div>
                )}

                {/* POS Special Simulator Action Button */}
                {(service.id === 'srv-pos' || service.iconName === 'Store') && (
                  <button
                    type="button"
                    onClick={() => setIsPOSSimulatorOpen(true)}
                    className="w-full mb-4 py-2 px-3 rounded-lg bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/50 text-blue-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:border-blue-400 shadow-sm"
                  >
                    <Barcode className="w-3.5 h-3.5 text-blue-400" />
                    <span>Try Live Barcode Scanner Demo</span>
                  </button>
                )}

                {/* Deliverables snippet */}
                <div className="space-y-1.5 mb-6 pt-2 border-t border-[#1c1c1c]">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions (Real Working Buttons) */}
              <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveServiceDetails(service)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  <span>See Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/923099489168?text=${encodeURIComponent(
                    `Hello Aqeel, I am interested in ${service.title} (${service.startingPrice}). Please provide details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#262626] text-xs font-medium text-emerald-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Packaged All-in-One Discount Bundles */}
        <div className="mt-16 pt-12 border-t border-[#1f1f1f]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/50 inline-block mb-3">
              ✦ ALL-IN-ONE VALUE PACKAGES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Pre-Packaged Bundles for Maximum Growth
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2">
              Combine our services to get complete digital setup with discounted bundled rates and one single direct contact on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {discountBundles.map((b) => (
              <div
                key={b.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c0c0c] border border-[#222222] hover:border-blue-500/50 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${b.badgeColor}`}>
                      {b.badge}
                    </span>
                    <PackageCheck className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1.5">
                    {b.name}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {b.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#121212] border border-[#222222] mb-5">
                    <div className="text-2xl font-bold text-white tracking-tight">
                      {b.price}
                    </div>
                    <div className="text-[11px] text-blue-400 font-mono mt-0.5">
                      {b.priceDetail}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {b.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1a1a1a]">
                  <a
                    href={`https://wa.me/923099489168?text=${encodeURIComponent(b.whatsappText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Get This Bundle on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
