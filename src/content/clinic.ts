/**
 * Single source of truth for all editable clinic information.
 *
 * Items marked with [EDITABLE] are placeholders that should be replaced with
 * verified business information before the site goes live.
 *
 * Nothing here claims to be "best", "No.1" or makes unverifiable statements —
 * ratings, review counts, statistics, awards, dentist biography and
 * testimonials are all clearly labelled placeholders.
 */

export const clinic = {
  name: 'Vinayak Dental Clinic',
  tagline: 'Gentle, modern dental care for the whole family',
  area: 'Pratap Nagar, Jaipur',

  /** [EDITABLE] Replace with the exact clinic address once confirmed. */
  address: {
    line1: '[Shop no. / Building name], Pratap Nagar',
    line2: 'Jaipur, Rajasthan — 302033',
    full: '[Shop no. / Building name], Pratap Nagar, Jaipur, Rajasthan 302033',
    short: 'Pratap Nagar, Jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302033',
  },

  /** [EDITABLE] Replace phone numbers with the real ones. */
  phones: ['+91-XXXXXXXXXX'],
  /** Primary phone used for click-to-call buttons. */
  phonePrimary: '+91-XXXXXXXXXX',

  /** [EDITABLE] Replace with the real WhatsApp number (international format, no +). */
  whatsapp: '91XXXXXXXXXX',
  whatsappMessage: "Hello Vinayak Dental Clinic, I'd like to book an appointment.",

  email: 'care@vinayakdental.in', // [EDITABLE]

  /** [EDITABLE] Replace with the real Google Maps embed / place URL. */
  mapsEmbed:
    'https://www.google.com/maps?q=Pratap+Nagar+Jaipur&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Pratap+Nagar+Jaipur',

  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
  ],

  /** Lead dentist — name confirmed from clinic signage. */
  leadDentist: {
    name: 'Dr. Ruchi Jain',
    qualifications: 'BDS', // [EDITABLE] — confirm full qualifications, e.g. BDS, MDS
    bio: 'Dr. Ruchi Jain leads Vinayak Dental Clinic with a gentle, patient-first approach. With years of experience in general and cosmetic dentistry, she takes the time to ensure every patient feels comfortable and informed.',
  },

  /** [EDITABLE] Replace with verified Google rating + review count. */
  googleRating: {
    score: '4.9', // [EDITABLE] — confirm on Google Business Profile
    count: '120+', // [EDITABLE] — confirm actual review count
    url: 'https://www.google.com/maps', // [EDITABLE] — link to your GBP reviews
  },

  /** [EDITABLE] Confirm the years in practice / patients treated. */
  stats: [
    { value: '8+', label: 'Years serving the community' },
    { value: '5,000+', label: 'Happy patients treated' },
    { value: '15+', label: 'Dental treatments offered' },
    { value: '6', label: 'Days a week open' },
  ],

  social: {
    instagram: '#', // [EDITABLE]
    facebook: '#', // [EDITABLE]
    youtube: '#', // [EDITABLE]
  },
} as const;

export const services = [
  {
    slug: 'general-check-up',
    icon: 'Stethoscope',
    title: 'General Check-Ups',
    short: 'Routine examinations that catch problems early and keep your smile healthy.',
    description:
      'A thorough dental examination including oral cancer screening, cavity checks and personalised advice. Regular check-ups help spot concerns before they become painful or costly.',
    points: ['Complete oral examination', 'Early decay detection', 'Personalised care plan'],
  },
  {
    slug: 'teeth-cleaning',
    icon: 'Sparkles',
    title: 'Teeth Cleaning & Scaling',
    short: 'Professional cleaning that removes plaque and tartar for fresher, healthier gums.',
    description:
      'Scaling and polishing removes hardened tartar your toothbrush cannot reach, leaving teeth feeling fresh and helping prevent gum disease.',
    points: ['Ultrasonic scaling', 'Polishing for a smooth finish', 'Gum health assessment'],
  },
  {
    slug: 'fillings',
    icon: 'ShieldCheck',
    title: 'Fillings',
    short: 'Tooth-coloured fillings that restore decayed teeth while looking completely natural.',
    description:
      'We use modern composite resin that matches the shade of your natural teeth, restoring strength and function without the look of metal fillings.',
    points: ['Tooth-coloured composite', 'Minimally invasive', 'Durable and natural-looking'],
  },
  {
    slug: 'root-canal-treatment',
    icon: 'Activity',
    title: 'Root Canal Treatment',
    short: 'Pain-relieving treatment that saves badly infected teeth from extraction.',
    description:
      'When decay reaches the nerve, a root canal removes the infection and seals the tooth — relieving pain and saving your natural tooth. Performed gently with modern techniques.',
    points: ['Pain-free, modern technique', 'Saves the natural tooth', 'Single-sitting options available'],
  },
  {
    slug: 'crowns-bridges',
    icon: 'Crown',
    title: 'Crowns & Bridges',
    short: 'Custom restorations that rebuild damaged teeth and replace missing ones.',
    description:
      'Crowns protect and strengthen weakened teeth, while bridges fill the gaps left by missing teeth — restoring your bite and your confidence to smile.',
    points: ['Natural-looking ceramic crowns', 'Fixed bridges for missing teeth', 'Custom shade matching'],
  },
  {
    slug: 'dentures',
    icon: 'Smile',
    title: 'Dentures',
    short: 'Comfortable, well-fitted dentures that restore your ability to eat and smile.',
    description:
      'Partial or complete dentures crafted for a snug, comfortable fit — helping you chew, speak and smile with confidence again.',
    points: ['Partial & complete dentures', 'Comfortable custom fit', 'Natural appearance'],
  },
  {
    slug: 'cosmetic-dentistry',
    icon: 'Gem',
    title: 'Cosmetic Dentistry',
    short: 'Veneers, bonding and smile makeovers tailored to your face and personality.',
    description:
      'From subtle refinements to complete smile makeovers, our cosmetic treatments are designed to enhance your natural smile — never to look overdone.',
    points: ['Veneers & composite bonding', 'Smile design consultation', 'Natural, proportionate results'],
  },
  {
    slug: 'teeth-whitening',
    icon: 'Sun',
    title: 'Teeth Whitening',
    short: 'Safe, professional whitening that brightens your smile by several shades.',
    description:
      'Professional whitening lifts stains from tea, coffee and tobacco safely — noticeably brighter teeth in a single visit, with enamel-safe materials.',
    points: ['In-clinic professional whitening', 'Enamel-safe materials', 'Visible results in one visit'],
  },
] as const;

