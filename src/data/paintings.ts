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
    id: 'andes-serenade',
    title: {
      en: 'Andes Serenade',
      es: 'Serenata Andina',
    },
    description: {
      en: 'A warm cascade of light tracing ridgelines inspired by sunset drives through Mendoza.',
      es: 'Una cálida cascada de luz que traza cordilleras inspiradas en atardeceres mendocinos.',
    },
    size: '90 x 70 cm',
    materials: {
      en: 'Acrylic, oil pastel, and gold leaf on canvas',
      es: 'Acrílico, óleo pastel y pan de oro sobre lienzo',
    },
    year: 2024,
    status: 'available',
    price: '$1,600',
    images: [
      {
        src: '/gallery/original1_a.png',
        alt: {
          en: 'Andes Serenade painting with luminous gold and terracotta bands.',
          es: 'Pintura Serenata Andina con bandas luminosas de oro y terracota.',
        },
      },
      {
        src: '/gallery/original1_b.png',
        alt: {
          en: 'Detail of Andes Serenade showing layered brushwork and metallic sheen.',
          es: 'Detalle de Serenata Andina mostrando capas de pinceladas y brillo metálico.',
        },
      },
    ],
  },
  {
    id: 'rain-soaked-boulevard',
    title: {
      en: 'Rain-Soaked Boulevard',
      es: 'Bulevar Bajo la Lluvia',
    },
    description: {
      en: 'Neon reflections and blurred silhouettes captured after a stormy night walk in Madrid.',
      es: 'Reflejos de neón y siluetas difusas capturadas tras una noche lluviosa en Madrid.',
    },
    size: '80 x 65 cm',
    materials: {
      en: 'Oil on canvas',
      es: 'Óleo sobre lienzo',
    },
    year: 2023,
    status: 'sold',
    price: '$1,450',
    images: [
      {
        src: '/gallery/original2_a.png',
        alt: {
          en: 'Rain-Soaked Boulevard painting with deep blues and city lights.',
          es: 'Pintura Bulevar Bajo la Lluvia con azules profundos y luces urbanas.',
        },
      },
    ],
  },
  {
    id: 'atlantic-orbit',
    title: {
      en: 'Atlantic Orbit',
      es: 'Órbita Atlántica',
    },
    description: {
      en: 'Interlocking tidal forms and moon phases inspired by nights on the Galician coast.',
      es: 'Formas de mareas y fases lunares entrelazadas inspiradas en noches en la costa gallega.',
    },
    size: '120 x 90 cm',
    materials: {
      en: 'Mixed media on canvas',
      es: 'Técnica mixta sobre lienzo',
    },
    year: 2024,
    status: 'available',
    price: '$2,100',
    images: [
      {
        src: '/gallery/original3_a.png',
        alt: {
          en: 'Atlantic Orbit painting with concentric teal, coral, and navy forms.',
          es: 'Pintura Órbita Atlántica con formas concéntricas en verde azulado, coral y azul marino.',
        },
      },
      {
        src: '/gallery/original3_b.png',
        alt: {
          en: 'Detail of Atlantic Orbit showing layered glazes and ink marks.',
          es: 'Detalle de Órbita Atlántica con veladuras y trazos de tinta.',
        },
      },
      {
        src: '/gallery/original3_c.png',
        alt: {
          en: 'Atlantic Orbit viewed in studio with soft daylight.',
          es: 'Órbita Atlántica en el estudio con luz diurna suave.',
        },
      },
    ],
  },
  {
    id: 'patagonia-whisper',
    title: {
      en: 'Patagonia Whisper',
      es: 'Susurro Patagónico',
    },
    description: {
      en: 'Delicate glacier blues and earthy siennas layered to echo the quiet of El Chaltén.',
      es: 'Azules glaciales y sienas terrosas en capas que evocan el silencio de El Chaltén.',
    },
    size: '110 x 80 cm',
    materials: {
      en: 'Acrylic, charcoal, and pencil on canvas',
      es: 'Acrílico, carboncillo y grafito sobre lienzo',
    },
    year: 2022,
    status: 'available',
    price: '$1,850',
    images: [
      {
        src: '/gallery/original4_a.png',
        alt: {
          en: 'Patagonia Whisper painting with icy blues and drifting lines.',
          es: 'Pintura Susurro Patagónico con azules helados y líneas flotantes.',
        },
      },
      {
        src: '/gallery/original4_b.png',
        alt: {
          en: 'Detail of Patagonia Whisper showing delicate graphite marks.',
          es: 'Detalle de Susurro Patagónico con marcas delicadas de grafito.',
        },
      },
      {
        src: '/gallery/original4_c.png',
        alt: {
          en: 'Patagonia Whisper styled on a neutral wall with natural light.',
          es: 'Susurro Patagónico en una pared neutra con luz natural.',
        },
      },
    ],
  },
];

