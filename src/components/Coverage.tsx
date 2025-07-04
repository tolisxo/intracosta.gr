import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Truck, X, Warehouse } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const Coverage: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredMarkerIdx, setHoveredMarkerIdx] = useState<number | null>(null);

  const countries = [
    { name: 'Germany', flag: '🇩🇪', routes: 'Daily Routes', coordinates: [10.4515, 51.1657], count: 7 },
    { name: 'Netherlands', flag: '🇳🇱', routes: 'Daily Routes', coordinates: [5.2913, 52.1326], count: 5 },
    { name: 'Belgium', flag: '🇧🇪', routes: '3x/Week', coordinates: [4.4699, 50.5039], count: 3 },
    { name: 'France', flag: '🇫🇷', routes: '2x/Week', coordinates: [2.2137, 46.2276], count: 2 },
    { name: 'Italy', flag: '🇮🇹', routes: '2x/Week', coordinates: [12.5674, 41.8719], count: 2 },
    { name: 'Austria', flag: '🇦🇹', routes: '3x/Week', coordinates: [14.5501, 47.5162], count: 3 },
    { name: 'Switzerland', flag: '🇨🇭', routes: '2x/Week', coordinates: [8.2275, 46.8182], count: 2 },
    { name: 'Poland', flag: '🇵🇱', routes: '3x/Week', coordinates: [19.1451, 51.9194], count: 3 },
    { name: 'Czech Republic', flag: '🇨🇿', routes: '2x/Week', coordinates: [15.4729, 49.8175], count: 2 },
    { name: 'Hungary', flag: '🇭🇺', routes: '2x/Week', coordinates: [19.5033, 47.1625], count: 2 },
    { name: 'Slovakia', flag: '🇸🇰', routes: '2x/Week', coordinates: [19.699, 48.669], count: 2 },
    { name: 'Denmark', flag: '🇩🇰', routes: '2x/Week', coordinates: [9.5018, 56.2639], count: 2 },
    { name: 'Luxembourg', flag: '🇱🇺', routes: '3x/Week', coordinates: [6.1296, 49.8153], count: 3 },
    { name: 'Greece', flag: '🇬🇷', routes: 'Daily Routes', coordinates: [21.8243, 39.0742], count: 7 }
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
    },
    {
      icon: <Warehouse className="text-yellow-500 w-8 h-8" />,
      title: t('centralWarehousesTitle'),
      description: t('centralWarehousesDescription')
    }
  ];

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Interactive Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Map */}
            <div className="lg:col-span-2 relative p-8 flex items-center justify-center min-h-[700px]">
              <div className="w-full aspect-[3/2] bg-white relative">
                <ComposableMap
                  projection="geoAzimuthalEqualArea"
                  projectionConfig={{ center: [15, 52], scale: 800 }}
                  style={{ width: '100%' }}
                >
                  <defs>
                    <linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <Geographies geography="/maps/europe.geojson">
                    {({ geographies }) =>
                      geographies
                        .filter((geo) =>
                          [
                            'Germany',
                            'France',
                            'Italy',
                            'Poland',
                            'Netherlands',
                            'Belgium',
                            'Austria',
                            'Switzerland',
                            'Czech Republic',
                            'Hungary',
                            'Slovakia',
                            'Denmark',
                            'Luxembourg',
                            'Greece'
                          ].includes(geo.properties.NAME)
                        )
                        .map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={
                              [
                                'Germany',
                                'France',
                                'Italy',
                                'Poland',
                                'Netherlands',
                                'Belgium',
                                'Austria',
                                'Switzerland',
                                'Czech Republic',
                                'Hungary',
                                'Slovakia',
                                'Denmark',
                                'Luxembourg',
                                'Greece'
                              ].includes(geo.properties.NAME)
                                ? 'url(#yellowGradient)'
                                : '#e5e7eb'
                            }
                            stroke="#FFF"
                            style={{
                              default: { outline: 'none', transition: 'fill 0.3s' },
                              hover: {
                                fill: 'url(#yellowGradient)', // keep gradient on hover
                                filter: 'brightness(1.13)',
                                outline: 'none',
                                transition: 'fill 0.3s'
                              },
                              pressed: { outline: 'none' },
                            }}
                          />
                        ))
                    }
                  </Geographies>
                  {countries.map((country, idx) => (
                    <Marker key={idx} coordinates={country.coordinates}>
                      <circle
                        r={8}
                        fill="#facc15"
                        stroke="#000"
                        strokeWidth={1}
                        className="transition-transform duration-200 ease-in-out cursor-pointer"
                        onMouseEnter={() => {
                          setHoveredCountry(`${country.flag} ${country.name}: ${t('covered')}`);
                          setHoveredMarkerIdx(idx);
                        }}
                        onMouseLeave={() => {
                          setHoveredCountry(null);
                          setHoveredMarkerIdx(null);
                        }}
                        style={{
                          transform: hoveredMarkerIdx === idx ? 'scale(1.25)' : 'scale(1)',
                          transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)'
                        }}
                      />
                    </Marker>
                  ))}
                </ComposableMap>
                
                {/* Hover Tooltip */}
                {hoveredCountry && (
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-10 pointer-events-none">
                    {hoveredCountry}
                  </div>
                )}
              </div>
            </div>

            {/* Routes Info & Button */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('ourRoutesTitle')}</h3>
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-3">{t('ourRoutesDescription', { count: countries.length })}</span>
                <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-bold text-lg shadow-sm">
                  {countries.length}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 focus:outline-none group"
                style={{ position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => {
                  // For premium effect, we could add more here if needed
                }}
                onMouseLeave={e => {
                  // For premium effect, we could add more here if needed
                }}
              >
                <MapPin className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative z-10">{t('viewCountries')}</span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #facc15 0%, #fbbf24 100%)',
                    zIndex: 0
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">{t('coverageTitle')}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-medium text-gray-900">{country.name}</span>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 flex items-center">
                        <span className="inline-block w-5 h-5 mr-1 bg-yellow-300 rounded-full text-xs font-bold flex items-center justify-center">{country.count}</span>
                        {t('covered')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Coverage;