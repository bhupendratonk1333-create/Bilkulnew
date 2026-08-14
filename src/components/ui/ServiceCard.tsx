import {
  Stethoscope, Sparkles, ShieldCheck, Activity, Crown, Smile, Gem, Sun,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { navigate } from '@/lib/router';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Sparkles, ShieldCheck, Activity, Crown, Smile, Gem, Sun,
};

interface ServiceCardData {
  slug: string;
  icon: string;
  title: string;
  short: string;
}

export function ServiceCard({ service, index = 0 }: { service: ServiceCardData; index?: number }) {
  const Icon = iconMap[service.icon] ?? Sparkles;
  return (
    <article
      className="reveal group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft-lg"
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={26} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      <button
        onClick={() => navigate(`/services#${service.slug}`)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
      >
        Learn more
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </article>
  );
}
