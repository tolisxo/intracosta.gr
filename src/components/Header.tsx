import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import NAP from './SEO/NAP';
import { Menu, X, Globe, Truck, ChevronDown, Search, MapPin, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCoverageOpen, setIsCoverageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = [
    { code: 'el' as const, name: 'ΕΛ', flag: '🇬🇷', fullName: 'Ελληνικά' },
    { code: 'en' as const, name: 'EN', flag: '🇬🇧', fullName: 'English' },
    { code: 'de' as const, name: 'DE', flag: '🇩🇪', fullName: 'Deutsch' }
  ];

  const menuItems = [
    { 
      key: 'home', 
      href: '#home',
      icon: null,
      description: t('homeDescription') || 'Αρχική σελίδα'
    },
    { 
      key: 'services', 
      href: '#services',
      icon: Truck,
      description: t('servicesDescription') || 'Οι υπηρεσίες μας',
      subItems: [
        { key: 'internationalTransport', label: t('internationalTransport') },
        { key: 'domesticTransport', label: t('domesticTransport') },
        { key: 'warehousing', label: t('warehousing') },
        { key: 'customs', label: t('customs') }
      ]
    },
    { 
      key: 'coverage', 
      href: '#coverage',
      icon: MapPin,
      description: t('coverageDescription') || 'Περιοχές κάλυψης',
      countries: [
        { name: 'Germany', flag: '🇩🇪', routes: 'Daily' },
        { name: 'Austria', flag: '🇦🇹', routes: '3x/Week' },
        { name: 'Netherlands', flag: '🇳🇱', routes: 'Daily' },
        { name: 'Belgium', flag: '🇧🇪', routes: '3x/Week' },
        { name: 'Poland', flag: '🇵🇱', routes: '3x/Week' },
        { name: 'Luxembourg', flag: '🇱🇺', routes: '3x/Week' },
        { name: 'Denmark', flag: '🇩🇰', routes: '2x/Week' },
        { name: 'Greece', flag: '🇬🇷', routes: 'Daily' },
        { name: 'Cyprus', flag: '🇨🇾', routes: '2x/Week' }
      ]
    },
    { 
      key: 'about', 
      href: '#about',
      icon: null,
      description: t('aboutDescription') || 'Σχετικά με εμάς'
    },
    { 
      key: 'contact', 
      href: '#contact',
      icon: Phone,
      description: t('contactDescription') || 'Επικοινωνήστε μαζί μας'
    }
  ];

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => item.key);
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

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
        setIsLanguageOpen(false);
        setIsCoverageOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsCoverageOpen(false);
  };

  const isActive = (key: string) => activeSection === key;

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+302382027111" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+30 23820 27111</span>
              </a>
              <a href="mailto:export@intracosta.com" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>export@intracosta.com</span>
              </a>
            </div>
            <div className="text-gray-300">
              Δευτέρα - Παρασκευή: 09:00 - 17:00
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center space-x-3 group"
                aria-label="Intracosta Home"
              >
                <div itemScope itemType="https://schema.org/Organization">
                  <img
                    src="/intracosta-logo-bird.svg"
                    alt={t('logoAlt')}
                    className="h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    itemProp="logo"
                  />
                  <meta itemProp="name" content="Intracosta" />
                  <meta itemProp="url" content="https://www.intracosta.gr" />
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {menuItems.map((item) => (
                <div key={item.key} className="relative dropdown-container">
                  {item.key === 'coverage' ? (
                    // Coverage Dropdown
                    <div className="relative">
                      <button
                        onClick={() => setIsCoverageOpen(!isCoverageOpen)}
                        onMouseEnter={() => setIsCoverageOpen(true)}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                          isActive(item.key)
                            ? 'text-yellow-600 bg-yellow-50'
                            : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                        }`}
                        aria-expanded={isCoverageOpen}
                        aria-haspopup="true"
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{t(item.key)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isCoverageOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Coverage Mega Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-300 ${
                          isCoverageOpen 
                            ? 'opacity-100 visible transform translate-y-0' 
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseLeave={() => setIsCoverageOpen(false)}
                      >
                        <div className="p-6">
                          <div className="mb-4">
                            <h3 className="font-semibold text-gray-900 mb-2">Ευρωπαϊκές Διαδρομές</h3>
                            <p className="text-sm text-gray-600">Εξυπηρετούμε 15+ χώρες με τακτικά δρομολόγια</p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {item.countries?.map((country) => (
                              <button
                                key={country.name}
                                onClick={() => scrollToSection('#coverage')}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group text-left"
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-lg">{country.flag}</span>
                                  <div>
                                    <div className="font-medium text-gray-900 text-sm">{t(country.name)}</div>
                                    <div className="text-xs text-gray-500">{country.routes}</div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <button
                              onClick={() => scrollToSection('#coverage')}
                              className="w-full text-center py-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors"
                            >
                              Δείτε όλες τις διαδρομές →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item.subItems ? (
                    // Services Dropdown
                    <div className="relative">
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          isActive(item.key)
                            ? 'text-yellow-600 bg-yellow-50'
                            : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{t(item.key)}</span>
                      </button>
                    </div>
                  ) : (
                    // Regular Menu Item
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                        isActive(item.key)
                          ? 'text-yellow-600 bg-yellow-50'
                          : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{t(item.key)}</span>
                      {isActive(item.key) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full"></div>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Language Switcher */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {languages.find(lang => lang.code === language)?.name}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                          language === lang.code ? 'bg-yellow-50 text-yellow-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <div>
                          <div className="font-medium">{lang.fullName}</div>
                          <div className="text-xs text-gray-500">{lang.name}</div>
                        </div>
                        {language === lang.code && (
                          <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('#quote')}
                className="hidden sm:flex items-center space-x-2 bg-yellow-500 text-white border-2 border-yellow-500 hover:bg-white hover:text-yellow-500 px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>{t('getQuote')}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-expanded={isMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
                {menuItems.map((item) => (
                  <div key={item.key}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        isActive(item.key)
                          ? 'text-yellow-600 bg-yellow-50'
                          : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <div>
                        <div className="font-medium">{t(item.key)}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </button>
                    
                    {/* Mobile Coverage Countries */}
                    {item.key === 'coverage' && item.countries && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.countries.slice(0, 4).map((country) => (
                          <div key={country.name} className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-600">
                            <span>{country.flag}</span>
                            <span>{t(country.name)}</span>
                            <span className="text-xs text-gray-400">({country.routes})</span>
                          </div>
                        ))}
                        <div className="px-2 py-1 text-xs text-gray-500">
                          +{(item.countries.length - 4)} περισσότερες...
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <button
                  onClick={() => scrollToSection('#quote')}
                  className="mx-4 mt-4 bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-3 rounded-lg font-medium transition-all text-center"
                >
                  {t('getQuote')}
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;