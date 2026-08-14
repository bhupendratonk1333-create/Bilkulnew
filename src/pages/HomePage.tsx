import { Hero } from '@/components/home/Hero';
import { TrustIndicators } from '@/components/home/TrustIndicators';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TreatmentProcess } from '@/components/home/TreatmentProcess';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { ReviewHighlights } from '@/components/home/ReviewHighlights';
import { ServiceArea } from '@/components/home/ServiceArea';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { HomeContact } from '@/components/home/HomeContact';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <TreatmentProcess />
      <GalleryPreview />
      <ReviewHighlights />
      <ServiceArea />
      <HomeFAQ />
      <HomeContact />
    </>
  );
}
