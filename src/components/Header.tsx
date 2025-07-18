import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img
          src="/intracosta-logo-bird.svg"
          alt="Intracosta Logo"
          className="w-28 h-28 object-contain transition-transform duration-500 hover:scale-125"
        />
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">{t('home')}</Link>
          <Link to="/services" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">{t('services')}</Link>
          <Link to="/coverage" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">{t('coverage')}</Link>
          <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">{t('about')}</Link>
          <Link to="/contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">{t('contact')}</Link>
        </nav>
        <button
          onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md ml-6"
        >
          {t('letsCollaborate')}
        </button>
      </div>
    </header>
  );
};

export default Header;