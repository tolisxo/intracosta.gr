import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollAnimation from './ui/ScrollAnimation';
import ParallaxSection from './ui/ParallaxSection';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const scrollToQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 pt-40 sm:pt-32 pb-24">
      {/* Enhanced parallax background */}
      <motion.div 
        style={{ y, opacity, scale }} 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"
      />
      
      {/* Floating background elements */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl floating" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl floating" style={{ animationDelay: '4s' }} />
      </ParallaxSection>

      {/* Content with enhanced animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="stagger" className="flex flex-col items-center -mt-6">
          <ScrollAnimation animation="scaleIn" delay={0.2}>
            <img
              src="/intracosta χωρις το επε.svg"
              alt={t('logoAlt')}
              className="w-64 sm:w-80 md:w-96 h-auto mb-6 mx-auto magnetic hover-glow"
            />
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
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
              className="inline-flex items-center border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl magnetic hover-glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">🚛</span>
              Ας Συνεργαστούμε
            </motion.a>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;