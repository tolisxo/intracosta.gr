import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const companyStats = [
  { labelKey: "responseTime", value: "< 24h", label: "Απάντηση", icon: Clock },
  { labelKey: "cmrInsurance", value: "Full Coverage", label: "Κάλυψη", icon: Shield },
  { labelKey: "onTimeDelivery", value: "99.5%", label: "Παράδοση", icon: Zap }
];

interface PremiumContactProps {
  onSubmit?: (formData: any) => Promise<void>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

export function PremiumContact({ onSubmit, contactInfo }: PremiumContactProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gdprConsent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Το όνομα είναι υποχρεωτικό';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Το email είναι υποχρεωτικό';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Παρακαλώ εισάγετε έγκυρο email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Το μήνυμα είναι υποχρεωτικό';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες';
    }
    
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Πρέπει να αποδεχτείτε την πολιτική απορρήτου';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getCsrfToken = () => {
    const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    return match ? match[1] : '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!validateForm()) return;
    
    // Save current scroll position
    const scrollPosition = window.scrollY;
    
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default form submission to /api/contact
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'CSRF-Token': getCsrfToken(),
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
      }
      setIsSubmitted(true);
      
      // Restore scroll position after state update
      setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
      }, 0);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="relative py-20 bg-white text-gray-900 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gray-50/30"></div>

      <div 
        ref={containerRef}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Ας</span>
            <br />
            <span className="text-yellow-600">
              Συνεργαστούμε
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            {t('letsCooperateDescription')}
          </p>

          {/* USP Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200"
              >
                <stat.icon className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">{stat.value}</span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options - Simple 3-line layout */}
        <div className="space-y-3 mb-8">
          <a
            href="mailto:info@intracosta.com"
            className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
          >
            <Mail className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600" />
            <span className="text-lg">info@intracosta.com</span>
          </a>
          <a
            href="tel:+302382027111"
            className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
          >
            <Phone className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600" />
            <span className="text-lg">+30 23820 27111</span>
          </a>
          <a
            href="https://maps.app.goo.gl/AhQDdGwnDz4zrD2n8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
          >
            <MapPin className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600" />
            <span className="text-lg">Giannitsa, Greece</span>
          </a>
        </div>

        {/* All Email Addresses Section */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Όλες οι Διευθύνσεις Email
            </h3>
            <p className="text-gray-600 text-sm">
              Κάντε κλικ για να στείλετε email στην κατάλληλη διεύθυνση.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { email: 'info@intracosta.com', department: 'Γενικές Πληροφορίες' },
              { email: 'export@intracosta.com', department: 'Εξαγωγές' },
              { email: 'import@intracosta.com', department: 'Εισαγωγές' },
              { email: 'dispo.greece@intracosta.com', department: 'Διανομή Ελλάδα' },
              { email: 'account@intracosta.com', department: 'Λογιστήριο' }
            ].map((item, index) => (
              <a
                key={index}
                href={`mailto:${item.email}`}
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md transition-all group"
              >
                <Mail className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {item.department}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-yellow-700 break-all">
                    {item.email}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm">ή χρησιμοποιήστε τη φόρμα για να μας στείλετε μήνυμα</p>
        </div>

        {/* Contact Form */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Όνομα"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-4 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                  errors.name ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-4 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                  errors.email ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="message"
                placeholder="Μήνυμα"
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full px-4 py-4 bg-white border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none ${
                  errors.message ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="relative">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.gdprConsent}
                  onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                />
                <span className="text-sm text-gray-700 flex-1">
                  Αποδέχομαι την{' '}
                  <a href="/privacy-policy" className="text-yellow-600 hover:text-yellow-700 underline">
                    πολιτική απορρήτου
                  </a>
                  {' '}και συναινώ στην επεξεργασία των προσωπικών μου δεδομένων
                </span>
              </label>
              {errors.gdprConsent && (
                <p className="text-red-500 text-sm mt-1">{errors.gdprConsent}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Αποστολή Μηνύματος
                  </>
                )}
              </span>
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Το μήνυμα στάλθηκε!</h3>
            <p className="text-gray-600 text-lg mb-6">
              Σας ευχαριστούμε που επικοινωνήσατε μαζί μας. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '', gdprConsent: false });
              }}
              className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 hover:bg-gray-200 transition-colors shadow-sm"
            >
              Αποστολή άλλου μηνύματος
            </button>
          </div>
        )}

        {/* GDPR Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Τα προσωπικά σας δεδομένα θα χρησιμοποιηθούν μόνο για να σας απαντήσουμε. 
            Δείτε την πλήρη{' '}
            <a href="/privacy-policy" className="text-yellow-600 hover:text-yellow-700 underline">
              πολιτική απορρήτου
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}