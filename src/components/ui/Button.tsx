import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:pointer-events-none active:scale-[0.97]';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-soft hover:bg-primary-600 hover:shadow-soft-lg',
  secondary:
    'bg-ink text-white shadow-soft hover:bg-ink-950 hover:shadow-soft-lg',
  accent:
    'bg-accent text-white shadow-soft hover:bg-accent-600 hover:shadow-soft-lg',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary-50 hover:border-primary-600',
  ghost:
    'text-primary bg-transparent hover:bg-primary-50',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm sm:text-base px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

interface ButtonAsButton extends BaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

interface ButtonAsLink extends BaseProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
    iconRight,
    fullWidth,
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (props.as === 'a') {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={props.ariaLabel}
        className={classes}
      >
        {icon}
        {children}
        {iconRight}
      </a>
    );
  }
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      className={classes}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
