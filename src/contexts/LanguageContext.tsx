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
  // Contact Form Section - Add missing keys for dynamic labels and placeholders
  contactFormTitle: {
    el: 'Στείλτε μας ένα Μήνυμα',
    en: 'Send us a Message',
    de: 'Senden Sie uns eine Nachricht'
  },
  name: {
    el: 'Όνομα',
    en: 'Name',
    de: 'Name'
  },
  email: {
    el: 'Email',
    en: 'Email',
    de: 'E-Mail'
  },
  companyName: {
    el: 'Επωνυμία Εταιρείας',
    en: 'Company Name',
    de: 'Firmenname'
  },
  message: {
    el: 'Μήνυμα',
    en: 'Message',
    de: 'Nachricht'
  },
  sendMessage: {
    el: 'Αποστολή Μηνύματος',
    en: 'Send Message',
    de: 'Nachricht senden'
  },
  // Contact Section Titles & Subtitles
  'contact.emailUsTitle': {
    el: 'Στείλτε μας Email',
    en: 'Email Us',
    de: 'Senden Sie uns eine E-Mail'
  },
  'contact.emailUsSubtitle': {
    el: 'Επικοινωνήστε μαζί μας μέσω email',
    en: 'Get in touch via email',
    de: 'Kontaktieren Sie uns per E-Mail'
  },
  'contact.callUsTitle': {
    el: 'Καλέστε μας',
    en: 'Call Us',
    de: 'Rufen Sie uns an'
  },
  'contact.callUsSubtitle': {
    el: 'Μιλήστε απευθείας με την ομάδα μας',
    en: 'Speak directly with our team',
    de: 'Sprechen Sie direkt mit unserem Team'
  },
  'contact.visitUsTitle': {
    el: 'Επισκεφθείτε μας',
    en: 'Visit Us',
    de: 'Besuchen Sie uns'
  },
  'contact.visitUsSubtitle': {
    el: 'Τα κεντρικά μας γραφεία',
    en: 'Our headquarters',
    de: 'Unser Hauptsitz'
  },
  cargoTypeDry: {
    el: 'Ξηρό φορτίο',
    en: 'Dry cargo',
    de: 'Trockengut'
  },
  cargoTypeControlled: {
    el: 'Φορτίο με ελεγχόμενη θερμοκρασία',
    en: 'Temperature-controlled cargo',
    de: 'Temperaturgeführte Ladung'
  },
  cargoTypeAdr: {
    el: 'ADR',
    en: 'ADR',
    de: 'ADR'
  },
  cargoTypeSpecial: {
    el: 'Ειδική μεταφορά',
    en: 'Special transport',
    de: 'Sondertransport'
  },
  cargoTypeLdm: {
    el: 'LDM',
    en: 'LDM',
    de: 'LDM'
  },
  cargoTypeOther: {
    el: 'Άλλο',
    en: 'Other',
    de: 'Andere'
  },
  cargoTypeOtherSpecify: {
    el: 'Προσδιορίστε τον τύπο φορτίου',
    en: 'Specify cargo type',
    de: 'Frachtart angeben'
  },
  cargoTypeOtherPlaceholder: {
    el: 'π.χ. Υγρά χύμα, Οχήματα, κ.λ.π.',
    en: 'e.g. Liquid bulk, Vehicles, etc.',
    de: 'z.B. Flüssigkeiten, Fahrzeuge, usw.'
  },
  packageType: {
    el: 'Τύπος Συσκευασίας',
    en: 'Package Type',
    de: 'Verpackungsart'
  },
  selectPackageType: {
    el: 'Επιλέξτε τύπο συσκευασίας',
    en: 'Select package type',
    de: 'Verpackungsart auswählen'
  },
  pallets: {
    el: 'Παλέτες',
    en: 'Pallets',
    de: 'Paletten'
  },
  boxes: {
    el: 'Τεμάχια/Κιβώτια',
    en: 'Boxes/Pieces',
    de: 'Kisten/Stück'
  },
  bulk: {
    el: 'Χύδην',
    en: 'Bulk',
    de: 'Schüttgut'
  },
  container: {
    el: 'Κοντέινερ',
    en: 'Container',
    de: 'Container'
  },
  otherPackage: {
    el: 'Άλλο',
    en: 'Other',
    de: 'Andere'
  },
  quantity: {
    el: 'Τεμάχια (Αριθμός)',
    en: 'Quantity',
    de: 'Anzahl'
  },
  quantityPlaceholder: {
    el: 'π.χ. 10',
    en: 'e.g. 10',
    de: 'z.B. 10'
  },
  dimensions: {
    el: 'Διαστάσεις',
    en: 'Dimensions',
    de: 'Abmessungen'
  },
  length: {
    el: 'Μήκος',
    en: 'Length',
    de: 'Länge'
  },
  width: {
    el: 'Πλάτος',
    en: 'Width',
    de: 'Breite'
  },
  height: {
    el: 'Ύψος',
    en: 'Height',
    de: 'Höhe'
  },
  lengthPlaceholder: {
    el: 'Μήκος',
    en: 'Length',
    de: 'Länge'
  },
  widthPlaceholder: {
    el: 'Πλάτος',
    en: 'Width',
    de: 'Breite'
  },
  heightPlaceholder: {
    el: 'Ύψος',
    en: 'Height',
    de: 'Höhe'
  },
  palletsPlaceholder: {
    el: 'π.χ. 10',
    en: 'e.g. 10',
    de: 'z. B. 10'
  },
  boxesPlaceholder: {
    el: 'π.χ. 50',
    en: 'e.g. 50',
    de: 'z. B. 50'
  },
  dimensionsPlaceholder: {
    el: 'π.χ. 1.2m x 0.8m x 1.5m',
    en: 'e.g. 1.2m x 0.8m x 1.5m',
    de: 'z. B. 1.2m x 0.8m x 1.5m'
  },
  termsLastUpdated: {
    el: 'Τελευταία ενημέρωση',
    en: 'Last updated',
    de: 'Zuletzt aktualisiert'
  },
  termsAcceptanceTitle: {
    el: '1. Αποδοχή Όρων',
    en: '1. Acceptance of Terms',
    de: '1. Annahme der Bedingungen'
  },
  termsAcceptanceText: {
    el: 'Με την πρόσβαση και χρήση του ιστότοπου και των υπηρεσιών Intracosta, αποδέχεστε και συμφωνείτε να δεσμεύεστε από τους όρους και τις προϋποθέσεις της παρούσας συμφωνίας.',
    en: 'By accessing and using the Intracosta website and services, you accept and agree to be bound by the terms and provision of this agreement.',
    de: 'Durch den Zugriff auf und die Nutzung der Intracosta-Website und -Dienste akzeptieren Sie die Bedingungen dieser Vereinbarung.'
  },
  termsServicesTitle: {
    el: '2. Υπηρεσίες',
    en: '2. Services',
    de: '2. Dienstleistungen'
  },
  termsServicesText: {
    el: 'Η Intracosta παρέχει διεθνείς μεταφορές και υπηρεσίες logistics σε όλη την Ευρώπη, συμπεριλαμβανομένων οδικών μεταφορών, groupage, εκτελωνισμού και λύσεων αποθήκευσης.',
    en: 'Intracosta provides international transport and logistics services across Europe. Our services include road transport, groupage, customs clearance, and warehousing solutions.',
    de: 'Intracosta bietet internationale Transport- und Logistikdienstleistungen in ganz Europa an. Unsere Dienstleistungen umfassen Straßentransport, Sammelladung, Zollabfertigung und Lagerlösungen.'
  },
  termsUseWebsiteTitle: {
    el: '3. Χρήση Ιστότοπου',
    en: '3. Use of Website',
    de: '3. Nutzung der Website'
  },
  termsUseWebsiteText: {
    el: 'Μπορείτε να χρησιμοποιείτε τον ιστότοπό μας μόνο για νόμιμους σκοπούς. Συμφωνείτε να μην τον χρησιμοποιείτε με τρόπο που θα μπορούσε να τον βλάψει, να τον υπερφορτώσει ή να τον επηρεάσει αρνητικά.',
    en: 'You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair the site.',
    de: 'Sie dürfen unsere Website nur für rechtmäßige Zwecke nutzen. Sie stimmen zu, die Website nicht in einer Weise zu nutzen, die sie beschädigen, deaktivieren, überlasten oder beeinträchtigen könnte.'
  },
  termsQuoteRequestsTitle: {
    el: '4. Αιτήματα Προσφοράς',
    en: '4. Quote Requests',
    de: '4. Angebotsanfragen'
  },
  termsQuoteRequestsText: {
    el: 'Τα αιτήματα προσφοράς μέσω του ιστότοπού μας δεν αποτελούν δεσμευτικές προσφορές. Όλες οι προσφορές υπόκεινται σε επιβεβαίωση και ενδέχεται να τροποποιηθούν ανάλογα με τις απαιτήσεις.',
    en: 'Quote requests submitted through our website are not binding offers. All quotes are subject to confirmation and may be modified based on actual requirements.',
    de: 'Angebotsanfragen über unsere Website stellen keine verbindlichen Angebote dar. Alle Angebote bedürfen der Bestätigung und können je nach tatsächlichen Anforderungen geändert werden.'
  },
  termsLiabilityTitle: {
    el: '5. Περιορισμός Ευθύνης',
    en: '5. Limitation of Liability',
    de: '5. Haftungsbeschränkung'
  },
  termsLiabilityText: {
    el: 'Η Intracosta δεν φέρει ευθύνη για έμμεσες, παρεπόμενες, ειδικές ή ποινικές ζημίες που προκύπτουν από τη χρήση του ιστότοπου ή των υπηρεσιών μας.',
    en: 'Intracosta shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.',
    de: 'Intracosta haftet nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, die sich aus der Nutzung unserer Website oder Dienstleistungen ergeben.'
  },
  termsContactTitle: {
    el: '6. Στοιχεία Επικοινωνίας',
    en: '6. Contact Information',
    de: '6. Kontaktinformationen'
  },
  termsContactText: {
    el: 'Για ερωτήσεις σχετικά με αυτούς τους Όρους Χρήσης, επικοινωνήστε μαζί μας:',
    en: 'For questions about these Terms of Service, please contact us at:',
    de: 'Für Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter:'
  },
  aboutHighlight1Title: {
    el: 'Σχεδόν καθημερινά δρομολόγια',
    en: 'Almost Daily Routes',
    de: 'Nahezu tägliche Routen'
  },
  aboutHighlight1Desc: {
    el: 'Από/προς Ελλάδα και κεντρική Ευρώπη με τακτικές μετακινήσεις.',
    en: 'To/from Greece and central Europe with regular movements.',
    de: 'Von/nach Griechenland und Mitteleuropa mit regelmäßigen Fahrten.'
  },
  aboutHighlight2Title: {
    el: 'Δίκτυο Αποθηκών',
    en: 'Warehouse Network',
    de: 'Lagernetzwerk'
  },
  aboutHighlight2Desc: {
    el: 'Δύο ιδιόκτητες αποθήκες και συνεργάτες σε όλη την Ευρώπη.',
    en: 'Two owned warehouses and partners across Europe.',
    de: 'Zwei eigene Lager und Partner in ganz Europa.'
  },
  aboutHighlight3Title: {
    el: 'Ασφάλεια CMR',
    en: 'CMR Insurance',
    de: 'CMR-Versicherung'
  },
  aboutHighlight3Desc: {
    el: 'Ασφάλιση φορτίων για εγγυημένη ασφάλεια και διαφάνεια.',
    en: 'Cargo insurance for guaranteed safety and transparency.',
    de: 'Frachtversicherung für garantierte Sicherheit und Transparenz.'
  },
  aboutHighlight4Title: {
    el: 'Ομάδα Εμπιστοσύνης',
    en: 'Trusted Team',
    de: 'Vertrauenswürdiges Team'
  },
  aboutHighlight4Desc: {
    el: 'Οδηγοί και προσωπικό που φροντίζουν κάθε αποστολή σαν δική τους.',
    en: 'Drivers and staff who treat each shipment as their own.',
    de: 'Fahrer und Personal, die jede Sendung wie ihre eigene behandeln.'
  },
  // Navigation
  home: { el: 'Αρχική', en: 'Home', de: 'Startseite' },
  homeDescription: { el: 'Αρχική σελίδα', en: 'Home page', de: 'Startseite' },
  services: { el: 'Υπηρεσίες', en: 'Services', de: 'Dienstleistungen' },
  servicesDescription: { el: 'Οι υπηρεσίες μας', en: 'Our services', de: 'Unsere Dienstleistungen' },
  coverage: { el: 'Περιοχές', en: 'Coverage', de: 'Abdeckung' },
  coverageDescription: { el: 'Περιοχές κάλυψης', en: 'Coverage areas', de: 'Abdeckungsgebiete' },
  covered: {
    el: 'Καλύπτεται',
    en: 'Covered',
    de: 'Abgedeckt'
  },
  about: { el: 'Σχετικά', en: 'About', de: 'Über uns' },
  aboutDescription: { el: 'Σχετικά με εμάς', en: 'About us', de: 'Über uns' },
  contact: { el: 'Επικοινωνία', en: 'Contact', de: 'Kontakt' },
  contactDescription: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact us', de: 'Kontaktieren Sie uns' },
  getQuote: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact Us', de: 'Kontaktieren Sie uns' },
  
  // Hero Section
  heroTitle: { 
    el: 'Αξιόπιστες Διεθνείς Μεταφορές σε Όλη την Ευρώπη', 
    en: 'Reliable International Transport Across Europe', 
    de: 'Zuverlässiger internationaler Transport in ganz Europa' 
  },
  heroSubtitle: { 
    el: 'Από μία παλέτα έως πλήρες φορτίο, συνδέουμε την Ελλάδα με κάθε γωνιά της Ευρώπης με ταχύτητα, ασφάλεια και πλήρη εκτελωνιστική υποστήριξη. Εσείς επικεντρώνεστε στην ανάπτυξη – εμείς φροντίζουμε τα υπόλοιπα.', 
    en: 'From a single pallet to a full truckload, we connect Greece with every corner of Europe, providing speed, safety, and full customs support. You focus on growth – we take care of the rest.', 
    de: 'Von einer Palette bis zur kompletten LKW-Ladung verbinden wir Griechenland mit jeder Ecke Europas, bieten Geschwindigkeit, Sicherheit und vollständige Zollabfertigung. Sie konzentrieren sich auf das Wachstum – wir kümmern uns um den Rest.' 
  },
  heroCtaText: { el: 'Ζητήστε Δωρεάν Προσφορά', en: 'Get Free Quote', de: 'Kostenloses Angebot' },
  heroTruckAlt: {
    el: 'Φορτηγό Volvo σε ευρωπαϊκό δρόμο',
    en: 'Volvo truck on European road',
    de: 'Volvo-Lkw auf europäischer Straße'
  },
  logoAlt: { el: 'Λογότυπο Intracosta', en: 'Intracosta Logo', de: 'Intracosta-Logo' },
  
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

  internationalTransportTitle: {
    el: 'Διεθνείς Μεταφορές',
    en: 'International Transport',
    de: 'Internationale Transporte'
  },
  internationalTransportDesc: {
    el: 'Ασφαλείς και αξιόπιστες μεταφορές φορτίων προς και από την Ευρώπη',
    en: 'Secure and reliable freight transport to and from Europe',
    de: 'Sichere und zuverlässige Frachten nach und aus Europa'
  },
  nationalTransportTitle: {
    el: 'Εθνικές Μεταφορές',
    en: 'Domestic Transport',
    de: 'Inlandtransporte'
  },
  nationalTransportDesc: {
    el: 'Άμεσες και αποδοτικές μεταφορές εντός Ελλάδας με πλήρη κάλυψη',
    en: 'Efficient and direct transport within Greece with full coverage',
    de: 'Effiziente und direkte Transporte innerhalb Griechenlands mit vollständiger Abdeckung'
  },
  warehousingTitle: {
    el: 'Αποθήκευση',
    en: 'Warehousing',
    de: 'Lagerung'
  },
  
  // Coverage
  coverageTitle: { el: 'Περιοχές Κάλυψης', en: 'Coverage Areas', de: 'Abdeckungsgebiete' },
  coverageSubtitle: { 
    el: 'Καλύπτουμε όλες τις κύριες ευρωπαϊκές αγορές με τακτικά δρομολόγια', 
    en: 'We cover all major European markets with regular routes', 
    de: 'Wir decken alle wichtigen europäischen Märkte mit regelmäßigen Routen ab' 
  },
  viewCountries: {
    el: 'Δείτε τις Χώρες',
    en: 'View Countries',
    de: 'Länder anzeigen'
  },
  
  // Quote Form
  quoteFormTitle: { el: 'Λεπτομέρειες Μεταφοράς', en: 'Transport Details', de: 'Transportdetails' },
  quoteFormSubtitle: {
    el: 'Λάβετε μια εξατομικευμένη προσφορά για τις μεταφορικές σας ανάγκες',
    en: 'Get a personalized quote for your transport needs',
    de: 'Holen Sie sich ein persönliches Angebot für Ihre Transportbedürfnisse'
  },
  shipmentDetails: {
    el: 'Λεπτομέρειες Αποστολής',
    en: 'Shipment Details',
    de: 'Versanddetails'
  },
  pickupLocation: { el: 'Τοποθεσία Παραλαβής', en: 'Pickup Location', de: 'Abholort' },
  deliveryLocation: { el: 'Τοποθεσία Παράδοσης', en: 'Delivery Location', de: 'Lieferort' },
  pickupPlace: {
    el: 'Τόπος Παραλαβής',
    en: 'Pickup Place',
    de: 'Abholort'
  },
  deliveryPlace: {
    el: 'Τόπος Παράδοσης',
    en: 'Delivery Place',
    de: 'Lieferort'
  },
  pickupCountry: { el: 'Τόπος Παραλαβής', en: 'Pickup Place', de: 'Abholort' },
  pickupCity: { el: 'Πόλη Φόρτωσης', en: 'Loading City', de: 'Ladungsstadt' },
  pickupPostalCode: { el: 'Τ.Κ. Φόρτωσης', en: 'Loading Postal Code', de: 'Postleitzahl (Ladung)' },
  pickupCompany: { el: 'Επωνυμία Φόρτωσης (Προαιρετικά)', en: 'Loading Company (Optional)', de: 'Firma (optional)' },
  deliveryCountry: { el: 'Τόπος Παράδοσης', en: 'Delivery Place', de: 'Lieferort' },
  deliveryCity: { el: 'Πόλη Παράδοσης', en: 'Delivery City', de: 'Lieferstadt' },
  deliveryPostalCode: { el: 'Τ.Κ. Παράδοσης', en: 'Delivery Postal Code', de: 'Postleitzahl (Lieferung)' },
  deliveryCompany: { el: 'Επωνυμία Παράδοσης (Προαιρετικά)', en: 'Delivery Company (Optional)', de: 'Firma Lieferung (optional)' },
  loadingDate: { el: 'Επιθυμητή Ημερομηνία Φόρτωσης', en: 'Desired Loading Date', de: 'Gewünschtes Ladungsdatum' },
  cargoType: { el: 'Τύπος Φορτίου', en: 'Cargo Type', de: 'Frachtart' },
  cargoQuantityType: {
    el: 'Λεπτομέρειες Ποσότητας & Τύπου',
    en: 'Quantity & Type Details',
    de: 'Mengen- & Typangaben'
  },
  weight: { el: 'Βάρος (kg)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
  desiredDate: { el: 'Επιθυμητή Ημερομηνία', en: 'Desired Date', de: 'Gewünschtes Datum' },
  contactPerson: { el: 'Υπεύθυνος Επικοινωνίας', en: 'Contact Person', de: 'Ansprechpartner' },
  submitQuote: { el: 'Αποστολή Αιτήματος', en: 'Submit Request', de: 'Anfrage senden' },
  emailConfirm: { el: 'Επιβεβαίωση Email', en: 'Confirm Email', de: 'E-Mail bestätigen' },
  phone: { el: 'Τηλέφωνο', en: 'Phone', de: 'Telefon' },
  formProgress: { el: 'Πρόοδος Φόρμας', en: 'Form Progress', de: 'Formularfortschritt' },
  fieldsCompleted: { el: 'πεδία', en: 'fields', de: 'Felder' },
  thankYou: { el: 'Ευχαριστούμε!', en: 'Thank You!', de: 'Vielen Dank!' },
  quoteSuccessMessage: {
    el: 'Το αίτημα προσφοράς σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.',
    en: "Your quote request has been sent successfully. We'll get back to you within 24 hours.",
    de: 'Ihre Angebotsanfrage wurde erfolgreich gesendet. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.'
  },
  submitAnotherQuote: { el: 'Υποβολή Νέου Αιτήματος', en: 'Submit Another Quote', de: 'Weiteres Angebot einreichen' },
  formValidationError: {
    el: 'Παρακαλώ διορθώστε τα σφάλματα πριν την υποβολή',
    en: 'Please correct the errors before submitting',
    de: 'Bitte korrigieren Sie die Fehler vor dem Absenden'
  },
  submissionError: {
    el: 'Αποτυχία υποβολής. Παρακαλώ δοκιμάστε ξανά.',
    en: 'Failed to submit. Please try again.',
    de: 'Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut.'
  },
  submitting: { el: 'Αποστολή...', en: 'Submitting...', de: 'Wird gesendet...' },

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
  aboutTruckAlt: {
    el: 'Φορτηγό που μεταφέρει εμπορεύματα',
    en: 'Truck transporting goods',
    de: 'Lkw, der Waren transportiert'
  },
  aboutIntracostaSummary: {
    el: 'Η INTRACOSTA ΕΠΕ είναι μια αμιγώς ελληνική εταιρία οδικών μεταφορών και υπηρεσιών logistics, με διαδρομή πλέον των 25 ετών στον κλάδο των μεταφορών και σταθερή προσήλωση στην αξιοπιστία, τη συνέπεια και την τεχνολογική εξέλιξη. Με έναν στόλο άνω των 50 ιδιόκτητων φορτηγών τελευταίας τεχνολογίας και ένα ευρύ δίκτυο συνεργατών σε Ελλάδα και Ευρώπη, προσφέρουμε ολοκληρωμένες λύσεις μεταφοράς και αποθήκευσης, που καλύπτουν τις πραγματικές ανάγκες των πελατών μας.',
    en: 'INTRACOSTA EPE is a purely Greek road transport and logistics services company, with a track record of over 25 years in the transport sector and a steadfast commitment to reliability, consistency and technological advancement. With a fleet of over 50 state-of-the-art trucks and a wide network of partners in Greece and Europe, we offer integrated transport and storage solutions that meet the real needs of our customers.',
    de: 'INTRACOSTA EPE ist ein rein griechisches Unternehmen für Straßentransporte und Logistikdienstleistungen mit einer Laufbahn von über 25 Jahren im Transportsektor und einem festen Engagement für Zuverlässigkeit, Beständigkeit und technologischen Fortschritt. Mit einer Flotte von über 50 modernsten Lkw und einem breiten Partnernetzwerk in Griechenland und Europa bieten wir integrierte Transport- und Lagerlösungen, die den tatsächlichen Bedürfnissen unserer Kunden entsprechen.'
  },
  aboutHighlightsTitle: {
    el: 'Τι μας κάνει διαφορετικούς:',
    en: 'What makes us different:',
    de: 'Was uns anders macht:'
  },
  aboutIntracostaDetails: {
    el: 'Τι μας κάνει διαφορετικούς:\n- Σχεδόν καθημερινά δρομολόγια απο/προς Ελλάδα, από/προς κεντρική Ευρώπη\n- Δύο ιδιοκτήτες αποθήκες (Γιαννιτσά, Όσναμπουργκ) και δεκάδες συνεργαζόμενες σε Ελλάδα, Γερμανία, Αυστρία, Ολλανδία, Βέλγιο, Πολωνία για φορτοεκφορτώσεις και προσωρινή αποθήκευση\n- Ασφάλιση CMR, για αποδεικτικά παράδοσης και εγγύηση ασφαλείας, αξιοπιστίας και διαφάνειας σε κάθε διαδρομή\n- Ομάδα οδηγών και εργαζόμενων που αντιμετωπίζουν κάθε σου αποστολή σαν να ήταν δίκη τους\n\nΗ αποστολή μας είναι να κρατάμε την εφοδιαστική αλυσίδα των πελατών μας σε κίνηση—γρήγορα, με ασφάλεια και απόλυτη διαφάνεια κόστους. Από μια παλέτα μέχρι πλήρες φορτίο, σχεδιάζουμε τη βέλτιστη διαδρομή, αξιοποιούμε το διεθνές μας δίκτυο και παραδίδουμε ακριβώς όταν το χρειάζεστε, ώστε εσείς να εστιάζετε στην ανάπτυξη της επιχείρησής σας.',
    en: 'What makes us different:\n- Almost daily routes to/from Greece and central Europe\n- Two owned warehouses (Giannitsa, Osnabrück) and dozens of partner facilities in Greece, Germany, Austria, Netherlands, Belgium, Poland for loading/unloading and temporary storage\n- CMR insurance for delivery proofs and guaranteed security, reliability, and transparency on every route\n- A team of drivers and staff who treat every shipment as if it were their own\n\nOur mission is to keep our customers’ supply chains moving—quickly, safely, and with complete cost transparency. From a single pallet to full truckloads, we design the optimal route, leverage our international network, and deliver exactly when you need it so you can focus on growing your business.',
    de: 'Was uns anders macht:\n- Nahezu tägliche Routen von/nach Griechenland und Mitteleuropa\n- Zwei firmeneigene Lagerhäuser (Giannitsa, Osnabrück) und Dutzende Partnerstandorte in Griechenland, Deutschland, Österreich, Niederlande, Belgien, Polen für Be- und Entladung sowie Zwischenlagerung\n- CMR-Versicherung für Liefernachweise und garantierte Sicherheit, Zuverlässigkeit und Transparenz auf jeder Route\n- Ein Team von Fahrern und Mitarbeitern, das jede Sendung behandelt, als wäre es ihre eigene\n\nUnsere Mission ist es, die Lieferketten unserer Kunden am Laufen zu halten – schnell, sicher und mit vollständiger Kostentransparenz. Von einer Palette bis hin zu Komplettladungen entwerfen wir die optimale Route, nutzen unser internationales Netzwerk und liefern genau dann, wenn Sie es brauchen, damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können.'
  },
  
  // FAQ
  faqTitle: { el: 'Συχνές Ερωτήσεις', en: 'Frequently Asked Questions', de: 'Häufig gestellte Fragen' },
  faq1Question: {
    el: 'Μεταφέρετε δέματα και προσωπικά αντικείμενα;',
    en: 'Do you transport packages and personal items?',
    de: 'Transportieren Sie Pakete und persönliche Gegenstände?'
  },
  faq1Answer: {
    el: 'Δεν μεταφέρουμε προσωπικά μικροαντικείμενα και μικροδέματα (πχ. Φακέλους), αλλά με συνεννόηση μπορούμε να μεταφέρουμε δέματα μεγαλύτερων διαστάσεων (πχ. Κιβώτιο)',
    en: 'We do not transport personal small items and small packages (e.g. envelopes), but with coordination we can transport larger packages (e.g. boxes)',
    de: 'Wir transportieren keine persönlichen kleinen Gegenstände und kleinen Pakete (z.B. Umschläge), aber mit Absprache können wir größere Pakete (z.B. Kisten) transportieren'
  },
  faq2Question: {
    el: 'Μεταφέρεται αλκοόλ ή διάφορα καπνικά είδη;',
    en: 'Are alcohol or various tobacco products transported?',
    de: 'Werden Alkohol oder verschiedene Tabakerzeugnisse transportiert?'
  },
  faq2Answer: {
    el: 'Μόνο αν πρόκειται για μεταφορά από εταιρία παραγωγής με τα κατάλληλα έγγραφα. Δεν μεταφέρουμε προσωπικά καπνικά ή αλκοολούχα είδη και σε περίπτωση αποστολής κιβωτίου θα πρέπει να αποδείξετε την μη ύπαρξη τους.',
    en: 'Only if it is transport from a production company with the appropriate documents. We do not transport personal tobacco or alcoholic products and in case of sending a box you must prove their non-existence.',
    de: 'Nur wenn es sich um Transport von einem Produktionsunternehmen mit den entsprechenden Dokumenten handelt. Wir transportieren keine persönlichen Tabak- oder alkoholischen Produkte und im Fall des Versendens einer Kiste müssen Sie deren Nichtexistenz nachweisen.'
  },
  faq3Question: {
    el: 'Μπορείτε να παραλάβετε ή να παραδώσετε φορτίο σε κάθε περιοχή των χωρών εξυπηρέτησής σας;',
    en: 'Can you pick up or deliver cargo in every area of the countries you serve?',
    de: 'Können Sie Fracht in jedem Bereich der Länder, die Sie bedienen, abholen oder liefern?'
  },
  faq3Answer: {
    el: 'Στις περισσότερες χώρες παραλαμβάνουμε και παραδίδουμε σε όλη την επικράτειά τους, με την συμβολή στενών συνεργατών μας που υπάρχουν σε κάθε χώρα εξυπηρέτησης.',
    en: 'In most countries we pick up and deliver throughout their territory, with the contribution of our close partners who exist in each service country.',
    de: 'In den meisten Ländern holen und liefern wir in ihrem gesamten Gebiet ab, mit dem Beitrag unserer engen Partner, die in jedem Service-Land existieren.'
  },
  faq10Question: {
    el: 'Γιατί να επιλέξω την Intracosta;',
    en: 'Why should I choose Intracosta?',
    de: 'Warum sollte ich Intracosta wählen?'
  },
  faq10Answer: {
    el: 'Για την εμπειρία 25 ετών, την αξιοπιστία στις παραδόσεις, το εκτεταμένο δίκτυο στην Ευρώπη και την ομάδα επαγγελματιών που αντιμετωπίζουν κάθε αποστολή σαν δική τους.',
    en: 'For 25 years of experience, reliability in deliveries, an extensive network across Europe, and a team of professionals who treat every shipment as their own.',
    de: 'Für 25 Jahre Erfahrung, Zuverlässigkeit bei Lieferungen, ein umfangreiches Netzwerk in Europa und ein Team von Fachleuten, die jede Sendung wie ihre eigene behandeln.'
  },
  
  // Contact
  contactTitle: { el: 'Επικοινωνήστε μαζί μας', en: 'Contact Us', de: 'Kontaktieren Sie uns' },
  'contact.getInTouch': {
    el: 'Επικοινωνία',
    en: 'Get in Touch',
    de: 'Kontakt aufnehmen'
  },
  // --- Added contact translation keys for section titles ---
  'contact.addressTitle': {
    el: 'Διεύθυνση',
    en: 'Address',
    de: 'Adresse'
  },
  'contact.phoneTitle': {
    el: 'Τηλέφωνο',
    en: 'Phone',
    de: 'Telefon'
  },
  'contact.emailTitle': {
    el: 'Email',
    en: 'Email',
    de: 'E-Mail'
  },
  'contact.businessHoursTitle': {
    el: 'Ώρες Λειτουργίας',
    en: 'Business Hours',
    de: 'Öffnungszeiten'
  },
  addressLabel: {
    el: 'Διεύθυνση',
    en: 'Address',
    de: 'Adresse'
  },
  addressText: {
    el: '3ο χλμ Γιαννιτσών – Θεσσαλονίκης, GR58100 Γιαννιτσά',
    en: '3rd km Giannitsa – Thessaloniki, GR58100 Giannitsa',
    de: '3. km Giannitsa – Thessaloniki, GR58100 Giannitsa'
  },
  openMap: {
    el: 'Άνοιγμα στον χάρτη',
    en: 'Open in map',
    de: 'In Karte öffnen'
  },
  phoneLabel: {
    el: 'Τηλέφωνο',
    en: 'Phone',
    de: 'Telefon'
  },
  emailLabel: {
    el: 'Email',
    en: 'Email',
    de: 'E-Mail'
  },
  businessHoursLabel: {
    el: 'Ώρες Λειτουργίας',
    en: 'Business Hours',
    de: 'Öffnungszeiten'
  },
  contactTitleAddress: {
    el: 'Διεύθυνση',
    en: 'Address',
    de: 'Adresse'
  },
  contactTitlePhone: {
    el: 'Τηλέφωνο',
    en: 'Phone',
    de: 'Telefon'
  },
  contactTitleEmail: {
    el: 'Email',
    en: 'Email',
    de: 'E-Mail'
  },
  contactTitleHours: {
    el: 'Ώρες Λειτουργίας',
    en: 'Business Hours',
    de: 'Öffnungszeiten'
  },
  businessHoursText: {
    el: 'Δευτέρα - Παρασκευή: 09:00 - 17:00',
    en: 'Monday - Friday: 09:00 - 17:00',
    de: 'Montag - Freitag: 09:00 - 17:00'
  },
  athensTimeNow: {
    el: 'Ώρα Αθήνας τώρα:',
    en: 'Athens time now:',
    de: 'Athener Zeit jetzt:'
  },
  
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
  },
  strategicLocationsDescription: {
    el: 'Αποθήκες σε βασικούς ευρωπαϊκούς κόμβους',
    en: 'Warehouses in key European hubs',
    de: 'Lagerhäuser in wichtigen europäischen Knotenpunkten'
  },
  modernFleetDescription: {
    el: 'Οχήματα προδιαγραφών Euro 6',
    en: 'Euro 6 compliant vehicles',
    de: 'Fahrzeuge gemäß Euro 6 Norm'
  },
  sendUsMessage: {
    el: 'Στείλτε μας ένα Μήνυμα',
    en: 'Send us a Message',
    de: 'Senden Sie uns eine Nachricht'
  },

  // Transport Cards
  transportCardInternationalTitle: {
    el: 'Διεθνείς Μεταφορές',
    en: 'International Transport',
    de: 'Internationale Transporte'
  },
  transportCardInternationalDesc: {
    el: 'Ασφαλείς και αξιόπιστες μεταφορές φορτίων προς και από την Ευρώπη',
    en: 'Secure and reliable freight transport to and from Europe',
    de: 'Sichere und zuverlässige Frachten nach und aus Europa'
  },
  transportCardNationalTitle: {
    el: 'Εθνικές Μεταφορές',
    en: 'Domestic Transport',
    de: 'Inlandtransporte'
  },
  transportCardNationalDesc: {
    el: 'Άμεσες και αποδοτικές μεταφορές εντός Ελλάδας με πλήρη κάλυψη',
    en: 'Efficient and direct transport within Greece with full coverage',
    de: 'Effiziente und direkte Transporte innerhalb Griechenlands mit vollständiger Abdeckung'
  },
  transportCardWarehousingTitle: {
    el: 'Αποθήκευση',
    en: 'Warehousing',
    de: 'Lagerung'
  },
  // --- Added services section translations ---
  'services.sectionTitle': {
    el: 'Οι Υπηρεσίες μας',
    en: 'Our Services',
    de: 'Unsere Dienstleistungen'
  },
  'services.internationalTitle': {
    el: 'Διεθνείς Μεταφορές',
    en: 'International Transport',
    de: 'Internationale Transporte'
  },
  'services.internationalDescription': {
    el: 'Ασφαλείς και αξιόπιστες μεταφορές φορτίων προς και από την Ευρώπη',
    en: 'Secure and reliable freight transport to and from Europe',
    de: 'Sichere und zuverlässige Frachten nach und aus Europa'
  },
  'services.nationalTitle': {
    el: 'Εθνικές Μεταφορές',
    en: 'Domestic Transport',
    de: 'Inlandtransporte'
  },
  'services.nationalDescription': {
    el: 'Άμεσες και αποδοτικές μεταφορές εντός Ελλάδας με πλήρη κάλυψη',
    en: 'Efficient and direct transport within Greece with full coverage',
    de: 'Effiziente und direkte Transporte innerhalb Griechenlands mit vollständiger Abdeckung'
  },
  'services.warehousingTitle': {
    el: 'Αποθήκευση',
    en: 'Warehousing',
    de: 'Lagerung'
  },
  'services.warehousingDescription': {
    el: 'Ασφαλής αποθήκευση και διαχείριση αποθεμάτων',
    en: 'Secure storage and inventory management',
    de: 'Sichere Lagerung und Lagerverwaltung'
  },
  centralWarehousesTitle: {
    el: '6 Κεντρικές Αποθήκες',
    en: '6 Central Warehouses',
    de: '6 Zentrale Lagerhäuser'
  },
  centralWarehousesDescription: {
    el: 'Πανευρωπαϊκή κάλυψη με σύγχρονα κέντρα διανομής',
    en: 'Pan-European coverage with modern distribution hubs',
    de: 'Paneuropäische Abdeckung mit modernen Verteilzentren'
  },

  // About Values Block
  aboutReliabilityTitle: {
    el: 'Αξιοπιστία',
    en: 'Reliability',
    de: 'Zuverlässigkeit'
  },
  aboutReliabilityDesc: {
    el: 'Εγγυημένη έγκαιρη παράδοση με πλήρη ασφάλιση φορτίου',
    en: 'Guaranteed on-time delivery with full cargo insurance',
    de: 'Garantierte pünktliche Lieferung mit vollständiger Frachtversicherung'
  },
  aboutQualityTitle: {
    el: 'Ποιότητα',
    en: 'Quality',
    de: 'Qualität'
  },
  aboutQualityDesc: {
    el: 'Πιστοποιημένες διαδικασίες ISO και υψηλά πρότυπα εξυπηρέτησης',
    en: 'ISO certified processes and premium service standards',
    de: 'ISO-zertifizierte Prozesse und erstklassige Servicestandards'
  },
  aboutPartnershipTitle: {
    el: 'Συνεργασία',
    en: 'Partnership',
    de: 'Partnerschaft'
  },
  aboutPartnershipDesc: {
    el: 'Μακροχρόνιες σχέσεις βασισμένες στην εμπιστοσύνη και διαφάνεια',
    en: 'Long-term relationships built on trust and transparency',
    de: 'Langfristige Beziehungen basierend auf Vertrauen und Transparenz'
  },
  aboutInnovationTitle: {
    el: 'Καινοτομία',
    en: 'Innovation',
    de: 'Innovation'
  },
  aboutInnovationDesc: {
    el: 'Σύγχρονη τεχνολογία για παρακολούθηση και βελτιστοποίηση logistics',
    en: 'Modern technology for tracking and logistics optimization',
    de: 'Moderne Technologie zur Verfolgung und Optimierung der Logistik'
  },

  // Our Routes Section
  ourRoutesTitle: {
    el: 'Οι Διαδρομές μας',
    en: 'Our Routes',
    de: 'Unsere Routen'
  },
  ourRoutesDescription: {
    el: 'Εξυπηρετούμε {{count}} ευρωπαϊκές χώρες με τακτικές δρομολογήσεις.',
    en: 'We serve {{count}} European countries with regular scheduled routes.',
    de: 'Wir bedienen {{count}} europäische Länder mit regelmäßigen Fahrplänen.'
  },
  // Mission Section
  missionTitle: {
    el: 'Η Αποστολή μας',
    en: 'Our Mission',
    de: 'Unsere Mission'
  },
  missionText: {
    el: 'Η αποστολή μας είναι να διασφαλίζουμε την αδιάκοπη λειτουργία της εφοδιαστικής αλυσίδας των πελατών μας, με απόλυτη συνέπεια, ασφάλεια και διαφάνεια στο κόστος. Από μια παλέτα έως ένα πλήρες φορτίο, οργανώνουμε τη βέλτιστη διαδρομή, αξιοποιούμε το διεθνές μας δίκτυο και παραδίδουμε στην ώρα μας, ώστε οι συνεργάτες μας να επικεντρώνονται στην ανάπτυξη της επιχείρησής τους.',
    en: 'Our mission is to ensure the uninterrupted operation of our clients\' supply chain, with absolute consistency, safety and cost transparency. From a single pallet to a full load, we organize the optimal route, leverage our international network and deliver on time, so our partners can focus on growing their business.',
    de: 'Unsere Mission ist es, den reibungslosen Betrieb der Lieferkette unserer Kunden mit absoluter Konsistenz, Sicherheit und Kostentransparenz zu gewährleisten. Von einer Palette bis zu einer Komplettladung organisieren wir die optimale Route, nutzen unser internationales Netzwerk und liefern pünktlich, damit sich unsere Partner auf das Wachstum ihres Unternehmens konzentrieren können.'
  },

  // Add translations for each country for t(country) dynamic translation
  Germany: { el: 'Γερμανία', en: 'Germany', de: 'Deutschland' },
  Austria: { el: 'Αυστρία', en: 'Austria', de: 'Österreich' },
  Netherlands: { el: 'Ολλανδία', en: 'Netherlands', de: 'Niederlande' },
  Belgium: { el: 'Βέλγιο', en: 'Belgium', de: 'Belgien' },
  Poland: { el: 'Πολωνία', en: 'Poland', de: 'Polen' },
  Luxembourg: { el: 'Λουξεμβούργο', en: 'Luxembourg', de: 'Luxemburg' },
  Denmark: { el: 'Δανία', en: 'Denmark', de: 'Dänemark' },
  Greece: { el: 'Ελλάδα', en: 'Greece', de: 'Griechenland' },
  Cyprus: { el: 'Κύπρος', en: 'Cyprus', de: 'Zypern' },

  // --- New services translations ---
  // Service 1: National and International Road Transport
  'services.roadTransportTitle': {
    el: 'Εθνικές και Διεθνείς Οδικές Μεταφορές',
    en: 'National and International Road Transport',
    de: 'Nationale und internationale Straßentransporte'
  },
  'services.roadTransportSummary': {
    el: 'Αξιόπιστες λύσεις οδικής μεταφοράς σε Ελλάδα και Ευρώπη με έμφαση στη διακίνηση εμπορευμάτων προς και από χώρες της κεντρικής Ευρώπης.',
    en: 'Reliable road transport solutions in Greece and Europe with emphasis on freight movement to and from Central European countries.',
    de: 'Zuverlässige Straßentransportlösungen in Griechenland und Europa mit Schwerpunkt auf Güterverkehr zu und von mitteleuropäischen Ländern.'
  },
  'services.roadTransportFull': {
    el: 'Προσφέρουμε αξιόπιστες λύσεις οδικής μεταφοράς σε Ελλάδα και Ευρώπη, με έμφαση στη διακίνηση εμπορευμάτων προς και από χώρες της κεντρικής Ευρώπης.\n\nΔιαχειριζόμαστε πλήρη και μερικά φορτία (FTL/LTL), με δυνατότητα τακτικών δρομολογίων, σύγχρονο στόλο και διαρκή παρακολούθηση μεταφοράς.\n\nΗ έμφαση στην συνεργασία, τη συνέπεια και την ασφάλεια καθιστά τις υπηρεσίες μας ιδανικές για επιχειρήσεις που απαιτούν επαγγελματική διαχείριση εφοδιαστικής αλυσίδας.',
    en: 'We offer reliable road transport solutions in Greece and Europe, with emphasis on freight movement to and from Central European countries.\n\nWe handle full and partial loads (FTL/LTL), with regular routes, modern fleet and continuous shipment tracking.\n\nThe emphasis on cooperation, consistency and safety makes our services ideal for businesses requiring professional supply chain management.',
    de: 'Wir bieten zuverlässige Straßentransportlösungen in Griechenland und Europa mit Schwerpunkt auf Güterverkehr zu und von mitteleuropäischen Ländern.\n\nWir handhaben Voll- und Teilladungen (FTL/LTL) mit regelmäßigen Routen, moderner Flotte und kontinuierlicher Sendungsverfolgung.\n\nDer Schwerpunkt auf Zusammenarbeit, Konsistenz und Sicherheit macht unsere Dienstleistungen ideal für Unternehmen, die professionelles Supply-Chain-Management benötigen.'
  },

  // Service 2: Intermodal Transport
  'services.intermodalTitle': {
    el: 'Διατροπικές (Συνδυασμένες) Μεταφορές',
    en: 'Intermodal (Combined) Transport',
    de: 'Intermodale (kombinierte) Transporte'
  },
  'services.intermodalSummary': {
    el: 'Υποστηρίζουμε τη διασύνδεση οδικών μεταφορών με θαλάσσια και αεροπορική μεταφορά φορτίων, προσφέροντας ολοκληρωμένες λύσεις door-to-port και port-to-door.',
    en: 'We support the connection of road transport with sea and air freight, offering complete door-to-port and port-to-door solutions.',
    de: 'Wir unterstützen die Verbindung von Straßentransport mit See- und Luftfracht und bieten komplette Door-to-Port- und Port-to-Door-Lösungen.'
  },
  'services.intermodalFull': {
    el: 'Υποστηρίζουμε τη διασύνδεση οδικών μεταφορών με θαλάσσια και αεροπορική μεταφορά φορτίων, προσφέροντας ολοκληρωμένες λύσεις door-to-port και port-to-door.\n\nΑναλαμβάνουμε τον πλήρη συντονισμό εμπορευμάτων από και προς κάθε βασικό λιμάνι ή αεροδρόμιο των χωρών που εξυπηρετούμε, με στόχο την ελαχιστοποίηση χρόνου και κόστους για τον πελάτη.\n\nΗ εμπειρία μας σε διατροπικές μεταφορές εγγυάται την ομαλή και αξιόπιστη διακίνηση, ανεξαρτήτως προορισμού.',
    en: 'We support the connection of road transport with sea and air freight, offering complete door-to-port and port-to-door solutions.\n\nWe undertake full coordination of goods from and to every major port or airport of the countries we serve, aiming to minimize time and cost for the client.\n\nOur experience in intermodal transport guarantees smooth and reliable movement, regardless of destination.',
    de: 'Wir unterstützen die Verbindung von Straßentransport mit See- und Luftfracht und bieten komplette Door-to-Port- und Port-to-Door-Lösungen.\n\nWir übernehmen die vollständige Koordination von Waren von und zu jedem wichtigen Hafen oder Flughafen der von uns bedienten Länder, um Zeit und Kosten für den Kunden zu minimieren.\n\nUnsere Erfahrung im intermodalen Transport garantiert eine reibungslose und zuverlässige Abwicklung, unabhängig vom Zielort.'
  },

  // Service 3: Special Transport
  'services.specialTransportTitle': {
    el: 'Ειδικές Μεταφορές',
    en: 'Special Transport',
    de: 'Sondertransporte'
  },
  'services.specialTransportSummary': {
    el: 'Διαθέτουμε την τεχνογνωσία και τον εξοπλισμό για τη διαχείριση απαιτητικών φορτίων: υπερμεγέθη, βαρέα, ευπαθή ή υψηλής αξίας εμπορεύματα.',
    en: 'We have the expertise and equipment to handle demanding cargo: oversized, heavy, fragile or high-value goods.',
    de: 'Wir verfügen über das Know-how und die Ausrüstung für anspruchsvolle Fracht: übergroße, schwere, empfindliche oder hochwertige Güter.'
  },
  'services.specialTransportFull': {
    el: 'Διαθέτουμε την τεχνογνωσία και τον εξοπλισμό για τη διαχείριση απαιτητικών φορτίων:\n– υπερμεγέθη,\n– βαρέα,\n– ευπαθή ή\n– υψηλής αξίας εμπορεύματα.\n\nΚάθε έργο σχεδιάζεται με βάση τις τεχνικές του ιδιαιτερότητες, τηρώντας όλους τους κανονισμούς και τις προδιαγραφές ασφαλείας. Προσφέρουμε εξατομικευμένες λύσεις ανά έργο και φορτίο.',
    en: 'We have the expertise and equipment to handle demanding cargo:\n– oversized,\n– heavy,\n– fragile or\n– high-value goods.\n\nEach project is designed based on its technical specifications, complying with all regulations and safety standards. We offer customized solutions per project and cargo.',
    de: 'Wir verfügen über das Know-how und die Ausrüstung für anspruchsvolle Fracht:\n– übergroß,\n– schwer,\n– empfindlich oder\n– hochwertig.\n\nJedes Projekt wird nach seinen technischen Spezifikationen geplant und entspricht allen Vorschriften und Sicherheitsstandards. Wir bieten maßgeschneiderte Lösungen pro Projekt und Fracht.'
  },

  // Service 4: Logistics Services
  'services.logisticsTitle': {
    el: 'Υπηρεσίες Logistics',
    en: 'Logistics Services',
    de: 'Logistikdienstleistungen'
  },
  'services.logisticsSummary': {
    el: 'Προσφέρουμε ολοκληρωμένες υπηρεσίες logistics που καλύπτουν το σύνολο της διαχείρισης της εφοδιαστικής αλυσίδας από αποθήκευση έως διανομή.',
    en: 'We offer comprehensive logistics services covering the entire supply chain management from warehousing to distribution.',
    de: 'Wir bieten umfassende Logistikdienstleistungen, die das gesamte Supply-Chain-Management von der Lagerung bis zur Verteilung abdecken.'
  },
  'services.logisticsFull': {
    el: 'Προσφέρουμε ολοκληρωμένες υπηρεσίες logistics, καλύπτοντας το σύνολο της διαχείρισης της εφοδιαστικής αλυσίδας.\n\nΟι υπηρεσίες μας περιλαμβάνουν:\n– παραλαβή και ταξινόμηση φορτίων,\n– αποθήκευση,\n– διαχείριση αποθεμάτων (inventory control),\n– picking, packing & repacking,\n– φορτοεκφορτώσεις,\n– cross-docking και\n– προετοιμασία για διανομή ή εξαγωγή.\n\nΗ ομάδα μας συνδυάζει τεχνογνωσία, σύγχρονο εξοπλισμό και λειτουργική ευελιξία για να υποστηρίξει αποδοτικά κάθε κρίκο της εφοδιαστικής αλυσίδας των συνεργατών μας.',
    en: 'We offer comprehensive logistics services covering the entire supply chain management.\n\nOur services include:\n– cargo reception and sorting,\n– warehousing,\n– inventory control,\n– picking, packing & repacking,\n– loading/unloading,\n– cross-docking and\n– preparation for distribution or export.\n\nOur team combines expertise, modern equipment and operational flexibility to efficiently support every link in our partners\' supply chain.',
    de: 'Wir bieten umfassende Logistikdienstleistungen, die das gesamte Supply-Chain-Management abdecken.\n\nUnsere Dienstleistungen umfassen:\n– Warenannahme und Sortierung,\n– Lagerung,\n– Bestandsverwaltung (Inventory Control),\n– Kommissionierung, Verpackung & Umverpackung,\n– Be- und Entladung,\n– Cross-Docking und\n– Vorbereitung für Verteilung oder Export.\n\nUnser Team kombiniert Fachwissen, moderne Ausrüstung und operative Flexibilität, um jedes Glied der Lieferkette unserer Partner effizient zu unterstützen.'
  },
  
  // Add missing form validation translations
  invalidEmail: {
    el: 'Παρακαλώ εισάγετε έγκυρη διεύθυνση email',
    en: 'Please enter a valid email address',
    de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
  },
  invalidPhone: {
    el: 'Παρακαλώ εισάγετε έγκυρο αριθμό τηλεφώνου',
    en: 'Please enter a valid phone number',
    de: 'Bitte geben Sie eine gültige Telefonnummer ein'
  },
  summaryTitle: {
    el: 'Περίληψη Αιτήματος',
    en: 'Request Summary',
    de: 'Anfragezusammenfassung'
  },
  
  // Add missing privacy policy translations
  privacyPolicyTitle: {
    el: 'Πολιτική Απορρήτου',
    en: 'Privacy Policy',
    de: 'Datenschutzrichtlinie'
  },
  privacyPolicyEffectiveDate: {
    el: 'Ημερομηνία ισχύος',
    en: 'Effective date',
    de: 'Gültigkeitsdatum'
  },
  privacyPolicyIntroduction: {
    el: 'Η Intracosta σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα.',
    en: 'Intracosta respects your privacy and is committed to protecting your personal data.',
    de: 'Intracosta respektiert Ihre Privatsphäre und verpflichtet sich, Ihre persönlichen Daten zu schützen.'
  },
  privacyPolicyInfoWeCollectTitle: {
    el: 'Πληροφορίες που Συλλέγουμε',
    en: 'Information We Collect',
    de: 'Informationen, die wir sammeln'
  },
  privacyPolicyInfoWeCollectText: {
    el: 'Συλλέγουμε πληροφορίες που μας παρέχετε άμεσα, όπως όταν συμπληρώνετε φόρμες επικοινωνίας.',
    en: 'We collect information you provide directly to us, such as when you fill out contact forms.',
    de: 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. beim Ausfüllen von Kontaktformularen.'
  },
  privacyPolicyHowWeUseInfoTitle: {
    el: 'Πώς Χρησιμοποιούμε τις Πληροφορίες',
    en: 'How We Use Information',
    de: 'Wie wir Informationen verwenden'
  },
  privacyPolicyHowWeUseInfoText: {
    el: 'Χρησιμοποιούμε τις πληροφορίες για να παρέχουμε και να βελτιώνουμε τις υπηρεσίες μας.',
    en: 'We use information to provide and improve our services.',
    de: 'Wir verwenden Informationen, um unsere Dienstleistungen bereitzustellen und zu verbessern.'
  },
  privacyPolicyDataStorageTitle: {
    el: 'Αποθήκευση Δεδομένων',
    en: 'Data Storage',
    de: 'Datenspeicherung'
  },
  privacyPolicyDataStorageText: {
    el: 'Τα δεδομένα σας αποθηκεύονται με ασφάλεια και διατηρούνται μόνο όσο είναι απαραίτητο.',
    en: 'Your data is stored securely and retained only as long as necessary.',
    de: 'Ihre Daten werden sicher gespeichert und nur so lange aufbewahrt, wie es notwendig ist.'
  },
  privacyPolicyDataSharingTitle: {
    el: 'Κοινοποίηση Δεδομένων',
    en: 'Data Sharing',
    de: 'Datenweitergabe'
  },
  privacyPolicyDataSharingText: {
    el: 'Δεν πουλάμε, εμπορευόμαστε ή μεταφέρουμε τα προσωπικά σας δεδομένα σε τρίτους.',
    en: 'We do not sell, trade, or transfer your personal data to third parties.',
    de: 'Wir verkaufen, handeln oder übertragen Ihre persönlichen Daten nicht an Dritte.'
  },
  privacyPolicyYourRightsTitle: {
    el: 'Τα Δικαιώματά σας',
    en: 'Your Rights',
    de: 'Ihre Rechte'
  },
  privacyPolicyYourRightsText: {
    el: 'Έχετε το δικαίωμα πρόσβασης, διόρθωσης ή διαγραφής των προσωπικών σας δεδομένων.',
    en: 'You have the right to access, correct, or delete your personal data.',
    de: 'Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, sie zu korrigieren oder zu löschen.'
  },
  privacyPolicyChangesTitle: {
    el: 'Αλλαγές στην Πολιτική',
    en: 'Policy Changes',
    de: 'Richtlinienänderungen'
  },
  privacyPolicyChangesText: {
    el: 'Ενδέχεται να ενημερώνουμε αυτήν την πολιτική περιστασιακά. Θα σας ειδοποιήσουμε για σημαντικές αλλαγές.',
    en: 'We may update this policy from time to time. We will notify you of any significant changes.',
    de: 'Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren.'
  },
  privacyPolicyCookiesSectionTitle: {
    el: 'Cookies',
    en: 'Cookies',
    de: 'Cookies'
  },
  privacyPolicyCookiesSectionText: {
    el: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας.',
    en: 'We use cookies to improve your experience on our website.',
    de: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.'
  },
  privacyPolicyContactUsTitle: {
    el: 'Επικοινωνήστε μαζί μας',
    en: 'Contact Us',
    de: 'Kontaktieren Sie uns'
  },

  // Team Section
  teamTitle: {
    el: 'Η Ομάδα μας',
    en: 'Our Team',
    de: 'Unser Team'
  },
  teamSubtitle: {
    el: 'Γνωρίστε τους ανθρώπους πίσω από την επιτυχία μας',
    en: 'Meet the people behind our success',
    de: 'Lernen Sie die Menschen hinter unserem Erfolg kennen'
  },
  teamGeneralDirector: {
    el: 'Γενικός Διευθυντής',
    en: 'General Director',
    de: 'Generaldirektor'
  },
  teamImportDepartment: {
    el: 'Ομάδα Εισαγωγής',
    en: 'Import Team',
    de: 'Import-Team'
  },
  teamExportDepartment: {
    el: 'Ομάδα Εξαγωγής',
    en: 'Export Team',
    de: 'Export-Team'
  },
  teamAccountingDepartment: {
    el: 'Ομάδα Λογιστηρίου',
    en: 'Accounting Team',
    de: 'Buchhaltungsteam'
  },
  teamImportManager: {
    el: 'Υπεύθυνος Εισαγωγής',
    en: 'Import Manager',
    de: 'Importleiter'
  },
  teamExportManager: {
    el: 'Υπεύθυνος Εξαγωγής',
    en: 'Export Manager',
    de: 'Exportleiter'
  },
  teamAccountingManager: {
    el: 'Υπεύθυνος Λογιστηρίου',
    en: 'Accounting Manager',
    de: 'Buchhaltungsleiter'
  },

  // Interactive Map
  mapTitle: {
    el: 'Χάρτης Αποθηκών',
    en: 'Warehouse Map',
    de: 'Lagerkarte'
  },
  mapSubtitle: {
    el: 'Κάντε κλικ σε μια χώρα για να δείτε τις αποθήκες και τα ΤΚ',
    en: 'Click on a country to see warehouses and postal codes',
    de: 'Klicken Sie auf ein Land, um Lagerhäuser und Postleitzahlen zu sehen'
  },
  warehousesTitle: {
    el: 'Αποθήκες',
    en: 'Warehouses',
    de: 'Lagerhäuser'
  },
  postalCodesTitle: {
    el: 'Ταχυδρομικοί Κωδικοί',
    en: 'Postal Codes',
    de: 'Postleitzahlen'
  },
  centralWarehouse: {
    el: 'Κεντρική Αποθήκη',
    en: 'Central Warehouse',
    de: 'Zentrales Lager'
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

  const t = (key: string, variables?: { [key: string]: any }): string => {
    const translatedString = translations[key]?.[language] || key;
    if (variables) {
      return translatedString.replace(/{{(.*?)}}/g, (match, variableName) => {
        return variables[variableName.trim()];
      });
    }
    return translatedString;
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