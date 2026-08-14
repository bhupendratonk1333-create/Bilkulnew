import { MapPin, Navigation, Car } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Placeholder } from '@/components/ui/Placeholder';

const nearbyAreas = ['Pratap Nagar', 'Sanganer', 'Tonk Road', 'Mansarovar', 'Durgapura', 'Gurjar Ki Thadi'];

export function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-px grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Visit us"
            title="Proudly serving Pratap Nagar & nearby areas"
            align="left"
          />
          <p className="mt-5 text-base leading-relaxed text-muted">
            You'll find {clinic.name} in the heart of {clinic.area}, well connected by road
            and easy to reach from surrounding localities. We welcome patients from across
            Jaipur.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-ink">Our address</p>
                <p className="text-sm text-muted">
                  {clinic.address.line1}, {clinic.address.line2}
                </p>
                <p className="mt-1.5"><Placeholder>Verify exact address & landmark</Placeholder></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Car size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-ink">Getting here</p>
                <p className="text-sm text-muted">
                  Convenient parking nearby. Well connected by metro and bus.
                  <span className="mt-1.5 block"><Placeholder>Add nearest landmark & parking details</Placeholder></span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-ink">Areas we commonly serve</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {nearbyAreas.map((area) => (
                <span key={area} className="rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <a
            href={clinic.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading font-semibold text-white shadow-soft transition hover:bg-primary-600 active:scale-95"
          >
            <Navigation size={18} aria-hidden="true" />
            Get Directions
          </a>
        </Reveal>

        {/* Map */}
        <Reveal delay={120} className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
          <iframe
            title="Map showing Vinayak Dental Clinic location in Pratap Nagar, Jaipur"
            src={clinic.mapsEmbed}
            className="h-[380px] w-full border-0 lg:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
