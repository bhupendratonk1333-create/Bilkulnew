import { clinic } from '@/content/clinic';

export const telHref = (num: string) => `tel:${num.replace(/[^+\d]/g, '')}`;

export const whatsappHref = (
  number = clinic.whatsapp,
  message = clinic.whatsappMessage,
) => `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
