import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation('common');
  const images = ['/gallery/hero1.jpg', '/gallery/hero2.jpg', '/gallery/hero3.jpg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-[80vh] min-h-[520px] overflow-hidden">
      {images.map((src, imageIndex) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            imageIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <img src={src} alt="" className="h-full w-full object-cover" loading={imageIndex === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}

      <div
        className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center"
        style={{ paddingTop: 'var(--header-height)' }}
      >
        <h1 className="text-5xl font-semibold uppercase tracking-[0.6em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl">
          {t('Adri Bru')}
        </h1>
      </div>
    </section>
  );
}