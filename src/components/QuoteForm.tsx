import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, MapPin, Package, Calendar, User, Mail, Phone, Building, ChevronDown, ChevronUp } from 'lucide-react';

// Supported countries list
const SUPPORTED_COUNTRIES = [
  'Germany',
  'Austria',
  'Netherlands',
  'Belgium',
  'Poland',
  'Luxembourg',
  'Denmark',
  'Greece',
  'Cyprus'
];

const QuoteForm: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    pickupCountry: '',
    pickupCity: '',
    pickupPostalCode: '',
    pickupCompany: '',
    deliveryCountry: '',
    deliveryCity: '',
    deliveryPostalCode: '',
    deliveryCompany: '',
    loadingDate: '',
    cargoType: '',
    pallets: '',
    boxes: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Controls whether cargo detail fields are visible
  const [showCargoDetails, setShowCargoDetails] = useState(false);

  const sanitizeInput = (val: string) => val.replace(/<[^>]*>?/gm, '');
  const getCsrfToken = () => {
    const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    return match ? match[1] : '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': getCsrfToken(),
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        pickupCountry: '',
        pickupCity: '',
        pickupPostalCode: '',
        pickupCompany: '',
        deliveryCountry: '',
        deliveryCity: '',
        deliveryPostalCode: '',
        deliveryCompany: '',
        loadingDate: '',
        cargoType: '',
        pallets: '',
        boxes: '',
        length: '',
        width: '',
        height: '',
        weight: '',
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
    <section id="quote" className="py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('quoteFormTitle')}
          </h2>
          <p className="text-xl text-gray-100">
            {t('quoteFormSubtitle')}
          </p>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${Math.floor(
                Object.values(formData).filter(val => val !== '').length /
                  Object.keys(formData).length *
                  100
              )}%`,
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="rounded-2xl shadow-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-10 lg:p-12 transition-all duration-300 overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column: Cargo Details */}
              <div>
                <div className="flex flex-col gap-4">
                {/* Pickup Details */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('pickupPlace')}
                </label>
                <select
                  name="pickupCountry"
                  value={formData.pickupCountry}
                  onChange={handleInputChange}
                  className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  <option value="">{t('pickupCountry')}</option>
                  {SUPPORTED_COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {t(country)}
                    </option>
                  ))}
                </select>
                {formData.pickupCountry && (
                  <>
                    <input
                      type="text"
                      name="pickupCity"
                      value={formData.pickupCity}
                      onChange={handleInputChange}
                      placeholder={t('pickupCity')}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-3"
                      required
                    />
                    <input
                      type="text"
                      name="pickupPostalCode"
                      value={formData.pickupPostalCode}
                      onChange={handleInputChange}
                      placeholder={t('pickupPostalCode')}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-3"
                      required
                    />
                    <input
                      type="text"
                      name="pickupCompany"
                      value={formData.pickupCompany}
                      onChange={handleInputChange}
                      placeholder={t('pickupCompany')}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-3"
                    />
                  </>
                )}

                {/* Delivery Details */}
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
                  {t('deliveryPlace')}
                </label>
                <select
                  name="deliveryCountry"
                  value={formData.deliveryCountry}
                  onChange={handleInputChange}
                  className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  <option value="">{t('deliveryCountry')}</option>
                  {SUPPORTED_COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {t(country)}
                    </option>
                  ))}
                </select>
                {formData.pickupCountry && formData.deliveryCountry && (
                  <>
                    <input
                      type="text"
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleInputChange}
                      placeholder={t('deliveryCity')}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-3"
                      required
                    />
                    <input
                      type="text"
                      name="deliveryPostalCode"
                      value={formData.deliveryPostalCode}
                      onChange={handleInputChange}
                      placeholder={t('deliveryPostalCode')}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-3"
                      required
                    />
                    <input
                      type="text"
                      name="deliveryCompany"
                      value={formData.deliveryCompany}
                      onChange={handleInputChange}
                      placeholder={t('deliveryCompany')}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent mt-3"
                    />

                    {/* Loading Date */}
                    <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
                      {t('loadingDate')}
                    </label>
                    <input
                      type="date"
                      name="loadingDate"
                      value={formData.loadingDate}
                      onChange={handleInputChange}
                      className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />

                    {/* Cargo Type */}
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
                        <option value="dry">{t('cargoTypeDry')}</option>
                        <option value="controlled">{t('cargoTypeControlled')}</option>
                        <option value="adr">{t('cargoTypeAdr')}</option>
                        <option value="special">{t('cargoTypeSpecial')}</option>
                      </select>
                      <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Λεπτομέρειες Ποσότητας & Τύπου */}
                    <button
                      type="button"
                      onClick={() => setShowCargoDetails(!showCargoDetails)}
                      className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition mt-4"
                    >
                      <span>
                        {t('cargoQuantityType') !== 'cargoQuantityType'
                          ? t('cargoQuantityType')
                          : 'Λεπτομέρειες Ποσότητας & Τύπου'}
                      </span>
                      {showCargoDetails ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ${showCargoDetails ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'} overflow-hidden`}
                    >
                      {showCargoDetails && (
                        <div className="space-y-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pallets')}
                          </label>
                          <input
                            type="number"
                            name="pallets"
                            value={formData.pallets}
                            onChange={handleInputChange}
                            placeholder={t('palletsPlaceholder')}
                            className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />

                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('boxes')}
                          </label>
                          <input
                            type="number"
                            name="boxes"
                            value={formData.boxes}
                            onChange={handleInputChange}
                            placeholder={t('boxesPlaceholder')}
                            className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />

                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('dimensions')}
                          </label>
                          <div className="flex space-x-2">
                            <input
                              type="number"
                              step="0.1"
                              min="0.1"
                              name="length"
                              value={formData.length}
                              onChange={handleInputChange}
                              placeholder={t('lengthPlaceholder')}
                              className="w-1/3 pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                              required
                            />
                            <input
                              type="number"
                              step="0.1"
                              min="0.1"
                              name="width"
                              value={formData.width}
                              onChange={handleInputChange}
                              placeholder={t('widthPlaceholder')}
                              className="w-1/3 pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                              required
                            />
                            <input
                              type="number"
                              step="0.1"
                              min="0.1"
                              name="height"
                              value={formData.height}
                              onChange={handleInputChange}
                              placeholder={t('heightPlaceholder')}
                              className="w-1/3 pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">
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
                  </>
                )}
                </div>
              </div>
              {/* Right Column: Contact Details */}
              <div>
                <div className="flex flex-col gap-4">
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

                  <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
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

                  <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
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
                      className={`w-full pl-12 pr-4 py-3 border ${
                        formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                      required
                    />
                  </div>
                  {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                    <p className="text-red-500 text-xs mt-1">{t('invalidEmail')}</p>
                  )}

                  <label className="block text-sm font-medium text-gray-700 mb-1 mt-6">
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
                      className={`w-full pl-12 pr-4 py-3 border ${
                        formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                      required
                    />
                  </div>
                  {formData.phone && !/^\+?\d{7,15}$/.test(formData.phone) && (
                    <p className="text-red-500 text-xs mt-1">{t('invalidPhone')}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Summary Before Submit */}
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">{t('summaryTitle')}</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{t(key)}:</span> {value || '-'}
                </li>
              ))}
            </ul>
          </div>
          {/* Submit Button centered below the grid, outside the two columns */}
          <div className="mt-8 flex justify-center lg:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-xs bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
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
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;