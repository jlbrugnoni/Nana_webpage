import { useTranslation } from 'next-i18next';
import { siteFeatures } from '@/config/site';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();
  const email = t('contact.emailValue');
  const phone = t('contact.phoneValue');
  const location = t('contact.locationValue');

  return (
    <footer className="border-t border-gray-200 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{t('site.masthead')}</p>
          <p className="mt-2 max-w-sm text-sm text-gray-600">{t('footer.tagline')}</p>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            {t('contact.emailLabel')}:{' '}
            <a href={`mailto:${email}`} className="underline hover:text-gray-900">
              {email}
            </a>
          </p>
          <p>
            {t('contact.phoneLabel')}:{' '}
            <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="underline hover:text-gray-900">
              {phone}
            </a>
          </p>
          <p>
            {t('contact.locationLabel')}: {location}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <a href="https://www.instagram.com/byadribru/" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-900">
            Instagram
          </a>
          {siteFeatures.facebook && (
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-900">
              Facebook
            </a>
          )}
          {siteFeatures.etsy && (
            <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-900">
              Etsy
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white/90 py-4 text-center text-xs text-gray-500">
        {t('footer.copyright', { year })}
      </div>
    </footer>
  );
}
