import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import LoadingScreen from '@/components/feature/LoadingScreen';
import ScrollToTop from '@/components/feature/ScrollToTop';
import CursorGlow from '@/components/feature/CursorGlow';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProductsSection from './components/ProductsSection';
import IndustriesSection from './components/IndustriesSection';
import ManufacturingProcess from './components/ManufacturingProcess';
import QualityAssurance from './components/QualityAssurance';
import ApplicationsGallery from './components/ApplicationsGallery';
import CompanyValues from './components/CompanyValues';
import FAQSection from './components/FAQSection';
import GetInTouch from './components/GetInTouch';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <main className="relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ProductsSection />
        <IndustriesSection />
        <ManufacturingProcess />
        <QualityAssurance />
        <ApplicationsGallery />
        <CompanyValues />
        <FAQSection />
        <GetInTouch />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}