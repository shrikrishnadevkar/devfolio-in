import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import PortfolioGenerator from './components/PortfolioGenerator';
import PortfolioView from './pages/PortfolioView';

import HowItWorks from './components/HowItWorks';
import TemplatesGrid from './components/TemplatesGrid';
import Pricing from './components/Pricing';
import PaymentSection from './components/PaymentSection';

function HomePage() {
  const [selectedTemplate, setSelectedTemplate] = React.useState('classic-dark');

  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      <TrustBanner />
      <HowItWorks />
      <TemplatesGrid onSelect={setSelectedTemplate} selectedId={selectedTemplate} />
      <PortfolioGenerator template={selectedTemplate} />
      <Pricing />
      <PaymentSection />
      <footer className="bg-[#0a0a0f] text-white/40 text-center py-8 text-[13px] border-t border-white/5 px-4 font-['DM_Sans']">
        <p>© 2026 DevFolio.in · Made with ❤️ by Shrikrishna Devkar · All rights reserved</p>
        <p className="mt-1.5 text-white/20 uppercase tracking-tighter">Pune, Maharashtra</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/p/:slug" element={<PortfolioView />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
