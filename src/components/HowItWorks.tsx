import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", icon: "📄", title: "Upload Your Resume", desc: "Drag and drop your PDF resume. Our AI instantly reads your experience, skills, education, and projects." },
    { num: "02", icon: "🤖", title: "AI Generates Your Bio", desc: "Get a professional bio, skill tags, project summaries — all auto-written from your resume in under 10 seconds." },
    { num: "03", icon: "🎨", title: "Choose a Template", desc: "Pick from 6+ stunning templates. Preview in real-time. Unlock premium dark mode and custom themes." },
    { num: "04", icon: "🚀", title: "Share Your Live Link", desc: "Get your URL like devfolio.in/yourname. Share with recruiters. Show up on Google!" }
  ];

  return (
    <section id="how" className="py-24 bg-dark-bg px-8">
      <div className="mb-16">
        <div className="text-[12px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">How It Works</div>
        <h2 className="font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] max-w-[700px] text-white">Full automation from PDF to Live Portfolio</h2>
        <p className="mt-4 text-gray-400 text-[17px] max-w-[520px] leading-[1.6]">Our AI does all the hard work. You just upload and share your link.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="glass p-10 rounded-3xl relative transition-all hover:bg-white/5 border border-white/5 shadow-2xl">
            <div className="font-['Syne'] text-[64px] font-extrabold text-white/5 leading-none mb-5 tracking-[-3px] absolute top-8 right-8 select-none">{step.num}</div>
            <div className="text-[32px] mb-6">{step.icon}</div>
            <h3 className="text-[20px] font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
