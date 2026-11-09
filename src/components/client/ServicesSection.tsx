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
} from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-5 w-5" />,
  Search: <Search className="h-5 w-5" />,
  Megaphone: <Megaphone className="h-5 w-5" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5" />,
  Video: <Video className="h-5 w-5" />,
  Store: <Store className="h-5 w-5" />,
  Code2: <Code2 className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
};

export const ServicesSection: React.FC = () => {
  const { services, setActiveServiceDetails } = useAgency();
  const activeServices = services.filter((service) => service.active);

  return (
    <section id="services" className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-2 block text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
            Services & Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Clear services. Clear pricing.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
            Explore each service, its starting price, and what is included. Contact us directly for a scope tailored to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-lime-500 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-800">
                    {serviceIcons[service.iconName] || <Users className="h-5 w-5" />}
                  </div>
                  {service.badge && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>

                {service.startingPrice && (
                  <div className="my-5 rounded-xl border border-lime-200 bg-lime-50 p-3.5">
                    <span className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-lime-800">
                      Starting price
                    </span>
                    <span className="mt-1 block text-base font-bold text-slate-900">
                      {service.startingPrice}
                    </span>
                  </div>
                )}

                <ul className="mb-6 space-y-2 border-t border-slate-200 pt-4">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveServiceDetails(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 transition-colors hover:text-lime-800"
                >
                  Full service details <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`https://wa.me/923099489168?text=${encodeURIComponent(`Hello Aqeel, I am interested in ${service.title} (${service.startingPrice}). Please provide details.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[#25D366] px-3 py-2 text-xs font-bold text-black transition-colors hover:bg-[#20bd5a]"
                >
                  Ask about this
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
