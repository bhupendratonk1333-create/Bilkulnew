import { useEffect } from 'react';
import {
  Stethoscope, Sparkles, ShieldCheck, Activity, Crown, Smile, Gem, Sun,
  CheckCircle2, ArrowRight, type LucideIcon,
} from 'lucide-react';
import { services, clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { clinicImages, fallbackImages } from '@/lib/images';
import { ClinicImage } from '@/components/ui/ClinicImage';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Sparkles, ShieldCheck, Activity, Crown, Smile, Gem, Sun,
};

export function ServicesPage() {
  // Support deep-linking to a specific service via #/services#slug
  useEffect(() => {
    const innerAnchor = window.location.hash.split('#')[2];
    if (innerAnchor) {
      requestAnimationFrame(() => {
        document.getElementById(innerAnchor)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Dental treatments for every need"
        description="A full range of gentle, modern dental care — from routine check-ups to advanced restorative and cosmetic treatments."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px space-y-8 sm:space-y-10">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            const reversed = i % 2 === 1;
            const img = i % 2 === 0 ? clinicImages.treatmentRoom1 : clinicImages.treatmentRoom2;
            const imgFallback = i % 2 === 0 ? fallbackImages.treatmentRoom1 : fallbackImages.treatmentRoom2;
            return (
              <Reveal
                key={service.slug}
                as="article"
                id={service.slug}
                className="scroll-mt-28 grid items-stretch gap-6 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft lg:grid-cols-2 lg:gap-10"
              >
                {/* Image */}
                <div className={`relative h-56 overflow-hidden sm:h-64 lg:h-auto ${reversed ? 'lg:order-2' : ''}`}>
                  <ClinicImage
                    src={img}
                    fallback={imgFallback}
                    alt={`${service.title} performed at Vinayak Dental Clinic in the treatment room`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-primary shadow-soft backdrop-blur">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center p-6 sm:p-8 ${reversed ? 'lg:order-1' : ''}`}>
                  <h2 className="text-xl font-semibold text-ink sm:text-2xl">{service.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm font-medium text-body">
                        <CheckCircle2 size={16} className="text-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/appointment')}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-600 active:scale-95"
                  >
                    Book this treatment
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="container-px mt-10">
          <Reveal className="flex flex-col items-center gap-4 rounded-2xl bg-section p-8 text-center">
            <h2 className="text-2xl font-bold text-ink">Not sure which treatment you need?</h2>
            <p className="max-w-xl text-muted">
              Book a consultation and we'll examine, advise and create a personalised plan —
              with honest recommendations and no pressure.
            </p>
            <Button onClick={() => navigate('/appointment')} size="lg" iconRight={<ArrowRight size={18} />}>
              Book a consultation
            </Button>
          </Reveal>
          <p className="mt-6 text-center text-xs text-muted">
            <Placeholder>Confirm the full list of treatments actually offered by the clinic</Placeholder>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section py-14">
        <div className="container-px text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Have a question about a treatment?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Call us at{' '}
            <a href={`tel:${clinic.phonePrimary}`} className="font-semibold text-primary">{clinic.phonePrimary}</a>{' '}
            or send a message — we're happy to explain.
          </p>
        </div>
      </section>
    </>
  );
}
