import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Truck, X } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const Coverage: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

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

        {/* Interactive Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Map */}
            <div className="lg:col-span-2 relative p-8 flex items-center justify-center min-h-[500px]">
              <div className="w-full h-[500px] bg-white relative">
                <ComposableMap
                  projection="geoAzimuthalEqualArea"
                  projectionConfig={{ center: [15, 52], scale: 600 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Geographies geography="/maps/world-countries.json">
                    {({ geographies }) =>
                      geographies
                        .filter((geo) => ['Germany', 'France', 'Italy', 'Poland', 'Netherlands', 'Belgium', 'Austria', 'Switzerland', 'Czech Republic', 'Hungary', 'Slovakia', 'Bulgaria'].includes(geo.properties.NAME))
                        .map((geo) => (
                          <Geography key={geo.rsmKey} geography={geo} fill="#DDD" stroke="#FFF" />
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
                        onMouseEnter={() => setHoveredCountry(`${country.flag} ${country.name}: ${country.routes}`)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        style={{
                          transform: hoveredCountry === `${country.flag} ${country.name}: ${country.routes}` ? 'scale(1.5)' : 'scale(1)'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Routes</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We serve {countries.length} European countries with regular scheduled routes. 
                Our network covers major industrial and commercial centers across Europe.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Δείτε τις συχνότητες
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Route Frequencies</h3>
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
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        country.routes === 'Daily Routes' 
                          ? 'bg-green-100 text-green-800' 
                          : country.routes === 'Weekly'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {country.routes}
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