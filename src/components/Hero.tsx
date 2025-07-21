import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  const scrollToQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 pt-40 sm:pt-32 pb-24">
      {/* Background Image with simple parallax effect */}
      <motion.div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://www.volvotrucks.com/content/dam/volvo/volvo-trucks/markets/master/home/volvo-trucks-homepage-hero-image-2023.jpg"
            alt="Volvo truck on European road"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center -mt-6">
          <img
            src="/intracosta brand text only.svg"
            alt="Intracosta Brand Logo"
            className="w-64 sm:w-80 md:w-96 h-auto mb-6 animate-fade-in-up-fast mx-auto"
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