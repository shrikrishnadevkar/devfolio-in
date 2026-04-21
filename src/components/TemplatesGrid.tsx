import React from 'react';

interface TemplatesGridProps {
  onSelect: (id: string) => void;
  selectedId: string;
}

const TemplatesGrid: React.FC<TemplatesGridProps> = ({ onSelect, selectedId }) => {
  const templates = [
    { id: 'classic-dark', title: "Classic Dark", desc: "Professional navy theme. Perfect for CS & IT students.", status: "FREE", cost: "Free", class: "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" },
    { id: 'minimal-white', title: "Minimal White", desc: "Clean & modern. Makes your skills stand out.", status: "₹20", cost: "₹20", class: "bg-[#f8f8f8] border border-[#eee]" },
    { id: 'neon-night', title: "Neon Night", desc: "Glowing accents on pitch black. Turns heads instantly.", status: "🔥 HOT", cost: "₹20", class: "bg-[#050510]" },
    { id: 'vibrant-purple', title: "Vibrant Purple", desc: "Bold purple gradient. Great for designers & creatives.", status: "₹20", cost: "₹20", class: "bg-gradient-to-br from-[#667eea] to-[#764ba2]" },
    { id: 'corporate-blue', title: "Corporate Blue", desc: "Trusted blue theme for MBA & Finance students.", status: "₹20", cost: "₹20", class: "bg-[#e8f0fe]" },
    { id: 'emerald-dark', title: "Emerald Dark", desc: "Deep green with mint accents. For developers who code.", status: "₹20", cost: "₹20", class: "bg-[#0a1f0e]" }
  ];

  return (
    <section id="templates" className="py-24 bg-dark-bg px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-16 relative z-10">
        <div className="text-[12px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Templates</div>
        <h2 className="font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] text-white">Stunning Portfolio Designs</h2>
        <p className="mt-4 text-gray-400 text-[17px] max-w-[520px] leading-[1.6]">Free starter template included. Premium templates from just ₹20 — one-time unlock.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {templates.map((tpl, i) => (
          <div 
            key={i} 
            onClick={() => onSelect(tpl.id)}
            className={`plan-card glass rounded-3xl overflow-hidden border transition-all ${selectedId === tpl.id ? 'border-indigo-500 ring-4 ring-indigo-500/10' : 'border-white/5 shadow-xl'}`}
          >
            <div className={`h-[200px] relative overflow-hidden flex items-center justify-center ${tpl.class}`}>
              <span className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                {tpl.status}
              </span>
              {/* Mock visualization */}
              <div className="w-[160px] bg-white/10 rounded-xl p-3 text-center border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/20 mx-auto mb-2" />
                <div className="h-2 bg-white/60 rounded-full mb-1.5" />
                <div className="h-1.5 bg-white/30 rounded-full w-2/3 mx-auto mb-2.5" />
                <div className="flex gap-1 justify-center mb-2">
                  <div className="h-4 w-9 bg-indigo-500/40 rounded" />
                  <div className="h-4 w-9 bg-indigo-500/40 rounded" />
                </div>
                <div className="h-5 bg-indigo-600 rounded-lg mt-1.5" />
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-[18px] font-bold mb-1 text-white">{tpl.title}</h4>
              <p className="text-[13px] text-gray-400">{tpl.desc}</p>
              <div className="flex items-center justify-between mt-6">
                <span className={`text-[18px] font-black tracking-tight ${tpl.cost === 'Free' ? 'text-emerald-400' : 'text-indigo-400'}`}>{tpl.cost}</span>
                <button className="px-5 py-2 rounded-xl text-[12px] font-bold uppercase tracking-wider cursor-pointer border border-indigo-500/30 text-indigo-400 bg-transparent transition-all hover:bg-indigo-600 hover:text-white">
                  {selectedId === tpl.id ? 'Selected' : 'Use Template'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesGrid;
