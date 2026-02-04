
import React, { useState } from 'react';
import { QuizState, RenovationType } from '../types';

interface QuizModalProps {
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [state, setState] = useState<QuizState>({
    step: 1,
    type: null,
    area: 40,
    budget: null,
    name: '',
    phone: '',
    agreed: true
  });

  const nextStep = () => setState(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setState(prev => ({ ...prev, step: Math.max(1, prev.step - 1) }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Ваша заявка принята. Александр свяжется с вами в течение 15 минут.');
    onClose();
  };

  const renderStep = () => {
    switch(state.step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Какой ремонт планируете?</h3>
            <div className="grid grid-cols-1 gap-3">
              {(['Косметический', 'Капитальный', 'Под ключ'] as RenovationType[]).map(type => (
                <button
                  key={type}
                  onClick={() => { setState(prev => ({ ...prev, type })); nextStep(); }}
                  className={`p-5 rounded-2xl border transition-all text-left flex items-center justify-between ${state.type === type ? 'border-[#CA8A04] bg-[#CA8A04]/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  <span className="font-bold">{type}</span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${state.type === type ? 'bg-[#CA8A04] border-[#CA8A04]' : 'border-white/20'}`}>
                    {state.type === type && <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Укажите площадь объекта (м²)</h3>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-[#CA8A04] mb-8">{state.area} <span className="text-2xl text-gray-500">м²</span></span>
              <input 
                type="range" 
                min="15" 
                max="250" 
                value={state.area}
                onChange={(e) => setState(prev => ({ ...prev, area: parseInt(e.target.value) }))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CA8A04]"
              />
              <div className="flex justify-between w-full mt-4 text-gray-500 text-xs font-bold uppercase">
                <span>15 м²</span>
                <span>250 м²</span>
              </div>
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-[#CA8A04] hover:bg-[#EAB308] text-black font-bold py-4 rounded-xl mt-8"
            >
              Далее
            </button>
          </div>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold mb-2 text-center">Куда отправить расчет?</h3>
            <p className="text-gray-400 text-sm text-center mb-6">Александр лично рассчитает предварительную смету</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  required
                  placeholder="Иван"
                  value={state.name}
                  onChange={(e) => setState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#CA8A04] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Номер телефона</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={state.phone}
                  onChange={(e) => setState(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#CA8A04] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input 
                type="checkbox" 
                checked={state.agreed}
                onChange={(e) => setState(prev => ({ ...prev, agreed: e.target.checked }))}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#CA8A04] focus:ring-[#CA8A04]"
                id="consent"
                required
              />
              <label htmlFor="consent" className="text-xs text-gray-400 leading-tight">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с Политикой конфиденциальности.
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#CA8A04] hover:bg-[#EAB308] text-black font-bold py-4 rounded-xl shadow-lg transition-all"
            >
              Получить детальную смету
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-[#111] border border-white/10 rounded-[2rem] p-8 lg:p-12 shadow-2xl overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div 
                className="h-full bg-[#CA8A04] transition-all duration-500" 
                style={{ width: `${(state.step / 3) * 100}%` }}
            ></div>
        </div>

        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {state.step > 1 && (
            <button onClick={prevStep} className="mb-6 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Назад
            </button>
        )}

        <div className="transition-all duration-300">
            {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
