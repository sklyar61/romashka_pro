// src/components/ServicesSection.tsx
import React from 'react';

const services = [
  {
    icon: '/assets/illustrations/illustration-1.png',
    title: 'Автоматизация бизнес-процессов с помощью нейросетей',
    description: 'Сокращение времени и затрат на рутинные задачи.',
  },
  {
    icon: '/assets/illustrations/illustration-2.png',
    title: 'Управление дебиторской задолженностью',
    description: 'Поиск и приобретение перспективной дебиторской задолженности с целью существенного увеличения капитала.',
  },
  {
    icon: '/assets/illustrations/illustration-3.png',
    title: 'Проекты в сфере криптовалют (ЦФА)',
    description: 'Реализация и сопровождение крипто-проектов с учетом законодательства.',
  },
  {
    icon: '/assets/illustrations/illustration-4.png',
    title: 'Создание безопасных условий для бизнеса',
    description: 'Юридическая и технологическая поддержка для реализации сложных задач.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Направления моей деятельности
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center"
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h3 className="text-xl font-medium mb-2 text-primary text-center">
                {s.title}
              </h3>
              <p className="text-gray-600 text-center">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
