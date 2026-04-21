import React from 'react';
import { PortfolioData } from '../../types';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const ClassicDark: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['DM_Sans'] selection:bg-[#5b4cff] selection:text-white">
      {/* Navbar */}
      <nav className="h-[80px] px-[8vw] flex items-center justify-between border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="font-['Syne'] text-xl font-bold tracking-tighter">
          {data.name.split(' ')[0]}<span className="text-[#5b4cff]">Folio</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-white/60">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-[8vw] py-[15vh] flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5b4cff]/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 bg-[#5b4cff]/20 text-[#5b4cff] text-[10px] uppercase font-bold tracking-[3px] rounded-full mb-8"
        >
          {data.role}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-['Syne'] text-[clamp(48px,8vw,100px)] font-extrabold leading-[0.95] tracking-[-4px] mb-10"
        >
          Creative Developer<br />& <span className="text-white/20 italic">Problem Solver</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg text-white/50 leading-relaxed mb-12"
        >
          {data.bio}
        </motion.div>

        <div className="flex gap-4">
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
              <Github size={20} />
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
              <Linkedin size={20} />
            </a>
          )}
          <a href={`mailto:${data.email}`} className="px-8 h-12 bg-[#5b4cff] text-white rounded-full flex items-center gap-2 text-sm font-bold transition-all hover:bg-[#4a3bef] hover:scale-105 active:scale-95">
            Hire Me <Mail size={16} />
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="px-[8vw] py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {data.skills.map((skill, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-['Syne'] text-2xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-[8vw] py-32">
        <div className="mb-20">
          <h2 className="font-['Syne'] text-5xl font-extrabold tracking-tighter mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-[#5b4cff]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-video bg-white/5 rounded-3xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/10 transition-all">
                 <div className="absolute inset-0 flex items-center justify-center font-['Syne'] text-4xl font-black text-white/5 select-none">
                    {project.title.charAt(0)}
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold font-['Syne'] mb-2">{project.title}</h3>
                    <p className="text-white/40 text-sm line-clamp-2">{project.description}</p>
                 </div>
                 <a href={project.link || '#'} className="absolute top-6 right-6 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <ExternalLink size={18} />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footprint / Contact */}
      <footer id="contact" className="px-[8vw] py-32 bg-[#5b4cff] selection:bg-white selection:text-[#5b4cff]">
        <div className="max-w-4xl">
          <h2 className="font-['Syne'] text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.9] tracking-[-3px] mb-12">
            Let's build something <br />extraordinary together.
          </h2>
          <div className="flex flex-wrap gap-8">
             <a href={`mailto:${data.email}`} className="text-2xl font-bold font-['Syne'] border-b-2 border-white/30 hover:border-white transition-all pb-1">
               {data.email}
             </a>
             {data.phone && (
               <a href={`tel:${data.phone}`} className="text-2xl font-bold font-['Syne'] border-b-2 border-white/30 hover:border-white transition-all pb-1">
                 {data.phone}
               </a>
             )}
          </div>
        </div>
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-wrap justify-between items-end gap-8">
           <div>
             <div className="font-['Syne'] text-2xl font-bold tracking-tighter mb-2">{data.name}</div>
             <p className="text-white/60 text-sm">© 2026 Crafted with DevFolio</p>
           </div>
           <div className="flex gap-6 text-sm font-bold tracking-[2px] uppercase">
             {data.github && <a href={data.github} className="hover:text-white/60 transition-colors">GitHub</a>}
             {data.linkedin && <a href={data.linkedin} className="hover:text-white/60 transition-colors">LinkedIn</a>}
             <a href="#" onClick={() => window.scrollTo(0,0)} className="hover:text-white/60 transition-colors">Back to Top</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default ClassicDark;
