import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Award, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Guaranteed on-time delivery with full cargo insurance'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'ISO certified processes and premium service standards'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership',
      description: 'Long-term relationships built on trust and transparency'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Modern technology for tracking and logistics optimization'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Logistics team"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutText')}
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our experienced team of logistics professionals ensures that your cargo reaches its destination safely and on time. We pride ourselves on building long-term partnerships with our clients based on trust, reliability, and exceptional service.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
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