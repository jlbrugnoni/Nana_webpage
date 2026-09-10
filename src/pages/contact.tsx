import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { t } = useTranslation('common');
  const email = t('contact.emailValue');
  const phone = t('contact.phoneValue');
  const location = t('contact.locationValue');
  const whatsappNumber = phone.replace(/[^\d]/g, '');

  return (
    <>
      <Head>
        <title>{t('meta.contactTitle')}</title>
        <meta name="description" content={t('meta.contactDescription')} />
      </Head>

      <Header />
      <main className="bg-[#f8f6f1] pt-safe-header">
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h1 className="text-4xl font-semibold text-gray-900">{t('contact.eyebrow')}</h1>
              <p className="mt-4 text-sm text-gray-600">{t('contact.intro')}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`}
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:bg-gray-700"
                >
                  {t('contact.emailCta')}
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('contact.whatsappMessage'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-400 px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.25em] text-gray-800 transition hover:bg-gray-900 hover:text-white"
                >
                  {t('contact.whatsappCta')}
                </a>
              </div>
            </div>

            <aside className="space-y-6 self-start rounded-3xl border border-gray-200 bg-white/70 p-8 text-sm text-gray-700">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {t('contact.details.title')}
                </h2>
                <p className="mt-2">{t('contact.details.description')}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {t('contact.details.email')}
                </h3>
                <a href={`mailto:${email}`} className="mt-1 block text-sm text-gray-900 underline">
                  {email}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {t('contact.details.phone')}
                </h3>
                <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="mt-1 block text-sm text-gray-900 underline">
                  {phone}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {t('contact.details.location')}
                </h3>
                <p className="mt-1">{location}</p>
              </div>
            </aside>
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
