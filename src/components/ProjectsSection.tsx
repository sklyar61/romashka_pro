import React from 'react';

const projects = [
  {
    title: 'Telegram нейро-бот Romashka_pro_bot',
    link: 'https://t.me/Romashka_pro_bot',
    description: 'Отвечает на вопросы, распознаёт медиа, генерирует изображения, поддерживает голосовое взаимодействие.',
  },
  {
    title: 'Платформа для создания нейро-ботов (ботоферма)',
    link: 'https://romashka.pro/article/10/',
    description: 'Позволяет создавать и запускать ботов без навыков программирования.',
  },
  {
    title: 'Локальная нейросеть',
    description: 'Адаптируется под задачи заказчика и уже заменила команду из 7 сотрудников, снизив расходы на ~500 000 ₽/мес.',
  },
  {
    title: 'Два запатентованных проекта',
    description: 'Уникальные разработки, подтверждённые на государственном уровне.',
  },
  {
    title: 'Бот @Romashka_pro_fz115_bot',
    description: 'Показал 46/50 правильных ответов на аттестации специалистов ПОД/ФТ.',
  },
  {
    title: 'Эффективное взыскание дебеторской задолженности',
    description: 'Успешно завершено 5 из 6 кейсов, средняя доходность проектов ≈1000 %.',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Реализованные проекты
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="p-6 bg-white border rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">{p.link ? <a href={p.link} className="text-primary hover:underline">{p.title}</a> : p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
