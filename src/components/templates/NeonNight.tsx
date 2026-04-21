import React from 'react';
import { PortfolioData } from '../../types';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Rocket, Github, Mail } from 'lucide-react';

const NeonNight: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#050510] text-white font-['DM_Sans'] selection:bg-[#00d4a0] selection:text-[#050510]">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#5b4cff] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00d4a0] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-32 border border-white/10 rounded-2xl p-6 backdrop-blur-xl bg-white/5">
          <div className="text-xl font-black font-['Syne'] tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#00d4a0] flex items-center justify-center text-[#050510] font-black italic">D</div>
            {data.name.split(' ')[0].toUpperCase()}
          </div>
          <div className="flex gap-8 items-center font-bold text-[13px] tracking-widest uppercase text-white/50">
            <a href="#projects" className="hover:text-[#00d4a0] transition-colors">Projects</a>
            <a href="#stats" className="hover:text-[#00d4a0] transition-colors">Experience</a>
            <a href={`mailto:${data.email}`} className="px-5 py-2.5 bg-white text-black rounded-lg hover:bg-[#00d4a0] transition-colors">Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <header className="mb-40">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#00d4a0]/30 rounded-full text-[#00d4a0] font-bold text-[10px] uppercase tracking-[3px] mb-8 bg-[#00d4a0]/5"
           >
             <span className="w-1.5 h-1.5 bg-[#00d4a0] rounded-full animate-pulse" />
             System Online // {data.role}
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-[clamp(44px,7vw,96px)] font-black font-['Syne'] leading-[0.9] tracking-[-3px] mb-12"
           >
             Engineering <span className="text-[#00d4a0]">Digital</span><br />Masterpieces.
           </motion.h1>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl text-xl text-white/40 leading-relaxed font-medium"
           >
             {data.bio}
           </motion.div>
        </header>

        {/* Projects Grid */}
        <section id="projects" className="mb-40">
           <div className="flex items-center gap-4 mb-16">
             <div className="h-0.5 w-12 bg-[#00d4a0]" />
             <h2 className="text-2xl font-black font-['Syne'] tracking-tighter italic uppercase text-white/20">Operational Modules</h2>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {data.projects.map((project, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.98 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="group bg-white/5 border border-white/5 p-10 rounded-3xl hover:border-[#00d4a0]/50 transition-all hover:bg-white/[0.07]"
               >
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-[#00d4a0] group-hover:bg-[#00d4a0] group-hover:text-black transition-all">
                       <Terminal size={24} />
                    </div>
                    {project.link && (
                      <a href={project.link} className="text-white/20 group-hover:text-white transition-colors">
                        <Globe size={20} />
                      </a>
                    )}
                 </div>
                 <h3 className="text-3xl font-bold font-['Syne'] mb-4">{project.title}</h3>
                 <p className="text-white/40 mb-8 leading-relaxed font-medium">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-md uppercase text-[#00d4a0]/80">
                        {tag}
                      </span>
                    ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </section>

        {/* Exp */}
        <section id="stats" className="mb-40 grid grid-cols-1 lg:grid-cols-3 gap-20">
           <div className="lg:col-span-1">
              <h2 className="text-4xl font-black font-['Syne'] text-[#00d4a0] mb-6 underline decoration-white/10 underline-offset-8">XP Log</h2>
              <p className="text-white/40 leading-relaxed">
                Documenting professional trajectory and key technical contributions across various sectors.
              </p>
           </div>
           <div className="lg:col-span-2 space-y-12">
             {data.experience.map((exp, i) => (
               <div key={i} className="relative pl-10 border-l border-white/10">
                  <div className="absolute top-0 left-[-4px] w-2 h-2 bg-[#00d4a0] rounded-full" />
                  <div className="flex flex-wrap items-baseline gap-4 mb-2">
                    <h3 className="text-xl font-bold font-['Syne']">{exp.role}</h3>
                    <span className="text-[10px] font-black bg-white text-black px-2 py-0.5 rounded uppercase">{exp.company}</span>
                  </div>
                  <div className="text-[12px] font-bold text-white/30 tracking-widest mb-4 uppercase">{exp.duration}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{exp.description}</p>
               </div>
             ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 flex flex-col items-center text-center">
            <div className="text-[#00d4a0] mb-8 font-['Syne'] text-4xl font-black italic tracking-tighter uppercase">Connect // Execute</div>
            <div className="flex gap-10">
                <a href={data.github || '#'} className="flex items-center gap-2 font-bold hover:text-[#00d4a0] transition-colors"><Github size={18} /> @github</a>
                <a href={`mailto:${data.email}`} className="flex items-center gap-2 font-bold hover:text-[#00d4a0] transition-colors"><Mail size={18} /> @email</a>
            </div>
            <div className="mt-20 text-[10px] uppercase font-black tracking-[4px] text-white/10 italic">
               &copy; 2026 {data.name} // ALL RIGHTS RESERVED
            </div>
        </footer>
      </div>
    </div>
  );
};

export default NeonNight;
