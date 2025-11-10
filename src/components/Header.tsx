// import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
// import LanguageSwitcher from './LanguageSwitcher';

// export default function Header() {
//   const { t } = useTranslation('common');

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-brand-light bg-opacity-80 text-brand-dark font-gotham shadow-md">
//       <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 py-4 px-4 sm:px-6 md:px-12 backdrop-blur-md">

//         {/* Left spacer (desktop only) */}
//         <div className="hidden sm:flex flex-1" />

//         {/* Logo */}
//         <div className="flex-1 flex justify-center">
//           <Link href="#hero" scroll={true} className="flex justify-center">
//             {/* Adjusted height from h-12/h-20 to h-10/h-16 for a slightly smaller logo */}
//             <img src="/logo.png" alt="Logo" className="h-10 sm:h-16 object-contain cursor-pointer" />
//           </Link>
//         </div>

//         {/* Menu */}
//         <div className="flex-1 flex justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6 items-center text-sm font-medium flex-wrap">
//           <Link href="#about" className="hover:underline underline-offset-4">{t('about')}</Link>
//           <Link href="#studios" className="hover:underline underline-offset-4">{t('studios')}</Link>
//           <Link href="#plans" className="hover:underline underline-offset-4">{t('plans')}</Link>
//           <Link href="#contact" className="hover:underline underline-offset-4">{t('contact')}</Link>
//           <LanguageSwitcher />
//         </div>
//       </nav>
//     </header>
//   );
// }

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/originals', labelKey: 'nav.originals' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/contact', labelKey: 'nav.contact' },
];

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-semibold uppercase tracking-[0.3em] text-sm text-gray-900">
          {t('site.masthead')}
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-gray-950 ${
                  isActive ? 'text-gray-950 underline underline-offset-8' : ''
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-gray-300 p-2 text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        >
          {isMobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="px-4 pb-6 shadow-inner md:hidden">
          <div className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-base font-medium ${
                    isActive ? 'text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}