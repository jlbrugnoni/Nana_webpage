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

const artworkFiles = [
  'originals_001.png',
  'originals_002.png',
  'originals_003.png',
  'originals_004.png',
  'originals_005.png',
  'originals_007.png',
  'originals_006.png',
  'originals_008.png',
  'originals_009.png',
  'originals_011.png',
  'originals_010.png',
  'originals_012.png',
  'originals_016.png',
  'originals_015.png',
  'originals_014.png',
  'originals_017.png',
  'originals_013.png',
  'originals_018.png',
  'originals_019.png',
  'originals_020.jpg',
  'originals_021.png',
  'originals_022.png',
  'originals_023.png',
] as const;

type CatalogDetails = {
  title: LocalizedCopy;
  size: string;
  materials: LocalizedCopy;
  year: number;
  price: string;
  status?: PaintingStatus;
};

const catalogDetails: CatalogDetails[] = [
  { title: { en: 'Untitled', es: 'Sin título' }, size: '50 × 60 cm', materials: { en: 'Mixed media on cardboard', es: 'Técnica mixta sobre cartón' }, year: 2025, price: '€600' },
  { title: { en: 'Untitled', es: 'Sin título' }, size: 'Por confirmar / To be confirmed', materials: { en: 'Black ink on lightweight cardstock', es: 'Tinta negra sobre cartulina fina' }, year: 2025, price: '€220' },
  { title: { en: 'Untitled', es: 'Sin título' }, size: '30 × 21 cm', materials: { en: 'Black ink on cotton paper', es: 'Tinta negra sobre papel de algodón' }, year: 2025, price: '€250' },
  { title: { en: 'Untitled', es: 'Sin título' }, size: '30 × 21 cm', materials: { en: 'Black ink on cotton paper', es: 'Tinta negra sobre papel de algodón' }, year: 2026, price: '€250', status: 'sold' },
  { title: { en: 'P1 · Parts of Me Series', es: 'P1 · Serie Partes de Mí' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'P2 · Parts of Me Series', es: 'P2 · Serie Partes de Mí' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'P3 · Parts of Me Series', es: 'P3 · Serie Partes de Mí' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Portrait 1 · Portraits I Series', es: 'Retrato 1 · Serie Retratos I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Portrait 2 · Portraits I Series', es: 'Retrato 2 · Serie Retratos I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Portrait 3 · Portraits I Series', es: 'Retrato 3 · Serie Retratos I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Portrait 4 · Portraits I Series', es: 'Retrato 4 · Serie Retratos I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Portrait 5 · Portraits I Series', es: 'Retrato 5 · Serie Retratos I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Face 1 · Faces I Series', es: 'Rostro 1 · Serie Rostros I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Face 2 · Faces I Series', es: 'Rostro 2 · Serie Rostros I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Face 3 · Faces I Series', es: 'Rostro 3 · Serie Rostros I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Face 4 · Faces I Series', es: 'Rostro 4 · Serie Rostros I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'Face 5 · Faces I Series', es: 'Rostro 5 · Serie Rostros I' }, size: '30 × 40 cm', materials: { en: 'Acrylic on cotton paper', es: 'Acrílico sobre papel de algodón' }, year: 2025, price: '€350' },
  { title: { en: 'The Sea Within', es: 'El mar por dentro' }, size: '44 × 31.5 cm (marco flotante / floating frame)', materials: { en: 'Acrylic on canvas', es: 'Acrílico sobre lienzo' }, year: 2026, price: '€750' },
  { title: { en: 'Untitled', es: 'Sin título' }, size: '99 × 156 cm', materials: { en: 'Mixed media on kraft paper', es: 'Técnica mixta sobre papel kraft' }, year: 2026, price: '€2,400' },
  { title: { en: 'Dear Me', es: 'Querida yo' }, size: '96 × 58 cm aprox.', materials: { en: 'Mixed media on cardboard', es: 'Técnica mixta sobre cartón' }, year: 2025, price: '€800' },
  { title: { en: 'Blue Moon', es: 'Luna azul' }, size: 'Ø 45 cm', materials: { en: 'Acrylic and acrylic marker on circular support', es: 'Acrílico y rotulador acrílico sobre soporte circular' }, year: 2024, price: '€650' },
  { title: { en: 'The Two with Hats', es: 'Los dos con sombreros' }, size: '114 × 99 cm', materials: { en: 'Acrylic paint on canvas', es: 'Pintura acrílica sobre lienzo' }, year: 2025, price: '€2,800' },
  { title: { en: 'I Protect You', es: 'Yo te protejo' }, size: '50 × 71 cm', materials: { en: 'Mixed media on canvas', es: 'Técnica mixta sobre lienzo' }, year: 2025, price: '€950' },
];

