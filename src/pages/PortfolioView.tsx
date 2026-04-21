import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { PortfolioData } from '../types';
import ClassicDark from '../components/templates/ClassicDark';
import MinimalWhite from '../components/templates/MinimalWhite';
import NeonNight from '../components/templates/NeonNight';

const PortfolioView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      
      try {
        setLoading(true);
        // Try Firebase first
        if (db) {
          const q = query(collection(db, 'portfolios'), where('slug', '==', slug));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            setData(querySnapshot.docs[0].data() as PortfolioData);
            setLoading(false);
            return;
          }
        }

        // Fallback to Session Storage (for immediate preview)
        const local = sessionStorage.getItem(`demo-portfolio-${slug}`);
        if (local) {
          setData(JSON.parse(local));
        }
      } catch (e) {
        console.error("Error fetching portfolio:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex flex-col items-center justify-center font-['Syne'] bg-[#0a0a0f] text-white">
    <div className="w-12 h-12 border-4 border-[#5b4cff] border-t-transparent rounded-full animate-spin mb-4" />
    <div className="text-xl">Initializing Workspace...</div>
  </div>;
  
  if (!data) return <div className="min-h-screen flex items-center justify-center font-['Syne'] text-2xl">Portfolio not found.</div>;

  const renderTemplate = () => {
    switch (data.template) {
      case 'minimal-white':
        return <MinimalWhite data={data} />;
      case 'neon-night':
        return <NeonNight data={data} />;
      case 'classic-dark':
      default:
        return <ClassicDark data={data} />;
    }
  };

  return renderTemplate();
};

export default PortfolioView;
