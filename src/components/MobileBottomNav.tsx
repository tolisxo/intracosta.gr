import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, Truck, MapPin, User, Phone, MessageCircle } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { key: 'home', icon: Home, label: t('home'), href: '#home' },
    { key: 'services', icon: Truck, label: t('services'), href: '#services' },
    { key: 'coverage', icon: MapPin, label: t('coverage'), href: '#coverage' },
    { key: 'about', icon: User, label: t('about'), href: '#about' },
    { key: 'contact', icon: Phone, label: t('contact'), href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.key);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 lg:hidden safe-area-pb">
      <nav
        className="flex items-center justify-around py-3 px-2"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className={`flex flex-col items-center space-y-1 px-2 py-3 rounded-lg transition-all duration-200 min-h-[60px] min-w-[60px] touch-manipulation ${
              activeSection === item.key
                ? 'text-yellow-600 bg-yellow-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            aria-label={item.label}
          >
            <item.icon className={`w-6 h-6 ${
              activeSection === item.key ? 'scale-110' : ''
            } transition-transform duration-200`} />
            <span className="text-xs font-medium leading-tight text-center">{item.label}</span>
            {activeSection === item.key && (
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            )}
          </a>
        ))}
      </nav>
      
      {/* Quick Contact FAB */}
      <a
        href="#quote"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#quote');
        }}
        className="absolute -top-7 right-4 w-14 h-14 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center hover:scale-110 touch-manipulation"
        aria-label="Get Quote"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default MobileBottomNav;