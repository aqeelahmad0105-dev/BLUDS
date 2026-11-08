import React, { useState, useEffect } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

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
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#technology' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Founders', href: '#founders' },
    { label: 'Process', href: '#process' },
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
                {siteSettings.announcement.tag}
              </span>
              <span className="text-neutral-300 truncate">
                {siteSettings.announcement.text}
              </span>
            </div>
            <a
              href={siteSettings.announcement.actionTarget}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(siteSettings.announcement.actionTarget);
              }}
              className="hidden md:inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors shrink-0 text-xs"
            >
              <span>{siteSettings.announcement.actionText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 bg-black border-b transition-colors duration-150 ${
          isScrolled ? 'border-[#222222] py-3.5' : 'border-[#1a1a1a] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('#top')}
              className="cursor-pointer flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                B
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-semibold text-base text-white tracking-tight">
                  BLUDS
                </span>
                <span className="text-xs text-neutral-400 font-normal">
                  Agency
                </span>
              </div>
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

            {/* Right CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium text-white transition-colors flex items-center gap-1.5"
              >
                <span>Schedule Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-600 text-white sm:hidden"
              >
                Contact
              </button>
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
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm text-center"
              >
                Schedule Architecture Call
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
