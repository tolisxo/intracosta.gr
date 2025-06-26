import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Users, Package, Truck } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const TrustSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: '25+',
      label: t('yearsExperience'),
      color: 'text-gray-700'
    },
    {
      icon: <Package className="w-8 h-8" />,
      number: '15K+',
      label: t('shipmentsPerYear'),
      color: 'text-yellow-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '500+',
      label: t('happyClients'),
      color: 'text-gray-500'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      number: '50+',
      label: t('fleetVehicles'),
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {inView && (
                  <>
                    {stat.number === '25+' && <CountUp start={0} end={25} suffix="+" duration={2} />}
                    {stat.number === '15K+' && <CountUp start={0} end={15000} separator="," suffix="+" duration={2} />}
                    {stat.number === '500+' && <CountUp start={0} end={500} suffix="+" duration={2} />}
                    {stat.number === '50+' && <CountUp start={0} end={50} suffix="+" duration={2} />}
                  </>
                )}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
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