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

import { useEffect, useRef, useState } from 'react';
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

const SOCIAL_LINKS = [
  { icon: 'instagram', href: 'https://www.instagram.com', label: 'Instagram' },
  { icon: 'facebook', href: 'https://www.facebook.com', label: 'Facebook' },
  { icon: 'whatsapp', href: 'https://wa.me/15551234567', label: 'WhatsApp' },
];

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const updateHeaderMetrics = () => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height;
      const rootStyles = getComputedStyle(document.documentElement);
      const previous = parseFloat(rootStyles.getPropertyValue('--header-height')) || 0;
      const effectiveHeight = Math.max(height, previous);
      const offset = effectiveHeight + 24;
      document.documentElement.style.setProperty('--header-height', `${effectiveHeight}px`);
      document.documentElement.style.setProperty('--header-offset', `${offset}px`);
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    updateHeaderMetrics();
    window.addEventListener('resize', updateHeaderMetrics);
    return () => window.removeEventListener('resize', updateHeaderMetrics);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [router.asPath]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="flex w-full items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="hidden flex-1 items-center justify-start gap-3 lg:flex">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.icon}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-900 hover:text-white"
            >
              <SocialIcon name={item.icon as SocialIconName} />
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-start gap-3 md:hidden">
          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-gray-300 p-2 text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {isMobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </button>
        </div>

        <div className="flex flex-shrink-0 items-center justify-center px-4 md:flex-1 md:justify-start lg:flex-1 lg:justify-center">
          <Link href="/" className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt={t('site.masthead')}
              className={`transition-all duration-300 ${
                isScrolled
                  ? 'h-[52px] w-[52px] md:h-[68px] md:w-[68px]'
                  : 'h-[64px] w-[64px] md:h-[88px] md:w-[88px]'
              }`}
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
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

        </div>
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

type SocialIconName = 'instagram' | 'facebook' | 'whatsapp';

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === 'instagram') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M13 2a5 5 0 015 5v1h-2V7a3 3 0 00-3-3h-1a3 3 0 00-3 3v3H7v3h2v8h3v-8h2.5l.5-3H12V7a1 1 0 011-1h1z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 2C6.486 2 2 6.281 2 11.5c0 2.47 1.066 4.735 2.83 6.365L4 22l4.337-1.437C9.255 21.078 10.595 21.5 12 21.5c5.514 0 10-4.281 10-9.5S17.514 2 12 2zm0 2c4.411 0 8 3.29 8 7.5s-3.589 7.5-8 7.5c-1.27 0-2.474-.29-3.55-.82l-.507-.247-2.608.864.863-2.366-.33-.314C4.632 15.419 4 13.505 4 11.5 4 7.29 7.589 4 12 4zm-3.154 3c-.144 0-.29.004-.436.01a.5.5 0 00-.463.52c.024 2.25 1.198 4.394 3.07 5.77 1.463 1.074 3.17 1.66 4.91 1.7a.5.5 0 00.49-.383c.09-.384.17-.775.236-1.165a.5.5 0 00-.337-.558l-2.032-.635a.5.5 0 00-.535.17l-.643.82a.5.5 0 01-.607.139c-1.074-.52-1.94-1.37-2.51-2.41a.5.5 0 01.034-.56l.684-.84a.5.5 0 00.088-.467l-.66-2.04A.5.5 0 008.846 7z" />
    </svg>
  );
}