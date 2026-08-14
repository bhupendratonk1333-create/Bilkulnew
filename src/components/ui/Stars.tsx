import { Star } from 'lucide-react';

interface StarsProps {
  rating: number;
  size?: number;
  className?: string;
  label?: string;
}

export function Stars({ rating, size = 18, className = '', label }: StarsProps) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={label ?? `${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
