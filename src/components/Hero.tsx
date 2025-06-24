import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1118446/pexels-photo-1118446.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gray-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          <button
            onClick={scrollToQuote}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('heroCtaText')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* ISO 9001 */}
          <div className="flex items-center justify-center space-x-3 text-white">
            <Shield className="w-8 h-8 text-yellow-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">ISO 9001</div>
              <div className="text-gray-200">Certified Quality</div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center justify-center space-x-3 text-white">
            <Clock className="w-8 h-8 text-yellow-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">
                {inView ? (
                  <CountUp start={0} end={24} duration={1.2} suffix="/7" />
                ) : (
                  <>0/7</>
                )}
              </div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </div>

          {/* Years Experience */}
          <div className="flex items-center justify-center space-x-3 text-white">
            <Award className="w-8 h-8 text-yellow-400" />
            <div className="text-left">
              <div className="text-2xl font-bold">
                {inView ? <CountUp start={0} end={15} duration={2} suffix="+" /> : <>0+</>}
              </div>
              <div className="text-gray-200">Years Experience</div>
            </div>
          </div>

          {/* 500+ Clients */}
          <div className="flex items-center justify-center space-x-3 text-white">
            <span className="w-8 h-8 flex items-center justify-center text-yellow-400 font-bold text-2xl">🏆</span>
            <div className="text-left">
              <div className="text-2xl font-bold">
                {inView ? <CountUp start={0} end={500} duration={2} suffix="+" /> : <>0+</>}
              </div>
              <div className="text-gray-200">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;