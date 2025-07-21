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
  pallets: {
    el: 'Παλέτες (Αριθμός)',
    en: 'Pallets (Quantity)',
    de: 'Paletten (Anzahl)'
  },
  boxes: {
    el: 'Κιβώτια (Αριθμός)',
    en: 'Boxes (Quantity)',
    de: 'Kisten (Anzahl)'
  },
  dimensions: {
    el: 'Διαστάσεις (Μήκος x Πλάτος x Ύψος)',
    en: 'Dimensions (Length x Width x Height)',
    de: 'Abmessungen (Länge x Breite x Höhe)'
  },
  lengthPlaceholder: {
    el: 'Μήκος (m)',
    en: 'Length (m)',
    de: 'Länge (m)'
  },
  widthPlaceholder: {
    el: 'Πλάτος (m)',
    en: 'Width (m)',
    de: 'Breite (m)'
  },
  heightPlaceholder: {
    el: 'Ύψος (m)',
    en: 'Height (m)',
    de: 'Höhe (m)'
  },
  length: {
    el: 'Μήκος (m)',
    en: 'Length (m)',
    de: 'Länge (m)'
  },
  width: {
    el: 'Πλάτος (m)',
    en: 'Width (m)',
    de: 'Breite (m)'
  },
  height: {
    el: 'Ύψος (m)',
    en: 'Height (m)',
    de: 'Höhe (m)'
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
  services: { el: 'Υπηρεσίες', en: 'Services', de: 'Dienstleistungen' },
  coverage: { el: 'Περιοχές', en: 'Coverage', de: 'Abdeckung' },
  covered: {
    el: 'Καλύπτεται',
    en: 'Covered',
    de: 'Abgedeckt'
  },
  about: { el: 'Σχετικά', en: 'About', de: 'Über uns' },
  contact: { el: 'Επικοινωνία', en: 'Contact', de: 'Kontakt' },
  getQuote: { el: 'Ας Συνεργαστούμε', en: "Let's Work Together", de: 'Lassen Sie uns zusammenarbeiten' },
  
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
  aboutTruckAlt: {
    el: 'Φορτηγό που μεταφέρει εμπορεύματα',
    en: 'Truck transporting goods',
    de: 'Lkw, der Waren transportiert'
  },
  aboutIntracostaSummary: {
    el: 'Η Intracosta είναι μια αμιγώς ελληνική εταιρία διεθνών οδικών μεταφορών και logistics. Με 25 χρόνια εμπειρίας στον κλάδο, με έναν στόλο άνω των 50 ιδιόκτητων φορτηγών τελευταίας τεχνολογίας και ευρύ δίκτυο συνεργατών σε όλη την κεντρική Ευρώπη, μετατρέπουμε τις μετακινήσεις εμπορευμάτων σε απλή, προβλέψιμη διαδικασία.',
    en: 'Intracosta is a purely Greek company specializing in international road transport and logistics. With 25 years of experience in the field, a fleet of over 50 state-of-the-art trucks, and an extensive partner network across central Europe, we make freight transport a simple, predictable process.',
    de: 'Intracosta ist ein rein griechisches Unternehmen für internationale Straßentransporte und Logistik. Mit 25 Jahren Erfahrung in der Branche, über 50 firmeneigenen modernen Lkw und einem umfangreichen Partnernetzwerk in ganz Mitteleuropa machen wir den Warentransport zu einem einfachen, planbaren Prozess.'
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
    el: 'Ποιες χώρες καλύπτει η Intracosta με τις υπηρεσίες της;',
    en: 'Which countries does Intracosta serve?',
    de: 'Welche Länder bedient Intracosta?'
  },
  faq1Answer: {
    el: 'Η Intracosta εξυπηρετεί τις μεγαλύτερες αγορές της Ευρώπης, συμπεριλαμβανομένων Γερμανίας, Αυστρίας, Ολλανδίας, Βελγίου, Πολωνίας, Λουξεμβούργου, Δανίας και φυσικά της Ελλάδας, με τακτικές αναχωρήσεις και παραδόσεις.',
    en: 'Intracosta serves the major markets of Europe, including Germany, Austria, Netherlands, Belgium, Poland, Luxembourg, Denmark, and of course Greece, with regular departures and deliveries.',
    de: 'Intracosta bedient die wichtigsten Märkte Europas, darunter Deutschland, Österreich, Niederlande, Belgien, Polen, Luxemburg, Dänemark und natürlich Griechenland, mit regelmäßigen Abfahrten und Lieferungen.'
  },
  faq2Question: {
    el: 'Ποια είδη φορτίου μεταφέρει η εταιρεία;',
    en: 'What types of cargo does the company transport?',
    de: 'Welche Arten von Fracht transportiert das Unternehmen?'
  },
  faq2Answer: {
    el: 'Διαχειριζόμαστε ξηρό φορτίο, φορτίο με ελεγχόμενη θερμοκρασία, ADR (επικίνδυνα υλικά) καθώς και ειδικές μεταφορές μεγάλων ή ασυνήθιστων διαστάσεων.',
    en: 'We handle dry cargo, temperature-controlled cargo, ADR (dangerous goods), as well as special transport of large or unusual dimensions.',
    de: 'Wir transportieren Trockenfracht, temperaturgeführte Fracht, ADR (Gefahrgut) sowie Spezialtransporte von großen oder ungewöhnlichen Abmessungen.'
  },
  faq3Question: {
    el: 'Διαθέτει η Intracosta υπηρεσίες αποθήκευσης;',
    en: 'Does Intracosta provide warehousing services?',
    de: 'Bietet Intracosta Lagerdienstleistungen an?'
  },
  faq3Answer: {
    el: 'Ναι, παρέχουμε υπηρεσίες αποθήκευσης σε ιδιόκτητες αποθήκες στην Ελλάδα (Γιαννιτσά) και Γερμανία (Όσναμπουργκ), καθώς και μέσω συνεργατών σε στρατηγικά σημεία της Ευρώπης.',
    en: 'Yes, we provide warehousing services in our owned warehouses in Greece (Giannitsa) and Germany (Osnabrück), as well as through partners in strategic locations across Europe.',
    de: 'Ja, wir bieten Lagerdienstleistungen in unseren eigenen Lagern in Griechenland (Giannitsa) und Deutschland (Osnabrück) sowie über Partner an strategischen Standorten in ganz Europa an.'
  },
  faq4Question: {
    el: 'Πόσο συχνά πραγματοποιούνται τα δρομολόγια;',
    en: 'How often are the routes operated?',
    de: 'Wie häufig werden die Routen betrieben?'
  },
  faq4Answer: {
    el: 'Διαθέτουμε σχεδόν καθημερινά δρομολόγια από/προς την Ελλάδα και τις κύριες ευρωπαϊκές χώρες, εξασφαλίζοντας άμεση εξυπηρέτηση.',
    en: 'We operate almost daily routes to/from Greece and major European countries, ensuring prompt service.',
    de: 'Wir betreiben nahezu tägliche Routen von/nach Griechenland und den wichtigsten europäischen Ländern, um einen schnellen Service zu gewährleisten.'
  },
  faq5Question: {
    el: 'Η εταιρεία παρέχει ασφάλιση για τα φορτία;',
    en: 'Does the company provide cargo insurance?',
    de: 'Bietet das Unternehmen eine Frachtversicherung an?'
  },
  faq5Answer: {
    el: 'Ναι, όλα τα φορτία καλύπτονται από ασφάλεια CMR για πλήρη προστασία και διαφάνεια κατά τη μεταφορά.',
    en: 'Yes, all cargo is covered by CMR insurance for full protection and transparency during transport.',
    de: 'Ja, alle Frachten sind durch eine CMR-Versicherung für vollständigen Schutz und Transparenz während des Transports abgedeckt.'
  },
  faq6Question: {
    el: 'Μπορεί η Intracosta να διαχειριστεί πλήρη και μερικά φορτία (FTL & LTL);',
    en: 'Can Intracosta handle full and partial loads (FTL & LTL)?',
    de: 'Kann Intracosta Komplett- und Teilladungen (FTL & LTL) abwickeln?'
  },
  faq6Answer: {
    el: 'Βεβαίως. Εξυπηρετούμε τόσο πλήρεις φορτώσεις (FTL) όσο και μερικά φορτία (LTL), προσαρμόζοντας τις λύσεις στις ανάγκες σας.',
    en: 'Certainly. We handle both full truckloads (FTL) and less-than-truckload shipments (LTL), tailoring solutions to your needs.',
    de: 'Selbstverständlich. Wir wickeln sowohl Komplettladungen (FTL) als auch Teilladungen (LTL) ab und passen die Lösungen an Ihre Bedürfnisse an.'
  },
  faq7Question: {
    el: 'Ποιος είναι ο χρόνος παράδοσης των μεταφορών;',
    en: 'What is the delivery time for transports?',
    de: 'Wie lange dauert die Lieferung der Transporte?'
  },
  faq7Answer: {
    el: 'Ο χρόνος παράδοσης εξαρτάται από τη χώρα προορισμού, αλλά συνήθως οι παραδόσεις εντός Ε.Ε. ολοκληρώνονται μέσα σε 2-5 εργάσιμες ημέρες.',
    en: 'Delivery time depends on the destination country, but deliveries within the EU are usually completed within 2-5 business days.',
    de: 'Die Lieferzeit hängt vom Bestimmungsland ab, aber Lieferungen innerhalb der EU werden in der Regel innerhalb von 2-5 Werktagen abgeschlossen.'
  },
  faq8Question: {
    el: 'Πώς μπορώ να ζητήσω προσφορά;',
    en: 'How can I request a quote?',
    de: 'Wie kann ich ein Angebot anfordern?'
  },
  faq8Answer: {
    el: 'Μπορείτε να χρησιμοποιήσετε τη φόρμα "Λεπτομέρειες Μεταφοράς" στον ιστότοπό μας ή να επικοινωνήσετε με το τμήμα πωλήσεων στο export@intracosta.com.',
    en: 'You can use the "Transport Details" form on our website or contact our sales department at export@intracosta.com.',
    de: 'Sie können das Formular „Transportdetails“ auf unserer Website nutzen oder sich an unsere Verkaufsabteilung unter export@intracosta.com wenden.'
  },
  faq9Question: {
    el: 'Διαθέτει η εταιρεία στόλο ιδιόκτητων οχημάτων;',
    en: 'Does the company have a fleet of owned vehicles?',
    de: 'Verfügt das Unternehmen über eine eigene Fahrzeugflotte?'
  },
  faq9Answer: {
    el: 'Διαθέτουμε πάνω από 50 ιδιόκτητα φορτηγά τελευταίας τεχνολογίας (Euro 6) για τη διασφάλιση υψηλής ποιότητας υπηρεσιών.',
    en: 'We have over 50 state-of-the-art trucks (Euro 6) to ensure high-quality services.',
    de: 'Wir verfügen über mehr als 50 hochmoderne Lkw (Euro 6), um einen qualitativ hochwertigen Service zu gewährleisten.'
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
  name: { el: 'Όνομα', en: 'Name', de: 'Name' },
  message: { el: 'Μήνυμα', en: 'Message', de: 'Nachricht' },
  sendMessage: { el: 'Αποστολή Μηνύματος', en: 'Send Message', de: 'Nachricht senden' },
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
  contactFormTitle: {
    el: 'Στείλτε μας ένα Μήνυμα',
    en: 'Send us a Message',
    de: 'Senden Sie uns eine Nachricht'
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
    el: 'Η αποστολή μας είναι να κρατάμε την εφοδιαστική αλυσίδα των πελατών μας σε κίνηση—γρήγορα, με ασφάλεια και απόλυτη διαφάνεια κόστους. Από μια παλέτα μέχρι πλήρες φορτίο, σχεδιάζουμε τη βέλτιστη διαδρομή, αξιοποιούμε το διεθνές μας δίκτυο και παραδίδουμε ακριβώς όταν το χρειάζεστε, ώστε εσείς να εστιάζετε στην ανάπτυξη της επιχείρησής σας.',
    en: 'Our mission is to keep our customers’ supply chains moving—quickly, safely, and with complete cost transparency. From a single pallet to full truckloads, we design the optimal route, leverage our international network, and deliver exactly when you need it so you can focus on growing your business.',
    de: 'Unsere Mission ist es, die Lieferketten unserer Kunden in Bewegung zu halten – schnell, sicher und mit voller Kostentransparenz. Von einer Palette bis hin zu Komplettladungen entwerfen wir die optimale Route, nutzen unser internationales Netzwerk und liefern genau dann, wenn Sie es brauchen, damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können.'
  },

  // Added supported countries for dropdown
  supportedCountries: {
    el: [
      'Γερμανία',
      'Αυστρία',
      'Ολλανδία',
      'Βέλγιο',
      'Πολωνία',
      'Λουξεμβούργο',
      'Δανία',
      'Ελλάδα',
      'Κύπρος'
    ],
    en: [
      'Germany',
      'Austria',
      'Netherlands',
      'Belgium',
      'Poland',
      'Luxembourg',
      'Denmark',
      'Greece',
      'Cyprus'
    ],
    de: [
      'Deutschland',
      'Österreich',
      'Niederlande',
      'Belgien',
      'Polen',
      'Luxemburg',
      'Dänemark',
      'Griechenland',
      'Zypern'
    ]
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
  // --- New services translations ---
  services_internationalAndNationalRoadTitle: {
    el: 'Διεθνείς και Εθνικές Οδικές Μεταφορές',
    en: 'International and National Road Transport',
    de: 'Internationale und nationale Straßentransporte'
  },
  'services.internationalAndNationalRoadDescription': {
    el: 'Μεταφορές φορτίων εντός Ελλάδας και σε όλη την Ευρώπη με πλήρη κάλυψη.',
    en: 'Freight transport within Greece and across Europe with full coverage.',
    de: 'Frachttransporte innerhalb Griechenlands und in ganz Europa mit vollständiger Abdeckung.'
  },
  'services.airTransportTitle': {
    el: 'Αερομεταφορές',
    en: 'Air Transport',
    de: 'Luftfracht'
  },
  'services.airTransportDescription': {
    el: 'Γρήγορες αερομεταφορές για επείγοντα φορτία και διεθνείς παραδόσεις.',
    en: 'Fast air freight for urgent cargo and international deliveries.',
    de: 'Schnelle Luftfracht für eilige Sendungen und internationale Lieferungen.'
  },
  'services.seaTransportTitle': {
    el: 'Μεταφορές μέσω Θαλάσσης',
    en: 'Sea Transport',
    de: 'Seefracht'
  },
  'services.seaTransportDescription': {
    el: 'Οικονομικές θαλάσσιες μεταφορές για μεγάλες ποσότητες φορτίου.',
    en: 'Cost-effective sea transport for large cargo volumes.',
    de: 'Kostengünstige Seefracht für große Frachtmengen.'
  },
  'services.specialTransportTitle': {
    el: 'Ειδικές Μεταφορές',
    en: 'Special Transport',
    de: 'Sondertransporte'
  },
  'services.specialTransportDescription': {
    el: 'Μεταφορά φορτίων υπερμεγεθών ή ειδικών απαιτήσεων.',
    en: 'Transport of oversized or special requirement cargo.',
    de: 'Transport von übergroßen oder besonderen Frachten.'
  },
  'services.storageAndHandlingTitle': {
    el: 'Υπηρεσίες Αποθήκευσης και Φορτοεκφόρτωσης',
    en: 'Storage and Handling Services',
    de: 'Lager- und Umschlagdienstleistungen'
  },
  'services.storageAndHandlingDescription': {
    el: 'Ασφαλής αποθήκευση και επαγγελματικές υπηρεσίες φορτοεκφόρτωσης.',
    en: 'Secure warehousing and professional loading/unloading services.',
    de: 'Sichere Lagerung und professionelle Be- und Entladungsdienste.'
  },