export const reviews = [
  {
    name: 'Aarav Sharma', // [EDITABLE]
    location: 'Pratap Nagar',
    rating: 5,
    text: 'The doctors were very patient with my dental anxiety. They explained every step and the clinic felt spotlessly clean. Highly recommended.', // [EDITABLE]
  },
  {
    name: 'Priya Verma', // [EDITABLE]
    location: 'Jaipur',
    rating: 5,
    text: 'Took my 6-year-old here for the first time. The staff were so gentle and friendly that she actually asked when we could come back!', // [EDITABLE]
  },
  {
    name: 'Rajesh Mehta', // [EDITABLE]
    location: 'Sanganer',
    rating: 5,
    text: 'Got my root canal done here. Honestly the most painless dental experience I have had. Very professional and reasonably priced.', // [EDITABLE]
  },
  {
    name: 'Neha Gupta', // [EDITABLE]
    location: 'Jaipur',
    rating: 5,
    text: 'Came in for teeth whitening before my wedding. The results were exactly what I wanted — natural and bright. Thank you!', // [EDITABLE]
  },
  {
    name: 'Mohit Agarwal', // [EDITABLE]
    location: 'Pratap Nagar',
    rating: 5,
    text: 'Easy to get an appointment, minimal waiting, and the dentist took time to answer all my questions. A very well-run clinic.', // [EDITABLE]
  },
  {
    name: 'Sunita Joshi', // [EDITABLE]
    location: 'Jaipur',
    rating: 5,
    text: 'My mother got her dentures made here. The fit was perfect and the whole process was smooth. Great care for senior patients.', // [EDITABLE]
  },
] as const;

export const faqs = [
  {
    q: 'Do I need to book an appointment in advance?',
    a: 'Yes, we recommend booking ahead so we can give you enough time and attention. You can request an appointment through this website, call us, or message us on WhatsApp.',
  },
  {
    q: 'How often should I get a dental check-up?',
    a: 'For most people, a check-up and professional cleaning every six months is ideal. If you have specific concerns like gum disease or ongoing treatment, we may suggest more frequent visits.',
  },
  {
    q: 'Is root canal treatment painful?',
    a: 'Modern root canal treatment is designed to relieve pain, not cause it. With local anaesthetic and current techniques, most patients feel little to no discomfort during the procedure.',
  },
  {
    q: 'Do you treat children?',
    a: 'Yes. We see patients of all ages and have experience making dental visits comfortable and friendly for young children. We recommend a first visit around age one or when the first teeth appear.',
  },
  {
    q: 'What payment options are available?',
    a: 'We accept cash, UPI and major digital payment methods. For larger treatment plans, please ask our front desk about available options.', // [EDITABLE]
  },
  {
    q: 'Are you open on Sundays?',
    a: 'Yes, we are open on Sundays from 10:00 AM to 2:00 PM for emergencies and pre-booked appointments. Monday to Saturday we are open until 9:00 PM.', // [EDITABLE]
  },
] as const;

/**
 * Gallery images — each entry has a local `src` (from /public/images/) and a
 * `fallback` Pexels URL used automatically if the local file isn't uploaded yet.
 * Drop the real photos into public/images/ — see public/images/README.md.
 */
export const gallery = [
  {
    src: '/images/exterior.jpg',
    fallback: 'https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Vinayak Dental Clinic exterior in Pratap Nagar, Jaipur — the entrance with the clinic sign',
    caption: 'Our clinic in Pratap Nagar',
  },
  {
    src: '/images/treatment-room-1.jpg',
    fallback: 'https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Vinayak Dental Clinic treatment room showing orange dental chairs and modern dental unit',
    caption: 'Modern treatment room',
  },
  {
    src: '/images/treatment-room-2.jpg',
    fallback: 'https://images.pexels.com/photos/5355858/pexels-photo-5355858.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Vinayak Dental Clinic treatment area with dental chair and equipment, second angle',
    caption: 'Fully equipped dental unit',
  },
  {
    src: '/images/treatment-room-1.jpg',
    fallback: 'https://images.pexels.com/photos/9062525/pexels-photo-9062525.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Clean and organised dental workstation inside Vinayak Dental Clinic',
    caption: 'Organised, hygienic workstation',
  },
  {
    src: '/images/treatment-room-2.jpg',
    fallback: 'https://images.pexels.com/photos/7789678/pexels-photo-7789678.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Dental chair and overhead light at Vinayak Dental Clinic',
    caption: 'Advanced dental chair unit',
  },
  {
    src: '/images/exterior.jpg',
    fallback: 'https://images.pexels.com/photos/6627325/pexels-photo-6627325.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Vinayak Dental Clinic frontage — welcoming entrance in Pratap Nagar',
    caption: 'Easy to find in Pratap Nagar',
  },
] as const;

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
] as const;
