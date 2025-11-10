import { Country } from '@/contexts/CountryContext';

export interface StudioInfo {
  id: string;
  nameKey: string; // Translation key for studio name
  addressKey: string; // Translation key for address
  phoneKey: string; // Translation key for phone
  emailKey: string; // Translation key for email
  googleMapsEmbed: string; // Google Maps embed URL
  country: Country;
  isOperational: boolean;
  whatsapp: string; // Studio-specific WhatsApp number
}

export const studioConfig: StudioInfo[] = [
  {
    id: 'estepona',
    nameKey: 'estepona_studio_name',
    addressKey: 'estepona_studio_address',
    phoneKey: 'estepona_studio_phone',
    emailKey: 'estepona_studio_email',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1225.0557696897047!2d-5.123659291928367!3d36.43106114135252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDI1JzUyLjIiTiA1wrAwNycyMy4wIlc!5e0!3m2!1sen!2sdo!4v1758472240617!5m2!1sen!2sdo',
    country: 'spain',
    isOperational: false,
    whatsapp: '+34681061913', // Estepona WhatsApp
  },
  {
    id: 'piantini',
    nameKey: 'sdq_studio_name',
    addressKey: 'sdq_studio_address',
    phoneKey: 'sdq_studio_phone',
    emailKey: 'sdq_studio_email',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4804.223034728985!2d-69.9396724239661!3d18.472348070643854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89fad6838daf%3A0xc6df7adb7debe83a!2sBeness%20Pilates%20Studio!5e0!3m2!1sen!2sdo!4v1758468799171!5m2!1sen!2sdo',
    country: 'dominican-republic',
    isOperational: true,
    whatsapp: '+18293419886', // Piantini WhatsApp
  },
  {
    id: 'bella-vista',
    nameKey: 'pc_studio_name',
    addressKey: 'pc_studio_address',
    phoneKey: 'pc_studio_phone',
    emailKey: 'pc_studio_email',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4804.223034728985!2d-69.95033561449367!3d18.450685953650922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56323a585dba5%3A0x145bd10427cc1267!2sBeness%20Pilates%20Studio%20Bella%20Vista!5e0!3m2!1sen!2sdo!4v1758468903781!5m2!1sen!2sdo',
    country: 'dominican-republic',
    isOperational: true,
    whatsapp: '+18097052228', // Bella Vista WhatsApp
  },
];

// Helper function to get studios for a specific country
export function getStudiosForCountry(country: Country): StudioInfo[] {
  if (country === 'global') {
    return studioConfig; // Show all studios for global
  }
  return studioConfig.filter(studio => studio.country === country);
}

// Helper function to get operational studios for a country
export function getOperationalStudiosForCountry(country: Country): StudioInfo[] {
  const studios = getStudiosForCountry(country);
  return studios.filter(studio => studio.isOperational);
}
