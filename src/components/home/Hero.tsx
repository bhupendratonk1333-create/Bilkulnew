import { Phone, Calendar, ShieldCheck, Star, MapPin } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { telHref } from '@/lib/contact';
import { clinicImages, fallbackImages } from '@/lib/images';
import { ClinicImage } from '@/components/ui/ClinicImage';
import { Button } from '@/components/ui/Button';
import { Stars } from '@/components/ui/Stars';
import { Placeholder } from '@/components/ui/Placeholder';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-section via-canvas to-canvas pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl" aria-hidden="true" />

      <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Copy */}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-soft animate-fade-in">
            <MapPin size={15} aria-hidden="true" />
            {clinic.area}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-ink animate-fade-up sm:text-5xl lg:text-[3.5rem]">
            Gentle dental care your{' '}
            <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              whole family
            </span>{' '}
            will love
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted animate-fade-up [animation-delay:120ms]">
            At {clinic.name}, we make every visit calm, comfortable and completely
            judgement-free. From routine check-ups to advanced treatments — your smile
            is in caring hands.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
            <Button onClick={() => navigate('/appointment')} size="lg" icon={<Calendar size={18} />}>
              Book an Appointment
            </Button>
            <Button as="a" href={telHref(clinic.phonePrimary)} variant="outline" size="lg" icon={<Phone size={18} />}>
              Call Now
            </Button>
          </div>

          {/* Rating row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-up [animation-delay:360ms]">
            <div className="flex items-center gap-2.5">
              <Stars rating={5} />
              <span className="text-sm text-body">
                <strong className="font-semibold text-ink">{clinic.googleRating.score}</strong> from{' '}
                <strong className="font-semibold text-ink">{clinic.googleRating.count}</strong> reviews
              </span>
            </div>
            <span className="hidden h-4 w-px bg-slate-300 sm:block" />
            <span className="inline-flex items-center gap-2 text-sm text-body">
              <ShieldCheck size={16} className="text-accent" aria-hidden="true" />
              Sterilised, hygienic & safe
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            <Placeholder>Rating & review count — confirm on your Google Business Profile</Placeholder>
          </p>
        </div>

        {/* Image */}
        <div className="relative animate-scale-in [animation-delay:200ms]">
          <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
            <ClinicImage
              src={clinicImages.exterior}
              fallback={fallbackImages.exterior}
              alt="Vinayak Dental Clinic exterior in Pratap Nagar, Jaipur — the entrance with the clinic sign"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
              width={1000}
              height={750}
              objectPosition="center"
            />
          </div>

          {/* Floating card — patients */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-soft-lg sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent">
                <Star size={22} className="fill-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none text-ink">{clinic.stats[1].value}</p>
                <p className="mt-1 text-xs text-muted">Happy patients</p>
              </div>
            </div>
          </div>

          {/* Floating card — open today */}
          <div className="absolute -right-2 top-6 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-soft-lg md:block">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <p className="text-sm font-semibold text-ink">Open today</p>
            </div>
            <p className="mt-1 text-xs text-muted">Until 9:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
