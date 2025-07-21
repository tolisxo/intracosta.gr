import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface LocalSEOHeadProps {
  page: 'home' | 'services' | 'contact' | 'about' | 'coverage';
  title?: string;
  description?: string;
}

const LocalSEOHead: React.FC<LocalSEOHeadProps> = ({ page, title, description }) => {
  const { language } = useLanguage();

  const seoData = {
    home: {
      title: {
        el: 'Intracosta - Αξιόπιστες Διεθνείς Μεταφορές στη Γιαννιτσά | Οδικές Μεταφορές Ευρώπη',
        en: 'Intracosta - Reliable International Transport in Giannitsa | European Road Transport',
        de: 'Intracosta - Zuverlässiger internationaler Transport in Giannitsa | Europäischer Straßentransport'
      },
      description: {
        el: 'Η Intracosta στη Γιαννιτσά προσφέρει αξιόπιστες διεθνείς μεταφορές σε όλη την Ευρώπη. 25+ χρόνια εμπειρίας, καθημερινά δρομολόγια, CMR ασφάλιση. ☎️ 23820 27111',
        en: 'Intracosta in Giannitsa offers reliable international transport across Europe. 25+ years experience, daily routes, CMR insurance. ☎️ +30 23820 27111',
        de: 'Intracosta in Giannitsa bietet zuverlässigen internationalen Transport in ganz Europa. 25+ Jahre Erfahrung, tägliche Routen, CMR-Versicherung. ☎️ +30 23820 27111'
      }
    },
    services: {
      title: {
        el: 'Υπηρεσίες Μεταφορών Intracosta Γιαννιτσά | Διεθνείς & Εθνικές Μεταφορές',
        en: 'Intracosta Giannitsa Transport Services | International & Domestic Transport',
        de: 'Intracosta Giannitsa Transportdienstleistungen | Internationale & Inlandstransporte'
      },
      description: {
        el: 'Πλήρεις υπηρεσίες μεταφορών από τη Γιαννιτσά: Διεθνείς οδικές μεταφορές, groupage, εκτελωνισμός, αποθήκευση. Εξυπηρετούμε Γερμανία, Αυστρία, Ολλανδία, Βέλγιο.',
        en: 'Complete transport services from Giannitsa: International road transport, groupage, customs clearance, warehousing. Serving Germany, Austria, Netherlands, Belgium.',
        de: 'Komplette Transportdienstleistungen von Giannitsa: Internationaler Straßentransport, Sammelladung, Zollabfertigung, Lagerung. Service für Deutschland, Österreich, Niederlande, Belgien.'
      }
    },
    contact: {
      title: {
        el: 'Επικοινωνία Intracosta Γιαννιτσά | Στοιχεία Επικοινωνίας & Διεύθυνση',
        en: 'Contact Intracosta Giannitsa | Contact Details & Address',
        de: 'Kontakt Intracosta Giannitsa | Kontaktdaten & Adresse'
      },
      description: {
        el: 'Επικοινωνήστε με την Intracosta στη Γιαννιτσά. 📍 3ο χλμ Γιαννιτσών-Θεσσαλονίκης, GR58100 ☎️ 23820 27111 📧 info@intracosta.com. Ώρες λειτουργίας: Δευ-Παρ 09:00-17:00',
        en: 'Contact Intracosta in Giannitsa. 📍 3rd km Giannitsa-Thessaloniki, GR58100 ☎️ +30 23820 27111 📧 info@intracosta.com. Hours: Mon-Fri 09:00-17:00',
        de: 'Kontaktieren Sie Intracosta in Giannitsa. 📍 3. km Giannitsa-Thessaloniki, GR58100 ☎️ +30 23820 27111 📧 info@intracosta.com. Öffnungszeiten: Mo-Fr 09:00-17:00'
      }
    },
    about: {
      title: {
        el: 'Σχετικά με την Intracosta Γιαννιτσά | 25 Χρόνια Εμπειρίας στις Μεταφορές',
        en: 'About Intracosta Giannitsa | 25 Years Experience in Transport',
        de: 'Über Intracosta Giannitsa | 25 Jahre Erfahrung im Transport'
      },
      description: {
        el: 'Η Intracosta στη Γιαννιτσά δραστηριοποιείται στις διεθνείς μεταφορές από το 1999. Στόλος 50+ φορτηγών, 2 ιδιόκτητες αποθήκες, εξυπηρέτηση 15+ ευρωπαϊκών χωρών.',
        en: 'Intracosta in Giannitsa has been active in international transport since 1999. Fleet of 50+ trucks, 2 owned warehouses, serving 15+ European countries.',
        de: 'Intracosta in Giannitsa ist seit 1999 im internationalen Transport tätig. Flotte von 50+ LKW, 2 eigene Lagerhäuser, Service in 15+ europäischen Ländern.'
      }
    },
    coverage: {
      title: {
        el: 'Περιοχές Κάλυψης Intracosta | Μεταφορές σε 15+ Ευρωπαϊκές Χώρες από Γιαννιτσά',
        en: 'Intracosta Coverage Areas | Transport to 15+ European Countries from Giannitsa',
        de: 'Intracosta Abdeckungsgebiete | Transport in 15+ europäische Länder von Giannitsa'
      },
      description: {
        el: 'Η Intracosta από τη Γιαννιτσά εξυπηρετεί Γερμανία, Αυστρία, Ολλανδία, Βέλγιο, Πολωνία, Λουξεμβούργο, Δανία και άλλες ευρωπαϊκές χώρες με καθημερινά δρομολόγια.',
        en: 'Intracosta from Giannitsa serves Germany, Austria, Netherlands, Belgium, Poland, Luxembourg, Denmark and other European countries with daily routes.',
        de: 'Intracosta von Giannitsa bedient Deutschland, Österreich, Niederlande, Belgien, Polen, Luxemburg, Dänemark und andere europäische Länder mit täglichen Routen.'
      }
    }
  };

  const currentSEO = seoData[page];
  const pageTitle = title || currentSEO.title[language];
  const pageDescription = description || currentSEO.description[language];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="GR-CM" />
      <meta name="geo.placename" content="Γιαννιτσά" />
      <meta name="geo.position" content="40.7934;22.4089" />
      <meta name="ICBM" content="40.7934, 22.4089" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="3ο χλμ Γιαννιτσών Θεσσαλονίκης" />
      <meta name="business:contact_data:locality" content="Γιαννιτσά" />
      <meta name="business:contact_data:region" content="Κεντρική Μακεδονία" />
      <meta name="business:contact_data:postal_code" content="58100" />
      <meta name="business:contact_data:country_name" content="Greece" />
      <meta name="business:contact_data:phone_number" content="+30 23820 27111" />
      <meta name="business:contact_data:email" content="info@intracosta.com" />
      
      {/* Open Graph Local */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={`https://www.intracosta.gr/${page === 'home' ? '' : page}`} />
      <meta property="og:image" content="https://www.intracosta.gr/logocorrectversion.svg" />
      <meta property="business:contact_data:street_address" content="3ο χλμ Γιαννιτσών Θεσσαλονίκης" />
      <meta property="business:contact_data:locality" content="Γιαννιτσά" />
      <meta property="business:contact_data:postal_code" content="58100" />
      <meta property="business:contact_data:country_name" content="Greece" />
      <meta property="business:contact_data:phone_number" content="+30 23820 27111" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://www.intracosta.gr/logocorrectversion.svg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://www.intracosta.gr/${page === 'home' ? '' : page}`} />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="el" href={`https://www.intracosta.gr/el/${page === 'home' ? '' : page}`} />
      <link rel="alternate" hrefLang="en" href={`https://www.intracosta.gr/en/${page === 'home' ? '' : page}`} />
      <link rel="alternate" hrefLang="de" href={`https://www.intracosta.gr/de/${page === 'home' ? '' : page}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://www.intracosta.gr/${page === 'home' ? '' : page}`} />
    </Helmet>
  );
};

export default LocalSEOHead;