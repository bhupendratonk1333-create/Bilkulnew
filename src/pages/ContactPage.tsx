import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { telHref, whatsappHref } from '@/lib/contact';
import { useContactForm } from '@/lib/forms';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';
import { Input, Textarea, SubmitButton, FormSuccess, FormError } from '@/components/ui/FormField';

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: '', phone: '', email: '', subject: '', message: '' };

export function ContactPage() {
  const { status, errorMsg, submit } = useContactForm();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    submit({
      name: form.name.trim(),
      phone: form.phone.trim() || undefined,
      email: form.email.trim() || undefined,
      subject: form.subject.trim() || undefined,
      message: form.message.trim(),
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with us"
        description="Questions, feedback, or ready to book — we're here and happy to help."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Info column */}
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">Reach us directly</h2>
            <p className="mt-3 text-muted">
              Prefer to talk to a person? Call or message us — we usually reply quickly
              during clinic hours.
            </p>

            <ul className="mt-8 space-y-5">
              <InfoRow icon={<Phone size={20} />} label="Phone">
                <a href={telHref(clinic.phonePrimary)} className="font-semibold text-primary hover:text-primary-600">
                  {clinic.phonePrimary}
                </a>
                <div className="mt-1"><Placeholder>Verify phone number</Placeholder></div>
              </InfoRow>

              <InfoRow icon={<MessageCircle size={20} />} label="WhatsApp">
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:text-accent-600">
                  Chat with us
                </a>
                <div className="mt-1"><Placeholder>Verify WhatsApp number</Placeholder></div>
              </InfoRow>

              <InfoRow icon={<Mail size={20} />} label="Email">
                <a href={`mailto:${clinic.email}`} className="font-semibold text-primary hover:text-primary-600">
                  {clinic.email}
                </a>
              </InfoRow>

              <InfoRow icon={<MapPin size={20} />} label="Address">
                {clinic.address.line1}<br />
                {clinic.address.line2}
                <div className="mt-1.5"><Placeholder>Verify exact address & landmark</Placeholder></div>
                <a href={clinic.mapsDirections} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-600">
                  Get directions →
                </a>
              </InfoRow>

              <InfoRow icon={<Clock size={20} />} label="Opening hours">
                <ul className="space-y-1">
                  {clinic.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 text-sm">
                      <span className="text-body">{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-1.5"><Placeholder>Confirm opening hours</Placeholder></div>
              </InfoRow>
            </ul>
          </Reveal>

          {/* Form column */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
              {status === 'success' ? (
                <FormSuccess title="Message sent — thank you!">
                  We've received your message and will get back to you shortly. For anything
                  urgent, please call us directly.
                </FormSuccess>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
                  <p className="mt-2 text-sm text-muted">
                    Fill in the form below and we'll reply as soon as we can.
                  </p>

                  <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        id="name"
                        label="Your name"
                        required
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        error={errors.name}
                      />
                      <Input
                        id="phone"
                        label="Phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="Your contact number"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        id="email"
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@example.com"
                        error={errors.email}
                      />
                      <Input
                        id="subject"
                        label="Subject"
                        value={form.subject}
                        onChange={(e) => set('subject', e.target.value)}
                        placeholder="What's this about?"
                      />
                    </div>
                    <Textarea
                      id="message"
                      label="Message"
                      required
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Tell us how we can help…"
                      error={errors.message}
                    />

                    {status === 'error' && <FormError>{errorMsg}</FormError>}

                    <SubmitButton loading={status === 'loading'} >
                      <Send size={18} aria-hidden="true" />
                      Send message
                    </SubmitButton>
                    <p className="text-center text-xs text-muted">
                      We'll only use your details to respond to your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <div className="container-px mt-12">
          <Reveal className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
            <iframe
              title="Map showing Vinayak Dental Clinic in Pratap Nagar, Jaipur"
              src={clinic.mapsEmbed}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <div className="mt-0.5 text-sm text-muted">{children}</div>
      </div>
    </li>
  );
}
