import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en' | 'de';

interface Translations {
  [key: string]: {
    el: string;
    en: string;
    de: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { el: 'Αρχική', en: 'Home', de: 'Startseite' },
  services: { el: 'Υπηρεσίες', en: 'Services', de: 'Dienstleistungen' },
  coverage: { el: 'Περιοχές', en: 'Coverage', de: 'Abdeckung' },
  about: { el: 'Σχετικά', en: 'About', de: 'Über uns' },
  contact: { el: 'Επικοινωνία', en: 'Contact', de: 'Kontakt' },
  getQuote: { el: 'Ζητήστε Προσφορά', en: 'Get Quote', de: 'Angebot erhalten' },
  
  // Hero Section
  heroTitle: { 
    el: 'Αξιόπιστες Διεθνείς Μεταφορές σε Όλη την Ευρώπη', 
    en: 'Reliable International Transport Across Europe', 
    de: 'Zuverlässiger internationaler Transport in ganz Europa' 
  },
  heroSubtitle: { 
    el: 'Οδικές, Groupage και Υπηρεσίες Εκτελωνισμού για B2B', 
    en: 'Road Transport, Groupage and Customs Services for B2B', 
    de: 'Straßentransport, Groupage und Zolldienstleistungen für B2B' 
  },
  heroCtaText: { el: 'Ζητήστε Δωρεάν Προσφορά', en: 'Get Free Quote', de: 'Kostenloses Angebot' },
  
  // Trust Section
  yearsExperience: { el: 'Χρόνια Εμπειρίας', en: 'Years Experience', de: 'Jahre Erfahrung' },
  shipmentsPerYear: { el: 'Αποστολές/Έτος', en: 'Shipments/Year', de: 'Sendungen/Jahr' },
  certifications: { el: 'Πιστοποιήσεις', en: 'Certifications', de: 'Zertifizierungen' },
  happyClients: { el: 'Ικανοποιημένοι Πελάτες', en: 'Happy Clients', de: 'Zufriedene Kunden' },
  fleetVehicles: { el: 'Οχήματα', en: 'Vehicles', de: 'Fahrzeuge' },
  
  // Services
  servicesTitle: { el: 'Οι Υπηρεσίες μας', en: 'Our Services', de: 'Unsere Dienstleistungen' },
  roadTransport: { el: 'Οδικές Μεταφορές', en: 'Road Transport', de: 'Straßentransport' },
  roadTransportDesc: { 
    el: 'Πλήρεις φορτώσεις (FTL) σε όλη την Ευρώπη με σύγχρονο στόλο φορτηγών', 
    en: 'Full truck loads (FTL) across Europe with modern fleet', 
    de: 'Komplette LKW-Ladungen (FTL) in ganz Europa mit moderner Flotte' 
  },
  groupage: { el: 'Groupage', en: 'Groupage', de: 'Sammelladung' },
  groupageDesc: { 
    el: 'Οικονομικές λύσεις για μικρότερα φορτία με συχνά δρομολόγια', 
    en: 'Cost-effective solutions for smaller shipments with regular routes', 
    de: 'Kostengünstige Lösungen für kleinere Sendungen mit regelmäßigen Routen' 
  },
  customs: { el: 'Εκτελωνισμός', en: 'Customs Clearance', de: 'Zollabfertigung' },
  customsDesc: { 
    el: 'Πλήρεις υπηρεσίες εκτελωνισμού και διαχείρισης εγγράφων', 
    en: 'Complete customs clearance and documentation services', 
    de: 'Komplette Zollabfertigung und Dokumentationsdienstleistungen' 
  },
  warehousing: { el: 'Αποθήκευση', en: 'Warehousing', de: 'Lagerung' },
  warehousingDesc: { 
    el: 'Ασφαλής αποθήκευση και διαχείριση αποθεμάτων', 
    en: 'Secure storage and inventory management', 
    de: 'Sichere Lagerung und Lagerverwaltung' 
  },
  internationalTransport: {
    el: 'Διεθνείς Μεταφορές',
    en: 'International Transport',
    de: 'Internationale Transporte'
  },
  domesticTransport: {
    el: 'Εθνικές Μεταφορές',
    en: 'Domestic Transport',
    de: 'Inlandtransporte'
  },
  specializedTransport: {
    el: 'Ειδικές Μεταφορές',
    en: 'Specialized Transport',
    de: 'Spezialtransporte'
  },
  warehousingDistribution: {
    el: 'Αποθήκευση',
    en: 'Warehousing',
    de: 'Lagerung'
  },
  learnMore: { el: 'Μάθετε Περισσότερα', en: 'Learn More', de: 'Mehr erfahren' },
  
  // Coverage
  coverageTitle: { el: 'Περιοχές Κάλυψης', en: 'Coverage Areas', de: 'Abdeckungsgebiete' },
  coverageSubtitle: { 
    el: 'Καλύπτουμε όλες τις κύριες ευρωπαϊκές αγορές με τακτικά δρομολόγια', 
    en: 'We cover all major European markets with regular routes', 
    de: 'Wir decken alle wichtigen europäischen Märkte mit regelmäßigen Routen ab' 
  },
  
  // Quote Form
  quoteFormTitle: { el: 'Ζητήστε Προσφορά', en: 'Request Quote', de: 'Angebot anfordern' },
  pickupLocation: { el: 'Τοποθεσία Παραλαβής', en: 'Pickup Location', de: 'Abholort' },
  deliveryLocation: { el: 'Τοποθεσία Παράδοσης', en: 'Delivery Location', de: 'Lieferort' },
  cargoType: { el: 'Τύπος Φορτίου', en: 'Cargo Type', de: 'Frachtart' },
  weight: { el: 'Βάρος (kg)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
  desiredDate: { el: 'Επιθυμητή Ημερομηνία', en: 'Desired Date', de: 'Gewünschtes Datum' },
  companyName: { el: 'Επωνυμία Εταιρείας', en: 'Company Name', de: 'Firmenname' },
  contactPerson: { el: 'Υπεύθυνος Επικοινωνίας', en: 'Contact Person', de: 'Ansprechpartner' },
  email: { el: 'Email', en: 'Email', de: 'E-Mail' },
  phone: { el: 'Τηλέφωνο', en: 'Phone', de: 'Telefon' },
  submitQuote: { el: 'Αποστολή Αιτήματος', en: 'Submit Request', de: 'Anfrage senden' },
  
  // About
  aboutTitle: { el: 'Σχετικά με εμάς', en: 'About Us', de: 'Über uns' },
  aboutText: { 
    el: 'Με πάνω από 15 χρόνια εμπειρίας στις διεθνείς μεταφορές, προσφέρουμε αξιόπιστες λύσεις logistics σε επιχειρήσεις σε όλη την Ευρώπη. Η εταιρεία μας διαθέτει όλες τις απαραίτητες πιστοποιήσεις και ασφάλειες για την ασφαλή μεταφορά των εμπορευμάτων σας.', 
    en: 'With over 15 years of experience in international transport, we provide reliable logistics solutions to businesses across Europe. Our company holds all necessary certifications and insurances for the safe transport of your goods.', 
    de: 'Mit über 15 Jahren Erfahrung im internationalen Transport bieten wir zuverlässige Logistiklösungen für Unternehmen in ganz Europa. Unser Unternehmen verfügt über alle erforderlichen Zertifizierungen und Versicherungen für den sicheren Transport Ihrer Waren.' 
  },
  aboutDetailedText: {
    el: 'Με πάνω από 60 χρόνια εμπειρίας στον τομέα των μεταφορών, η In.Tra.Costa ΕΠΕ προσφέρει αξιόπιστες και ευέλικτες λύσεις σε Ελλάδα και Ευρώπη. Με σύγχρονο ιδιόκτητο στόλο και δίκτυο συνεργατών, εξασφαλίζουμε ασφάλεια, ταχύτητα και συνέπεια στις εμπορευματικές σας ανάγκες.',
    en: 'With over 60 years of experience in the transport sector, In.Tra.Costa EPE offers reliable and flexible solutions in Greece and Europe. With a modern private fleet and a network of partners, we ensure safety, speed, and consistency for your cargo needs.',
    de: 'Mit über 60 Jahren Erfahrung im Transportwesen bietet In.Tra.Costa EPE zuverlässige und flexible Lösungen in Griechenland und Europa. Mit einer modernen privaten Flotte und einem Partnernetzwerk gewährleisten wir Sicherheit, Schnelligkeit und Zuverlässigkeit für Ihre Frachten.'
  },
  
  // FAQ
  faqTitle: { el: 'Συχνές Ερωτήσεις', en: 'Frequently Asked Questions', de: 'Häufig gestellte Fragen' },
  
  // Contact
  contactTitle: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact Us', de: 'Kontaktieren Sie uns' },
  name: { el: 'Όνομα', en: 'Name', de: 'Name' },
  message: { el: 'Μήνυμα', en: 'Message', de: 'Nachricht' },
  sendMessage: { el: 'Αποστολή Μηνύματος', en: 'Send Message', de: 'Nachricht senden' },
  
  // Footer
  quickLinks: { el: 'Γρήγοροι Σύνδεσμοι', en: 'Quick Links', de: 'Schnelle Links' },
  ourServices: { el: 'Οι Υπηρεσίες μας', en: 'Our Services', de: 'Unsere Dienstleistungen' },
  contactInfo: { el: 'Στοιχεία Επικοινωνίας', en: 'Contact Information', de: 'Kontaktinformationen' },
  followUs: { el: 'Ακολουθήστε μας', en: 'Follow Us', de: 'Folgen Sie uns' },
  privacyPolicy: { el: 'Πολιτική Απορρήτου', en: 'Privacy Policy', de: 'Datenschutzrichtlinie' },
  termsOfService: { el: 'Όροι Χρήσης', en: 'Terms of Service', de: 'Nutzungsbedingungen' },
  allRightsReserved: { el: 'Όλα τα δικαιώματα διατηρούνται', en: 'All rights reserved', de: 'Alle Rechte vorbehalten' },

  strategicLocationsTitle: {
    el: 'Στρατηγικές Τοποθεσίες',
    en: 'Strategic Locations',
    de: 'Strategische Standorte'
  },
  strategicLocationsDesc: {
    el: 'Αποθήκες σε βασικούς ευρωπαϊκούς κόμβους',
    en: 'Warehouses in key European hubs',
    de: 'Lagerhäuser in wichtigen europäischen Knotenpunkten'
  },
  modernFleetTitle: {
    el: 'Σύγχρονος Στόλος',
    en: 'Modern Fleet',
    de: 'Moderne Flotte'
  },
  modernFleetDesc: {
    el: 'Οχήματα προδιαγραφών Euro 6',
    en: 'Euro 6 compliant vehicles',
    de: 'Fahrzeuge gemäß Euro 6 Norm'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};