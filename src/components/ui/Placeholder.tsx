import { Info } from 'lucide-react';

interface PlaceholderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A subtle inline marker that flags a value as a placeholder requiring
 * verification before the site goes live. Renders a small dashed pill.
 * Designed to be unobtrusive on the page but obvious to the clinic owner.
 */
export function Placeholder({ children, className = '' }: PlaceholderProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 align-middle rounded-full border border-dashed border-primary/40 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary ${className}`}
      title="This value is a placeholder — please replace with verified information before publishing."
    >
      <Info size={12} aria-hidden="true" />
      {children}
    </span>
  );
}
