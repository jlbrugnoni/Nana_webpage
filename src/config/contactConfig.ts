import { Country } from '@/contexts/CountryContext';

export interface ContactInfo {
  whatsapp: string;
  instagram: string;
  email: string;
  phone: string;
}

export const contactConfig: Record<Country, ContactInfo> = {
  spain: {
    whatsapp: '+34681061913',
    instagram: 'benesspilates.es',
    email: 'hello@benesspilates.com',
    phone: '+34 681 061 913',
  },
  'dominican-republic': {
    whatsapp: '+18095428404', // Piantini number as default
    instagram: 'benessrd',
    email: 'hello@benesspilates.com',
    phone: '+1 809 542 8404',
  },
  global: {
    whatsapp: '+34681061913', // Global contact - you can change this
    instagram: 'benesspilates', // Global Instagram - you can change this
    email: 'global@benesspilates.com', // Global email - you can change this
    phone: '+34 681 061 913', // Global phone - you can change this
  },
};

// Helper function to get contact info for a country
export function getContactInfo(country: Country): ContactInfo {
  return contactConfig[country];
}

// Helper function to get WhatsApp URL
export function getWhatsAppUrl(country: Country): string {
  return `https://wa.me/${contactConfig[country].whatsapp}`;
}

// Helper function to get Instagram URL
export function getInstagramUrl(country: Country): string {
  return `https://instagram.com/${contactConfig[country].instagram}`;
}
