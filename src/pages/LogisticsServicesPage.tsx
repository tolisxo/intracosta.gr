import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { Warehouse, CheckCircle, ArrowRight, Box, Package, Truck } from 'lucide-react';

const LogisticsServicesPage: React.FC = () => {
  const { t } = useLanguage();

  const crumbs = [
    { label: t('home'), href: '/#home' },
    { label: t('services'), href: '/#services' },
    { label: t('services.logisticsTitle'), current: true }
  ];

  const services = [
    { 
      title: 'Παραλαβή & Ταξινόμηση', 
      icon: Box, 
      description: 'Επαγγελματική παραλαβή και οργάνωση φορτίων' 
    },
    { 
      title: 'Αποθήκευση', 
      icon: Warehouse, 
      description: 'Ασφαλείς χώροι αποθήκευσης με σύγχρονη διαχείριση' 
    },
    { 
      title: 'Inventory Control', 
      icon: Package, 
      description: 'Διαχείριση αποθεμάτων σε πραγματικό χρόνο' 
    },
    { 
      title: 'Picking & Packing', 
      icon: Box, 
      description: 'Προετοιμασία παραγγελιών και συσκευασία' 
    },
    { 
      title: 'Φορτοεκφορτώσεις', 
      icon: Truck, 
      description: 'Γρήγορες και ασφαλείς υπηρεσίες φορτοεκφόρτωσης' 
    },
    { 
      title: 'Cross-Docking', 
      icon: ArrowRight, 
      description: 'Άμεση μεταφορά χωρίς ενδιάμεση αποθήκευση' 
    }
  ];

  const features = [
    'Ολοκληρωμένη διαχείριση εφοδιαστικής αλυσίδας',
    'Σύγχρονος εξοπλισμός',
    'Έμπειρη ομάδα',
    'Λειτουργική ευελιξία',
    'Inventory control συστήματα',
    'Προετοιμασία για διανομή/εξαγωγή'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              <Warehouse className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('services.logisticsTitle')}
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            {t('services.logisticsSummary')}
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
              {t('services.logisticsFull').split('\n\n').map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-700 text-lg leading-relaxed mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <service.icon className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/4246206/pexels-photo-4246206.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Logistics Services"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Η Αξία μας
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Η ομάδα μας συνδυάζει τεχνογνωσία, σύγχρονο εξοπλισμό και λειτουργική ευελιξία για να υποστηρίξει αποδοτικά κάθε κρίκο της εφοδιαστικής αλυσίδας των συνεργατών μας.
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

              <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <Warehouse className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Αποθήκες</span>
                </div>
                <p className="text-sm text-gray-600">
                  Δύο ιδιόκτητες αποθήκες (Γιαννιτσά, Όσναμπουργκ) και δεκάδες συνεργαζόμενες στην Ευρώπη.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsServicesPage;

