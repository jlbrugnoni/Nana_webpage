import { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { t } = useTranslation('common');
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const email = t('contact.emailValue');
  const phone = t('contact.phoneValue');
  const location = t('contact.locationValue');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
    console.log('Contact form submitted:', formState);
    setFormState({ name: '', email: '', message: '' });
  };

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
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{t('contact.eyebrow')}</p>
              <h1 className="mt-4 text-4xl font-semibold text-gray-900">{t('contact.title')}</h1>
              <p className="mt-4 text-sm text-gray-600">{t('contact.intro')}</p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm transition focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm transition focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm transition focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-gray-700"
                >
                  {t('contact.form.submit')}
                </button>

                {status === 'submitted' && (
                  <p className="text-sm text-gray-600">{t('contact.form.success')}</p>
                )}
              </form>
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
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {t('contact.details.social')}
                </h3>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a href="https://www.instagram.com/byadribru/" target="_blank" rel="noopener noreferrer" className="underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="underline">
                      Behance
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="underline">
                      LinkedIn
                    </a>
                  </li>
                </ul>
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
