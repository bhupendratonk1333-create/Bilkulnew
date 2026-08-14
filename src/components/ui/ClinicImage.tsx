import { useState } from 'react';

interface ClinicImageProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  objectPosition?: string;
}

/**
 * Renders a clinic photo from /public/images/.
 * If the local file hasn't been uploaded yet, falls back to a placeholder
 * automatically so the site always looks complete.
 */
export function ClinicImage({
  src,
  fallback,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  objectPosition = 'center',
}: ClinicImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      style={{ objectPosition }}
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback);
      }}
      decoding="async"
    />
  );
}
