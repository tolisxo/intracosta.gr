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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight sm:leading-tight animate-fade-in-up-fast">
            {t('heroTitle')}
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up-fast">
            {t('heroSubtitle')}
          </p>
          
          <button
            onClick={scrollToQuote}
            className="inline-flex items-center border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-xl animate-fade-in-up-fast"
          >
            Ζητήστε Προσφορά
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;