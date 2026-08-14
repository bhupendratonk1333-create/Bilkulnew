import { useState } from 'react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export interface AppointmentPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
}

export interface ContactPayload {
  name: string;
  phone?: string;
  email?: string;
  subject?: string;
  message: string;
}

export function useAppointmentForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function submit(payload: AppointmentPayload) {
    setStatus('loading');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('appointment_requests').insert({
        name: payload.name,
        phone: payload.phone,
        email: payload.email || null,
        service: payload.service || null,
        preferred_date: payload.preferred_date || null,
        preferred_time: payload.preferred_time || null,
        message: payload.message || null,
      });
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.';
      setErrorMsg(msg);
      setStatus('error');
    }
  }

  return { status, errorMsg, submit, reset: () => setStatus('idle') };
}

export function useContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function submit(payload: ContactPayload) {
    setStatus('loading');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: payload.name,
        phone: payload.phone || null,
        email: payload.email || null,
        subject: payload.subject || null,
        message: payload.message,
      });
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.';
      setErrorMsg(msg);
      setStatus('error');
    }
  }

  return { status, errorMsg, submit, reset: () => setStatus('idle') };
}
