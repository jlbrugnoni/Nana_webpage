import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { t } = useTranslation('common');
  const biographyParagraphs = [
    'about.paragraph1',
    'about.paragraph2',
    'about.paragraph3',
    'about.paragraph4',
    'about.paragraph5',
    'about.paragraph6',
    'about.paragraph7',
  ];

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
                {biographyParagraphs.map((key) => (
                  <p key={key}>{t(key)}</p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white/60 shadow-sm md:sticky md:top-[var(--header-offset)]">
              <img
                src="/gallery/artist.jpg"
                alt={t('about.portraitAlt')}
                className="h-full w-full object-cover"
              />
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
