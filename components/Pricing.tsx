
import React from 'react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      title: "Косметический",
      price: "от 4 500 ₽/м²",
      features: [
        "Демонтажные работы (частично)",
        "Шпатлевка стен под обои",
        "Поклейка обоев",
        "Настил линолеума или ламината",
        "Установка плинтусов",
        "Покраска потолка",
        "Срок: от 2-х недель"
      ]
    },
    {
      title: "Капитальный",
      price: "от 9 000 ₽/м²",
      isPopular: true,
      features: [
        "Полный демонтаж",
        "Выравнивание стен по маякам",
        "Замена всей электропроводки",
        "Замена сантехники",
        "Стяжка пола",
        "Укладка плитки (керамогранит)",
        "Натяжные потолки",
        "Срок: от 1.5 месяцев"
      ]
    },
    {
      title: "Под ключ",
      price: "от 13 000 ₽/м²",
      features: [
        "Дизайн-проект (базовый)",
        "Все виды капитальных работ",
        "Декоративная штукатурка/покраска",
        "Многоуровневое освещение",
        "Установка межкомнатных дверей",
        "Консультации по выбору мебели",
        "Финальный клининг",
        "Срок: от 2.5 месяцев"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Прозрачная стоимость</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Фиксируем цену в договоре до начала работ. Никаких скрытых платежей и неожиданных доплат.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bento-card rounded-[2.5rem] p-8 lg:p-10 flex flex-col ${plan.isPopular ? 'border-[#CA8A04] ring-1 ring-[#CA8A04]/20' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#CA8A04] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Самый популярный
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="text-3xl font-black text-white">{plan.price}</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-[#CA8A04] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    {feat}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isPopular ? 'bg-[#CA8A04] text-black hover:bg-[#EAB308]' : 'bg-white/5 text-white border border-white/10 hover:border-white/30 hover:bg-white/10'}`}>
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
