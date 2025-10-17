import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { Package, CheckCircle, ArrowRight, Shield, Settings } from 'lucide-react';

const SpecialTransportPage: React.FC = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const crumbs = [
    { label: t('home'), href: '/#home' },
    { label: t('services'), href: '/#services' },
    { label: t('services.specialTransportTitle'), current: true }
  ];

  const cargoTypes = [
    { title: 'Υπερμεγέθη Φορτία', icon: '📏', description: 'Εξειδικευμένος εξοπλισμός για μεγάλα φορτία' },
    { title: 'Βαρέα Φορτία', icon: '⚖️', description: 'Διαχείριση φορτίων μεγάλου βάρους' },
    { title: 'Ευπαθή Φορτία', icon: '🔒', description: 'Ειδική μέριμνα για ευαίσθητα προϊόντα' },
    { title: 'Υψηλής Αξίας', icon: '💎', description: 'Ασφαλισμένη μεταφορά πολύτιμων αγαθών' }
  ];

  const features = [
    'Εξειδικευμένος εξοπλισμός',
    'Έμπειρο προσωπικό',
    'Πλήρη τήρηση κανονισμών',
    'Προδιαγραφές ασφαλείας',
    'Εξατομικευμένες λύσεις',
    'Τεχνική υποστήριξη'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} className="mb-6 text-gray-300" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-4 bg-yellow-500 rounded-2xl">
              <Package className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('services.specialTransportTitle')}
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            {t('services.specialTransportSummary')}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {(t('services.specialTransportFull') || '').split('\n\n').map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-700 text-lg leading-relaxed mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Cargo Types Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {cargoTypes.map((type, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Safety Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
                <h3 className="text-2xl font-bold text-gray-900">Ασφάλεια & Κανονισμοί</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Κάθε έργο σχεδιάζεται με βάση τις τεχνικές του ιδιαιτερότητες, τηρώντας όλους τους κανονισμούς και τις προδιαγραφές ασφαλείας. Προσφέρουμε εξατομικευμένες λύσεις ανά έργο και φορτίο.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 sticky top-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Βασικά Χαρακτηριστικά
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Ζητήστε Προσφορά
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <Settings className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Εξατομίκευση</span>
                </div>
                <p className="text-sm text-gray-600">
                  Κάθε μεταφορά σχεδιάζεται με βάση τις συγκεκριμένες ανάγκες και απαιτήσεις του φορτίου σας.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialTransportPage;

