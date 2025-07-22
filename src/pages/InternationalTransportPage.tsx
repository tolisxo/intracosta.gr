import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';

const InternationalTransportPage: React.FC = () => {
  const { t } = useLanguage();

  const crumbs = [
    { label: t('home'), href: '#home' },
    { label: t('services'), href: '#services' },
    { label: t('internationalTransport'), current: true }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <Breadcrumbs items={crumbs} className="mb-4" />
      <h1 className="text-3xl font-bold mb-4">
        {t('internationalTransportTitle')}
      </h1>
      <p className="text-gray-700">
        {t('internationalTransportDesc')}
      </p>
    </div>
  );
};

export default InternationalTransportPage;
