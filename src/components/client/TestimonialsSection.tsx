import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useAgency();

  const activeReviews = testimonials.filter((t) => t.active);

  return (
    <section className="py-20 bg-black border-t border-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Leaders Say
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Direct feedback from CTOs and engineering directors who scaled their platforms with our 3-founder squad.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-3 border-t border-[#1c1c1c] flex items-center gap-3">
                <img
                  src={review.avatarUrl}
                  alt={review.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-[#262626] shrink-0 bg-[#141414]"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold text-white truncate">
                    {review.clientName}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    {review.role}, <span className="text-neutral-200">{review.company}</span>
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    Engagement: {review.projectDelivered}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
