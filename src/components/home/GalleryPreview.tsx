import { ArrowRight } from 'lucide-react';
import { gallery } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ClinicImage } from '@/components/ui/ClinicImage';

export function GalleryPreview() {
  // show first 6 images on home
  const items = gallery.slice(0, 6);
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our clinic"
          title="A look inside Vinayak Dental"
          description="Bright, clean and welcoming — the kind of space that makes you feel at ease the moment you arrive."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3">
          {items.map((img, i) => (
            <Reveal
              key={img.src}
              as="figure"
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <ClinicImage
                src={img.src}
                fallback={img.fallback}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-[4/3]"
                loading="lazy"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{img.caption}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button onClick={() => navigate('/gallery')} variant="outline" size="lg" iconRight={<ArrowRight size={18} />}>
            View full gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
