
import React from 'react';

const TrustSignals: React.FC = () => {
  const signals = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
      title: "Договор и Гарантия",
      desc: "Официально фиксируем сроки, стоимость и даем гарантию 12 месяцев."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "Соблюдение сроков",
      desc: "Прописываем график работ. Каждый день задержки — за мой счет."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>,
      title: "Закупка материалов",
      desc: "Беру на себя подбор, закупку и доставку черновых материалов со скидкой."
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
      title: "Чистота на объекте",
      desc: "Порядок — мой приоритет. Вынос мусора и влажная уборка после ремонта."
    }
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((sig, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
              <div className="text-[#CA8A04] mb-4 group-hover:scale-110 transition-transform inline-block">
                {sig.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{sig.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{sig.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
