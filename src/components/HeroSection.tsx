import React from 'react';

export default function HeroSlide() {
  return (
    <section className="container snap-start h-screen flex flex-col items-center justify-center bg-white">
      <img
        src="/assets/logo.png"
        alt="Romashka.pro logo"
        className="w-full max-w-xs h-auto mb-3"
      />
      <h1 className="text-center text-4xl font-bold text-primary mb-2">
        Уникальные решения на стыке IT, финансов и юриспруденции
      </h1>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg indent-4">
        Создание нейросетей и продуктов, которые помогают бизнесу работать эффективнее, понятнее и безопаснее
      </p>
    </section>
  );
}