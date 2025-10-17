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
  const [isCompact, setIsCompact] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
      const currentScrollPos = window.scrollY;
      
      setIsScrolled(currentScrollPos > 20);
      
      // Compact mode: scroll down = compact, scroll up = normal
      if (currentScrollPos > 100) {
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          setIsCompact(true);
        } else {
          // Scrolling up
          setIsCompact(false);
        }
      } else {
        // Near top, always normal size
        setIsCompact(false);
      }
      
      setPrevScrollPos(currentScrollPos);
      
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
  }, [prevScrollPos]);

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
      <header role="banner">
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
        <div className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-sm'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex justify-between items-center transition-all duration-300 ${
              isCompact ? 'py-2 lg:py-3' : 'py-4 lg:py-6'
            }`}>
            {/* Logo */}
              <div className="flex items-center justify-start ml-8 lg:ml-12 mr-auto">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="group transition-all duration-300 hover:scale-105 focus:outline-none rounded-lg p-2"
                aria-label="Intracosta Home"
              >
                <div itemScope itemType="https://schema.org/Organization">
                  <img
                    src="/intracosta001.png"
                    alt="Intracosta Logo"
                    className={`object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-lg hover:drop-shadow-xl ${
                      isCompact ? 'h-16 w-32 lg:h-20 lg:w-40' : 'h-20 w-40 lg:h-28 lg:w-56'
                    }`}
                    itemProp="logo"
                  />
                  <meta itemProp="name" content="Intracosta" />
                  <meta itemProp="url" content="https://www.intracosta.gr" />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-1" role="navigation" aria-label="Main navigation">
              {menuItems.map((item) => (
                <div key={item.key} className="relative dropdown-container">
                  {item.key === 'coverage' ? (
                    // Coverage Dropdown
                    <div className="relative">
                      <button
                        onClick={() => setIsCoverageOpen(!isCoverageOpen)}
                        onMouseEnter={() => setIsCoverageOpen(true)}
                        className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 group relative overflow-hidden ${
                          isActive(item.key)
                            ? 'text-yellow-600'
                            : 'text-gray-700 hover:text-yellow-600'
                        }`}
                        aria-expanded={isCoverageOpen}
                        aria-haspopup="true"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span className="relative z-10">{t(item.key)}</span>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                          isCoverageOpen ? 'rotate-180' : ''
                        } group-hover:scale-110`} />
                        {/* Custom hover underline */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300 group-hover:w-12 group-hover:shadow-lg" style={{ left: item.icon ? 'calc(50% + 8px)' : '50%' }}></div>
                        {/* Active underline */}
                        {isActive(item.key) && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg" style={{ left: item.icon ? 'calc(50% + 8px)' : '50%' }}></div>
                        )}
                      </button>

                      {/* Coverage Mega Menu */}
                      <div
                        className={`absolute top-full left-0 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 backdrop-blur-sm ${
                          isCoverageOpen 
                            ? 'opacity-100 visible transform translate-y-0 scale-100' 
                            : 'opacity-0 invisible transform -translate-y-4 scale-95'
                        }`}
                        onMouseLeave={() => setIsCoverageOpen(false)}
                      >
                        <div className="p-8">
                          <div className="mb-4">
                            <h3 className="font-bold text-xl text-gray-900 mb-2 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Ευρωπαϊκές Διαδρομές</h3>
                            <p className="text-gray-600">Εξυπηρετούμε 15+ χώρες με τακτικά δρομολόγια</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              {item.countries?.map((country) => (
                              <a
                                key={country.name}
                                href="#coverage"
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection('#coverage');
                                }}
                                className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group text-left hover:shadow-md hover:scale-105 border border-transparent hover:border-yellow-200"
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{country.flag}</span>
                                  <div>
                                    <div className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">{t(country.name)}</div>
                                  </div>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-300 rotate-[-90deg]" />
                              </a>
                            ))}
                          </div>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                              <a
                                href="#coverage"
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection('#coverage');
                                }}
                                className="w-full block text-center py-3 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                              >
                                Δείτε όλες τις διαδρομές
                              </a>
                            </div>
                        </div>
                      </div>
                    </div>
                  ) : item.subItems ? (
                    // Services Dropdown
                    <div className="relative">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                          isActive(item.key)
                            ? 'text-yellow-600'
                            : 'text-gray-700 hover:text-yellow-600'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span className="relative z-10">{t(item.key)}</span>
                        {/* Custom hover underline */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300 group-hover:w-12 group-hover:shadow-lg" style={{ left: item.icon ? 'calc(50% + 8px)' : '50%' }}></div>
                        {/* Active underline */}
                        {isActive(item.key) && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg" style={{ left: item.icon ? 'calc(50% + 8px)' : '50%' }}></div>
                        )}
                      </a>
                    </div>
                  ) : (
                    // Regular Menu Item
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                        isActive(item.key)
                          ? 'text-yellow-600'
                          : 'text-gray-700 hover:text-yellow-600'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span className="relative z-10">{t(item.key)}</span>
                      {/* Custom hover underline - centered on text */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300 group-hover:w-12 group-hover:shadow-lg" style={{ left: item.icon ? 'calc(50% + 8px)' : '50%' }}></div>
                      {/* Active underline - centered on text */}
                      {isActive(item.key) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg" style={{ left: item.icon ? 'calc(50% + 8px)' : '50%' }}></div>
                      )}
                    </a>
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
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-xl hover:underline hover:decoration-yellow-500 hover:underline-offset-4 group"
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-medium">
                    {languages.find(lang => lang.code === language)?.name}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-all duration-300 group-hover:scale-110 ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 backdrop-blur-sm">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full px-5 py-4 text-left text-sm flex items-center space-x-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-yellow-50 transition-all duration-300 hover:scale-105 rounded-xl mx-2 ${
                          language === lang.code ? 'bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-600 shadow-md' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                        <div>
                          <div className="font-medium">{lang.fullName}</div>
                          <div className="text-xs text-gray-500">{lang.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#quote');
                }}
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group relative overflow-hidden whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                <span>{t('getQuote')}</span>
                <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-xl hover:bg-gray-50 hover:scale-110"
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
            <div className="py-6 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
              <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
                {menuItems.map((item) => (
                  <div key={item.key}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={`w-full flex items-center space-x-4 px-6 py-4 text-left rounded-xl transition-all duration-300 mx-2 group ${
                        isActive(item.key)
                          ? 'text-yellow-600'
                          : 'text-gray-700 hover:text-yellow-600 hover:underline hover:decoration-yellow-500 hover:underline-offset-4'
                      }`}
                    >
                      {item.icon && <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />}
                      <div>
                        <div className="font-semibold text-lg">{t(item.key)}</div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{item.description}</div>
                      </div>
                    </a>
                    
                    {/* Mobile Coverage Countries */}
                    {item.key === 'coverage' && item.countries && (
                      <div className="ml-12 mt-3 space-y-2">
                        {item.countries.slice(0, 4).map((country) => (
                          <div key={country.name} className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 rounded-lg hover:underline hover:decoration-yellow-500 hover:underline-offset-4 transition-colors duration-300">
                            <span>{country.flag}</span>
                            <span>{t(country.name)}</span>
                          </div>
                        ))}
                        <div className="px-3 py-2 text-xs text-gray-500 font-medium">
                          +{(item.countries.length - 4)} περισσότερες...
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <a
                  href="#quote"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#quote');
                  }}
                  className="mx-6 mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  {t('getQuote')}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${
        isCompact ? 'h-20 lg:h-28' : 'h-28 lg:h-48'
      }`}></div>
    </>
  );
};

export default Header;