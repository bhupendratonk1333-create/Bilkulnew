import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { clinic } from '@/content/clinic';
import { telHref, whatsappHref } from '@/lib/contact';

/**
 * Sticky bottom action bar visible on mobile only.
 * Large touch targets for Call, WhatsApp, and Directions.
 */
export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="mx-auto flex max-w-md items-stretch gap-px border-t border-slate-200 bg-white/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-soft-lg backdrop-blur">
        <ActionCell href={telHref(clinic.phonePrimary)} label="Call" color="text-primary">
          <Phone size={20} aria-hidden="true" />
        </ActionCell>
        <ActionCell href={whatsappHref()} label="WhatsApp" color="text-accent" external>
          <MessageCircle size={20} aria-hidden="true" />
        </ActionCell>
        <ActionCell href={clinic.mapsDirections} label="Directions" color="text-ink" external>
          <MapPin size={20} aria-hidden="true" />
        </ActionCell>
      </div>
    </div>
  );
}

function ActionCell({
  href,
  label,
  color,
  external,
  children,
}: {
  href: string;
  label: string;
  color: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 active:scale-95 transition-transform"
      aria-label={label}
    >
      <span className={color}>{children}</span>
      <span className="text-xs font-semibold text-body">{label}</span>
    </a>
  );
}
