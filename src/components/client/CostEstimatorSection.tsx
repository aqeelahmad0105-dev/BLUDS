import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  Check, 
  Clock, 
  Send,
  MessageSquare,
  ArrowUpRight,
  Printer,
  Download,
  Globe
} from 'lucide-react';

export const CostEstimatorSection: React.FC = () => {
  const { addInquiry } = useAgency();

  const [platform, setPlatform] = useState<string>('Website Development');
  const [scale, setScale] = useState<string>('Standard Business Launch');
  const [timeline, setTimeline] = useState<string>('Standard Delivery');
  const [currency, setCurrency] = useState<'PKR' | 'USD' | 'AED'>('PKR');
  const [addons, setAddons] = useState<string[]>([
    'Website Maintenance Retainer',
    'Domain & Cloud Hosting (Annual)'
  ]);

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currencyRates = {
    PKR: { symbol: 'Rs.', rate: 1 },
    USD: { symbol: '$', rate: 1 / 280 },
    AED: { symbol: 'AED', rate: 1 / 76 },
  };

  const formatPrice = (pkrAmount: number) => {
    const { symbol, rate } = currencyRates[currency];
    const converted = Math.round(pkrAmount * rate);
    return `${symbol} ${converted.toLocaleString()}`;
  };

  const platformOptions = [
    { id: 'Website Development', basePrice: 20000, weeks: 2, desc: 'Responsive website, modern UI, 3D polish, admin panel' },
    { id: 'POS Software (Point of Sale)', basePrice: 20000, weeks: 2, desc: 'Fast billing, inventory, barcode scanner & multi-counter POS' },
    { id: 'Social Media Management', basePrice: 20000, weeks: 4, desc: '12 engaging reels/mo, editing, trending audio & monthly reports' },
    { id: 'SEO Optimization', basePrice: 15000, weeks: 4, desc: 'On-page SEO, keyword ranking, GA4 & Google Search Console' },
    { id: 'Meta Ads & Google Ads Management', basePrice: 12000, weeks: 4, desc: 'High-ROI campaigns & creatives (ad spend paid by client)' },
    { id: 'Shopify Store Integration', basePrice: 5000, weeks: 1, desc: 'Shopify connection, payment gateway & catalog synchronization' },
  ];

  const scaleOptions = [
    { id: 'Standard Business Launch', multiplier: 1.0, weeksDelta: 0 },
    { id: 'Growth Tier (Enhanced Features)', multiplier: 1.25, weeksDelta: 1 },
    { id: 'Enterprise / Multi-Branch System', multiplier: 1.5, weeksDelta: 2 },
  ];

  const timelineOptions = [
    { id: 'Express Delivery (1 - 2 Weeks)', multiplier: 1.15 },
    { id: 'Standard Delivery', multiplier: 1.0 },
    { id: 'Flexible / Ongoing Retainer', multiplier: 0.95 },
  ];

  const addonOptions = [
    { id: 'Website Maintenance Retainer', price: 10000, desc: 'Rs. 10,000/mo ongoing maintenance, bug fixes & security updates' },
    { id: 'Domain & Cloud Hosting (Annual)', price: 7500, desc: 'Rs. 7,000 - 8,000/year for domain & high-speed cloud hosting' },
    { id: 'POS Cloud Sync & Support Subscription', price: 3000, desc: 'Rs. 3,000/mo cloud database backup & priority support' },
    { id: 'Shopify E-Commerce Connection', price: 5000, desc: 'Rs. 5,000 one-time Shopify store connection & checkout setup' },
    { id: 'SEO Monthly Growth Retainer', price: 15000, desc: 'Rs. 15,000/mo keyword ranking, backlinks & organic growth reports' },
    { id: 'Meta & Google Ads Campaign Management', price: 12000, desc: 'Rs. 12,000/mo ad campaign management (client pays ad spend)' },
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedPlatform = platformOptions.find((p) => p.id === platform) || platformOptions[0];
  const selectedScale = scaleOptions.find((s) => s.id === scale) || scaleOptions[0];
  const selectedTimeline = timelineOptions.find((t) => t.id === timeline) || timelineOptions[1];

  const addonsTotal = addons.reduce((sum, id) => {
    const addon = addonOptions.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const rawTotal = (selectedPlatform.basePrice * selectedScale.multiplier * selectedTimeline.multiplier) + addonsTotal;
  const minEstimated = Math.round((rawTotal * 0.95) / 500) * 500;
  const maxEstimated = Math.round((rawTotal * 1.10) / 500) * 500;
  const estimatedWeeks = Math.max(1, selectedPlatform.weeks + selectedScale.weeksDelta);

  const handleSubmitEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;

    addInquiry({
      clientName: clientName.trim(),
      email: clientEmail.trim(),
      projectType: platform,
      budgetRange: `Rs. ${minEstimated.toLocaleString()} - Rs. ${maxEstimated.toLocaleString()}`,
      timeline: timeline,
      message: `Configured via Cost Estimator: Platform: ${platform} | Scale: ${scale} | Selected Add-ons: ${addons.join(', ')}. Estimated duration: ${estimatedWeeks} weeks.`,
      source: 'cost_estimator',
      priority: 'high',
      estimatedScope: `Budget: Rs. ${minEstimated.toLocaleString()} - Rs. ${maxEstimated.toLocaleString()} (${estimatedWeeks} weeks). Add-ons: ${addons.length} selected.`,
    });

    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-20 bg-black border-t border-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Price Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Instant Price & Delivery Calculator
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Pick what your business needs below to calculate an honest, fixed price estimate. You can send this directly to Aqeel Ahmad on WhatsApp for instant confirmation.
          </p>
        </div>

        {/* Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Step 1: Platform */}
            <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-300">1. Select What You Need Built</span>
                <span className="font-mono text-blue-400">Select one</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPlatform(opt.id)}
                    className={`flex items-start justify-between p-3 rounded-lg border text-left transition-colors ${
                      platform === opt.id
                        ? 'bg-blue-950/40 border-blue-500 text-white'
                        : 'bg-[#111111] border-[#222222] hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-medium text-white flex items-center gap-1.5">
                        {platform === opt.id && <Check className="w-3.5 h-3.5 text-blue-400" />}
                        <span>{opt.id}</span>
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{opt.desc}</div>
                    </div>
                    <span className="text-xs font-mono text-neutral-300 shrink-0 ml-2">
                      Rs. {opt.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-3">
              <span className="text-xs font-medium text-neutral-300 block">
                2. Project Scope & Speed
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scaleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setScale(opt.id)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      scale === opt.id
                        ? 'bg-blue-950/40 border-blue-500 text-white'
                        : 'bg-[#111111] border-[#222222] hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    <div className="text-xs font-medium leading-snug">
                      {opt.id}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-3">
              <span className="text-xs font-medium text-neutral-300 block">
                3. Extra Services & Monthly Subscriptions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addonOptions.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border text-left transition-colors flex flex-col justify-between ${
                        isChecked
                          ? 'bg-blue-950/40 border-blue-500 text-white'
                          : 'bg-[#111111] border-[#222222] hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-medium mb-1">
                          <span>{addon.id}</span>
                          <span className="text-neutral-400 font-mono">+Rs. {addon.price.toLocaleString()}</span>
                        </div>
                        <div className="text-[11px] text-neutral-400 leading-snug">
                          {addon.desc}
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] text-neutral-400 flex items-center gap-1 font-mono">
                        <span className={`w-3 h-3 rounded flex items-center justify-center ${isChecked ? 'bg-blue-600 text-white' : 'border border-neutral-600'}`}>
                          {isChecked && <Check className="w-2.5 h-2.5" />}
                        </span>
                        <span>{isChecked ? 'Included' : 'Click to add'}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#1f1f1f]">
                <span className="text-xs font-medium text-neutral-300">
                  Estimated Summary
                </span>

                {/* Currency Switcher */}
                <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#141414] border border-[#262626] text-[11px] font-mono">
                  {(['PKR', 'USD', 'AED'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currency === curr
                          ? 'bg-blue-600 text-white font-medium shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Projection */}
              <div>
                <div className="text-xs text-neutral-400">Total Estimated Price ({currency})</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {formatPrice(minEstimated)} - {formatPrice(maxEstimated)}
                </div>
                <div className="text-xs text-neutral-400 mt-1 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Ready in ~{estimatedWeeks} Weeks</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                    title="Print or Save PDF Quotation"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / PDF Quote</span>
                  </button>
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-2 pt-3 border-t border-[#1f1f1f] text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-medium text-white">{platform}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Scope:</span>
                  <span className="font-medium text-white">{scale.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Add-ons:</span>
                  <span className="font-medium text-blue-400">{addons.length} selected</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Lead Review:</span>
                  <span className="font-medium text-white">Aqeel Ahmad (03099489168)</span>
                </div>
              </div>

              {/* Dispatch Form */}
              <div className="pt-3 border-t border-[#1f1f1f]">
                {submitted ? (
                  <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-600/40 text-center space-y-2.5">
                    <div className="text-xs font-bold text-white">Quote Saved & Ready</div>
                    <p className="text-xs text-neutral-300">
                      Send your quote directly to Aqeel Ahmad on WhatsApp for instant confirmation:
                    </p>
                    <a
                      href={`https://wa.me/923099489168?text=${encodeURIComponent(
                        `*Project Estimate - BLUDS Agency*\n\n` +
                        `👤 *Client Name:* ${clientName}\n` +
                        `📧 *Email:* ${clientEmail}\n` +
                        `🛠️ *Service:* ${platform}\n` +
                        `📈 *Scope:* ${scale}\n` +
                        `🧩 *Selected Add-ons:* ${addons.join(', ') || 'None'}\n` +
                        `💰 *Estimated Price:* Rs. ${minEstimated.toLocaleString()} - Rs. ${maxEstimated.toLocaleString()}\n` +
                        `⏱️ *Delivery Time:* ~${estimatedWeeks} Weeks`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-black" />
                      <span>Send Quote to Aqeel on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEstimate} className="space-y-2.5">
                    <span className="text-xs text-neutral-300 block font-medium">
                      Enter details to send quote to Aqeel Ahmad:
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name / Business"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="your-email@gmail.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Calculate & Send Quote to Aqeel</span>
                    </button>
                    <p className="text-[10px] text-center text-neutral-500 font-mono">
                      Direct WhatsApp: 03099489168 • Email: m.bluds2@gmail.com
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
