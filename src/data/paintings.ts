export type PaintingStatus = 'available' | 'sold';

export type LocalizedCopy = Record<string, string>;

export type Painting = {
  id: string;
  title: LocalizedCopy;
  description: LocalizedCopy;
  size: string;
  materials: LocalizedCopy;
  year: number;
  status: PaintingStatus;
  price: string;
  images: {
    src: string;
    alt: LocalizedCopy;
  }[];
};

const remoteBase = 'https://images.unsplash.com';

export const paintings: Painting[] = [
  {
    id: 'golden-horizon',
    title: {
      en: 'Golden Horizon',
      es: 'Horizonte Dorado',
    },
    description: {
      en: 'An exploration of warm light meeting the sea right before sunrise.',
      es: 'Una exploración de la luz cálida que abraza el mar justo antes del amanecer.',
    },
    size: '80 x 60 cm',
    materials: {
      en: 'Acrylic and gold leaf on canvas',
      es: 'Acrílico y pan de oro sobre lienzo',
    },
    year: 2024,
    status: 'available',
    price: '$1,200',
    images: [
      {
        src: `${remoteBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,
        alt: {
          en: 'Golden Horizon painting - abstract sunrise tones.',
          es: 'Pintura Horizonte Dorado - tonos abstractos de amanecer.',
        },
      },
      {
        src: `${remoteBase}/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80`,
        alt: {
          en: 'Detail of Golden Horizon brushwork.',
          es: 'Detalle de las pinceladas de Horizonte Dorado.',
        },
      },
    ],
  },
  {
    id: 'midnight-garden',
    title: {
      en: 'Midnight Garden',
      es: 'Jardín de Medianoche',
    },
    description: {
      en: 'Botanical silhouettes revealed by moonlight in layered blues.',
      es: 'Siluetas botánicas reveladas por la luna en capas de azules.',
    },
    size: '100 x 80 cm',
    materials: {
      en: 'Oil on canvas',
      es: 'Óleo sobre lienzo',
    },
    year: 2023,
    status: 'available',
    price: '$1,450',
    images: [
      {
        src: `${remoteBase}/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80`,
        alt: {
          en: 'Midnight Garden painting in blue palette.',
          es: 'Pintura Jardín de Medianoche en paleta azul.',
        },
      },
      {
        src: `${remoteBase}/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80`,
        alt: {
          en: 'Close-up texture of Midnight Garden.',
          es: 'Textura en detalle de Jardín de Medianoche.',
        },
      },
    ],
  },
  {
    id: 'urban-dreams',
    title: {
      en: 'Urban Dreams',
      es: 'Sueños Urbanos',
    },
    description: {
      en: 'Vibrant acrylic layers inspired by neon reflections on rainy streets.',
      es: 'Capas vibrantes de acrílico inspiradas en reflejos de neón sobre calles lluviosas.',
    },
    size: '90 x 70 cm',
    materials: {
      en: 'Acrylic and ink on canvas',
      es: 'Acrílico y tinta sobre lienzo',
    },
    year: 2022,
    status: 'sold',
    price: '$980',
    images: [
      {
        src: `${remoteBase}/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80`,
        alt: {
          en: 'Urban Dreams abstract cityscape.',
          es: 'Paisaje urbano abstracto de Sueños Urbanos.',
        },
      },
      {
        src: `${remoteBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,
        alt: {
          en: 'Detail of Urban Dreams color transitions.',
          es: 'Detalle de las transiciones de color de Sueños Urbanos.',
        },
      },
    ],
  },
];

