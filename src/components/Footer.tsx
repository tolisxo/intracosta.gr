import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);
  const [showTermsOfService, setShowTermsOfService] = React.useState(false);

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
                  <button
                    onClick={() => scrollToSection(`#${service.key}`)}
                    className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {t(service.key)}
                  </button>
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
                <a
                  href="https://maps.app.goo.gl/AhQDdGwnDz4zrD2n8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  3ο χλμ Γιαννιτσών Θεσσαλονίκης<br />
                  GR58100 Γιαννιτσά
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+302382027111" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">+30 23820 27111</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:export@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">export@intracosta.com</a>
                  <a href="mailto:import@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">import@intracosta.com</a>
                  <a href="mailto:dispo.greece@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">dispo.greece@intracosta.com</a>
                  <a href="mailto:account@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">account@intracosta.com</a>
                  <a href="mailto:info@intracosta.com" className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full">info@intracosta.com</a>
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
              <button
                type="button"
                onClick={() => setShowPrivacyPolicy(true)}
                className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full text-sm"
              >
                {t('privacyPolicy')}
              </button>
              <button
                type="button"
                onClick={() => setShowTermsOfService(true)}
                className="inline-block relative text-gray-700 hover:text-yellow-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full text-sm"
              >
                {t('termsOfService')}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full overflow-y-auto relative">
            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
              aria-label="Close"
            >
              ✕
            </button>
            <h1 className="text-2xl font-bold mb-4">{t('privacyPolicy')}</h1>
            <div className="space-y-4 text-gray-700">
              <p>{t('privacyPolicyIntroduction') || '...'}</p>
              <h2 className="text-xl font-semibold">{t('privacyPolicyInfoWeCollectTitle') || '...'}</h2>
              <p>{t('privacyPolicyInfoWeCollectText') || '...'}</p>
              <h2 className="text-xl font-semibold">{t('privacyPolicyHowWeUseInfoTitle') || '...'}</h2>
              <p>{t('privacyPolicyHowWeUseInfoText') || '...'}</p>
              <h2 className="text-xl font-semibold">{t('privacyPolicyDataStorageTitle') || '...'}</h2>
              <p>{t('privacyPolicyDataStorageText') || '...'}</p>
              <h2 className="text-xl font-semibold">{t('privacyPolicyDataSharingTitle') || '...'}</h2>
              <p>{t('privacyPolicyDataSharingText') || '...'}</p>
              <h2 className="text-xl font-semibold">{t('privacyPolicyYourRightsTitle') || '...'}</h2>
              <p>{t('privacyPolicyYourRightsText') || '...'}</p>
              <h2 className="text-xl font-semibold">{t('privacyPolicyChangesTitle') || '...'}</h2>
              <p>{t('privacyPolicyChangesText') || '...'}</p>
            </div>
          </div>
        </div>
      )}
      {/* Terms of Service Modal */}
      {showTermsOfService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full overflow-y-auto relative">
            <button
              onClick={() => setShowTermsOfService(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
              aria-label="Close"
            >
              ✕
            </button>
            <h1 className="text-2xl font-bold mb-4">{t('termsOfService')}</h1>
            <div className="space-y-4 text-gray-700">
              <p>{t('termsAcceptanceText')}</p>
              <h2 className="text-xl font-semibold">{t('termsServicesTitle')}</h2>
              <p>{t('termsServicesText')}</p>
              <h2 className="text-xl font-semibold">{t('termsUseWebsiteTitle')}</h2>
              <p>{t('termsUseWebsiteText')}</p>
              <h2 className="text-xl font-semibold">{t('termsQuoteRequestsTitle')}</h2>
              <p>{t('termsQuoteRequestsText')}</p>
              <h2 className="text-xl font-semibold">{t('termsLiabilityTitle')}</h2>
              <p>{t('termsLiabilityText')}</p>
              <h2 className="text-xl font-semibold">{t('termsContactTitle')}</h2>
              <p>
                {t('termsContactText')} info@intracosta.com, +30 23820 27111
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;