import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { siteSettings, addInquiry, services } = useAgency();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState(services[0]?.title || 'Custom Enterprise Software & SaaS');
  const [budgetRange, setBudgetRange] = useState('$25,000 - $50,000');
  const [timeline, setTimeline] = useState('Within 2 Months');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    addInquiry({
      clientName: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      company: company.trim() || undefined,
      projectType,
      budgetRange,
      timeline,
      message: message.trim(),
      source: 'contact_form',
      priority: 'high',
      estimatedScope: `Targeting ${timeline} launch with ${budgetRange} allocation.`,
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Discovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Schedule an Architecture Call
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Have a project in mind, an existing system to refactor, or an AI system to deploy? Submit your brief below. Ghulam, Hamza, and Daniyal personally review every submission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0c0c0c] border border-[#222222]">
              
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Brief Received by the 3 Founders
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. We will review your architecture specifications and reply to <span className="font-mono text-blue-400">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-[#141414] hover:bg-neutral-800 text-xs text-neutral-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Work / Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Company or Project
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enterprise Inc."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Primary Capability Needed
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        {services.filter(s => s.active).map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Budget Allocation
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="$5,000 - $15,000">$5,000 - $15,000 (MVP Prototype)</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000 (Growth Tier)</option>
                        <option value="$30,000 - $60,000">$30,000 - $60,000 (Enterprise Scale)</option>
                        <option value="$60,000+">$60,000+ (Full Modernization)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Target Launch Window
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Immediate (1-2 wks)', 'Within 2 Months', '3+ Months'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                            timeline === t
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'bg-[#141414] border-[#262626] text-neutral-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Technical Scope & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline what you are building, existing infrastructure, target concurrency, and key milestones..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch RFP to Ghulam, Hamza & Daniyal</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Protected by Mutual Non-Disclosure Agreement (NDA)</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right: Founder Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-4">
              <div>
                <h3 className="text-base font-semibold text-white">
                  Direct Engineering Communication
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  You interface directly with the engineers designing and writing your production software.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#1c1c1c] text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">Direct Email</div>
                    <a
                      href={`mailto:${siteSettings.contactInfo.email}`}
                      className="font-mono text-white hover:text-blue-400 transition-colors"
                    >
                      {siteSettings.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">Telephone & WhatsApp</div>
                    <div className="font-mono text-white">
                      {siteSettings.contactInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">Response Window</div>
                    <div className="text-neutral-300">
                      Within 12 to 24 hours guaranteed
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">Operating Model</div>
                    <div className="text-neutral-300">
                      {siteSettings.contactInfo.headquarters}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Standard */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#222222] text-xs text-neutral-300 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>Founder Sprint Guarantee</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                If deliverables do not match the approved architecture blueprint in Sprint 1, we rework them at zero additional cost.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
