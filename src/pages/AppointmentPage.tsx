import { useState } from 'react';
import { Phone, Clock, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import { clinic, services } from '@/content/clinic';
import { telHref } from '@/lib/contact';
import { useAppointmentForm } from '@/lib/forms';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Input, Select, Textarea, SubmitButton, FormSuccess, FormError } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { navigate } from '@/lib/router';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
}

const empty: FormState = {
  name: '', phone: '', email: '', service: '', preferred_date: '', preferred_time: '', message: '',
};

const timeSlots = [
  '09:00 AM – 11:00 AM',
  '11:00 AM – 01:00 PM',
  '01:00 PM – 03:00 PM',
  '03:00 PM – 05:00 PM',
  '05:00 PM – 07:00 PM',
  '07:00 PM – 09:00 PM',
];

export function AppointmentPage() {
  const { status, errorMsg, submit } = useAppointmentForm();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter a phone number so we can confirm.';
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    submit({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      service: form.service || undefined,
      preferred_date: form.preferred_date || undefined,
      preferred_time: form.preferred_time || undefined,
      message: form.message.trim() || undefined,
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Appointment"
        title="Book your appointment"
        description="Request a time that suits you and our team will call to confirm. It only takes a minute."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-px grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
              {status === 'success' ? (
                <FormSuccess title="Request received!">
                  Thank you, {form.name.split(' ')[0] || 'there'}! We've received your appointment
                  request and will call you on {form.phone} shortly to confirm the time. For
                  anything urgent, please call us directly.
                </FormSuccess>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-ink">Request an appointment</h2>
                  <p className="mt-2 text-sm text-muted">
                    Fields marked with <span className="text-primary">*</span> are required.
                  </p>

                  <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        id="name"
                        label="Full name"
                        required
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        error={errors.name}
                        autoComplete="name"
                      />
                      <Input
                        id="phone"
                        label="Phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="Your contact number"
                        error={errors.phone}
                        autoComplete="tel"
                      />
                    </div>

                    <Input
                      id="email"
                      label="Email (optional)"
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="you@example.com"
                      error={errors.email}
                      autoComplete="email"
                    />

                    <Select
                      id="service"
                      label="Treatment required"
                      value={form.service}
                      onChange={(e) => set('service', e.target.value)}
                    >
                      <option value="">Not sure / general check-up</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                    </Select>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        id="preferred_date"
                        label="Preferred date"
                        type="date"
                        min={today}
                        value={form.preferred_date}
                        onChange={(e) => set('preferred_date', e.target.value)}
                      />
                      <Select
                        id="preferred_time"
                        label="Preferred time"
                        value={form.preferred_time}
                        onChange={(e) => set('preferred_time', e.target.value)}
                      >
                        <option value="">Any time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </Select>
                    </div>

                    <Textarea
                      id="message"
                      label="Anything we should know? (optional)"
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Symptoms, preferred days, questions…"
                    />

                    {status === 'error' && <FormError>{errorMsg}</FormError>}

                    <SubmitButton loading={status === 'loading'}>
                      <Calendar size={18} aria-hidden="true" />
                      Request appointment
                    </SubmitButton>
                    <p className="text-center text-xs text-muted">
                      This is a request — we'll call to confirm your appointment. No payment needed now.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Side info */}
          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="rounded-2xl bg-section p-6">
                <h3 className="text-lg font-semibold text-ink">Prefer to call?</h3>
                <p className="mt-1.5 text-sm text-muted">
                  We can often confirm a time faster over the phone.
                </p>
                <Button as="a" href={telHref(clinic.phonePrimary)} variant="primary" className="mt-4" icon={<Phone size={18} />} fullWidth>
                  Call {clinic.phonePrimary}
                </Button>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                  <Clock size={20} className="text-primary" aria-hidden="true" />
                  Clinic hours
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {clinic.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span className="text-muted">{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                  <ShieldCheck size={20} className="text-accent" aria-hidden="true" />
                  What to expect
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  <li className="flex gap-2.5"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />A friendly call to confirm your time</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />A calm, unhurried consultation</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />Clear, honest advice and pricing</li>
                </ul>
              </div>

              <button
                onClick={() => navigate('/services')}
                className="block w-full text-center text-sm font-semibold text-primary hover:text-primary-600"
              >
                Browse our treatments →
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
