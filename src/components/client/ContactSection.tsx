import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { sendInquiryEmail } from '../../services/emailService';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { siteSettings, addInquiry, services } = useAgency();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState(services[0]?.title || 'Website Development');
  const [budgetRange, setBudgetRange] = useState('Rs. 20,000 - 50,000');
  const [timeline, setTimeline] = useState('Immediate (1-2 wks)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState<string | null>(null);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');
  const [submittedMailtoUrl, setSubmittedMailtoUrl] = useState('');

  const targetWhatsAppNumber = '923099489168'; // Aqeel Ahmad: 03099489168
  const targetEmail = 'm.bluds2@gmail.com';

  const generateWhatsAppMessage = () => {
    return (
      `*New Project Inquiry - BLUDS Agency*\n\n` +
      `👤 *Client Name:* ${name.trim()}\n` +
      `📧 *Email:* ${email.trim()}\n` +
      `📱 *Phone / WhatsApp:* ${phone.trim() || 'Not provided'}\n` +
      (company.trim() ? `🏢 *Company:* ${company.trim()}\n` : '') +
      `🛠️ *Service Required:* ${projectType}\n` +
      `💰 *Budget Range:* ${budgetRange}\n` +
      `⏱️ *Target Window:* ${timeline}\n\n` +
      `💬 *Project Scope & Details:*\n${message.trim()}`
    );
  };

  const generateEmailSubject = () => {
    return `New Project Inquiry: ${projectType} - ${name.trim()}`;
  };

  const generateEmailBody = () => {
    return (
      `Hi Aqeel Ahmad,\n\n` +
      `I am submitting an inquiry via the BLUDS Agency contact form:\n\n` +
      `Client Name: ${name.trim()}\n` +
      `Email: ${email.trim()}\n` +
      `Phone/WhatsApp: ${phone.trim() || 'Not provided'}\n` +
      (company.trim() ? `Company: ${company.trim()}\n` : '') +
      `Service Required: ${projectType}\n` +
      `Budget Range: ${budgetRange}\n` +
      `Target Launch Window: ${timeline}\n\n` +
      `Project Scope & Details:\n${message.trim()}\n\n` +
      `Best regards,\n${name.trim()}`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSendingEmail(true);

    // 1. Record inquiry in Agency state / Admin Dashboard
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
      estimatedScope: `Targeting ${timeline} launch with ${budgetRange} allocation. Direct connect to Aqeel Ahmad.`,
    });

    // 2. Build live WhatsApp & Mailto links
    const waUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`;
    const mailUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(generateEmailSubject())}&body=${encodeURIComponent(generateEmailBody())}`;

    setSubmittedWhatsAppUrl(waUrl);
    setSubmittedMailtoUrl(mailUrl);

    // 3. Automated Serverless Background Email Dispatch
    try {
      const emailResult = await sendInquiryEmail(
        {
          clientName: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          company: company.trim() || undefined,
          projectType,
          budgetRange,
          timeline,
          message: message.trim()
        },
        siteSettings.emailConfig
      );

      setEmailStatusMessage(emailResult.message);
    } catch {
      setEmailStatusMessage('Inquiry queued for Aqeel Ahmad (m.bluds2@gmail.com)');
    } finally {
      setIsSendingEmail(false);
      setSubmitted(true);
    }

    // 4. Automatically launch WhatsApp in new tab for instant connection
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback if popup blocked
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
              Direct Contact & Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Connect with Aqeel Ahmad
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Have a project in mind, an existing system to refactor, or an urgent inquiry? Submit your brief below or connect directly on WhatsApp (<span className="text-white font-mono">03099489168</span>) and Email (<span className="text-white font-mono">m.bluds2@gmail.com</span>).
            </p>
          </div>

          {/* Quick WhatsApp Action Button */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent('Hello Aqeel, I am reaching out from BLUDS Agency website.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Direct WhatsApp: 03099489168</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0c0c0c] border border-[#222222]">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Brief Logged & Ready to Dispatch
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mt-1 leading-relaxed">
                      Thank you, <strong className="text-white">{name}</strong>. Your project brief has been recorded. For the fastest response, send it directly to Aqeel Ahmad via WhatsApp or Email:
                    </p>
                  </div>

                  {/* Direct Action Buttons on Success */}
                  <div className="space-y-2.5 max-w-md mx-auto pt-2">
                    {/* Automated Background Dispatch Status */}
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 font-mono flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        {emailStatusMessage || 'Automated background email dispatched to m.bluds2@gmail.com!'}
                      </span>
                    </div>

                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Open WhatsApp Chat Directly (03099489168)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={submittedMailtoUrl}
                      className="w-full py-3 px-4 rounded-lg bg-[#141414] hover:bg-neutral-800 border border-[#2a2a2a] text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span>Open Desktop Email Client (m.bluds2@gmail.com)</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#1c1c1c]">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
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
                        placeholder="Aqeel Ahmad / Client Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your-email@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your Brand or Startup"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Service Required
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
                        <option value="Rs. 5,000 - 20,000">Rs. 5,000 - 20,000 (Shopify / Setup / Ads)</option>
                        <option value="Rs. 20,000 - 50,000">Rs. 20,000 - 50,000 (Website / POS / SEO Package)</option>
                        <option value="Rs. 50,000 - 100,000">Rs. 50,000 - 100,000 (Full-Stack Package & Marketing)</option>
                        <option value="Rs. 100,000+">Rs. 100,000+ (Multi-Service Enterprise Retainer)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Target Launch Window
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Immediate (1-2 wks)', 'Within 1 Month', 'Flexible'].map((t) => (
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
                      Project Scope & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project, target audience, feature requirements, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSendingEmail}
                    className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-75 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-950/40"
                  >
                    {isSendingEmail ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>Dispatching Email & Connecting WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Project Brief (Dispatches Email & Opens WhatsApp)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Direct connection to Aqeel Ahmad (WhatsApp: 03099489168 • Email: m.bluds2@gmail.com)</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] space-y-4">
              <div>
                <span className="text-[10px] font-mono font-medium text-blue-400 uppercase tracking-wider block mb-1">
                  Lead Contact
                </span>
                <h3 className="text-xl font-bold text-white">
                  Aqeel Ahmad
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Direct lead contact for client discovery, custom quotes, website development, and business automation.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#1c1c1c] text-xs">
                {/* WhatsApp & Phone */}
                <div className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                        <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-400 font-mono">WhatsApp & Phone</div>
                        <a 
                          href={`https://wa.me/${targetWhatsAppNumber}`}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-white font-medium hover:text-[#25D366] transition-colors"
                        >
                          03099489168
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent('Hello Aqeel, I would like to discuss a project with BLUDS Agency.')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-[10px] transition-colors flex items-center gap-1"
                    >
                      <span>Chat</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    International: <span className="font-mono text-neutral-200">+92 309 9489168</span>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-400 font-mono">Direct Email</div>
                        <a
                          href={`mailto:${targetEmail}`}
                          className="font-mono text-white font-medium hover:text-blue-400 transition-colors text-xs"
                        >
                          {targetEmail}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`mailto:${targetEmail}?subject=${encodeURIComponent('Project Inquiry - BLUDS Agency')}`}
                      className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-[10px] transition-colors flex items-center gap-1"
                    >
                      <span>Mail</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Operating Model & Availability */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300">
                    <Clock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">Availability</div>
                    <div className="text-white text-xs">
                      24/7 Direct WhatsApp & Sprint Delivery
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">Operating Hub</div>
                    <div className="text-neutral-300 text-xs">
                      Online Global Engine (Expanding Onsite 2026)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Standard */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#222222] text-xs text-neutral-300 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Founder Consultation</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Connect directly with Aqeel Ahmad to get a custom roadmap, pricing proposal, and architectural plan within hours.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
