// src/components/slides/AgentsSlide.tsx
import React from 'react';

export default function AgentsSlide() {
  return (
    <section className="snap-start h-screen flex flex-col justify-center items-center bg-white px-6 md:px-20">
      <h2 className="text-3xl font-semibold mb-4">Приглашаем к сотрудничеству агентов</h2>
      <p className="text-gray-700 text-center mb-6">
        Хотите заработать на искусственном интеллекте? Мы предлагаем выгодные условия сотрудничества:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Вознаграждение до 90% от стоимости заказа</li>
        <li>Прозрачная и удобная система расчётов</li>
        <li>Работаем как с физическими, так и с юридическими лицами</li>
        <li>Полностью готовый агентский прайс и документооборот</li>
        <li>Бесплатное обучение и постоянная поддержка</li>
      </ul>
      <div className="flex space-x-4">
        <a href="/contact" className="px-6 py-3 bg-accent text-white rounded-lg shadow hover:opacity-90">
          Оставить заявку
        </a>
      </div>
    </section>
  );
}
