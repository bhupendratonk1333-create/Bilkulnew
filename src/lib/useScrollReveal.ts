import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every element with the `.reveal` class
 * when it scrolls into view, using IntersectionObserver. Respects
 * prefers-reduced-motion (handled in CSS — reveal elements stay visible).
 *
 * Call once near the top of the app tree. Re-scans on DOM mutations so it
 * works across route changes and dynamically rendered sections.
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const reveal = (el: Element) => el.classList.add('is-visible');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const scan = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    };

    scan();

    // Re-scan when DOM changes (route switches, etc.)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}
