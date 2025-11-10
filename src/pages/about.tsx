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
      <main className="bg-[#f8f6f1] pt-28">
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{t('about.eyebrow')}</p>
            <h1 className="mt-4 text-4xl font-semibold text-gray-900">{t('about.title')}</h1>
            <div className="mt-6 space-y-5 text-sm text-gray-600">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>

            <div className="mt-10 grid gap-6 rounded-2xl border border-dashed border-gray-300 p-6 text-sm text-gray-700 sm:grid-cols-2">
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

