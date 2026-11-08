import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  Check, 
  Clock, 
  Send
} from 'lucide-react';

export const CostEstimatorSection: React.FC = () => {
  const { addInquiry } = useAgency();

  const [platform, setPlatform] = useState<string>('Full-Stack Web App & SaaS');
  const [scale, setScale] = useState<string>('High-Growth MVP (Sprint 1-4)');
  const [timeline, setTimeline] = useState<string>('Standard (6 - 10 Weeks)');
  const [addons, setAddons] = useState<string[]>(['Autonomous AI Integration', 'DevOps CI/CD Automation']);

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const platformOptions = [
    { id: 'Full-Stack Web App & SaaS', basePrice: 6000, weeks: 6, desc: 'Next.js 14, TypeScript, PostgreSQL, REST/GraphQL' },
    { id: 'Mobile App (iOS & Android)', basePrice: 7500, weeks: 7, desc: 'Flutter cross-platform, biometric auth, offline sync' },
    { id: 'Applied AI & LLM Systems', basePrice: 7000, weeks: 5, desc: 'RAG knowledge base, vector DB, autonomous agents' },
    { id: 'Cloud & DevOps Architecture', basePrice: 4500, weeks: 4, desc: 'Kubernetes, AWS, Terraform, auto-scaling clusters' },
    { id: 'Full Enterprise Re-platform', basePrice: 12000, weeks: 10, desc: 'Complete legacy rewrite to modern distributed cloud' },
  ];

  const scaleOptions = [
    { id: 'Proof-of-Concept / Prototype', multiplier: 0.85, weeksDelta: -2 },
    { id: 'High-Growth MVP (Sprint 1-4)', multiplier: 1.0, weeksDelta: 0 },
    { id: 'Enterprise Tier (SOC2 & Scale)', multiplier: 1.45, weeksDelta: 3 },
  ];

  const timelineOptions = [
    { id: 'Express Speed (4 - 6 Weeks)', multiplier: 1.15 },
    { id: 'Standard (6 - 10 Weeks)', multiplier: 1.0 },
    { id: 'Flexible / Ongoing Retainer', multiplier: 0.95 },
  ];

  const addonOptions = [
    { id: 'Autonomous AI Integration', price: 2000, desc: 'OpenAI/Claude LLM prompt flows & custom embeddings' },
    { id: 'DevOps CI/CD Automation', price: 1200, desc: 'Zero-downtime GitHub Actions deployment to AWS/GCP' },
    { id: '24/7 SLA & Incident Response', price: 1500, desc: 'Guaranteed 15-min uptime monitoring by founders' },
    { id: 'High-End 3D & WebGL Polish', price: 1800, desc: 'Interactive visual models & product demos' },
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
  const minEstimated = Math.round((rawTotal * 0.9) / 500) * 500;
  const maxEstimated = Math.round((rawTotal * 1.15) / 500) * 500;
  const estimatedWeeks = Math.max(3, selectedPlatform.weeks + selectedScale.weeksDelta);

  const handleSubmitEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;

    addInquiry({
      clientName: clientName.trim(),
      email: clientEmail.trim(),
      projectType: platform,
      budgetRange: `$${minEstimated.toLocaleString()} - $${maxEstimated.toLocaleString()}`,
      timeline: timeline,
      message: `Configured via Cost Estimator: Platform: ${platform} | Scale: ${scale} | Selected Add-ons: ${addons.join(', ')}. Estimated duration: ${estimatedWeeks} weeks.`,
      source: 'cost_estimator',
      priority: 'high',
      estimatedScope: `Budget: $${minEstimated.toLocaleString()} - $${maxEstimated.toLocaleString()} (${estimatedWeeks} weeks). Add-ons: ${addons.length} selected.`,
    });

    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-20 bg-black border-t border-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Scope Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Project Sizing & Investment Forecast
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Select your technical parameters to calculate an initial timeline and investment projection.
          </p>
        </div>

        {/* Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Step 1: Platform */}
            <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-300">1. Architecture / Platform</span>
                <span className="font-mono">Required</span>
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
                      ~${opt.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-3">
              <span className="text-xs font-medium text-neutral-300 block">
                2. Concurrency & Scale Tier
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
                3. Technical Add-ons & SLA
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
                          <span className="text-neutral-400 font-mono">+${addon.price}</span>
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
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  Fixed Milestone Sprints
                </span>
              </div>

              {/* Price Projection */}
              <div>
                <div className="text-xs text-neutral-400">Estimated Investment Bracket</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  ${minEstimated.toLocaleString()} - ${maxEstimated.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-400 mt-1 flex items-center gap-2 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Estimated {estimatedWeeks} Weeks to Production</span>
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-2 pt-3 border-t border-[#1f1f1f] text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Platform:</span>
                  <span className="font-medium text-white">{platform}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Scale Tier:</span>
                  <span className="font-medium text-white">{scale.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Add-ons:</span>
                  <span className="font-medium text-blue-400">{addons.length} selected</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Supervision:</span>
                  <span className="font-medium text-neutral-300">Ghulam, Hamza & Daniyal</span>
                </div>
              </div>

              {/* Dispatch Form */}
              <div className="pt-3 border-t border-[#1f1f1f]">
                {submitted ? (
                  <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-600/40 text-center space-y-1">
                    <div className="text-xs font-bold text-white">Specification Received</div>
                    <p className="text-xs text-neutral-300">
                      The founders will review this estimate and reply to <span className="text-blue-400 font-mono">{clientEmail}</span> within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEstimate} className="space-y-2.5">
                    <span className="text-xs text-neutral-300 block font-medium">
                      Submit estimate directly to the 3 founders:
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name / Company"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="work-email@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-medium text-white transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Specification to Founders</span>
                    </button>
                    <p className="text-[10px] text-center text-neutral-500 font-mono">
                      Strict Mutual NDA Guarantee • Zero Spam
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
