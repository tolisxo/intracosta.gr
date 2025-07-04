import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Award, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('aboutReliabilityTitle'),
      description: t('aboutReliabilityDesc')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('aboutQualityTitle'),
      description: t('aboutQualityDesc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('aboutPartnershipTitle'),
      description: t('aboutPartnershipDesc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('aboutInnovationTitle'),
      description: t('aboutInnovationDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck transporting goods"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutIntracostaSummary')}
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t('aboutIntracostaDetails')}
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: '🚚',
                  title: t('aboutHighlight1Title'),
                  description: t('aboutHighlight1Desc')
                },
                {
                  icon: '🏢',
                  title: t('aboutHighlight2Title'),
                  description: t('aboutHighlight2Desc')
                },
                {
                  icon: '🔒',
                  title: t('aboutHighlight3Title'),
                  description: t('aboutHighlight3Desc')
                },
                {
                  icon: '👥',
                  title: t('aboutHighlight4Title'),
                  description: t('aboutHighlight4Desc')
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;