import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Warehouse, X, FileText, Mail } from 'lucide-react';

interface WarehouseData {
  country: string;
  postalCodes: string[];
  warehouses: Array<{
    code: string;
    city: string;
    isCentral?: boolean;
  }>;
}

const warehouseData: WarehouseData[] = [
  {
    country: 'Germany',
    postalCodes: ['85716', '65549', '79576', '16727', '04435', '34253', '22113', '68309', '74321', '49549', '30916'],
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
    ]
  },
  {
    country: 'Austria',
    postalCodes: ['1210', '2514'],
    warehouses: [
      { code: '1210', city: 'Wien' },
      { code: '2514', city: 'Linz' }
    ]
  },
  {
    country: 'Belgium',
    postalCodes: ['2830'],
    warehouses: [
      { code: '2830', city: 'Willebroek' }
    ]
  },
  {
    country: 'Netherlands',
    postalCodes: ['4824'],
    warehouses: [
      { code: '4824', city: 'Breda' }
    ]
  },
  {
    country: 'Greece',
    postalCodes: ['58100', '19600'],
    warehouses: [
      { code: '58100', city: 'Γιαννιτσά', isCentral: true },
      { code: '19600', city: 'Ασπρόπυργος' }
    ]
  }
];

const InteractiveMap: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<WarehouseData | null>(null);

  const handleCountryClick = (countryName: string) => {
    const data = warehouseData.find(item => item.country === countryName);
    setSelectedCountry(data || null);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('mapTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('mapSubtitle')}
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {warehouseData.map((country) => (
              <button
                key={country.country}
                onClick={() => handleCountryClick(country.country)}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 text-center group"
              >
                <MapPin className="w-8 h-8 text-gray-400 group-hover:text-yellow-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-700">
                  {t(country.country)}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {country.warehouses.length} {t('warehousesTitle').toLowerCase()}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Modal for selected country */}
        {selectedCountry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-yellow-300">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-yellow-600" />
                    {t(selectedCountry.country)}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Coverage Areas */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                    {t('warehousesTitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCountry.warehouses.map((warehouse, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-gray-900">{warehouse.city}</p>
                            <p className="text-sm text-gray-600">ΤΚ: {warehouse.code}</p>
                          </div>
                          {warehouse.isCentral && (
                            <span className="px-3 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full">
                              {t('centralWarehouse')}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Postal Codes */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-yellow-600" />
                    {t('postalCodesTitle')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.postalCodes.map((code, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      const quoteSection = document.querySelector('#quote');
                      if (quoteSection) {
                        quoteSection.scrollIntoView({ behavior: 'smooth' });
                        closeModal();
                      }
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Ζητήστε Προσφορά
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
