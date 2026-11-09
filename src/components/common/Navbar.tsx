import React, { useState, useEffect } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { Menu, X, ArrowUpRight, ChevronRight, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { siteSettings, navigate, currentRoute } = useAgency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services & Prices', href: '#services' },
    { label: 'Live Projects', href: '#case-studies' },
    { label: 'How It Works', href: '#process' },
    { label: 'About Us', href: '#founders' },
    { label: 'Price Calculator', href: '#estimator' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentRoute !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Banner */}
      {siteSettings.announcement.enabled && (
        <div className="bg-[#0c0c0c] border-b border-[#222222] text-xs py-2 px-4 relative z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="px-2 py-0.5 rounded bg-blue-950/40 text-blue-400 font-medium text-[11px] border border-blue-900/40 shrink-0">
                WHATSAPP: 03099489168
              </span>
              <span className="text-neutral-300 truncate">
                Ready to grow your business? We build websites, shop POS billing & run ads.
              </span>
            </div>
            <a
              href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20want%20to%20discuss%20a%20project%20with%20BLUDS%20Agency."
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors shrink-0 text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 bg-black border-b transition-colors duration-150 ${
          isScrolled ? 'border-[#222222] py-3' : 'border-[#1a1a1a] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('#top')}
              className="cursor-pointer"
            >
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-normal text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right WhatsApp / Call CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20want%20to%20discuss%20a%20project%20with%20BLUDS%20Agency."
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
                <span>WhatsApp: 03099489168</span>
              </a>

              <button
                onClick={() => handleNavClick('#contact')}
                className="px-3.5 py-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#2a2a2a] text-xs font-medium text-white transition-colors"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20want%20to%20discuss%20a%20project%20with%20BLUDS%20Agency."
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-[#25D366] text-black sm:hidden flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3 fill-black" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-neutral-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#222222] bg-[#0c0c0c] px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left py-2 px-3 text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20want%20to%20discuss%20a%20project%20with%20BLUDS%20Agency."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#25D366] text-black font-bold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
                <span>Chat on WhatsApp: 03099489168</span>
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-white font-medium text-xs text-center"
              >
                Send Us a Message
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
