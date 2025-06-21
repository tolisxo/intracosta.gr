import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Users, Package, Shield } from 'lucide-react';

const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: '15+',
      label: t('yearsExperience'),
      color: 'text-blue-600'
    },
    {
      icon: <Package className="w-8 h-8" />,
      number: '50K+',
      label: t('shipmentsPerYear'),
      color: 'text-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: '12',
      label: t('certifications'),
      color: 'text-green-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '500+',
      label: t('happyClients'),
      color: 'text-purple-600'
    }
  ];

  const certifications = [
    { name: 'ISO 9001', logo: '🏆' },
    { name: 'TIR', logo: '🚛' },
    { name: 'FIATA', logo: '🌍' },
    { name: 'AEO', logo: '✅' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t('certifications')}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 px-6 py-3 rounded-lg">
                <span className="text-2xl">{cert.logo}</span>
                <span className="font-semibold text-gray-800">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by leading companies across Europe
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;