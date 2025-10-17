import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollAnimation from './ui/ScrollAnimation';
import LazyImage from './ui/LazyImage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Simplified parallax - reduced calculations for better performance
  const { scrollY } = useScroll();
  const isMobile = window.innerWidth <= 768;
  const y = useTransform(scrollY, [0, 300], [0, isMobile ? -50 : -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, isMobile ? 0.8 : 0.5]);

  const scrollToQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Simplified parallax background */}
      <motion.div 
        style={{ y: isMobile ? 0 : y, opacity: isMobile ? 1 : opacity }} 
        className={`absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 ${isMobile ? 'mobile-parallax' : ''}`}
      />
      
      {/* Static background elements - no animations for better performance */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl" />
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="stagger" className="flex flex-col items-center justify-center min-h-screen">
          <ScrollAnimation animation="scaleIn" delay={0.2}>
            <LazyImage
              src="/intracosta-logo.svg"
              alt={t('logoAlt')}
              className="w-[400px] h-auto mb-6 sm:mb-8 mx-auto magnetic hover-glow"
              style={{ maxWidth: '400px', minWidth: '400px' }}
            />
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Αξιόπιστες διεθνείς μεταφορές σε όλη την Ευρώπη
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slideInUp" delay={0.6}>
            <motion.a
              href="#quote"
              onClick={(e) => {
                e.preventDefault();
                scrollToQuote();
              }}
              className="inline-flex items-center border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 shadow-2xl magnetic hover-glow min-h-[56px] touch-manipulation"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-xl sm:text-2xl">→</span>
{t('letsCooperate')}
            </motion.a>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;