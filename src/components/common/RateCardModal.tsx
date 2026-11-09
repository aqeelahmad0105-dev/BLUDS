import React from 'react';
import { 
  Printer, 
  X, 
  CheckCircle2, 
  Download, 
  MessageSquare, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';

interface RateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RateCardModal: React.FC<RateCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity" />

      {/* Printable Sheet */}
      <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-[#262626] rounded-2xl overflow-hidden z-10 shadow-2xl flex flex-col text-white max-h-[90vh]">
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1f1f1f] bg-[#121212] print:hidden">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/50">
              OFFICIAL RATE CARD 2026
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline">
              Printable 1-Page Corporate Pricing Sheet
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#0c0c0c] text-white">
          
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#222222]">
            <div className="space-y-2">
              <Logo size="lg" />
              <div className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Digital Engineering, Shop Billing Systems & Performance Marketing.
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1 font-mono">
              <div className="text-white font-bold text-sm">BLUDS AGENCY</div>
              <div className="text-neutral-300">Lead Contact: <strong>Aqeel Ahmad</strong></div>
              <div className="text-emerald-400 font-semibold">WhatsApp: 03099489168</div>
              <div className="text-neutral-400">Email: m.bluds2@gmail.com</div>
              <div className="text-neutral-500 text-[10px]">Valid Across Pakistan • 2026 Schedule</div>
            </div>
          </div>

          {/* Core Services Rates Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              1. Individual Service Rates (Fixed Honest Pricing)
            </h4>

            <div className="overflow-x-auto rounded-xl border border-[#222222]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#141414] text-neutral-400 font-mono text-[11px] border-b border-[#222222]">
                  <tr>
                    <th className="py-2.5 px-3.5">Service</th>
                    <th className="py-2.5 px-3.5">Initial Setup</th>
                    <th className="py-2.5 px-3.5">Monthly / Subscription</th>
                    <th className="py-2.5 px-3.5">Delivery Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1c1c1c] text-neutral-300">
                  <tr className="hover:bg-[#111111]">
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      Custom Website Development
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-emerald-400 font-semibold">
                      Rs. 20,000 (one-time)
                    </td>
                    <td className="py-2.5 px-3.5 font-mono">
                      Rs. 10,000/mo <span className="text-[10px] text-neutral-500">(+ Rs. 7k-8k/yr hosting)</span>
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-400">1 - 2 Weeks</td>
                  </tr>

                  <tr className="hover:bg-[#111111]">
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      POS Software (Shop & Supermarket Billing)
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-emerald-400 font-semibold">
                      Rs. 20,000 (one-time)
                    </td>
                    <td className="py-2.5 px-3.5 font-mono">
                      Rs. 3,000/mo <span className="text-[10px] text-neutral-500">(cloud backup & sync)</span>
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-400">1 - 2 Weeks</td>
                  </tr>

                  <tr className="hover:bg-[#111111]">
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      Shopify E-Commerce Store Setup
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-emerald-400 font-semibold">
                      Rs. 5,000 (one-time)
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-500">
                      None <span className="text-[10px]">(Cash on Delivery included)</span>
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-400">2 - 3 Days</td>
                  </tr>

                  <tr className="hover:bg-[#111111]">
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      Google Page-1 SEO Optimization
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-500">
                      Included
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-emerald-400 font-semibold">
                      Rs. 15,000/month
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-400">Monthly Sprints</td>
                  </tr>

                  <tr className="hover:bg-[#111111]">
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      Meta (FB & IG) + Google Ads Scaling
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-500">
                      Included
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-emerald-400 font-semibold">
                      Rs. 12,000/month <span className="text-[10px] text-neutral-500">(ad spend by client)</span>
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-400">Ongoing Sprints</td>
                  </tr>

                  <tr className="hover:bg-[#111111]">
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      Social Media Management (12 Video Reels)
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-500">
                      Included
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-emerald-400 font-semibold">
                      Rs. 20,000/month <span className="text-[10px] text-neutral-500">(12 produced reels)</span>
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-neutral-400">Monthly Sprints</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pre-Packaged Bundles */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2. Popular Pre-Packaged Discount Bundles</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Retail Shop Bundle</span>
                <div className="text-sm font-bold text-white">POS Software + Website</div>
                <div className="text-xs text-emerald-400 font-mono font-bold">Rs. 35,000 <span className="line-through text-neutral-500 text-[10px]">Rs. 40,000</span></div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Save Rs. 5,000 setup. Full supermarket POS barcode setup + mobile-friendly business website.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">E-Commerce Brand Bundle</span>
                <div className="text-sm font-bold text-white">Shopify + Ads + 12 Reels</div>
                <div className="text-xs text-emerald-400 font-mono font-bold">Rs. 32,000/mo <span className="text-[10px] text-neutral-500">+ Rs. 5k setup</span></div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Complete store + daily Meta ads management + 12 viral video reels edited with hooks.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Full Authority Bundle</span>
                <div className="text-sm font-bold text-white">Website + SEO + 12 Reels</div>
                <div className="text-xs text-emerald-400 font-mono font-bold">Rs. 40,000/mo <span className="text-[10px] text-neutral-500">+ Rs. 20k setup</span></div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Custom high-speed website, Page-1 Google search ranking, and active social media presence.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Client Ownership from Day 1 (No Hostage Fees)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct Founder Supervision (Ghulam, Hamza, Daniyal, Aqeel)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fixed Honest PKR Rates (Zero Surprise Invoices)</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Call to Action */}
        <div className="p-4 sm:p-5 border-t border-[#1f1f1f] bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs print:hidden">
          <div className="text-neutral-400">
            Need a custom proposal or SLA contract? Message Aqeel Ahmad directly:
          </div>
          <a
            href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20am%20looking%20at%20the%20BLUDS%20Agency%20Official%20Rate%20Card%20and%20want%20to%20book%20a%20service."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>Book via WhatsApp (03099489168)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
