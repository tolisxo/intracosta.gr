import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
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
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
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
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
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
        <AppContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;