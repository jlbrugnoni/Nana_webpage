import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const changeLanguage = (lang: string) => {
    router.push(asPath, asPath, { locale: lang });
  };

  return (
    <div className="flex items-center gap-2">
      {locales?.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          aria-label={`Switch to ${lng}`}
          className={`rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] transition ${
            lng === locale
              ? 'bg-gray-900 text-white'
              : 'bg-white/60 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}