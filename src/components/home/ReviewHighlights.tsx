import { Quote, Star } from 'lucide-react';
import { reviews, clinic } from '@/content/clinic';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Stars } from '@/components/ui/Stars';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';
import { navigate } from '@/lib/router';

export function ReviewHighlights() {
  return (
    <section className="bg-section py-16 sm:py-20 lg:py-24">
      <div className="container-px">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Patient stories"
            title="What our patients say"
            description="Real feedback from the people who trust us with their smiles."
          />

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-soft sm:flex-row sm:gap-4">
            <span className="text-4xl font-bold text-ink">{clinic.googleRating.score}</span>
            <div className="flex flex-col items-center sm:items-start">
              <Stars rating={5} />
              <span className="mt-1 text-sm text-muted">
                Based on {clinic.googleRating.count} Google reviews
              </span>
            </div>
          </div>
          <p className="text-xs text-muted">
            <Placeholder>Rating & review count — link to your Google Business Profile</Placeholder>
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review, i) => (
            <Reveal
              key={review.name}
              as="article"
              delay={(i % 3) * 80}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
            >
              <Quote size={28} className="text-primary-200" aria-hidden="true" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">"{review.text}"</p>
              <Stars rating={review.rating} size={16} className="mt-4" />
              <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 font-heading font-semibold text-primary">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-muted">{review.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            as="a"
            href={clinic.googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={<Star size={18} />}
          >
            Read all reviews on Google
          </Button>
          <button
            onClick={() => navigate('/reviews')}
            className="mt-3 block w-full text-center text-sm font-medium text-primary hover:text-primary-600"
          >
            See more patient stories →
          </button>
        </div>
      </div>
    </section>
  );
}
