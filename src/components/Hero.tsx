import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  const scrollToQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 pt-40 sm:pt-32 pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://www.volvotrucks.com/content/dam/volvo/volvo-trucks/markets/master/home/volvo-trucks-homepage-hero-image-2023.jpg"
          alt="Volvo truck on European road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <img
            src="/intracosta-logo-bird.svg"
            alt="Intracosta Bird Logo"
            className="w-48 sm:w-64 md:w-72 h-auto mb-6 animate-fade-in-up-fast"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-200 animate-fade-in-up-fast mb-6">
            Αξιόπιστες διεθνείς μεταφορές σε όλη την Ευρώπη
          </p>
          <button
            onClick={scrollToQuote}
            className="inline-flex items-center border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-xl animate-fade-in-up-fast"
          >
            Ας Συνεργαστούμε
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;