import { faqs, clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';
import { telHref, whatsappHref } from '@/lib/contact';

export function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to the questions we hear most often. If yours isn't here, just reach out — we're happy to help."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>

          <Reveal className="mt-10 rounded-2xl bg-section p-8 text-center">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">Still have a question?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Our front desk team is happy to answer anything before you book. Call us,
              message on WhatsApp, or send a quick note.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button as="a" href={telHref(clinic.phonePrimary)} variant="primary" icon={<MessageCircle size={18} />}>
                Call us
              </Button>
              <Button as="a" href={whatsappHref()} target="_blank" rel="noopener noreferrer" variant="accent">
                WhatsApp
              </Button>
              <Button onClick={() => navigate('/contact')} variant="outline">
                Contact form
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
