import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import ImageCarousel from './ImageCarousel';
import { paintings } from '@/data/paintings';

export default function Hero() {
  const { t, i18n } = useTranslation('common');
  const language = i18n.language || 'en';

  const slides = useMemo(
    () =>
      paintings.slice(0, 3).map((painting) => ({
        src: painting.images[0]?.src ?? '/hero.jpg',
        alt: painting.images[0]?.alt[language] ?? painting.title[language] ?? painting.title.en,
      })),
    [language]
  );

  return (
    <section id="hero" className="relative pt-28 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{t('hero.eyebrow')}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
            {t('hero.headline')}
          </h1>
          <p className="mt-6 text-base text-gray-600 sm:text-lg">{t('hero.description')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/originals"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-white transition hover:bg-gray-700"
            >
              {t('hero.cta')}
            </a>
            <span className="text-sm text-gray-500">{t('hero.supporting')}</span>
          </div>
        </div>

        <div className="md:w-1/2">
          <ImageCarousel images={slides} />
        </div>
      </div>
    </section>
  );
}