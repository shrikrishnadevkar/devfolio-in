import React from 'react';
import { PortfolioData } from '../../types';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const MinimalWhite: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#1a1a1a] font-['DM_Sans'] selection:bg-[#1a1a1a] selection:text-white">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
        
        {/* Header */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-extrabold font-['Syne'] tracking-tight mb-4"
          >
            {data.name}
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap items-center gap-6 text-sm font-bold text-[#6b6b82] uppercase tracking-[2px]"
          >
            <span className="flex items-center gap-2"><Briefcase size={14} /> {data.role}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {data.email}</span>
            {data.github && <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">GitHub</a>}
          </motion.div>
        </header>

        {/* Bio */}
        <section className="mb-24">
          <p className="text-2xl leading-relaxed text-[#1a1a1a]/80 font-medium">
            {data.bio}
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-24">
          <h2 className="text-[12px] font-black uppercase tracking-[4px] text-[#5b4cff] mb-12">Selected Projects</h2>
          <div className="space-y-16">
            {data.projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-t border-black/5 pt-10"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                  <h3 className="text-3xl font-bold font-['Syne']">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold px-2.5 py-1 bg-black/5 rounded-full uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-[#6b6b82] mb-6 max-w-2xl">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                    View Project <span className="text-[#5b4cff]">→</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Exp & Edu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          <section>
            <h2 className="text-[12px] font-black uppercase tracking-[4px] text-[#5b4cff] mb-10">Experience</h2>
            <div className="space-y-10">
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <div className="text-[11px] font-bold text-[#6b6b82] mb-2">{exp.duration}</div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <div className="text-sm font-medium text-[#6b6b82] mb-3">{exp.company}</div>
                  <p className="text-sm text-[#6b6b82] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[12px] font-black uppercase tracking-[4px] text-[#5b4cff] mb-10">Education</h2>
            <div className="space-y-10">
              {data.education.map((edu, i) => (
                <div key={i}>
                  <div className="text-[11px] font-bold text-[#6b6b82] mb-2">{edu.duration}</div>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <div className="text-sm font-medium text-[#6b6b82]">{edu.school}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-sm font-bold text-[#6b6b82]">&copy; 2026 {data.name}</div>
           <div className="flex gap-8 text-sm font-bold">
             <a href={`mailto:${data.email}`} className="hover:text-[#5b4cff] transition-colors">Email</a>
             {data.linkedin && <a href={data.linkedin} className="hover:text-[#5b4cff] transition-colors">LinkedIn</a>}
             {data.github && <a href={data.github} className="hover:text-[#5b4cff] transition-colors">GitHub</a>}
           </div>
        </footer>
      </div>
    </div>
  );
};

export default MinimalWhite;
