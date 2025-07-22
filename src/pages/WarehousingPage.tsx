import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';

const WarehousingPage: React.FC = () => {
  const { t } = useLanguage();

  const crumbs = [
    { label: t('home'), href: '#home' },
    { label: t('services'), href: '#services' },
    { label: t('warehousing'), current: true }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <Breadcrumbs items={crumbs} className="mb-4" />
      <h1 className="text-3xl font-bold mb-4">
        {t('warehousingTitle')}
      </h1>
      <p className="text-gray-700">
        {t('warehousingDesc')}
      </p>
    </div>
  );
};

export default WarehousingPage;
