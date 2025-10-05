import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LocalBusinessSchema from './components/SEO/LocalBusinessSchema';
import LocalSEOHead from './components/SEO/LocalSEOHead';
import GoogleBusinessIntegration from './components/SEO/GoogleBusinessIntegration';
import ReviewSchema from './components/SEO/ReviewSchema';
import SitemapGenerator from './components/SEO/SitemapGenerator';
import NavigationIndicator from './components/NavigationIndicator';
import MobileBottomNav from './components/MobileBottomNav';
import SmoothScroll from './components/ui/smooth-scroll';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Coverage from './components/Coverage';
import QuoteForm from './components/QuoteFormEnhanced';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import InternationalTransportPage from './pages/InternationalTransportPage';
import DomesticTransportPage from './pages/DomesticTransportPage';
import WarehousingPage from './pages/WarehousingPage';
import RoadTransportPage from './pages/RoadTransportPage';
import IntermodalTransportPage from './pages/IntermodalTransportPage';
import SpecialTransportPage from './pages/SpecialTransportPage';
import LogisticsServicesPage from './pages/LogisticsServicesPage';


const AppContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <link rel="alternate" hreflang="el" href="https://www.intracosta.gr/el" />
        <link rel="alternate" hreflang="de" href="https://www.intracosta.gr/de" />
      </Helmet>
      <GoogleBusinessIntegration />
      <ReviewSchema />
      <SitemapGenerator />
      <Router>
        <div className="min-h-screen">
          <Header />
          <NavigationIndicator />
          <MobileBottomNav />
          <main id="main-content" role="main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <LocalSEOHead page="home" />
                    <LocalBusinessSchema page="home" />
                    <Hero />
                    <TrustSection />
                    <Services />
                    <Coverage />
                    <QuoteForm />
                    <About />
                    <Testimonials />
                    <FAQ />
                    <Contact />
                  </>
                }
              />
              <Route
                path="/international-transport"
                element={
                  <>
                    <LocalSEOHead page="services" title="International Transport - Intracosta" />
                    <InternationalTransportPage />
                  </>
                }
              />
              <Route
                path="/domestic-transport"
                element={
                  <>
                    <LocalSEOHead page="services" title="Domestic Transport - Intracosta" />
                    <DomesticTransportPage />
                  </>
                }
              />
              <Route
                path="/warehousing"
                element={
                  <>
                    <LocalSEOHead page="services" title="Warehousing - Intracosta" />
                    <WarehousingPage />
                  </>
                }
              />
              <Route
                path="/road-transport"
                element={
                  <>
                    <LocalSEOHead page="services" title="Road Transport - Intracosta" />
                    <RoadTransportPage />
                  </>
                }
              />
              <Route
                path="/intermodal-transport"
                element={
                  <>
                    <LocalSEOHead page="services" title="Intermodal Transport - Intracosta" />
                    <IntermodalTransportPage />
                  </>
                }
              />
              <Route
                path="/special-transport"
                element={
                  <>
                    <LocalSEOHead page="services" title="Special Transport - Intracosta" />
                    <SpecialTransportPage />
                  </>
                }
              />
              <Route
                path="/logistics-services"
                element={
                  <>
                    <LocalSEOHead page="services" title="Logistics Services - Intracosta" />
                    <LogisticsServicesPage />
                  </>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <>
                    <LocalSEOHead page="about" title="Privacy Policy - Intracosta" />
                    <PrivacyPolicyPage />
                  </>
                } 
              />
              <Route 
                path="/terms-of-service" 
                element={
                  <>
                    <LocalSEOHead page="about" title="Terms of Service - Intracosta" />
                    <TermsOfServicePage />
                  </>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <SmoothScroll>
          <AppContent />
        </SmoothScroll>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;