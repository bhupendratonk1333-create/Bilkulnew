/**
 * Clinic image paths — all real photos live in /public/images/.
 *
 * If a local file is missing the <img> onError handler falls back to the
 * Pexels placeholder so the site always looks complete.
 *
 * Replace placeholders by dropping the files listed in public/images/README.md.
 */

export const clinicImages = {
  /** Exterior / frontage photo — used in the Hero section */
  exterior: '/images/exterior.jpg',

  /** Treatment room wide-angle (orange chairs, orange ceiling) */
  treatmentRoom1: '/images/treatment-room-1.jpg',

  /** Treatment room second angle (purple LED ceiling lights) */
  treatmentRoom2: '/images/treatment-room-2.jpg',

  /** Portrait photo of Dr. Ruchi Jain — used in the About/Doctor section */
  doctor: '/images/doctor.jpg',
} as const;

/**
 * Pexels fallbacks — only used while local photos are not yet uploaded.
 * Remove once all real photos are in place.
 */
export const fallbackImages = {
  exterior:
    'https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  treatmentRoom1:
    'https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  treatmentRoom2:
    'https://images.pexels.com/photos/5355858/pexels-photo-5355858.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  doctor:
    'https://images.pexels.com/photos/5622242/pexels-photo-5622242.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
} as const;
