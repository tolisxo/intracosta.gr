import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Truck, MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'coverage', href: '#coverage' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const services = [
    { key: 'internationalTransport' },
    { key: 'domesticTransport' },
    { key: 'specializedTransport' },
    { key: 'warehousingDistribution' }
  ];

  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/logocorrectversion.svg" alt="Intracosta Logo" className="h-24" />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5 text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('ourServices')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <span className="text-gray-700">{t(service.key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-gray-700">
                  <div>3ο χλμ Γιαννιτσών Θεσσαλονίκης</div>
                  <div>GR58100 Γιαννιτσά</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+302101234567" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">+30 210 123 4567</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:export@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">export@intracosta.com</a>
                  <a href="mailto:import@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">import@intracosta.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-700 mb-4 md:mb-0">
              © 2024 Intracosta. All rights reserved. Stolos Official
            </div>
            <div className="flex space-x-6">
              <button className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full text-sm">
                {t('privacyPolicy')}
              </button>
              <button className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full text-sm">
                {t('termsOfService')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;