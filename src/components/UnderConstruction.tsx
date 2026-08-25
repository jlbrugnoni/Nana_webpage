import Head from 'next/head';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';

const copy = {
  en: {
    message: 'Page under construction',
    metaTitle: 'Page under construction - Adri Bru',
  },
  es: {
    message: 'Página en construcción',
    metaTitle: 'Página en construcción - Adri Bru',
  },
};

export default function UnderConstruction() {
  const { locale } = useRouter();
  const text = locale === 'es' ? copy.es : copy.en;

  return (
    <>
      <Head>
        <title>{text.metaTitle}</title>
        <meta name="description" content={text.message} />
      </Head>

      <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#f8f6f1] px-6 py-10 text-center">
        <div className="absolute right-6 top-6 sm:right-10 sm:top-10">
          <LanguageSwitcher />
        </div>

        <div className="flex flex-col items-center gap-8">
          <img
            src="/logo.png"
            alt="Adri Bru"
            className="h-36 w-36 object-contain sm:h-48 sm:w-48"
          />
          <h1 className="text-xl font-light uppercase tracking-[0.28em] text-gray-800 sm:text-2xl">
            {text.message}
          </h1>
        </div>

        <a
          href="https://www.instagram.com/byadribru/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="absolute bottom-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-700 transition hover:bg-gray-900 hover:text-white sm:bottom-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
          </svg>
        </a>
      </main>
    </>
  );
}
