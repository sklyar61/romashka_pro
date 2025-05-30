// src/components/slides/ProjectsSlide.tsx
import React from 'react';

interface Project {
  title: string;
  description: React.ReactNode;
  cta?: { label: string; href: string };
  extraImage?: string;
}

const projects: Project[] = [
  {
    title: 'Telegram нейро-бот Romashka_pro_bot',
    description: (
      <>
        Умный помощник в Telegram, который отвечает на любые вопросы, распознаёт изображения и видео, генерирует уникальные картинки и поддерживает голосовое общение, включая знаменитый голос Владимира Путина.
      </>
    ),
    cta: { label: 'Перейти в бота', href: 'https://t.me/romashka_pro_bot' },
  },
  {
    title: 'Платформа для создания нейро-ботов (ботоферма)',
    description: (
      <>
        Простая и мощная платформа, позволяющая без навыков программирования создавать и запускать умных чат-ботов под любые бизнес-задачи на популярных площадках Telegram и Avito. Узнать больше можно <a href="https://romashka.pro/article/10/" className="text-primary underline">здесь</a>.
      </>
    ),
  },
  {
    title: 'Локальная нейросеть',
    description:
      'Персональная нейросеть, адаптируемая под индивидуальные бизнес-задачи заказчика. Уже заменила целый штат из 7 сотрудников, позволив сэкономить около 500 000 ₽ ежемесячно.',
  },
  {
    title: 'Два запатентованных проекта',
    description:
      'Уникальные разработки, официально подтверждённые патентами на государственном уровне, которые подчеркивают оригинальность и эффективность наших решений.',
    extraImage: '/assets/patent.png',
  },
  {
    title: 'Бот для специалистов по финансовому мониторингу @Romashka_pro_fz115_bot',
    description:
      'Нейросеть, помогающая специалистам в финансовом мониторинге, успешно прошла профессиональную аттестацию, показав выдающийся результат (46 из 50 верных ответов).',
    cta: { label: 'Перейти в бота', href: 'https://t.me/Romashka_pro_fz115_bot' },
  },
  {
    title: 'Эффективное взыскание дебеторской задолженности',
    description:
      'Наша аналитика и стратегии взыскания помогли успешно завершить 5 из 6 кейсов, обеспечив среднюю доходность проектов около 1000 %.',
  },
];

export default function ProjectsSlides() {
  return (
    <>
      <section
        key="projects-header"
        className="container snap-start h-screen flex flex-col items-center justify-center bg-gray-50"
      >
        <h2 className="text-center text-3xl font-semibold mb-2">Реализованные проекты</h2>
      </section>

      {projects.map((p, idx) => (
        <section
          key={`project-${idx}`}
          className="container snap-start h-screen flex flex-col justify-between bg-gray-50"
        >
          <div className="pt-6 pb-4">
            <h3 className="text-center text-2xl font-medium text-primary mb-4">
              {p.title}
            </h3>
            <p className="max-w-3xl mx-auto text-gray-700 indent-4 mb-6">
              {p.description}
            </p>
            {p.extraImage && (
              <div className="flex justify-center mb-4">
                <img
                  src={p.extraImage}
                  alt=""
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            )}
          </div>
          {p.cta && (
            <div className="pb-4 text-center">
              <a
                href={p.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:opacity-90 transition"
              >
                {p.cta.label}
              </a>
            </div>
          )}
        </section>
      ))}
    </>
  );
}