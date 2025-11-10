import { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { paintings, Painting } from '@/data/paintings';

export default function OriginalsPage() {
  const { t, i18n } = useTranslation('common');
  const language = i18n.language || 'en';
  const [activePaintingId, setActivePaintingId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getCopy = (copy: Record<string, string>) => copy[language] ?? copy.en;

  return (
    <>
      <Head>
        <title>{t('meta.originalsTitle')}</title>
        <meta name="description" content={t('meta.originalsDescription')} />
      </Head>

      <Header />
      <main className="bg-[#f8f6f1] pt-safe-header">
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-gray-900">{t('originals.title')}</h1>
            <p className="mt-4 text-sm text-gray-600">{t('originals.intro')}</p>
          </div>

          <div className="mt-12 space-y-16">
            {paintings.map((painting) => {
              const statusKey = `paintings.status.${painting.status}` as const;
              return (
                <article
                  key={painting.id}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
                    <div className="mx-auto w-full max-w-sm flex-shrink-0 md:mx-0 md:max-w-[360px] lg:max-w-[420px]">
                      <ImageCarousel
                        variant="portrait"
                        autoPlay={false}
                        onImageClick={(imageIndex) => {
                          setActivePaintingId(painting.id);
                          setActiveImageIndex(imageIndex);
                        }}
                        images={painting.images.map((image) => ({
                          src: image.src,
                          alt: getCopy(image.alt),
                        }))}
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-6 px-6 pb-8 md:px-0 md:pr-8 md:pt-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{t(statusKey)}</p>
                        <h2 className="mt-2 text-2xl font-semibold text-gray-900">{getCopy(painting.title)}</h2>
                        <p className="mt-3 text-sm text-gray-600">{getCopy(painting.description)}</p>
                      </div>

                      <dl className="grid grid-cols-1 gap-4 text-sm text-gray-700 sm:grid-cols-2">
                        <div>
                          <dt className="font-semibold uppercase tracking-[0.2em] text-xs text-gray-500">
                            {t('paintings.fields.size')}
                          </dt>
                          <dd className="mt-1">{painting.size}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold uppercase tracking-[0.2em] text-xs text-gray-500">
                            {t('paintings.fields.materials')}
                          </dt>
                          <dd className="mt-1">{getCopy(painting.materials)}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold uppercase tracking-[0.2em] text-xs text-gray-500">
                            {t('paintings.fields.year')}
                          </dt>
                          <dd className="mt-1">{painting.year}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold uppercase tracking-[0.2em] text-xs text-gray-500">
                            {t('paintings.fields.price')}
                          </dt>
                          <dd className="mt-1">
                            {painting.status === 'available' ? painting.price : t('paintings.status.sold')}
                          </dd>
                        </div>
                      </dl>

                      <a
                        href={`mailto:hello@example.com?subject=${encodeURIComponent(
                          `Inquiry about ${getCopy(painting.title)}`
                        )}`}
                        className="mt-auto inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-gray-700"
                      >
                        {t('originals.inquireCta')}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />

      {activePaintingId && (
        <Lightbox
          painting={paintings.find((item) => item.id === activePaintingId)!}
          startIndex={activeImageIndex}
          onClose={() => {
            setActivePaintingId(null);
            setActiveImageIndex(0);
          }}
          getCopy={getCopy}
        />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

type LightboxProps = {
  painting: Painting;
  startIndex: number;
  onClose: () => void;
  getCopy: (copy: Record<string, string>) => string;
};

function Lightbox({ painting, startIndex, onClose, getCopy }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const total = painting.images.length;

  const changeIndex = (delta: number) => {
    setIndex((prev) => {
      const next = (prev + delta + total) % total;
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 text-white transition hover:text-gray-200"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      <div className="flex w-full max-w-4xl flex-col items-center gap-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-white">
          <div className="aspect-[3/4]">
            <img
              src={painting.images[index].src}
              alt={getCopy(painting.images[index].alt)}
              className="h-full w-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={() => changeIndex(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-lg font-semibold text-gray-900 shadow hover:bg-white"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => changeIndex(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-lg font-semibold text-gray-900 shadow hover:bg-white"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="text-center text-white">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.3em]">{getCopy(painting.title)}</h2>
          <p className="mt-2 text-sm text-white/80">{getCopy(painting.description)}</p>
        </div>
      </div>
    </div>
  );
}

