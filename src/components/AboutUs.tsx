import { useTranslation } from 'next-i18next';

export default function AboutUs() {
  const { t } = useTranslation('common');

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 px-6 sm:px-8 md:px-12 lg:px-20 bg-brand-white text-brand-gray font-gotham"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-brand-gray">
          {t('about')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-brand-gray">
          {t('about_text')}
        </p>
      </div>
    </section>
  );
}