import { HeartPulse, Smile, Clock4, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const reasons = [
  {
    icon: HeartPulse,
    title: 'Gentle & caring',
    text: 'We take time with every patient and go out of our way to make nervous visitors feel at ease.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict hygiene',
    text: 'All instruments are sterilised to the highest clinical standards for your safety.',
  },
  {
    icon: Clock4,
    title: 'Flexible timings',
    text: 'Evening and weekend appointments, so dental care fits around your work and family.',
  },
  {
    icon: Users,
    title: 'Family-friendly',
    text: 'We treat patients of every age — from a child\'s first check-up to senior dental care.',
  },
  {
    icon: Smile,
    title: 'Honest advice',
    text: 'You\'ll always get a clear explanation and only the treatment you actually need.',
  },
  {
    icon: Sparkles,
    title: 'Modern techniques',
    text: 'Up-to-date materials and methods for treatments that are comfortable and long-lasting.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why choose us"
          title="Care that goes beyond the check-up"
          description="We\'re proud to be a clinic our neighbours trust — here\'s what makes the experience different."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              as="article"
              delay={(i % 3) * 80}
              className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <r.icon size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
