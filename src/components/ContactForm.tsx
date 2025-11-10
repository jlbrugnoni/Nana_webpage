import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useCountry } from '@/contexts/CountryContext';
import { getStudiosForCountry } from '@/config/studioConfig';
import { getContactInfo, getWhatsAppUrl } from '@/config/contactConfig';

export default function ContactForm() {
  const { t } = useTranslation('common');
  const { selectedCountry } = useCountry();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting:', form);
  };

  // Get studios for the selected country
  const studios = getStudiosForCountry(selectedCountry);
  const contactInfo = getContactInfo(selectedCountry);

  return (
    <section id="contact" className="scroll-mt-24 bg-brand-white text-brand-gray font-gotham">
      {/* Section Title */}
      <div className="text-center py-8 px-4 sm:px-6 md:px-12 bg-brand-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{t('contact')}</h2>
      </div>

      {/* Studio Section - Minimalist Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8">
        {studios.map((studio, index) => (
          <div key={studio.id}>
            {/* Studio Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Studio Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-brand-gray mb-2">
                  {t(studio.nameKey)}
                </h3>
                {!studio.isOperational && (
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    {t('coming_soon')}
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  {/* <p className="font-medium text-brand-gray mb-1">Address:</p> */}
                  <p className="text-brand-mid">{t(studio.addressKey)}</p>
                </div>
                <div>
                  {/* <p className="font-medium text-brand-gray mb-1">Phone:</p> */}
                  <p className="text-brand-mid">{t(studio.phoneKey)}</p>
                </div>
                <div>
                  {/* <p className="font-medium text-brand-gray mb-1">Email:</p> */}
                  <p className="text-brand-mid">{t(studio.emailKey)}</p>
                </div>
              </div>

                  <div>
                    <a
                      href={`https://wa.me/${studio.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      {t('contact_via_whatsapp')}
                    </a>
                  </div>
            </div>

            {/* Google Maps */}
            <div className="h-80 lg:h-[400px]">
              <iframe
                title={`Map for ${t(studio.nameKey)}`}
                src={studio.googleMapsEmbed}
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
              />
            </div>
            </div>
            
            {/* Separator between studios */}
            {index < studios.length - 1 && (
              <div className="my-8 border-t border-brand-beige"></div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form Section - Full Width with Side by Side */}
      {/* <div className="bg-brand-beige">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-brand-gray">{t('contact')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={t('first_name')}
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-brand-mid rounded bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={t('last_name')}
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-brand-mid rounded bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-brand-mid rounded bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={t('subject')}
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-brand-mid rounded bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark"
                  required
                />
                <textarea
                  name="message"
                  placeholder={t('message')}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-brand-mid rounded bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-brand-dark text-white py-3 px-6 rounded-lg hover:bg-brand-mid transition-colors font-medium"
                >
                  {t('submit')}
                </button>
              </form>
            </div> */}

            {/* Country Contact Info */}
            {/* <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-brand-gray">
                {selectedCountry === 'spain' ? t('country_spain') : 
                 selectedCountry === 'dominican-republic' ? t('country_dominican_republic') : 
                 t('country_global')} {t('contact')}
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-brand-gray mb-2">WhatsApp:</p>
                    <p className="text-brand-mid text-lg">{contactInfo.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium text-brand-gray mb-2">Email:</p>
                    <p className="text-brand-mid text-lg">{contactInfo.email}</p>
                  </div>
                  <div>
                    <p className="font-medium text-brand-gray mb-2">Instagram:</p>
                    <p className="text-brand-mid text-lg">@{contactInfo.instagram}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-beige">
                  <a
                    href={getWhatsAppUrl(selectedCountry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    {t('contact_via_whatsapp')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}