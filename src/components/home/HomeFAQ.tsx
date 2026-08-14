import { faqs } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';

export function HomeFAQ() {
  return (
    <section className="bg-section py-16 sm:py-20 lg:py-24">
      <div className="container-px grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="Your questions, answered"
            description="Everything you might want to know before your first visit. Can't find your answer?"
            align="left"
          />
          <button
            onClick={() => navigate('/contact')}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-600"
          >
            Just ask us →
          </button>
        </Reveal>

        <Reveal delay={120}>
          <Accordion items={faqs.slice(0, 5)} />
          <button
            onClick={() => navigate('/faq')}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-600"
          >
            See all FAQs →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
