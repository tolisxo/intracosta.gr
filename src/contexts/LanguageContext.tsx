import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section>
      <h2>{t("servicesTitle")}</h2>
      <div>
        <h3>{t("internationalTransportTitle")}</h3>
        <p>{t("internationalTransportDesc")}</p>
      </div>
      <div>
        <h3>{t("nationalTransportTitle")}</h3>
        <p>{t("nationalTransportDesc")}</p>
      </div>
      <div>
        <h3>{t("warehousingTitle")}</h3>
        <p>{t("warehousingDesc")}</p>
      </div>
    </section>
  );
};

export default Services;