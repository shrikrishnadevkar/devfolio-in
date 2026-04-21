import React from 'react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      title: "Entry — DIY Pack",
      price: "₹29",
      period: "one-time",
      desc: "Download your portfolio HTML",
      features: ["AI-generated professional Bio", "Skill Tags from your resume", "Clean HTML/CSS file to download", "1 Free template included"],
      excluded: ["Live hosted link", "Google indexing", "GitHub sync"],
      button: "Get Started",
      popular: false
    },
    {
      title: "Student Pro",
      price: "₹199",
      period: "/ year",
      desc: "Everything you need to get placed",
      features: ["Everything in Entry pack", "Live hosted at devfolio.in/yourname", "GitHub Repo Auto-Sync", "SEO — appear on Google search", "WhatsApp Contact Button", "1 free + 1 premium template"],
      excluded: ["ATS Score & Interview prep"],
      button: "Activate Now — ₹199",
      popular: true
    },
    {
      title: "Placement Bundle",
      price: "₹249",
      period: "one-time",
      desc: "Best for final year students",
      features: ["Everything in Student Pro", "ATS Resume Score (0–100 rating)", "AI Interview Prep Guide", "Top 10 questions from your projects", "Priority email support"],
      excluded: ["Custom domain"],
      button: "Get Bundle",
      popular: false
    },
    {
      title: "Custom Identity",
      price: "₹449",
      period: "+ domain",
      desc: "Your own branded portfolio site",
      features: ["Everything in Placement Bundle", "Connect your own domain", "All 6 premium templates unlocked", "Manual alignment fix by owner", "Priority WhatsApp support", "Lifetime hosting"],
      excluded: [],
      button: "Go Premium",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-bg px-8">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="text-[12px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Pricing</div>
        <h2 className="font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold text-white">Student-Friendly Pricing</h2>
        <p className="mt-4 text-gray-400 text-[17px] max-w-[520px]">All plans are one-time or yearly. No monthly subscriptions. No hidden fees.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
        {tiers.map((tier, i) => (
          <div key={i} className={`glass rounded-3xl p-8 border transition-all hover:-translate-y-1 hover:shadow-2xl ${tier.popular ? 'border-indigo-500 scale-[1.03] z-10 bg-indigo-500/5' : 'border-white/5'}`}>
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full whitespace-nowrap uppercase tracking-widest font-['Inter']">
                ⭐ MOST POPULAR
              </span>
            )}
            <div className="text-[28px] mb-3.5">
              {i === 0 ? '📁' : i === 1 ? '🚀' : i === 2 ? '🎯' : '👑'}
            </div>
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">{tier.title}</div>
            <div className="font-['Syne'] text-[42px] font-extrabold text-white leading-none mb-1">
              {tier.price} <span className="text-[16px] font-medium text-gray-500 uppercase tracking-tighter">{tier.period}</span>
            </div>
            <p className="text-[13px] text-gray-400 mb-8 border-b border-white/5 pb-6">{tier.desc}</p>
            <ul className="mb-8 flex flex-col gap-3">
              {tier.features.map((f, j) => (
                <li key={j} className="text-[13px] flex items-start gap-3 text-gray-300">
                  <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
              {tier.excluded.map((f, j) => (
                <li key={j} className="text-[13px] flex items-start gap-3 text-gray-600">
                  <span className="text-gray-700 flex-shrink-0 mt-0.5">✕</span>
                  {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => document.getElementById('pay')?.scrollIntoView({ behavior: 'smooth' })}
              className={`w-full py-4 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'glass text-white hover:bg-white/5'}`}
            >
              {tier.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
