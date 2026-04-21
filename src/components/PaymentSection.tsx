import React from 'react';

const PaymentSection: React.FC = () => {
  return (
    <section id="pay" className="py-24 bg-dark-bg px-8">
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="text-[12px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Pay & Activate</div>
        <h2 className="font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold max-w-[700px] text-white">Instant UPI Payment</h2>
        <p className="mt-4 text-gray-400 text-[17px] max-w-[520px]">Pay directly to the owner via any UPI app. Send a screenshot on WhatsApp and your plan activates within minutes.</p>
      </div>

      <div className="glass rounded-3xl p-12 max-w-[860px] mx-auto flex flex-col md:flex-row gap-12 items-center shadow-2xl border-white/5">
        <div className="flex-1">
          <h3 className="text-2xl font-extrabold mb-8 text-white uppercase tracking-tight font-['Syne']">Plan Activation</h3>
          <div className="flex flex-col gap-6">
            {[
              { step: 1, title: "Scan QR or use UPI ID", desc: "Open any UPI app and scan the QR code OR enter the UPI ID manually." },
              { step: 2, title: "Enter plan amount in the note", desc: "Write your plan name in the payment note (e.g., 'Student Pro ₹199')" },
              { step: 3, title: "Send screenshot on WhatsApp", desc: "Send payment proof to +91 97306 68645 to activate your account." }
            ].map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="min-w-[32px] h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-extrabold text-[14px]">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold mb-1 tracking-tight text-white">{s.title}</p>
                  <p className="text-[14px] text-gray-500 leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-4">Supported Gateways</p>
            <div className="flex flex-wrap gap-2.5">
              {['📱 Google Pay', '💙 PhonePe', '🪙 Paytm', '⚡ All UPI'].map((app, i) => (
                <span key={i} className="bg-white/5 border border-white/5 rounded-lg px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-[0_0_50px_rgba(255,255,255,0.05)]">
             <div className="w-[180px] h-[180px] bg-white flex items-center justify-center rounded-xl overflow-hidden">
               <img 
                 src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('upi://pay?pa=shrikrishnadevkar60@oksbi&pn=Shrikrishna Devkar&cu=INR')}`}
                 alt="UPI QR Code"
                 className="w-full h-full object-contain"
                 referrerPolicy="no-referrer"
               />
             </div>
             <p className="text-[13px] text-black mt-4 font-black uppercase tracking-widest font-['Inter']">S. Devkar</p>
          </div>
          <div className="bg-indigo-600/10 rounded-xl px-5 py-3 font-mono text-[13px] font-bold border border-indigo-500/20 text-indigo-400 break-all text-center">
            shrikrishnadevkar60@oksbi
          </div>
          <a 
            href={`https://wa.me/919730668645?text=${encodeURIComponent("Hi Shrikrishna, I've just paid for my DevFolio.in plan. Here is the screenshot for activation.")}`} 
            target="_blank" 
            className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            💬 Activate Now
          </a>
        </div>
      </div>

      <div className="mt-32 max-w-[700px] mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden border-white/5" id="owner">
        <div className="w-20 h-20 rounded-2xl bg-indigo-600 mx-auto mb-6 flex items-center justify-center font-['Syne'] text-3xl font-black text-white italic">SD</div>
        <h3 className="text-3xl font-extrabold mb-1 text-white font-['Syne']">Shrikrishna Devkar</h3>
        <p className="text-indigo-400 text-[12px] font-black uppercase tracking-[0.3em] mb-6">Founder & Operator</p>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-sm mx-auto">
          "Each portfolio is manually reviewed to ensure perfect alignment and SEO indexing. I'm here to help you stand out."
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+919730668645" className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all text-gray-300">📞 Call Direct</a>
          <a href="mailto:shrikrishnadevkar60@gmail.com" className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all text-gray-300">✉️ Email Support</a>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
