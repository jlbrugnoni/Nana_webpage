import { count } from 'console';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import StudioModal from './StudioModal';

const studios = [
  {
    nameKey: 'studio_sdq',
    countryKey: 'studio_sdq_country',
    image: '/studios/piantini.jpg',
    galleryImages: [
      '/studios/piantini.jpg',
      '/studios/piantini_2.jpeg',
      '/studios/piantini_3.jpeg',
      '/studios/piantini_4.jpeg',
      '/studios/piantini_5.jpeg',
      '/studios/piantini_6.jpeg',
      '/studios/piantini_7.jpeg',
    ],
  },
  {
    nameKey: 'studio_pc',
    countryKey: 'studio_pc_country',
    image: '/studios/bella_vista.jpg',
    galleryImages: [
      '/studios/bella_vista.jpg',
      '/studios/bella_vista_2.jpeg',
      '/studios/bella_vista_3.jpeg',
      '/studios/bella_vista_4.jpeg',
    ],
  },
  {
    nameKey: 'studio_estepona',
    countryKey: 'studio_estepona_country',
    image: '/studios/estepona.jpg',
    galleryImages: [
      '/studios/estepona.jpg',
    ],
  }
];

export default function Studios() {
  const { t } = useTranslation('common');
  const [selectedStudio, setSelectedStudio] = useState<typeof studios[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (studio: typeof studios[0]) => {
    setSelectedStudio(studio);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudio(null);
  };

  return (
    <section
      id="studios"
      className="scroll-mt-24 py-20 px-4 bg-brand-beige text-brand-gray font-gotham"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">{t('studios')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {studios.map((studio) => (
            <div 
              key={studio.nameKey} 
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openModal(studio)}
            >
              <div className="relative">
                <img
                  src={studio.image}
                  alt={t(studio.nameKey)}
                  className="w-40 h-40 object-cover rounded-full shadow-md mb-4 border-4 border-brand-beige"
                />
                {/* Gallery indicator */}
                {studio.galleryImages.length > 1 && (
                  <div className="absolute top-2 right-2 bg-brand-dark text-white text-xs px-2 py-1 rounded-full">
                    {studio.galleryImages.length} photos
                  </div>
                )}
              </div>
              <p className="text-lg font-semibold">{t(studio.nameKey)}</p>
              <p className="text-lg font-semibold">{t(studio.countryKey)}</p>
              {studio.nameKey === 'studio_estepona' && (
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full mt-2">
                  {t('coming_soon')}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Studio Modal */}
      {selectedStudio && (
        <StudioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          studioName={t(selectedStudio.nameKey)}
          images={selectedStudio.galleryImages}
        />
      )}
    </section>
  );
}