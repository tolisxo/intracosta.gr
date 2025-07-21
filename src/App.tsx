import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LocalBusinessSchema from './components/SEO/LocalBusinessSchema';
import LocalSEOHead from './components/SEO/LocalSEOHead';
import GoogleBusinessIntegration from './components/SEO/GoogleBusinessIntegration';
import SmoothScroll from './components/ui/smooth-scroll';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Coverage from './components/Coverage';
import QuoteForm from './components/QuoteForm';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';


const AppContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <link rel="alternate" hreflang="el" href="https://example.gr/el" />
        <link rel="alternate" hreflang="de" href="https://example.gr/de" />
      </Helmet>
      <GoogleBusinessIntegration />
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
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