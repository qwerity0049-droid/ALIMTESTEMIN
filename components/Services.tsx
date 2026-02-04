
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Электромонтаж",
      desc: "Полная замена проводки, сборка щитов, установка розеток и проходных выключателей.",
      icon: "⚡"
    },
    {
      title: "Сантехника",
      desc: "Разводка труб (Rehau/Stout), установка инсталляций, душевых трапов и смесителей.",
      icon: "🚰"
    },
    {
      title: "Отделка стен",
      desc: "Выравнивание по маякам под 90°, высококачественная шпатлевка и финишные покрытия.",
      icon: "🎨"
    },
    {
      title: "Полы",
      desc: "Полусухая стяжка, наливные полы, укладка керамогранита, паркета и ламината.",
      icon: "📐"
    },
    {
      title: "Потолки",
      desc: "Гипсокартонные конструкции, теневые профили, натяжные потолки любой сложности.",
      icon: "🏗️"
    },
    {
      title: "Санузлы",
      desc: "Комплексный ремонт ванных комнат и туалетов с учетом всех норм гидроизоляции.",
      icon: "🛁"
    }
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-[#0D0D0D]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Мастерство в деталях</h2>
            <p className="text-gray-400 text-lg">Выполняю все виды работ по стандартам качества. Каждое техническое решение обсуждается и аргументируется.</p>
          </div>
          <a href="#pricing" className="text-[#3B82F6] font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Смотреть все цены
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#3B82F6]/30 transition-all hover:bg-white/[0.06]">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
              <h4 className="text-xl font-bold mb-3">{s.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
