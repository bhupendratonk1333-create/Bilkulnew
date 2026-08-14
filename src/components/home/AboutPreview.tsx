import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { clinicImages, fallbackImages } from '@/lib/images';
import { ClinicImage } from '@/components/ui/ClinicImage';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Placeholder } from '@/components/ui/Placeholder';

const highlights = [
  'A calm, judgement-free environment',
  'Honest advice — only the treatment you need',
  'Modern, sterilised equipment',
  'Convenient evening & weekend hours',
];

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl shadow-soft-lg">
            <ClinicImage
              src={clinicImages.treatmentRoom1}
              fallback={fallbackImages.treatmentRoom1}
              alt="Reception and waiting area of Vinayak Dental Clinic in Pratap Nagar, Jaipur"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1000}
              height={750}
            />
          </div>
          <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-primary p-5 text-white shadow-soft-lg sm:block">
            <p className="text-3xl font-bold leading-none">{clinic.stats[0].value}</p>
            <p className="mt-1.5 text-sm text-primary-100">years caring for our community</p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <SectionHeading
            eyebrow="About the clinic"
            title="A neighbourhood clinic that puts you at ease"
            align="left"
          />
          <p className="mt-5 text-base leading-relaxed text-muted">
            {clinic.name} is a friendly neighbourhood dental practice in {clinic.area}.
            We believe good dental care should feel approachable — never rushed or
            intimidating. Our team takes the time to listen, explain, and make sure
            every patient feels comfortable from the moment they walk in.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm text-body sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={() => navigate('/about')} variant="secondary" iconRight={<ArrowRight size={18} />}>
              More about us
            </Button>
            <span className="text-xs text-muted">
              <Placeholder>Dentist bio & qualifications — add verified details</Placeholder>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
