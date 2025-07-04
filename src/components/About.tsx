import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Award, Users, Target, Truck, Warehouse, ShieldCheck } from 'lucide-react';

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

            {/* Highlights Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('aboutHighlightsTitle')}
            </h3>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Truck className="w-8 h-8 text-yellow-500" />,
                  title: t('aboutHighlight1Title'),
                  description: t('aboutHighlight1Desc')
                },
                {
                  icon: <Warehouse className="w-8 h-8 text-yellow-500" />,
                  title: t('aboutHighlight2Title'),
                  description: t('aboutHighlight2Desc')
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
                  title: t('aboutHighlight3Title'),
                  description: t('aboutHighlight3Desc')
                },
                {
                  icon: <Users className="w-8 h-8 text-yellow-500" />,
                  title: t('aboutHighlight4Title'),
                  description: t('aboutHighlight4Desc')
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
                >
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4"
        >
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 shadow-inner">
              <Target className="w-10 h-10 text-yellow-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-3xl font-extrabold text-gray-900">{t('missionTitle')}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{t('missionText')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;