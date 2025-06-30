import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: [
        <div>
          <p className="text-gray-600">3ο χλμ Γιαννιτσών Θεσσαλονίκης</p>
          <p className="text-gray-600">GR58100 Γιαννιτσά</p>
          <a
            href="https://maps.app.goo.gl/AhQDdGwnDz4zrD2n8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-yellow-500 hover:scale-105 transition-transform duration-300 font-semibold"
          >
            Άνοιγμα στον χάρτη
          </a>
        </div>
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: [
        <a href="tel:+302382022090" className="text-gray-700 hover:text-yellow-500 hover:scale-105 transition-transform duration-300 font-semibold">+30 23820 22090</a>,
        <a href="tel:+302382083100" className="text-gray-700 hover:text-yellow-500 hover:scale-105 transition-transform duration-300 font-semibold">+30 23820 83100</a>
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: [
        <a href="mailto:export@intracosta.com" className="text-gray-700 hover:text-yellow-500 hover:scale-105 transition-transform duration-300 font-semibold">export@intracosta.com</a>,
        <a href="mailto:import@intracosta.com" className="text-gray-700 hover:text-yellow-500 hover:scale-105 transition-transform duration-300 font-semibold">import@intracosta.com</a>
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Δευτέρα - Παρασκευή: 09:00 - 17:00 (Ώρα Αθήνας)',
        'Σαββατοκύριακο: Κλειστά'
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2c3441] text-[#f7c948] rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      typeof detail === 'string'
                        ? <p key={detailIndex} className="text-gray-600">{detail}</p>
                        : <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/302101234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors transition-transform transform hover:scale-105 duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Support
            </a>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=40.764939957148385,22.455266765277468&hl=el&z=16&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                className="w-full h-64 rounded-lg border-none"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contactFormTitle')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('message')}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('sendMessage')}
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;