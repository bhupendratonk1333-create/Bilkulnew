import { useEffect, useState, useCallback } from 'react';

/**
 * Lightweight hash-based router (no external dependency).
 * Routes look like #/about, #/services, etc. The home route is #/ or empty.
 */
export function useRoute(): [string, (path: string) => void] {
  const [path, setPath] = useState<string>(() => normalize(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      setPath(normalize(window.location.hash));
      // Scroll to top on navigation, unless there's an in-page anchor.
      const hash = window.location.hash;
      const innerAnchor = hash.includes('#/') ? hash.split('#/')[1]?.split('#')[1] : undefined;
      if (innerAnchor) {
        requestAnimationFrame(() => {
          document.getElementById(innerAnchor)?.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to.startsWith('/')) {
      window.location.hash = '#' + to;
    } else {
      window.location.hash = to;
    }
  }, []);

  return [path, navigate];
}

function normalize(hash: string): string {
  if (!hash || hash === '#') return '/';
  // strip leading '#'
  let h = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!h.startsWith('/')) h = '/' + h;
  return h;
}

/** Programmatically navigate without needing the hook context. */
export function navigate(to: string) {
  window.location.hash = to.startsWith('#') ? to : '#' + (to.startsWith('/') ? to : '/' + to);
}
