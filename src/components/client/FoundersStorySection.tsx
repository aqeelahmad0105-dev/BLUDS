import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  MessageSquare,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';

export const FoundersStorySection: React.FC = () => {
  const { founders } = useAgency();

  return (
    <section id="founders" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Who We Are & Why Businesses Trust Us
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2.5 leading-relaxed">
            We are a dedicated team of software and marketing specialists. When you hire BLUDS Agency, you talk and work directly with the founders building your project — no salesmen, no confusion, and no surprise bills.
          </p>
        </div>

        {/* Why Clients Choose Us Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-[#222222]">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider block mb-1">
              Our Promise to You
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              No Middlemen. No Confusing Tech Talk. 100% Yours.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Most software houses charge exorbitant prices, use confusing tech terms to make things sound complicated, and pass client work to junior interns. At BLUDS Agency, we do things differently:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct WhatsApp Contact</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Message Aqeel Ahmad and our founding partners anytime for fast updates and answers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Plain Language Only</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We explain everything simply so you always know what you are paying for and why.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You Own 100%</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Your domain, website files, Shopify store, and ad accounts belong completely to you.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fixed Honest Rates</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Transparent PKR rates with zero hidden markups or surprise maintenance bills.
              </p>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {founders.filter(f => f.active).map((founder, index) => (
            <div
              key={founder.id}
              className="p-5 rounded-2xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Photo and Status */}
                <div className="relative mb-4 flex items-center justify-between">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#262626] bg-[#141414]">
                    <img
                      src={founder.avatarUrl}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded">
                    Active Lead
                  </span>
                </div>

                {/* Name & Role */}
                <div className="mb-2">
                  <h3 className="text-base font-bold text-white">
                    {founder.name}
                  </h3>
                  <div className="text-xs text-blue-400 font-medium mt-0.5">
                    {founder.role}
                  </div>
                </div>

                <div className="text-xs text-neutral-300 font-medium mb-2">
                  Specialty: <span className="text-white">{founder.focus}</span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {founder.bio}
                </p>

                {/* Skills in Plain Words */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {founder.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-3 border-t border-[#1c1c1c]">
                <a
                  href={`https://wa.me/923099489168?text=${encodeURIComponent(
                    `Hello Aqeel, I saw ${founder.name}'s profile on BLUDS Agency and want to discuss a project.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1.5 px-2.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
