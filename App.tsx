
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import QuizModal from './components/QuizModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ onOpenQuiz }: { onOpenQuiz: () => void }) => (
  <main className="overflow-hidden">
    <Hero onOpenQuiz={onOpenQuiz} />
    <TrustSignals />
    <section id="services">
        <Services />
    </section>
    <section id="pricing">
        <Pricing />
    </section>
  </main>
);

const App: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-yellow-600/30">
        <Header onOpenQuiz={() => setIsQuizOpen(true)} />
        
        <Routes>
          <Route path="/" element={<HomePage onOpenQuiz={() => setIsQuizOpen(true)} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />

        {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
      </div>
    </Router>
  );
};

export default App;
