import React, { useState } from 'react';
import { useCountry, Country } from '@/contexts/CountryContext';
import { useTranslation } from 'next-i18next';

export default function CountrySelector() {
  const { selectedCountry, setSelectedCountry, countries, isLocationDetected, userCountry } = useCountry();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const getCountryDisplayName = (countryId: Country) => {
    // Use direct translation keys
    if (countryId === 'spain') {
      return t('country_spain');
    } else if (countryId === 'dominican-republic') {
      return t('country_dominican_republic');
    } else if (countryId === 'global') {
      return t('country_global');
    }
    return countryId;
  };

  const getStatusBadge = (countryId: Country) => {
    const country = countries[countryId];
    if (!country.isOperational) {
      return <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">{t('coming_soon')}</span>;
    }
    return null;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-beige rounded-lg hover:bg-brand-light transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-brand-beige rounded-lg shadow-lg z-50 min-w-[200px]">
          <div className="p-2">
            {Object.entries(countries).map(([countryId, country]) => (
              <button
                key={countryId}
                onClick={() => {
                  setSelectedCountry(countryId as Country);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-brand-light transition-colors flex items-center justify-between ${
                  selectedCountry === countryId ? 'bg-brand-light' : ''
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {countryId === 'spain' ? t('country_spain') : 
                     countryId === 'dominican-republic' ? t('country_dominican_republic') : 
                     t('country_global')}
                  </span>
                </div>
                {getStatusBadge(countryId as Country)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}