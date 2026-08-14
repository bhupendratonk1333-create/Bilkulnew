import type { ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-body placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-60';

export function Label({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
      {required && <span className="ml-0.5 text-primary">*</span>}
    </label>
  );
}

export function FieldError({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
      <AlertCircle size={14} aria-hidden="true" />
      {children}
    </p>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function Input({ label, error, required, id = '', className = '', ...rest }: InputProps) {
  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      <input
        id={id}
        className={`${fieldBase} ${error ? 'border-red-400' : 'border-slate-200'} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      <div id={id ? `${id}-error` : undefined}><FieldError>{error}</FieldError></div>
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function Select({ label, error, required, id = '', children, className = '', ...rest }: SelectProps) {
  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      <select
        id={id}
        className={`${fieldBase} ${error ? 'border-red-400' : 'border-slate-200'} ${className}`}
        aria-invalid={!!error}
        {...rest}
      >
        {children}
      </select>
      <FieldError>{error}</FieldError>
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function Textarea({ label, error, required, id = '', className = '', ...rest }: TextareaProps) {
  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      <textarea
        id={id}
        className={`${fieldBase} ${error ? 'border-red-400' : 'border-slate-200'} min-h-[120px] resize-y ${className}`}
        aria-invalid={!!error}
        {...rest}
      />
      <FieldError>{error}</FieldError>
    </div>
  );
}

export function FormSuccess({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-accent-100 bg-accent-50 px-6 py-10 text-center animate-scale-in">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
        <CheckCircle2 size={30} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted">{children}</p>
    </div>
  );
}

export function FormError({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export function SubmitButton({
  loading,
  children,
  fullWidth = true,
}: {
  loading: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading font-semibold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-soft-lg active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none ${fullWidth ? 'w-full' : ''}`}
    >
      {loading && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
      {loading ? 'Sending…' : children}
    </button>
  );
}
