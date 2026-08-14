import { Phone } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  { num: '01', title: 'Book your visit', text: 'Call us, message on WhatsApp, or request an appointment online in under a minute.' },
  { num: '02', title: 'Friendly consultation', text: 'We listen to your concerns, examine thoroughly, and explain everything in plain language.' },
  { num: '03', title: 'Personalised treatment', text: 'You get a clear plan with honest pricing — and gentle, comfortable treatment.' },
  { num: '04', title: 'Ongoing care', text: 'We follow up and remind you when your next check-up is due, so your smile stays healthy.' },
];

export function TreatmentProcess() {
  return (
    <section className="bg-section py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="How it works"
          title="Your visit, made simple"
          description="Four easy steps from first call to a healthy, confident smile."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              as="li"
              delay={i * 90}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
            >
              <span className="font-heading text-4xl font-bold text-primary-100">{step.num}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
              {/* connector */}
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-primary-200 lg:block" aria-hidden="true" />
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-heading font-semibold text-white shadow-soft transition hover:bg-ink-950 active:scale-95"
          >
            <Phone size={18} aria-hidden="true" />
            Talk to our team
          </a>
          <p className="text-xs text-muted">Prefer to write? Use our online appointment form.</p>
        </Reveal>
      </div>
    </section>
  );
}
