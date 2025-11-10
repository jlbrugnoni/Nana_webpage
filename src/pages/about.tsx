import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('meta.aboutTitle')}</title>
        <meta name="description" content={t('meta.aboutDescription')} />
      </Head>

      <Header />
      <main className="bg-[#f8f6f1] pt-safe-header">
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{t('about.eyebrow')}</p>
              <h1 className="mt-5 text-4xl font-semibold text-gray-900 md:text-5xl">{t('about.title')}</h1>
              <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600 md:text-base">
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
              </div>

              <div className="mt-10 grid gap-6 rounded-3xl border border-dashed border-gray-300 p-6 text-sm text-gray-700 md:grid-cols-2">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {t('about.practiceTitle')}
                  </h2>
                  <p className="mt-2">{t('about.practiceDescription')}</p>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {t('about.inspirationTitle')}
                  </h2>
                  <p className="mt-2">{t('about.inspirationDescription')}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:gap-6">
              <div className="overflow-hidden rounded-3xl bg-white/60 shadow-sm">
                <img
                  src="/gallery/artist1.png"
                  alt="Portrait of the artist in her studio"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="overflow-hidden rounded-3xl bg-white/60 shadow-sm">
                  <img
                    src="/gallery/artist2.png"
                    alt="In-progress painting detail"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl bg-white/60 shadow-sm">
                  <img
                    src="/gallery/artist3.png"
                    alt="Color palette and tools in the studio"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
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

