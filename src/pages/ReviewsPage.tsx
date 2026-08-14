import { Quote, Star, ExternalLink } from 'lucide-react';
import { reviews, clinic } from '@/content/clinic';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Stars } from '@/components/ui/Stars';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';

export function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our patients say"
        description="We're grateful for the trust our community places in us. Here's what patients have shared about their experience."
      />

      {/* Rating summary */}
      <section className="py-12 sm:py-16">
        <div className="container-px">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-soft sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-ink">{clinic.googleRating.score}</span>
              <Stars rating={5} size={20} className="mt-2" />
            </div>
            <div className="hidden h-16 w-px bg-slate-200 sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-ink">Rated by {clinic.googleRating.count} patients</p>
              <p className="mt-1 text-sm text-muted">Reviews collected from our Google Business Profile</p>
              <p className="mt-2"><Placeholder>Verify rating & review count on Google</Placeholder></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-px">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal
                key={review.name}
                as="article"
                delay={(i % 3) * 70}
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

          <p className="mt-10 text-center text-xs text-muted">
            <Placeholder>Testimonials are sample placeholders — replace with real, verified patient reviews</Placeholder>
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
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
            <a
              href={clinic.googleRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Link to your Google Business Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
