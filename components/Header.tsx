
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenQuiz: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start">
          <span className="text-xl font-bold tracking-tight text-white">АЛЕКСАНДР</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] font-medium -mt-1">Ремонт квартир в Уфе</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Услуги</a>
          <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Цены</a>
          <a href="tel:+79000000000" className="text-sm font-bold text-white hover:text-[#CA8A04] transition-colors tracking-wide">+7 (9XX) XXX-XX-XX</a>
        </nav>

        <button 
          onClick={onOpenQuiz}
          className="bg-[#CA8A04] hover:bg-[#EAB308] text-black text-sm font-bold px-6 py-2.5 rounded-full transition-all cta-glow transform hover:scale-105 active:scale-95"
        >
          Рассчитать стоимость
        </button>
      </div>
    </header>
  );
};

export default Header;
