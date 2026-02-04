
import React, { useEffect, useState } from 'react';

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Renovation"
          className="w-full h-full object-cover opacity-30 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/90 to-[#0A0A0A]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Октябрьский р-н, Сипайлово-8
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] text-gradient">
              Экспертный ремонт <br /> квартир в Уфе
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              15+ лет опыта. От косметического до капитального ремонта под ключ с безупречным порядком на объекте и гарантией 1 год.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">15+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Лет опыта</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-800 self-center mx-4"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">250+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Объектов</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-800 self-center mx-4"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Гарантия</span>
              </div>
            </div>
          </div>

          {/* Right Column: Integrated Quiz Card */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bento-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#CA8A04]/10 rounded-full blur-3xl group-hover:bg-[#CA8A04]/20 transition-all"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Рассчитать стоимость ремонта</h3>
                <p className="text-gray-400 mb-8 text-sm">Пройдите короткий тест и получите детальную смету за 5 минут</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#CA8A04]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Шаг 1</div>
                        <div className="text-sm font-medium">Выберите тип объекта</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 opacity-50">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Шаг 2</div>
                        <div className="text-sm font-medium">Укажите площадь</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={onOpenQuiz}
                  className="w-full bg-[#CA8A04] hover:bg-[#EAB308] text-black font-bold py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group/btn"
                >
                  Начать расчет
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
