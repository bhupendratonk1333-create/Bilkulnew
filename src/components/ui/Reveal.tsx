import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'figure';
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps children in a scroll-triggered fade-up element.
 * The .reveal / .is-visible mechanism is defined in index.css and driven
 * by useScrollReveal(). When reduced motion is preferred, content stays visible.
 */
export function Reveal({ children, className = '', delay = 0, as = 'div', id, style }: RevealProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={`reveal ${className}`}
      style={{ ...(delay ? { transitionDelay: `${delay}ms` } : null), ...style }}
    >
      {children}
    </Tag>
  );
}
