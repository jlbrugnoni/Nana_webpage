import { useEffect, useMemo, useState } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

export type ImageCarouselVariant = 'default' | 'portrait';

type ImageCarouselProps = {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  variant?: ImageCarouselVariant;
  onImageClick?: (index: number) => void;
};

export default function ImageCarousel({
  images,
  autoPlay = true,
  interval = 5500,
  variant = 'default',
  onImageClick,
}: ImageCarouselProps) {
  const safeImages = useMemo(() => (images.length ? images : [{ src: '/hero.jpg', alt: 'Artwork' }]), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeImages.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [autoPlay, interval, safeImages.length]);

  const next = () => setIndex((current) => (current + 1) % safeImages.length);
  const prev = () => setIndex((current) => (current - 1 + safeImages.length) % safeImages.length);

  const containerClasses =
    variant === 'portrait'
      ? 'relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white'
      : 'relative w-full overflow-hidden rounded-2xl bg-gray-100';
  const imageWrapClasses = variant === 'portrait' ? 'relative w-full' : 'relative h-72 sm:h-96';
  const imageClasses =
    variant === 'portrait'
      ? 'h-full w-full object-cover'
      : 'h-full w-full object-cover';
  const aspectClasses = variant === 'portrait' ? 'aspect-[3/4]' : '';

  return (
    <div className={containerClasses}>
      <div className={`${imageWrapClasses} ${aspectClasses}`}>
        {safeImages.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              imageIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onClick={onImageClick ? () => onImageClick(imageIndex) : undefined}
            aria-label={onImageClick ? `View image ${imageIndex + 1}` : undefined}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={imageClasses}
              loading={imageIndex === 0 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>

      {safeImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
            aria-label="Previous image"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
            aria-label="Next image"
          >
            &gt;
          </button>
        </>
      )}

      {safeImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {safeImages.map((image, dotIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                dotIndex === index ? 'bg-white shadow' : 'bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`View image ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

