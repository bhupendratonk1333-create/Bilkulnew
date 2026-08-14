import { useEffect } from 'react';
import { useRoute } from '@/lib/router';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileActions } from '@/components/layout/MobileActions';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { FAQPage } from '@/pages/FAQPage';
import { ContactPage } from '@/pages/ContactPage';
import { AppointmentPage } from '@/pages/AppointmentPage';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vinayak Dental Clinic — Gentle Family Dentistry in Pratap Nagar, Jaipur',
    description:
      'Gentle, modern dental care for the whole family in Pratap Nagar, Jaipur — check-ups, cleaning, fillings, root canals, crowns, dentures and cosmetic dentistry. Book today.',
  },
  '/about': {
    title: 'About — Vinayak Dental Clinic, Pratap Nagar, Jaipur',
    description:
      'Meet the neighbourhood dental clinic combining modern care with a warm, personal touch in Pratap Nagar, Jaipur.',
  },
  '/services': {
    title: 'Dental Services — Vinayak Dental Clinic, Jaipur',
    description:
      'Full range of dental treatments: check-ups, cleaning, fillings, root canals, crowns & bridges, dentures, cosmetic dentistry and teeth whitening.',
  },
  '/gallery': {
    title: 'Clinic Gallery — Vinayak Dental Clinic, Jaipur',
    description: 'Take a visual tour of our bright, clean and welcoming dental clinic in Pratap Nagar, Jaipur.',
  },
  '/reviews': {
    title: 'Patient Reviews — Vinayak Dental Clinic, Jaipur',
    description: 'Read what our patients say about their experience at Vinayak Dental Clinic in Pratap Nagar, Jaipur.',
  },
  '/faq': {
    title: 'FAQ — Vinayak Dental Clinic, Jaipur',
    description: 'Answers to common questions about appointments, treatments, payment and more at Vinayak Dental Clinic.',
  },
  '/contact': {
    title: 'Contact — Vinayak Dental Clinic, Pratap Nagar, Jaipur',
    description: 'Get in touch with Vinayak Dental Clinic. Call, WhatsApp, email or send us a message.',
  },
  '/appointment': {
    title: 'Book an Appointment — Vinayak Dental Clinic, Jaipur',
    description: 'Request a dental appointment online. Choose your treatment, date and time — we will call to confirm.',
  },
};

function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-heading text-7xl font-bold text-primary-100">404</span>
      <h1 className="mt-4 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <a
        href="#/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading font-semibold text-white shadow-soft transition hover:bg-primary-600 active:scale-95"
      >
        Back to home
      </a>
    </section>
  );
}

function App() {
  const [route] = useRoute();
  useScrollReveal();

  // Update document title + meta description per route for SEO
  useEffect(() => {
    const meta = pageMeta[route];
    document.title = meta?.title ?? pageMeta['/'].title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta?.description ?? pageMeta['/'].description);
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '/': return <HomePage />;
      case '/about': return <AboutPage />;
      case '/services': return <ServicesPage />;
      case '/gallery': return <GalleryPage />;
      case '/reviews': return <ReviewsPage />;
      case '/faq': return <FAQPage />;
      case '/contact': return <ContactPage />;
      case '/appointment': return <AppointmentPage />;
      default: return <NotFound />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pb-20 lg:pb-0">
        {renderPage()}
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
}

export default App;
