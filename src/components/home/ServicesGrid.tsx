import { services } from '@/content/clinic';
import { navigate } from '@/lib/router';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function ServicesGrid() {
  return (
    <section className="bg-section py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our services"
          title="Complete dental care, all under one roof"
          description="From routine check-ups to advanced treatments, we offer a full range of services for patients of every age."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button onClick={() => navigate('/services')} variant="outline" size="lg" iconRight={<ArrowRight size={18} />}>
            View all services
          </Button>
          <p className="mt-3 text-xs text-muted">
            Services shown are common dental treatments — please confirm the full list offered by the clinic.
          </p>
        </div>
      </div>
    </section>
  );
}
