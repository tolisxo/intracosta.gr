import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe, Truck } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const languages = [
    { code: 'el' as const, name: 'ΕΛ', flag: '🇬🇷' },
    { code: 'en' as const, name: 'EN', flag: '🇬🇧' },
    { code: 'de' as const, name: 'DE', flag: '🇩🇪' }
  ];

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'coverage', href: '#coverage', countries: [
      'Germany', 'Austria', 'Netherlands', 'Belgium', 'Poland', 'Luxembourg', 'Denmark', 'Greece', 'Cyprus'
    ] },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-1 md:py-1.5 lg:py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3 ml-4 mt-0">
            <div className="flex items-center space-x-2">
              <img
                src="/intracosta-logo-bird.svg"
                alt={t('logoAlt')}
                className="w-40 h-40 object-contain transition-transform duration-500 hover:scale-125"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.key === 'coverage' ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="relative text-gray-700 hover:text-yellow-500 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {t(item.key)}
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-xl transition-all duration-200 z-50 before:content-[''] before:absolute before:top-[-8px] before:left-6 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-gray-200 before:z-[-1] ${
                      isServicesHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <ul className="py-2">
                      {item.countries.map((country) => (
                        <li
                          key={country}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-150 hover:pl-6"
                        >
                          {t(country)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-yellow-500 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t(item.key)}
                </button>
              )
            )}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.name}
                </span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center space-x-2 hover:bg-gray-50 ${
                        language === lang.code ? 'bg-yellow-50 text-yellow-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#quote')}
              className="hidden sm:block bg-yellow-500 text-white border-2 border-yellow-500 hover:bg-white hover:text-yellow-500 px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out"
            >
              {t('getQuote')}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-yellow-500 font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t(item.key)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#quote')}
                className="bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-6 py-2 rounded-lg font-medium transition-all text-left"
              >
                {t('getQuote')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;