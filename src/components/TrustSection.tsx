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
      icon: <Award className="w-8 h-8 group-hover:text-white text-[#f5bd00]" />,
      number: '25+',
      label: t('yearsExperience'),
      color: 'text-[#f5bd00]'
    },
    {
      icon: <Package className="w-8 h-8 group-hover:text-white text-[#f5bd00]" />,
      number: '15K+',
      label: t('shipmentsPerYear'),
      color: 'text-[#f5bd00]'
    },
    {
      icon: <Users className="w-8 h-8 group-hover:text-white text-[#f5bd00]" />,
      number: '500+',
      label: t('happyClients'),
      color: 'text-[#f5bd00]'
    },
    {
      icon: <Truck className="w-8 h-8 group-hover:text-white text-[#f5bd00]" />,
      number: '50+',
      label: t('fleetVehicles'),
      color: 'text-[#f5bd00]'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-opacity duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#7C7D82] rounded-xl p-6 shadow-md text-white text-center transform transition-all duration-300 hover:bg-white hover:text-[#7C7D82] hover:shadow-xl group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 transition-colors duration-300 group-hover:bg-[#7C7D82] group-hover:text-white`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#f5bd00] transition-colors duration-300">
                {inView && (
                  <>
                    {stat.number === '25+' && <CountUp start={0} end={25} suffix="+" duration={2} />}
                    {stat.number === '15K+' && <CountUp start={0} end={15000} separator="," suffix="+" duration={2} />}
                    {stat.number === '500+' && <CountUp start={0} end={500} suffix="+" duration={2} />}
                    {stat.number === '50+' && <CountUp start={0} end={50} suffix="+" duration={2} />}
                  </>
                )}
              </div>
              <div className="font-medium text-white group-hover:text-[#f5bd00] transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;