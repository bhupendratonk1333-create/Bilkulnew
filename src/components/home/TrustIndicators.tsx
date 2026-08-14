import { clinic } from '@/content/clinic';
import { Placeholder } from '@/components/ui/Placeholder';

export function TrustIndicators() {
  return (
    <section className="border-y border-slate-100 bg-white" aria-label="Our track record">
      <div className="container-px">
        <dl className="grid grid-cols-2 gap-y-8 py-10 sm:py-12 lg:grid-cols-4 lg:gap-0">
          {clinic.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal flex flex-col items-center text-center lg:px-4 ${i !== 0 ? 'lg:border-l lg:border-slate-100' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <dt className="order-2 mt-2 text-sm text-muted">{stat.label}</dt>
              <dd className="order-1 text-4xl font-bold text-primary sm:text-[2.75rem]">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="pb-5 text-center text-xs text-muted">
          <Placeholder>Statistics — confirm against actual clinic records</Placeholder>
        </p>
      </div>
    </section>
  );
}
