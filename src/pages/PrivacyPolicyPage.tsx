import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  // You will need to dynamically get the effective date and website address
  const effectiveDate = '[Insert Effective Date]'; // Replace with logic to get dynamic date
  const websiteAddress = '[Your Website Address]'; // Replace with your website address

  return (
    <div className="container mx-auto py-8 px-4"> {/* Add some basic styling */}
      <h1 className="text-3xl font-bold mb-4">{t('privacyPolicyTitle')}</h1>
      <p className="text-sm text-gray-600 mb-6">
        {t('privacyPolicyEffectiveDate')}: {effectiveDate}
      </p>
      <p className="mb-4">
        {t('privacyPolicyIntroduction')
          .replace('[Your Website Address]', websiteAddress)}
      </p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyInfoWeCollectTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyInfoWeCollectText')}</p>
      <h3 className="text-xl font-semibold mb-2">{t('privacyPolicyQuoteFormTitle')}</h3>
      {/* You might list the fields here or refer back to the form */}
      {/* <p>- {t('pickupLocation')}...</p> */}

      <p className="mb-4">{t('privacyPolicyAutomaticallyCollectedInfoTitle')}</p>
      <h3 className="text-xl font-semibold mb-2">{t('privacyPolicyUsageInfoTitle')}</h3>
      <p className="mb-4">{t('privacyPolicyUsageInfoText')}</p>

      <h3 className="text-xl font-semibold mb-2">{t('privacyPolicyTechnicalInfoTitle')}</h3>
      <p className="mb-4">{t('privacyPolicyTechnicalInfoText')}</p>

      <h3 className="text-xl font-semibold mb-2">{t('privacyPolicyCookiesInfoTitle')}</h3>
      <p className="mb-4">{t('privacyPolicyCookiesInfoText')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyHowWeUseInfoTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyHowWeUseInfoText')}</p>
      <p className="mb-2">{t('privacyPolicyProcessRequests')}</p>
      <p className="mb-2">{t('privacyPolicySendOffers')}</p>
      <p className="mb-2">{t('privacyPolicyMarketing')}</p>
      <p className="mb-2">{t('privacyPolicyImproveWebsite')}</p>
      <p className="mb-4">{t('privacyPolicyCrm')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyDataStorageTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyDataStorageText')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyDataSharingTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyDataSharingText')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyYourRightsTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyYourRightsText')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyCookiesSectionTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyCookiesSectionText')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyChangesTitle')}</h2>
      <p className="mb-4">{t('privacyPolicyChangesText')}</p>

      <h2 className="text-2xl font-semibold mb-3">{t('privacyPolicyContactUsTitle')}</h2>
      {/* Use the existing contact info keys */}
      <p>{t('contactTitleAddress')}: {t('addressText')}</p>
      <p>{t('contactTitleEmail')}: {t('emailText')}</p>
      {/* Add phone number if you create a translation key for it */}
    </div>
  );
};

export default PrivacyPolicyPage;