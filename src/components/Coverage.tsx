import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Truck, X, Warehouse } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const Coverage: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isModalOpen]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredMarkerIdx, setHoveredMarkerIdx] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  // Real warehouse and coverage data
  const coverageData: { [key: string]: { warehouses: Array<{code: string, city: string, isCentral?: boolean}>, postalCodes: string[] } } = {
    'Germany': {
      warehouses: [
        { code: '85716', city: 'Munich' },
        { code: '65549', city: 'Limburg' },
        { code: '79576', city: 'Weil am Rhein' },
        { code: '16727', city: 'Velten' },
        { code: '04435', city: 'Schkeuditz' },
        { code: '34253', city: 'Kassel' },
        { code: '22113', city: 'Hamburg' },
        { code: '68309', city: 'Mannheim' },
        { code: '74321', city: 'Stuttgart' },
        { code: '49549', city: 'Ladbergen', isCentral: true },
        { code: '30916', city: 'Isernhagen' }
      ],
      postalCodes: ['85716', '65549', '79576', '16727', '04435', '34253', '22113', '68309', '74321', '49549', '30916']
    },
    'Austria': {
      warehouses: [
        { code: '1210', city: 'Wien' },
        { code: '2514', city: 'Linz' }
      ],
      postalCodes: ['1210', '2514']
    },
    'Netherlands': {
      warehouses: [
        { code: '4824', city: 'Breda' }
      ],
      postalCodes: ['4824']
    },
    'Belgium': {
      warehouses: [
        { code: '2830', city: 'Willebroek' }
      ],
      postalCodes: ['2830']
    },
    'Greece': {
      warehouses: [
        { code: '58100', city: 'Γιαννιτσά', isCentral: true },
        { code: '19600', city: 'Ασπρόπυργος' }
      ],
      postalCodes: ['58100', '19600']
    }
  };

  const countryFlagColors: { [key: string]: string[] } = {
    'Germany': ['#000000', '#FF0000', '#FFCC00'], // Black, Red, Gold
    'France': ['#002395', '#FFFFFF', '#ED2939'], // Blue, White, Red
    'Italy': ['#008C45', '#FFFFFF', '#CD212A'], // Green, White, Red
    'Poland': ['#FFFFFF', '#DC143C'], // White, Red
    'Netherlands': ['#21468B', '#FFFFFF', '#AE1C28'], // Blue, White, Red
    'Belgium': ['#000000', '#FFCD00', '#EF3340'], // Black, Yellow, Red
    'Austria': ['#ED2939', '#FFFFFF', '#ED2939'], // Red, White, Red
    'Switzerland': ['#D52B1E'], // Red (with a white cross, but we'll use solid red)
    'Czech Republic': ['#11457E', '#FFFFFF', '#D7141A'], // Blue, White, Red
    'Hungary': ['#CD2A3E', '#FFFFFF', '#436F4F'], // Red, White, Green
    'Slovakia': ['#FFFFFF', '#0B4EA2', '#EE1C25'], // White, Blue, Red
    'Denmark': ['#C60C30', '#FFFFFF'], // Red, White
    'Luxembourg': ['#EF3340', '#FFFFFF', '#00A1DE'], // Red, White, Blue
    'Greece': ['#0D5EAF', '#FFFFFF'], // Blue, White
    'Cyprus': ['#D4AF37'], // Gold color for hover and fill
  };

  const countries = [
    { name: 'Austria', flag: '🇦🇹', routes: '3x/Week', coordinates: [14.5501, 47.5162], count: 2 },
    { name: 'Germany', flag: '🇩🇪', routes: 'Daily Routes', coordinates: [10.4515, 51.1657], count: 11 },
    { name: 'Netherlands', flag: '🇳🇱', routes: 'Daily Routes', coordinates: [5.2913, 52.1326], count: 1 },
    { name: 'Belgium', flag: '🇧🇪', routes: '3x/Week', coordinates: [4.4699, 50.5039], count: 1 },
    { name: 'Greece', flag: '🇬🇷', routes: 'Daily Routes', coordinates: [21.8243, 39.0742], count: 2 },
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

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
                      geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            fill={
                              countryFlagColors[geo.properties.NAME] ? countryFlagColors[geo.properties.NAME][0]
                                : '#e5e7eb'
                            }
                            geography={geo}
                            stroke="#FFF"
                            onClick={(e) => {
                              if (coverageData[geo.properties.NAME]) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setPopoverPosition({
                                  x: rect.left + rect.width / 2,
                                  y: rect.top + rect.height / 2
                                });
                                setSelectedCountry(geo.properties.NAME);
                              }
                            }}
                            onMouseEnter={() => {
                              if (coverageData[geo.properties.NAME]) {
                                setHoveredCountry(geo.properties.NAME);
                              }
                            }}
                            onMouseLeave={() => setHoveredCountry(null)}
                            style={{
                              default: {
                                outline: 'none',
                                transition: 'fill 0.3s',
                                fill: countryFlagColors[geo.properties.NAME] ? '#EAB308' : '#e5e7eb',
                                cursor: coverageData[geo.properties.NAME] ? 'pointer' : 'default'
                              },
                              hover: {
                                fill: countryFlagColors[geo.properties.NAME] ? '#FFFFFF' : '#e5e7eb',
                                stroke: countryFlagColors[geo.properties.NAME] ? '#EAB308' : '#e5e7eb',
                                filter: countryFlagColors[geo.properties.NAME] ? 'brightness(1.05)' : 'brightness(0.95)',
                                transition: 'fill 0.3s'
                              },
                              pressed: { outline: 'none'
                              },
                            }}
                          />
                        ))
                    }
                  </Geographies>
                </ComposableMap>
                
                {/* Hover Tooltip */}
                {hoveredCountry && !selectedCountry && (
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-10 pointer-events-none">
                    <div className="text-sm font-medium">{hoveredCountry}</div>
                    <div className="text-xs text-gray-300 mt-1">Click για περισσότερα</div>
                  </div>
                )}

                {/* Coverage Popover */}
                {selectedCountry && coverageData[selectedCountry] && (
                  <>
                    {/* Backdrop */}
                    <div 
                      className="fixed inset-0 z-20" 
                      onClick={() => setSelectedCountry(null)}
                    />
                    
                    {/* Popover Card */}
                    <div 
                      className="absolute z-30 bg-white rounded-xl shadow-2xl border-2 border-yellow-400 p-6 max-w-md animate-in fade-in zoom-in duration-200"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-yellow-600" />
                          <h3 className="text-xl font-bold text-gray-900">{selectedCountry}</h3>
                        </div>
                        <button
                          onClick={() => setSelectedCountry(null)}
                          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                          aria-label="Close"
                        >
                          <X className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>

                      {/* Warehouses */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Warehouse className="w-4 h-4 text-yellow-500" />
                          {t('warehousesLabel')}
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {coverageData[selectedCountry].warehouses.map((warehouse, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-800 text-sm rounded-lg border border-yellow-200"
                            >
                              <div>
                                <span className="font-semibold">{warehouse.city}</span>
                                <span className="text-gray-600 ml-2">{t('postalCodeLabel')}: {warehouse.code}</span>
                              </div>
                              {warehouse.isCentral && (
                                <span className="px-2 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full">
                                  {t('centralWarehouseShort')}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Postal Codes */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Warehouse className="w-4 h-4 text-yellow-500" />
                          Ταχυδρομικοί Κώδικες
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {coverageData[selectedCountry].postalCodes.map((code, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 font-mono"
                            >
                              {code}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-5 pt-4 border-t border-gray-200">
                        <a
                          href="#quote"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedCountry(null);
                            const el = document.querySelector('#quote');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="block w-full text-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Ζητήστε Προσφορά
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Routes Info & Button */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('ourRoutesTitle')}</h3>
              <div className="flex items-center mb-4">
                {/* Reverted to using translation with placeholder after fixing t() function */}
                <span className="text-gray-600 mr-3">{t('ourRoutesDescription', { count: countries.length })}</span>
                <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-bold text-lg shadow-sm">
                  {countries.length}
                </span>
              </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 focus:outline-none group"
                style={{ position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => {
                  // For premium effect, we could add more here if needed
                }}
                onMouseLeave={e => {
                  // For premium effect, we could add more here if needed
                }}
              >
                <MapPin className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative z-10">{t('coverageTitle')}</span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #facc15 0%, #fbbf24 100%)',
                    zIndex: 0
                  }}
                />
                </button>
                <a
                  href="#quote"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#quote');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 inline-block text-yellow-600 font-semibold hover:underline"
                >
                  {t('getQuote')}
                </a>
              </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-out ${
            isModalOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{t('coverageTitle')}</h3>
              <button
                ref={closeButtonRef}
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
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-3 group">
                      <span className="text-2xl transform transition-transform duration-300 group-hover:translate-x-1">{country.flag}</span>
                      <span className="font-medium text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">{country.name}</span>
                    </div>
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