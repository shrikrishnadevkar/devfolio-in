import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-[120px] pb-80 px-[5vw] relative overflow-hidden text-center bg-dark-bg">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.12)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[12px] font-semibold text-indigo-400 uppercase tracking-widest mb-8 relative z-10"
      >
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        AI-Powered Portfolio Generator
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-['Syne'] text-[clamp(42px,7vw,86px)] font-extrabold leading-[1.05] tracking-[-2px] max-w-[900px] relative z-10 text-white"
      >
        Turn Your Resume Into a<br />
        <em className="font-normal text-indigo-500 not-italic">Live Portfolio</em> in <span className="relative inline-block">
          <span className="line-through decoration-emerald-500 decoration-4 -rotate-2">Hours</span>
        </span> 60 Seconds
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-[560px] text-[18px] font-normal text-gray-400 leading-[1.6] relative z-10"
      >
        Upload your PDF resume. Our AI builds you a stunning, hosted portfolio page that recruiters can find on Google — starting at just ₹29.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3.5 mt-10 relative z-10"
      >
        <a href="#upload" className="px-9 py-4 bg-indigo-600 text-white rounded-full text-[16px] font-bold cursor-pointer transition-all flex items-center gap-2 hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          ⚡ Generate Free Portfolio
        </a>
        <a href="#templates" className="px-9 py-4 glass text-white rounded-full text-[16px] font-bold cursor-pointer transition-all flex items-center gap-2 hover:bg-white/5">
          🎨 See Templates
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-12 mt-16 relative z-10"
      >
        {[
          { num: "12K", label: "Portfolios Created", suffix: "+" },
          { num: "94", label: "Got Interview Calls", suffix: "%" },
          { num: "₹29", label: "Starting Price", suffix: "~" },
          { num: "60", label: "To Go Live", suffix: "s" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-['Syne'] text-[32px] font-extrabold text-white">
              {stat.num}<span className="text-emerald-400">{stat.suffix}</span>
            </div>
            <div className="text-[13px] text-gray-500 mt-0.5 uppercase tracking-widest font-bold">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="mt-[60px] flex flex-col items-center gap-2 relative z-10">
        <p className="text-[12px] text-gray-500 uppercase tracking-[0.2em] font-bold">Scroll to explore</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
