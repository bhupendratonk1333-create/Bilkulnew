import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-section to-canvas pt-14 pb-12 sm:pt-18 sm:pb-14 lg:pt-20 lg:pb-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl" aria-hidden="true" />
      <div className="container-px relative text-center">
        <span className="inline-block rounded-full border border-primary-100 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary shadow-soft">
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
