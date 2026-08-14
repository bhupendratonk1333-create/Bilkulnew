import { gallery } from '@/content/clinic';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Placeholder } from '@/components/ui/Placeholder';
import { ClinicImage } from '@/components/ui/ClinicImage';

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside our clinic"
        description="Bright, clean and welcoming — take a visual tour of the space where we care for your smile."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {gallery.map((img, i) => (
              <Reveal
                key={img.src}
                as="figure"
                delay={(i % 3) * 70}
                className="group relative block break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              >
                <ClinicImage
                  src={img.src}
                  fallback={img.fallback}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">{img.caption}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted">
            <Placeholder>
              Replace these licensed stock photos with authentic clinic photography before publishing.
              Do not use Google Business Profile photos without permission.
            </Placeholder>
          </p>
        </div>
      </section>
    </>
  );
}
