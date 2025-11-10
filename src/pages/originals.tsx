import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { paintings } from '@/data/paintings';

export default function OriginalsPage() {
  const { t, i18n } = useTranslation('common');
  const language = i18n.language || 'en';

  const getCopy = (copy: Record<string, string>) => copy[language] ?? copy.en;

  return (
    <>
      <Head>
        <title>{t('meta.originalsTitle')}</title>
        <meta name="description" content={t('meta.originalsDescription')} />
      </Head>

      <Header />
      <main className="bg-[#f8f6f1] pt-28">
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
                  <div className="grid gap-0 md:grid-cols-2">
                    <ImageCarousel
                      autoPlay={false}
                      images={painting.images.map((image) => ({
                        src: image.src,
                        alt: getCopy(image.alt),
                      }))}
                    />

                    <div className="flex flex-col gap-6 p-8">
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

                      <div className="mt-auto">
                        <a
                          href={`mailto:hello@example.com?subject=${encodeURIComponent(
                            `Inquiry about ${getCopy(painting.title)}`
                          )}`}
                          className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-gray-700"
                        >
                          {t('originals.inquireCta')}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
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

