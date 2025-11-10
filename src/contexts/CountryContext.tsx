import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Country = 'spain' | 'dominican-republic' | 'global';

export interface CountryInfo {
  id: Country;
  nameKey: string; // Translation key for country name
  whatsapp: string;
  instagram: string;
  currency: string;
  isOperational: boolean;
  studios: string[]; // Studio names for this country
}

export interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  countries: Record<Country, CountryInfo>;
  isLocationDetected: boolean;
  userCountry: string | null;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

const countries: Record<Country, CountryInfo> = {
  spain: {
    id: 'spain',
    nameKey: 'country_spain',
    whatsapp: '+34681061913',
    instagram: 'benesspilates',
    currency: 'EUR',
    isOperational: false, // Estepona not yet operational
    studios: ['Estepona'],
  },
  'dominican-republic': {
    id: 'dominican-republic',
    nameKey: 'country_dominican_republic',
    whatsapp: '+18095428404', // Default to Piantini
    instagram: 'benesspilates',
    currency: 'USD',
    isOperational: true,
    studios: ['Piantini - Santo Domingo', 'Bella Vista - Santo Domingo'],
  },
  global: {
    id: 'global',
    nameKey: 'country_global',
    whatsapp: '+34681061913', // Default to Spain number for global
    instagram: 'benesspilates',
    currency: 'USD',
    isOperational: true,
    studios: ['Global Services'],
  },
};

export function CountryProvider({ children }: { children: ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<Country>('dominican-republic'); // Default to DR
  const [isLocationDetected, setIsLocationDetected] = useState(false);
  const [userCountry, setUserCountry] = useState<string | null>(null);

  // Load saved country selection from localStorage
  useEffect(() => {
    const savedCountry = localStorage.getItem('beness-selected-country') as Country;
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  // Auto-detect location
  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to get location from IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          setUserCountry(data.country_code);
          setIsLocationDetected(true);
          
          // Auto-select country based on location
          if (data.country_code === 'ES') {
            setSelectedCountry('spain');
          } else if (data.country_code === 'DO') {
            setSelectedCountry('dominican-republic');
          } else {
            // For any other country, default to global
            setSelectedCountry('global');
          }
        }
      } catch (error) {
        console.log('Location detection failed, using default');
        setIsLocationDetected(false);
      }
    };

    detectLocation();
  }, []);

  // Save country selection to localStorage
  const handleSetSelectedCountry = (country: Country) => {
    setSelectedCountry(country);
    localStorage.setItem('beness-selected-country', country);
  };

  const value: CountryContextType = {
    selectedCountry,
    setSelectedCountry: handleSetSelectedCountry,
    countries,
    isLocationDetected,
    userCountry,
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
}
