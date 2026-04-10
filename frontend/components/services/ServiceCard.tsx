import Link from "next/link";

type Props = {
  name: string;
  description?: string | null;
  price: number;
  duration: number;
};

const serviceConfig: Record<string, { gradient: string; emoji: string }> = {
  "Hair Artistry": {
    gradient: "from-[#9C4A5E] via-[#7C3347] to-[#201A17]",
    emoji: "✂️",
  },
  "Skin Rituals": {
    gradient: "from-[#C4956A] via-[#9C4A5E] to-[#7C6660]",
    emoji: "🌿",
  },
  "Nail Studio": {
    gradient: "from-[#201A17] via-[#3D2B25] to-[#7C6660]",
    emoji: "💅",
  },
  "Soul & Wellness": {
    gradient: "from-[#7C6660] via-[#9C4A5E] to-[#201A17]",
    emoji: "🕯️",
  },
};

export function ServiceCard({ name, description, price, duration }: Props) {
  const config = serviceConfig[name] || {
    gradient: "from-[#9C4A5E] to-[#201A17]",
    emoji: "✨",
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-md border border-black/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">

      {/* Gradient Top Section */}
      <div className={`relative h-52 w-full bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}>
        
        {/* Decorative Circles */}
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/5" />

        {/* Emoji Icon */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <span className="text-6xl transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg">
            {config.emoji}
          </span>
          <div className="h-px w-12 bg-white/30" />
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg">
          <span className="text-sm font-bold text-[#9C4A5E]">${price}</span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
          <span className="text-xs text-white font-medium">{duration} min</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        
        {/* Service Name */}
        <div className="space-y-1">
          <div className="h-px w-8 bg-[#9C4A5E] mb-3" />
          <h3 className="font-serif text-xl text-[#201A17] group-hover:text-[#9C4A5E] transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm leading-relaxed text-[#7C6660] line-clamp-2 min-h-[40px]">
            {description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-black/5">
          
          {/* Price Info */}
          <div className="space-y-0.5">
            <p className="text-xs uppercase tracking-[0.15em] text-[#7C6660]">
              Starting from
            </p>
            <p className="text-lg font-bold text-[#9C4A5E]">${price}</p>
          </div>

          {/* Book Button */}
          <Link
            href="/booking"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#9C4A5E] px-6 py-2.5 text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#8a3f52] hover:shadow-lg hover:shadow-[#9C4A5E]/30 transition-all duration-300"
          >
            <span>Book Now</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}