import { Phone, MapPin, Clock, Mail, MessageCircle, Calendar } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { telHref, whatsappHref } from '@/lib/contact';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';

export function HomeContact() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get in touch"
          title="We'd love to hear from you"
          description="Have a question or ready to book? Reach out — our team is happy to help."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Call */}
          <Reveal className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <Phone size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">Call us</h3>
            <p className="mt-1 text-sm text-muted">Mon–Sat, 9 AM–9 PM</p>
            <a href={telHref(clinic.phonePrimary)} className="mt-3 font-heading text-lg font-semibold text-primary">
              {clinic.phonePrimary}
            </a>
            <p className="mt-2"><Placeholder>Verify phone number</Placeholder></p>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={90} className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent">
              <MessageCircle size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">WhatsApp</h3>
            <p className="mt-1 text-sm text-muted">Quick replies during clinic hours</p>
            <Button as="a" href={whatsappHref()} target="_blank" rel="noopener noreferrer" variant="accent" size="sm" className="mt-3" icon={<MessageCircle size={16} />}>
              Chat with us
            </Button>
            <p className="mt-2"><Placeholder>Verify WhatsApp number</Placeholder></p>
          </Reveal>

          {/* Visit */}
          <Reveal delay={180} className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <MapPin size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">Visit us</h3>
            <p className="mt-1 text-sm text-muted">{clinic.address.line1}</p>
            <p className="mt-1 text-sm text-muted">{clinic.address.line2}</p>
            <Button as="a" href={clinic.mapsDirections} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="mt-3">
              Get directions
            </Button>
          </Reveal>
        </div>

        {/* Quick info bar */}
        <Reveal className="mt-6 grid gap-4 rounded-2xl bg-ink p-6 text-white sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          <div className="flex items-center gap-3 sm:px-4">
            <Clock size={20} className="shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Hours</p>
              <p className="text-sm font-medium">Mon–Sat 9–9 · Sun 10–2</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:px-4">
            <Mail size={20} className="shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
              <p className="text-sm font-medium">{clinic.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:px-4">
            <Calendar size={20} className="shrink-0 text-primary" aria-hidden="true" />
            <button onClick={() => navigate('/appointment')} className="text-left">
              <p className="text-xs uppercase tracking-wide text-slate-400">Booking</p>
              <p className="text-sm font-medium text-primary-200 hover:text-white">Request an appointment →</p>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
