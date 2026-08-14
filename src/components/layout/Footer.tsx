import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube, Calendar } from 'lucide-react';
import { nav, clinic } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { telHref, whatsappHref } from '@/lib/contact';
import { Placeholder } from '@/components/ui/Placeholder';

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">Ready to look after your smile?</h2>
            <p className="mt-1 text-slate-400">Book an appointment with our friendly team today.</p>
          </div>
          <a
            href="#/appointment"
            onClick={(e) => { e.preventDefault(); navigate('/appointment'); }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading font-semibold text-white shadow-soft transition hover:bg-primary-600 active:scale-95"
          >
            <Calendar size={18} aria-hidden="true" />
            Book Appointment
          </a>
        </div>
      </div>

      <div className="container-px grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <ToothIcon className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-bold text-white">Vinayak</span>
              <span className="text-[0.7rem] font-medium tracking-wide text-slate-400">DENTAL CLINIC</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Gentle, modern dental care for the whole family in {clinic.area}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialLink href={clinic.social.instagram} label="Instagram"><Instagram size={18} /></SocialLink>
            <SocialLink href={clinic.social.facebook} label="Facebook"><Facebook size={18} /></SocialLink>
            <SocialLink href={clinic.social.youtube} label="YouTube"><Youtube size={18} /></SocialLink>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.path}>
                <a
                  href={`#${item.path}`}
                  onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                  className="text-slate-400 transition-colors hover:text-primary-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-slate-400">
                {clinic.address.line1}<br />
                {clinic.address.line2}
                <span className="mt-1.5 block"><Placeholder>Verify exact address</Placeholder></span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <a href={telHref(clinic.phonePrimary)} className="text-slate-400 transition-colors hover:text-primary-200">
                {clinic.phonePrimary} <Placeholder>Verify phone</Placeholder>
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${clinic.email}`} className="text-slate-400 transition-colors hover:text-primary-200">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Opening Hours</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {clinic.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-slate-400">
                  <span className="block text-slate-200">{h.day}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300">
            Message us on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>
            Website content is for general information only and does not replace professional dental advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-colors hover:bg-primary hover:text-white"
    >
      {children}
    </a>
  );
}

function ToothIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.5 0-3.8 1.2-5.2 1.2C5.4 3.2 4 2.4 4 2.4S3 4 3 6.4c0 3.2 1 7.6 2 9.8.8 1.8 1.6 3 2.6 3 1.2 0 1.6-1.6 2-3.4.3-1.4.6-2.2 2.4-2.2s2.1.8 2.4 2.2c.4 1.8.8 3.4 2 3.4 1 0 1.8-1.2 2.6-3 1-2.2 2-6.6 2-9.8 0-2.4-1-4-1-4s-1.4.8-2.8.8C15.8 3.2 14.5 2 12 2z" />
    </svg>
  );
}
