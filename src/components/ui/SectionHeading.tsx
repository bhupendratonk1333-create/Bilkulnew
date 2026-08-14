import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
