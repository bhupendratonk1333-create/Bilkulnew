import { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { nav, clinic } from '@/content/clinic';
import { navigate, useRoute } from '@/lib/router';
import { telHref, whatsappHref } from '@/lib/contact';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [route] = useRoute();
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-ink text-white">
        <div className="container-px flex h-9 items-center justify-between gap-3 text-xs sm:text-sm">
          <p className="flex items-center gap-1.5 truncate">
            <Clock size={14} className="shrink-0 text-accent" aria-hidden="true" />
            <span className="truncate">
              Open Mon–Sat 9 AM–9 PM · Sun 10 AM–2 PM
            </span>
          </p>
          <div className="hidden items-center gap-4 sm:flex">
            <a href={telHref(clinic.phonePrimary)} className="inline-flex items-center gap-1.5 hover:text-primary-200 transition-colors">
              <Phone size={14} aria-hidden="true" />
              {clinic.phonePrimary}
            </a>
            <a href={clinic.mapsDirections} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary-200 transition-colors">
              <MapPin size={14} aria-hidden="true" />
              {clinic.address.short}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md transition-shadow"
        id="main-nav"
      >
        <nav className="container-px flex h-16 items-center justify-between gap-4" aria-label="Main">
          <button
            onClick={() => go('/')}
            className="flex items-center gap-2.5 focus-visible:outline-none"
            aria-label="Vinayak Dental Clinic — home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft">
              <ToothIcon className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-none text-left">
              <span className="font-heading text-base font-bold text-ink">Vinayak</span>
              <span className="text-[0.7rem] font-medium tracking-wide text-muted">DENTAL CLINIC</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = route === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => go(item.path)}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-primary' : 'text-body hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button as="a" href={telHref(clinic.phonePrimary)} variant="ghost" size="sm" className="hidden sm:inline-flex" ariaLabel="Call the clinic" icon={<Phone size={16} />}>
              Call
            </Button>
            <Button onClick={() => go('/appointment')} size="sm" icon={<Calendar size={16} />} className="hidden sm:inline-flex">
              Book Appointment
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-slate-100 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-ink/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="absolute z-50 w-full border-b border-slate-200 bg-white shadow-soft-lg"
          >
            <ul className="container-px flex flex-col py-3">
              {nav.map((item) => {
                const active = route === item.path;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => go(item.path)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                        active ? 'bg-primary-50 text-primary' : 'text-body hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronRight size={18} className="text-muted" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="container-px flex flex-col gap-2.5 border-t border-slate-100 py-4">
              <Button as="a" href={telHref(clinic.phonePrimary)} variant="outline" fullWidth icon={<Phone size={18} />}>
                Call {clinic.phonePrimary}
              </Button>
              <Button as="a" href={whatsappHref()} variant="accent" fullWidth target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Button>
              <Button onClick={() => go('/appointment')} fullWidth icon={<Calendar size={18} />}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ToothIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.5 0-3.8 1.2-5.2 1.2C5.4 3.2 4 2.4 4 2.4S3 4 3 6.4c0 3.2 1 7.6 2 9.8.8 1.8 1.6 3 2.6 3 1.2 0 1.6-1.6 2-3.4.3-1.4.6-2.2 2.4-2.2s2.1.8 2.4 2.2c.4 1.8.8 3.4 2 3.4 1 0 1.8-1.2 2.6-3 1-2.2 2-6.6 2-9.8 0-2.4-1-4-1-4s-1.4.8-2.8.8C15.8 3.2 14.5 2 12 2z" />
    </svg>
  );
}
