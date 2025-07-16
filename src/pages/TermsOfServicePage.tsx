import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfServicePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('termsOfService')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2024
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Intracosta website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-700 mb-6">
              Intracosta provides international transport and logistics services across Europe. Our services include road transport, groupage, customs clearance, and warehousing solutions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of Website</h2>
            <p className="text-gray-700 mb-6">
              You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair the site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Quote Requests</h2>
            <p className="text-gray-700 mb-6">
              Quote requests submitted through our website are not binding offers. All quotes are subject to confirmation and may be modified based on actual requirements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Intracosta shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: info@intracosta.com
              <br />
              Phone: +30 23820 27111
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;