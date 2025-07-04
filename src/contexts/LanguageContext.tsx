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
  aboutIntracostaSummary: {
    el: 'Η Intracosta είναι μια αμιγώς ελληνική εταιρία διεθνών οδικών μεταφορών και logistics. Με 25 χρόνια εμπειρίας στον κλάδο, με έναν στόλο άνω των 50 ιδιόκτητων φορτήγων τελευταίας τεχνολογίας και ευρύ δίκτυο συνεργατών σε όλη την κεντρική Ευρώπη, μετατρέπουμε τις μετακινήσεις εμπορευμάτων σε απλή, προβλέψιμη διαδικασία.',
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