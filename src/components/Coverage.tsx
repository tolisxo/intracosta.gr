import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Truck } from 'lucide-react';

const Coverage: React.FC = () => {
  const { t } = useLanguage();

  const countries = [
    { name: 'Germany', flag: '🇩🇪', routes: 'Daily Routes', coordinates: [10.4515, 51.1657] },
    { name: 'Netherlands', flag: '🇳🇱', routes: 'Daily Routes', coordinates: [5.2913, 52.1326] },
    { name: 'Belgium', flag: '🇧🇪', routes: '3x/Week', coordinates: [4.4699, 50.5039] },
    { name: 'France', flag: '🇫🇷', routes: '2x/Week', coordinates: [2.2137, 46.2276] },
    { name: 'Italy', flag: '🇮🇹', routes: '2x/Week', coordinates: [12.5674, 41.8719] },
    { name: 'Austria', flag: '🇦🇹', routes: '3x/Week', coordinates: [14.5501, 47.5162] },
    { name: 'Switzerland', flag: '🇨🇭', routes: '2x/Week', coordinates: [8.2275, 46.8182] },
    { name: 'Poland', flag: '🇵🇱', routes: '3x/Week', coordinates: [19.1451, 51.9194] },
    { name: 'Czech Republic', flag: '🇨🇿', routes: '2x/Week', coordinates: [15.4729, 49.8175] },
    { name: 'Hungary', flag: '🇭🇺', routes: '2x/Week', coordinates: [19.5033, 47.1625] },
    { name: 'Slovakia', flag: '🇸🇰', routes: '2x/Week', coordinates: [19.699, 48.669] },
    { name: 'Bulgaria', flag: '🇧🇬', routes: 'Weekly', coordinates: [25.4858, 42.7339] }
  ];

  const features = [
    {
      icon: <MapPin className="text-yellow-500 w-8 h-8" />,
      title: t('strategicLocationsTitle'),
      description: t('strategicLocationsDescription')
    },
    {
      icon: <Truck className="text-yellow-500 w-8 h-8" />,
      title: t('modernFleetTitle'),
      description: t('modernFleetDescription')
    }
  ];

  const [filter, setFilter] = useState('All');

  const filteredCountries = countries.filter(country => {
    if (filter === 'All') return true;
    return country.routes.toLowerCase().includes(filter.toLowerCase());
  });

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

        {/* Map and Routes Section replaced with filterable table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Routes</h3>

              <div className="mb-4 flex gap-3 flex-wrap">
                <button
                  onClick={() => setFilter('All')}
                  className={`px-4 py-2 rounded-full border ${
                    filter === 'All' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('Daily')}
                  className={`px-4 py-2 rounded-full border ${
                    filter === 'Daily' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  Daily Routes
                </button>
                <button
                  onClick={() => setFilter('3x')}
                  className={`px-4 py-2 rounded-full border ${
                    filter === '3x' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  3x/Week
                </button>
                <button
                  onClick={() => setFilter('2x')}
                  className={`px-4 py-2 rounded-full border ${
                    filter === '2x' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  2x/Week
                </button>
                <button
                  onClick={() => setFilter('Weekly')}
                  className={`px-4 py-2 rounded-full border ${
                    filter === 'Weekly' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  Weekly
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                      <th className="p-3">Country</th>
                      <th className="p-3">Frequency</th>
                      <th className="p-3">Departure</th>
                      <th className="p-3">ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCountries.map((country, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-3">{country.flag} {country.name}</td>
                        <td className="p-3 text-yellow-600 font-semibold">{country.routes}</td>
                        <td className="p-3">Greece</td>
                        <td className="p-3">2-4 days</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;