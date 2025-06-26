import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1118446/pexels-photo-1118446.jpeg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight sm:leading-tight animate-fade-in-up">
            Η ασφάλεια της μεταφοράς σας, προσωπική μας υπόθεση.
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto animate-bounce-in delay-150">
            Αξιόπιστες οδικές μεταφορές στην Ελλάδα και την Ευρώπη, με εμπειρία, οργανωμένο δίκτυο και τεχνολογία αιχμής.
          </p>
          
          <button
            onClick={scrollToQuote}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-up delay-300"
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