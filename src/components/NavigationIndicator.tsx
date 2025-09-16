import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const NavigationIndicator: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { key: 'home', label: t('home') },
    { key: 'services', label: t('services') },
    { key: 'coverage', label: t('coverage') },
    { key: 'about', label: t('about') },
    { key: 'contact', label: t('contact') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.key);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.key);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionKey: string) => {
    const element = document.getElementById(sectionKey);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Enhanced Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/30 z-50 backdrop-blur-sm">
        <motion.div 
          className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 shadow-lg"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Side Navigation Indicator */}
      <aside role="complementary" aria-label="Section navigation">
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <nav
            className="flex flex-col space-y-3"
            role="navigation"
            aria-label="Page sections"
          >
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => scrollToSection(section.key)}
                className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.key
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${section.label}`}
              >
                {/* Tooltip */}
                <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.key
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                }`}>
                  {section.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default NavigationIndicator;