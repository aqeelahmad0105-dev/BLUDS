import React, { useEffect, useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { ChevronDown, Menu, X, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

const primaryLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#case-studies' },
  { label: 'How It Works', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const moreLinks = [
  { label: 'Tools & Platforms', href: '#technology' },
  { label: 'About Us', href: '#founders' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Navbar: React.FC = () => {
  const { navigate, currentRoute } = useAgency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#top');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        '#top, #services, #case-studies, #testimonials, #process, #contact, #technology, #founders'
      )
    );
    if (!sections.length) return;

    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const visibleSections = sections.filter((section) => {
        const disclosure = section.closest('details');
        return !disclosure || disclosure.open;
      });
      if (!visibleSections.length) return;
      const activationLine = (document.querySelector('header')?.getBoundingClientRect().height ?? 0) + 32;
      let active = visibleSections[0];

      for (const section of visibleSections) {
        if (section.getBoundingClientRect().top > activationLine) break;
        active = section;
      }

      setActiveSection(`#${active.id}`);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setMoreOpen(false);
    const scrollToSection = () => {
      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;

      const disclosure = section.closest('details');
      if (disclosure) disclosure.open = true;

      window.requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    if (currentRoute !== '/') {
      navigate('/');
      window.setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  const linkClass = (href: string) =>
    `rounded-lg px-3 py-2 text-sm transition-colors ${
      activeSection === href
        ? 'bg-blue-600 text-white font-semibold'
        : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
    }`;
  const isMoreActive = moreLinks.some((link) => link.href === activeSection);
  const moreButtonClass = `rounded-lg px-3 py-2 text-sm transition-colors inline-flex items-center gap-1 ${
    isMoreActive
      ? 'bg-blue-600 text-white font-semibold'
      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
  }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#222222] bg-black backdrop-blur transition-shadow ${
        isScrolled ? 'shadow-md shadow-slate-900/5' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[68px] items-center justify-between gap-4">
          <button type="button" onClick={() => handleNavClick('#top')} aria-label="BLUDS Agency home">
            <Logo size="md" showWordmark />
          </button>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {primaryLinks.map((link) => (
              <button key={link.href} type="button" onClick={() => handleNavClick(link.href)} className={linkClass(link.href)}>
                {link.label}
              </button>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                aria-expanded={moreOpen}
                className={moreButtonClass}
              >
                More <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-[#222222] bg-[#0c0c0c] p-2 shadow-xl">
                  {moreLinks.map((link) => (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={`block w-full text-left ${linkClass(link.href)}`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="https://wa.me/923099489168"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-3.5 py-2 text-xs font-bold text-black transition-colors hover:bg-[#20bd5a]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp: 03099489168</span>
            </a>
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className="rounded-lg border border-[#2a2a2a] bg-[#141414] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Get a Quote
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg border border-[#262626] bg-[#141414] p-2 text-neutral-300 hover:text-white lg:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="space-y-1 border-t border-[#222222] bg-[#0c0c0c] py-3 lg:hidden">
            {primaryLinks.map((link) => (
              <button key={link.href} type="button" onClick={() => handleNavClick(link.href)} className={`block w-full text-left ${linkClass(link.href)}`}>
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setMoreOpen((open) => !open)}
              aria-expanded={moreOpen}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                isMoreActive
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              More <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && moreLinks.map((link) => (
              <button key={link.href} type="button" onClick={() => handleNavClick(link.href)} className={`block w-full pl-6 text-left ${linkClass(link.href)}`}>
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/923099489168"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-2.5 text-sm font-bold text-black"
            >
              <MessageSquare className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