const placeholderDescriptions: LocalizedCopy[] = [
  {
    en: 'A quiet study of color and movement, built through soft layers and spontaneous marks that invite a slow, personal reading.',
    es: 'Un estudio sereno de color y movimiento, construido con capas suaves y gestos espontáneos que invitan a una lectura lenta y personal.',
  },
  {
    en: 'Organic shapes move across the surface in a playful composition where contrast, rhythm, and open space remain in careful balance.',
    es: 'Formas orgánicas recorren la superficie en una composición lúdica donde el contraste, el ritmo y el espacio abierto conviven en equilibrio.',
  },
  {
    en: 'Layered tones and expressive lines create an intimate landscape that shifts between memory, imagination, and the natural world.',
    es: 'Tonos superpuestos y líneas expresivas crean un paisaje íntimo que transita entre la memoria, la imaginación y el mundo natural.',
  },
  {
    en: 'A luminous composition shaped by bold gestures and subtle details, offering a new visual discovery with every closer look.',
    es: 'Una composición luminosa definida por gestos audaces y detalles sutiles, que ofrece un nuevo descubrimiento visual con cada mirada.',
  },
  {
    en: 'This work explores the tension between structure and freedom through overlapping forms, textured passages, and unexpected color.',
    es: 'Esta obra explora la tensión entre estructura y libertad mediante formas superpuestas, pasajes texturizados y colores inesperados.',
  },
  {
    en: 'Delicate marks gather into a vibrant visual rhythm, suggesting fragments of places, sensations, and moments held in memory.',
    es: 'Marcas delicadas se reúnen en un ritmo visual vibrante que sugiere fragmentos de lugares, sensaciones y momentos guardados en la memoria.',
  },
  {
    en: 'An intuitive arrangement of color and texture creates a feeling of motion while preserving a calm and contemplative atmosphere.',
    es: 'Una disposición intuitiva de color y textura crea una sensación de movimiento mientras conserva una atmósfera tranquila y contemplativa.',
  },
  {
    en: 'Rich tonal variations unfold across the piece, connecting energetic brushwork with quieter areas of visual rest.',
    es: 'Ricas variaciones tonales se despliegan en la obra, conectando pinceladas enérgicas con zonas más serenas de descanso visual.',
  },
  {
    en: 'A conversation between fluid contours and grounded shapes gives this composition its distinctive sense of depth and balance.',
    es: 'Un diálogo entre contornos fluidos y formas sólidas aporta a esta composición una particular sensación de profundidad y equilibrio.',
  },
  {
    en: 'Built from layered gestures, this piece captures the energy of an unfolding moment without defining a single fixed narrative.',
    es: 'Construida a partir de gestos superpuestos, esta pieza captura la energía de un instante en desarrollo sin definir una narrativa única.',
  },
  {
    en: 'Soft transitions meet confident marks in an expressive work that feels simultaneously familiar, open, and full of possibility.',
    es: 'Transiciones suaves se encuentran con marcas decididas en una obra expresiva que se siente familiar, abierta y llena de posibilidades.',
  },
  {
    en: 'Color becomes the central language of this piece, forming a vivid atmosphere through subtle shifts in tone, weight, and direction.',
    es: 'El color se convierte en el lenguaje central de esta pieza, creando una atmósfera viva mediante sutiles cambios de tono, peso y dirección.',
  },
  {
    en: 'The composition brings together delicate textures and expansive forms, creating a visual space that feels both intimate and boundless.',
    es: 'La composición reúne texturas delicadas y formas expansivas, creando un espacio visual que se siente íntimo y a la vez ilimitado.',
  },
  {
    en: 'Expressive movement and carefully placed pauses guide the eye through a layered composition inspired by everyday sensations.',
    es: 'El movimiento expresivo y las pausas cuidadosamente ubicadas guían la mirada por una composición en capas inspirada en sensaciones cotidianas.',
  },
  {
    en: 'A balanced field of color, line, and texture transforms simple visual elements into an evocative and quietly energetic whole.',
    es: 'Un campo equilibrado de color, línea y textura transforma elementos visuales simples en un conjunto evocador y sutilmente enérgico.',
  },
  {
    en: 'This atmospheric work invites reflection through its gentle contrasts, layered surface, and sense of suspended movement.',
    es: 'Esta obra atmosférica invita a la reflexión mediante sus contrastes suaves, su superficie en capas y su sensación de movimiento suspendido.',
  },
  {
    en: 'A final interplay of intuitive marks and evolving color creates a composition that remains open to emotion and interpretation.',
    es: 'Un juego final de marcas intuitivas y color en evolución crea una composición abierta a la emoción y a múltiples interpretaciones.',
  },
  {
    en: 'Expansive gestures and shifting tones come together in a lively composition that suggests movement beyond the edge of the work.',
    es: 'Gestos expansivos y tonos cambiantes se unen en una composición viva que sugiere movimiento más allá de los límites de la obra.',
  },
  {
    en: 'A subtle dialogue of shape and color gives this work a meditative presence, revealing new relationships as the eye moves across it.',
    es: 'Un diálogo sutil entre forma y color aporta a esta obra una presencia meditativa que revela nuevas relaciones mientras la mirada la recorre.',
  },
  {
    en: 'Energetic lines cross quieter fields of color, creating a layered visual rhythm that feels spontaneous yet carefully resolved.',
    es: 'Líneas enérgicas atraviesan campos de color más serenos, creando un ritmo visual en capas que se siente espontáneo y cuidadosamente resuelto.',
  },
  {
    en: 'Bold forms and open space establish a playful sense of balance, allowing texture and color to carry the emotional tone of the piece.',
    es: 'Formas audaces y espacios abiertos establecen un equilibrio lúdico, permitiendo que la textura y el color definan el tono emocional de la pieza.',
  },
  {
    en: 'This open composition brings together flowing marks and grounded areas of color in a bright, expressive study of contrast and connection.',
    es: 'Esta composición abierta reúne marcas fluidas y áreas firmes de color en un estudio luminoso y expresivo sobre el contraste y la conexión.',
  },
  {
    en: 'Two figures meet in a protective gesture, using expressive lines and layered color to evoke closeness, care, and quiet strength.',
    es: 'Dos figuras se encuentran en un gesto protector, donde las líneas expresivas y las capas de color evocan cercanía, cuidado y una fuerza serena.',
  },
];

export const paintings: Painting[] = artworkFiles.map((fileName, index) => {
  const number = fileName.match(/originals_(\d{3})/)?.[1] ?? String(index + 1).padStart(3, '0');
  const details = catalogDetails[index];

  return {
    id: `original-${number}`,
    title: details.title,
    description: placeholderDescriptions[index],
    size: details.size,
    materials: details.materials,
    year: details.year,
    status: details.status ?? 'available',
    price: details.price,
    images: [
      {
        src: `/gallery/${fileName}`,
        alt: {
          en: `Original artwork ${number} by Adri Bru`,
          es: `Obra original ${number} de Adri Bru`,
        },
      },
    ],
  };
});
