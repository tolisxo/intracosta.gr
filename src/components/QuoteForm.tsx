import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, MapPin, Package, Calendar, User, Mail, Phone, Building } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    pickupLocation: '',
    deliveryLocation: '',
    cargoType: '',
    pallets: '',
    boxes: '',
    dimensions: '',
    weight: '',
    desiredDate: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        pickupLocation: '',
        deliveryLocation: '',
        cargoType: '',
        pallets: '',
        boxes: '',
        dimensions: '',
        weight: '',
        desiredDate: '',
        companyName: '',
        contactPerson: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 bg-gradient-to-br from-gray-700 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600">
              Your quote request has been sent successfully. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-gray-700 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('quoteFormTitle')}
          </h2>
          <p className="text-xl text-gray-100">
            {t('quoteFormSubtitle')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Shipment Details */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Package className="w-6 h-6 mr-3 text-gray-700" />
                  Shipment Details
                </h3>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('pickupLocation')}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder={t('pickupLocation')}
                    title="π.χ. Θεσσαλονίκη"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('deliveryLocation')}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    placeholder={t('deliveryLocation')}
                    title="π.χ. Αθήνα"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <hr className="my-6 border-gray-300" />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('cargoType')}
                </label>
                <div className="relative">
                  <select
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleInputChange}
                    title="Επιλέξτε τον τύπο φορτίου"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">{t('cargoType')}</option>
                    <option value="dry">Ξηρό φορτίο</option>
                    <option value="controlled">Φορτίο με ελεγχόμενη θερμοκρασία</option>
                    <option value="adr">ADR</option>
                    <option value="special">Ειδική μεταφορά</option>
                  </select>
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Ποσότητα και είδος φορτίου */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Package className="w-6 h-6 mr-3 text-gray-700" />
                  {t('cargoQuantityType')}
                </h3>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Παλέτες (Αριθμός)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="pallets"
                    value={formData.pallets}
                    onChange={handleInputChange}
                    placeholder="π.χ. 10"
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Κιβώτια (Αριθμός)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="boxes"
                    value={formData.boxes}
                    onChange={handleInputChange}
                    placeholder="π.χ. 50"
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Διαστάσεις (Μήκος x Πλάτος x Ύψος)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                    placeholder="π.χ. 1.2m x 0.8m x 1.5m"
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('weight')}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder={t('weight')}
                    title="Βάρος σε κιλά (π.χ. 1000)"
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('desiredDate')}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="date"
                    name="desiredDate"
                    value={formData.desiredDate}
                    onChange={handleInputChange}
                    title="Επιλέξτε την επιθυμητή ημερομηνία"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Right Column - Contact Details */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-gray-700" />
                  Contact Information
                </h3>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('companyName')}
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder={t('companyName')}
                    title="Όνομα εταιρείας"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactPerson')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder={t('contactPerson')}
                    title="Όνομα υπεύθυνου επικοινωνίας"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('email')}
                    title="π.χ. example@mail.com"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('phone')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('phone')}
                    title="π.χ. +30 2101234567"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('submitQuote')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;