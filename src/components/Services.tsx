import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Truck, Warehouse, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: t('services.internationalTitle'),
      description: t('services.internationalDescription'),
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-800'
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: t('services.nationalTitle'),
      description: t('services.nationalDescription'),
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-800'
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: t('services.warehousingTitle'),
      description: t('services.warehousingDescription'),
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.sectionTitle')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-xl ${service.color} hover:${service.hoverColor} transition-all duration-300 hover:-translate-y-2 overflow-hidden w-full max-w-xs shadow-lg hover:shadow-2xl`}
            >
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white mb-6 leading-relaxed">{service.description}</p>
                <button className="inline-flex items-center text-white hover:text-yellow-400 font-semibold transition-colors">
                  {t('learnMore')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;