import React, { useState, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';
import { generatePortfolioFromText } from '../lib/gemini';

// Set worker source for pdfjs
// We use a CDN for the worker to avoid complex build configuration for the worker file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface PortfolioGeneratorProps {
  template: string;
}

const PortfolioGenerator: React.FC<PortfolioGeneratorProps> = ({ template }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileUpload = async (file: File) => {
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file.');
      return;
    }

    setLoading(true);
    setStatus('Reading your resume... 📄');

    try {
      // 1. Parse PDF on frontend
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let text = '';
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((item: any) => item.str);
        text += strings.join(' ') + '\n';
      }

      if (!text.trim()) throw new Error('Could not extract text from PDF');

      // 2. AI Magic
      setStatus('AI is building your portfolio... 🤖');
      const portfolioData = await generatePortfolioFromText(text);

      // 3. Save to Firebase
      setStatus('Finalizing your link... 🚀');
      
      const user = auth?.currentUser;
      const slug = portfolioData.name.toLowerCase().replace(/\s+/g, '-');
      
      const finalData = {
        ...portfolioData,
        userId: user?.uid || 'anonymous',
        createdAt: serverTimestamp(),
        slug: slug,
        template: template,
      };

      if (db) {
        if (!user) {
          alert('Note: You are not logged in. Your portfolio will be created anonymously. Please log in first to save it to your account.');
        }
        await addDoc(collection(db, 'portfolios'), finalData);
      } else {
        sessionStorage.setItem(`demo-portfolio-${slug}`, JSON.stringify(finalData));
      }
      
      // Navigate to the live page
      navigate(`/p/${slug}`);

    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  return (
    <section id="upload" className="py-24 bg-dark-bg text-center px-8">
      <div className="text-[12px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Try It Now — Free</div>
      <h2 className="font-['Syne'] text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] max-w-[500px] mx-auto mb-12 text-white">
        Upload Your Resume. Watch the Magic.
      </h2>

      <div 
        onClick={() => !loading && fileInputRef.current?.click()}
        className={`glass rounded-3xl p-12 relative overflow-hidden flex flex-col items-center justify-center border-dashed border-2 max-w-[600px] mx-auto cursor-pointer transition-all hover:bg-white/5 ${loading ? 'scanner-active cursor-wait' : 'border-white/10'}`}
      >
        {loading && (
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_15px_#10b981] animate-pulse"></div>
        )}
        
        <div className={`mb-6 p-4 rounded-full ${loading ? 'bg-emerald-500/10' : 'bg-indigo-500/10'}`}>
          {loading ? (
             <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
          ) : (
            <div className="text-[48px]">📎</div>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white">{loading ? 'Resume Processing' : 'Drop your resume PDF here'}</h3>
        <p className={`text-sm ${loading ? 'text-emerald-400 font-mono' : 'text-gray-400'}`}>
          {loading ? `SCANNING: ${status}` : 'or click to browse files · PDF up to 5MB'}
        </p>

        {loading && (
           <div className="mt-8 w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
             <div className="bg-emerald-500 h-full w-2/3 animate-[loading_2s_ease-in-out_infinite]"></div>
           </div>
        )}
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={onFileChange} 
          accept=".pdf" 
          className="hidden" 
        />

        {!loading && (
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:bg-indigo-500">
            Start Free — No Credit Card
          </button>
        )}
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default PortfolioGenerator;
