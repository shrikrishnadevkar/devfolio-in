import React from 'react';

const TrustBanner: React.FC = () => {
  const items = [
    "Trusted by Engineering Students",
    "Works with All Colleges",
    "GitHub Auto-Sync",
    "Instant Google Indexing",
    "Pay via UPI in Seconds",
    "ATS Resume Scoring",
    "6+ Beautiful Templates",
    "WhatsApp Contact Button"
  ];

  return (
    <div className="bg-dark-bg overflow-hidden py-6 border-y border-white/5 relative z-10">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] text-gray-500">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" /> {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TrustBanner;
