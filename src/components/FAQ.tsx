import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are your delivery timeframes?',
      answer: 'Delivery times vary by destination: Germany/Netherlands (24-48h), France/Belgium (48-72h), Italy/Eastern Europe (72-96h). Express options available for urgent shipments.'
    },
    {
      question: 'Do you provide cargo insurance?',
      answer: 'Yes, all shipments are covered by comprehensive cargo insurance up to €100,000. Additional coverage available for high-value goods.'
    },
    {
      question: 'What documents do I need for customs clearance?',
      answer: 'Typically required: commercial invoice, packing list, origin certificate. Our team will guide you through specific requirements for your destination.'
    },
    {
      question: 'Can I track my shipment in real-time?',
      answer: 'Absolutely! You receive a tracking number and can monitor your shipment 24/7 through our online portal or mobile app.'
    },
    {
      question: 'What types of cargo do you handle?',
      answer: 'We transport general cargo, fragile items, hazardous materials (ADR certified), and temperature-controlled goods. Weight limits up to 24 tons per truck.'
    },
    {
      question: 'How do you calculate shipping costs?',
      answer: 'Pricing is based on weight, dimensions, destination, and service type. Contact us for a personalized quote - we offer competitive rates for regular customers.'
    },
    {
      question: 'Do you offer warehousing services?',
      answer: 'Yes, we provide secure warehousing in strategic locations across Europe with inventory management and distribution services.'
    },
    {
      question: 'What happens if there are delays?',
      answer: 'We proactively communicate any delays and work to minimize impact. Our customer service team provides regular updates and alternative solutions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('faqTitle')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;