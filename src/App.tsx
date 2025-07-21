import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
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
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Helmet>
            <link rel="canonical" href="https://www.intracosta.gr/" />
            <meta property="og:title" content="Intracosta - Reliable International Transport Across Europe" />
            <meta property="og:description" content="Professional international transport and logistics services across Europe." />
            <meta property="og:url" content="https://www.intracosta.gr/" />
            <meta property="og:type" content="website" />
          </Helmet>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
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
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;