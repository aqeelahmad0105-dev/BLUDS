import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { Shield, Github, Linkedin, Twitter, MapPin, Mail, Phone, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { siteSettings, navigate } = useAgency();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1f1f1f] text-neutral-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#1c1c1c]">
          
          {/* Identity */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                B
              </div>
              <span className="font-semibold text-sm text-white tracking-tight">
                {siteSettings.agencyName}
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {siteSettings.shortPitch}
            </p>
            <div className="text-[11px] text-neutral-500 font-mono pt-1">
              {siteSettings.operationalModel.currentPhase} • {siteSettings.operationalModel.nextMilestone}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-neutral-300 font-medium uppercase text-[11px]">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#technology')}
                  className="hover:text-white transition-colors text-left"
                >
                  Technology Benchmarks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#case-studies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Production Deployments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#estimator')}
                  className="hover:text-white transition-colors text-left text-blue-400"
                >
                  Scope Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-neutral-300 font-medium uppercase text-[11px]">
              Organization
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('#founders')}
                  className="hover:text-white transition-colors text-left"
                >
                  The 3 Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#process')}
                  className="hover:text-white transition-colors text-left"
                >
                  5-Stage Agile Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  FAQ & IP Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Schedule Discovery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-neutral-300 font-medium uppercase text-[11px]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteSettings.contactInfo.email}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {siteSettings.contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span className="font-mono">{siteSettings.contactInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{siteSettings.contactInfo.headquarters}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={siteSettings.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded bg-[#141414] border border-[#262626] flex items-center justify-center hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteSettings.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded bg-[#141414] border border-[#262626] flex items-center justify-center hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteSettings.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded bg-[#141414] border border-[#262626] flex items-center justify-center hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {siteSettings.agencyName}. All rights reserved. • Founded by Ghulam, Hamza & Daniyal
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Shield className="w-3 h-3 text-neutral-400" />
              Mutual Non-Disclosure Agreement (NDA) Protected
            </span>

            {/* Secret Entrance to /admin */}
            <button
              onClick={() => navigate('/admin')}
              title="Admin Portal (/admin)"
              className="text-neutral-600 hover:text-neutral-400 transition-colors p-1"
              aria-label="Admin Entrance"
            >
              <Lock className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
