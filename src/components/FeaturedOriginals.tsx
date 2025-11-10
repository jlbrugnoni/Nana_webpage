import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { paintings } from '@/data/paintings';

export default function FeaturedOriginals() {
  const { t, i18n } = useTranslation('common');
  const language = i18n.language || 'en';

  const featured = useMemo(() => paintings.slice(0, 3), []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{t('featured.eyebrow')}</p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900">{t('featured.title')}</h2>
            <p className="mt-3 max-w-xl text-sm text-gray-600">{t('featured.description')}</p>
          </div>
          <Link
            href="/originals"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-800 transition hover:bg-gray-900 hover:text-white"
          >
            {t('featured.viewAll')}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((painting) => {
            const title = painting.title[language] ?? painting.title.en;
            const description = painting.description[language] ?? painting.description.en;
            const statusKey = `paintings.status.${painting.status}` as const;

            return (
              <article
                key={painting.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={painting.images[0]?.src ?? '/hero.jpg'}
                    alt={painting.images[0]?.alt[language] ?? title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-gray-700">
                    {t(statusKey)}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                    <span>{painting.size}</span>
                    {painting.status === 'available' ? (
                      <span className="font-medium">{painting.price}</span>
                    ) : (
                      <span>{t('paintings.status.sold')}</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

