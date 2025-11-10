import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedOriginals from '@/components/FeaturedOriginals';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('meta.homeTitle')}</title>
        <meta name="description" content={t('meta.homeDescription')} />
      </Head>

      <Header />
      <main className="bg-[#f8f6f1]">
        <Hero />
        <FeaturedOriginals />
        <section className="bg-[#f1ede5] py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900">{t('home.storyTitle')}</h2>
              <p className="mt-4 text-sm text-gray-600">{t('home.storyBody')}</p>
            </div>
            <div className="md:w-1/2 rounded-3xl border border-dashed border-gray-400 p-8 text-center text-sm text-gray-600">
              <p>{t('home.collectorInvite')}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-gray-700"
              >
                {t('home.contactCta')}
              </a>
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
