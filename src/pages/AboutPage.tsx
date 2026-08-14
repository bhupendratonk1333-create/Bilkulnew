import { CheckCircle2, Heart, ShieldCheck, Users, Sparkles, Clock4 } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { clinicImages, fallbackImages } from '@/lib/images';
import { ClinicImage } from '@/components/ui/ClinicImage';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';

const values = [
  { icon: Heart, title: 'Compassion first', text: 'Every patient is treated with patience, kindness and respect — especially those who feel nervous.' },
  { icon: ShieldCheck, title: 'Safety & hygiene', text: 'We follow strict sterilisation protocols so you can feel completely safe in our care.' },
  { icon: Users, title: 'Family-oriented', text: 'From toddlers to grandparents, we care for smiles at every stage of life.' },
  { icon: Sparkles, title: 'Continuous learning', text: 'We keep up with modern techniques so you benefit from comfortable, up-to-date care.' },
  { icon: Clock4, title: 'Respect for your time', text: 'We run on schedule and keep waiting to a minimum, because your time matters.' },
  { icon: CheckCircle2, title: 'Honesty', text: 'Clear explanations and fair pricing — we never recommend treatment you don\'t need.' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Caring for our community's smiles"
        description="Meet the neighbourhood dental clinic that combines modern care with a warm, personal touch."
      />

      {/* Story */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="overflow-hidden rounded-3xl shadow-soft-lg">
            <ClinicImage
              src={clinicImages.treatmentRoom1}
              fallback={fallbackImages.treatmentRoom1}
              alt="Reception and waiting area of Vinayak Dental Clinic in Pratap Nagar, Jaipur"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1000}
              height={750}
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Our story" title="A clinic built on trust" align="left" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                {clinic.name} began with a simple belief: dental care should feel calm,
                honest and genuinely caring — not rushed or clinical. We set out to create
                a practice where families in {clinic.area} could feel completely at ease.
              </p>
              <p>
                Today, we're proud to be a familiar, friendly face in the neighbourhood.
                Whether it's a child's very first check-up or a senior getting new dentures,
                we treat every patient like family — with patience, gentle hands and
                clear, honest advice.
              </p>
            </div>
            <div className="mt-6">
              <Placeholder>Dentist name, qualifications & biography — add verified details</Placeholder>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-section py-14">
        <div className="container-px">
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {clinic.stats.map((stat) => (
              <Reveal key={stat.label} className="flex flex-col items-center">
                <dd className="text-4xl font-bold text-primary sm:text-[2.75rem]">{stat.value}</dd>
                <dt className="mt-2 text-sm text-muted">{stat.label}</dt>
              </Reveal>
            ))}
          </dl>
          <p className="mt-6 text-center text-xs text-muted">
            <Placeholder>Statistics — confirm against actual clinic records</Placeholder>
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values behind every visit"
            description="These principles shape how we treat our patients — and each other."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                as="article"
                delay={(i % 3) * 80}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <v.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dentist card */}
      <section className="bg-section py-16 sm:py-20">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Meet the dentist" title="Your care, in experienced hands" align="left" />
            <p className="mt-2 text-lg font-semibold text-primary">{clinic.leadDentist.name}</p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {clinic.leadDentist.bio}
            </p>
            <div className="mt-6 space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-body shadow-soft">
                Qualifications: <Placeholder>{clinic.leadDentist.qualifications} — confirm full qualifications</Placeholder>
              </p>
              <div><Placeholder>Years of experience & specialisations</Placeholder></div>
              <div><Placeholder>Professional memberships (e.g. Dental Council of India)</Placeholder></div>
            </div>
            <Button onClick={() => navigate('/appointment')} className="mt-8">
              Book a consultation
            </Button>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-3xl shadow-soft-lg">
            <ClinicImage
              src={clinicImages.doctor}
              fallback={fallbackImages.doctor}
              alt="Dr. Ruchi Jain, lead dentist at Vinayak Dental Clinic"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]"
              loading="lazy"
              width={1000}
              height={750}
              objectPosition="top center"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
