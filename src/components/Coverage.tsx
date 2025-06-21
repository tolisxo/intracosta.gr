import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Truck, Clock } from 'lucide-react';

const Coverage: React.FC = () => {
  const { t } = useLanguage();

  const countries = [
    { name: 'Germany', flag: '🇩🇪', routes: 'Daily Routes' },
    { name: 'Netherlands', flag: '🇳🇱', routes: 'Daily Routes' },
    { name: 'Belgium', flag: '🇧🇪', routes: '3x/Week' },
    { name: 'France', flag: '🇫🇷', routes: '2x/Week' },
    { name: 'Italy', flag: '🇮🇹', routes: '2x/Week' },
    { name: 'Austria', flag: '🇦🇹', routes: '3x/Week' },
    { name: 'Switzerland', flag: '🇨🇭', routes: '2x/Week' },
    { name: 'Poland', flag: '🇵🇱', routes: '3x/Week' },
    { name: 'Czech Republic', flag: '🇨🇿', routes: '2x/Week' },
    { name: 'Hungary', flag: '🇭🇺', routes: '2x/Week' },
    { name: 'Slovakia', flag: '🇸🇰', routes: '2x/Week' },
    { name: 'Bulgaria', flag: '🇧🇬', routes: 'Weekly' }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Strategic Locations',
      description: 'Warehouses in key European hubs'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Modern Fleet',
      description: 'Euro 6 compliant vehicles'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Express Service',
      description: '24-48h delivery options'
    }
  ];

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('coverageTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('coverageSubtitle')}
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Map Placeholder */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="w-64 h-48 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">Interactive Map</span>
                </div>
                <p className="text-gray-700 font-medium">European Coverage Map</p>
              </div>
            </div>

            {/* Countries List */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Routes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{country.flag}</span>
                      <span className="font-medium text-gray-900">{country.name}</span>
                    </div>
                    <span className="text-sm text-yellow-600 font-medium">{country.routes}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;