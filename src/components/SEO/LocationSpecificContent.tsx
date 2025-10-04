import React from 'react';
import { MapPin, Clock, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LocationContentProps {
  city?: string;
  country?: string;
  showMap?: boolean;
}

const LocationSpecificContent: React.FC<LocationContentProps> = ({
  city = 'Giannitsa',
  country = 'Greece',
  showMap = false
}) => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: 'Υπηρεσίες Μεταφορών στη Γιαννιτσά',
      subtitle: 'Εξυπηρετώντας την Κεντρική Μακεδονία και ολόκληρη την Ευρώπη',
      description: 'Η Intracosta με έδρα στη Γιαννιτσά, στο 3ο χιλιόμετρο της οδού Γιαννιτσών-Θεσσαλονίκης, είναι η κορυφαία επιλογή για διεθνείς μεταφορές στην περιοχή της Κεντρικής Μακεδονίας. Με περισσότερα από 25 χρόνια εμπειρίας, εξυπηρετούμε επιχειρήσεις σε ολόκληρη τη Βόρεια Ελλάδα και συνδέουμε την περιοχή με όλες τις σημαντικές ευρωπαϊκές αγορές.',
      features: [
        {
          icon: MapPin,
          title: 'Στρατηγική Τοποθεσία',
          text: 'Μόλις 35 χλμ από τη Θεσσαλονίκη, ιδανική πρόσβαση στον Εγνατία Οδό και στα λιμάνια'
        },
        {
          icon: Clock,
          title: 'Καθημερινά Δρομολόγια',
          text: 'Άμεση σύνδεση Γιαννιτσών με Γερμανία, Αυστρία, Ολλανδία, Βέλγιο'
        },
        {
          icon: Globe,
          title: 'Ευρωπαϊκό Δίκτυο',
          text: 'Κάλυψη 15+ ευρωπαϊκών χωρών από το κέντρο της Κεντρικής Μακεδονίας'
        },
        {
          icon: Shield,
          title: 'Πλήρης Ασφάλιση',
          text: 'Όλες οι μεταφορές καλύπτονται με CMR ασφάλιση'
        }
      ],
      servicingAreas: 'Εξυπηρετούμε: Γιαννιτσά, Θεσσαλονίκη, Έδεσσα, Βέροια, Κατερίνη, Σέρρες, και ολόκληρη την περιοχή της Κεντρικής Μακεδονίας'
    },
    en: {
      title: 'Transport Services in Giannitsa',
      subtitle: 'Serving Central Macedonia and all of Europe',
      description: 'Intracosta, based in Giannitsa at the 3rd kilometer of Giannitsa-Thessaloniki road, is the premier choice for international transport in the Central Macedonia region. With over 25 years of experience, we serve businesses throughout Northern Greece and connect the area with all major European markets.',
      features: [
        {
          icon: MapPin,
          title: 'Strategic Location',
          text: 'Just 35 km from Thessaloniki, ideal access to Egnatia Highway and ports'
        },
        {
          icon: Clock,
          title: 'Daily Routes',
          text: 'Direct connection from Giannitsa to Germany, Austria, Netherlands, Belgium'
        },
        {
          icon: Globe,
          title: 'European Network',
          text: 'Coverage of 15+ European countries from Central Macedonia hub'
        },
        {
          icon: Shield,
          title: 'Full Insurance',
          text: 'All transports covered with CMR insurance'
        }
      ],
      servicingAreas: 'Serving: Giannitsa, Thessaloniki, Edessa, Veria, Katerini, Serres, and all of Central Macedonia region'
    },
    de: {
      title: 'Transportdienstleistungen in Giannitsa',
      subtitle: 'Service für Zentralmakedonien und ganz Europa',
      description: 'Intracosta mit Sitz in Giannitsa am 3. Kilometer der Straße Giannitsa-Thessaloniki ist die erste Wahl für internationalen Transport in der Region Zentralmakedonien. Mit über 25 Jahren Erfahrung bedienen wir Unternehmen in ganz Nordgriechenland und verbinden die Region mit allen wichtigen europäischen Märkten.',
      features: [
        {
          icon: MapPin,
          title: 'Strategische Lage',
          text: 'Nur 35 km von Thessaloniki, idealer Zugang zur Egnatia-Autobahn und Häfen'
        },
        {
          icon: Clock,
          title: 'Tägliche Routen',
          text: 'Direkte Verbindung von Giannitsa nach Deutschland, Österreich, Niederlande, Belgien'
        },
        {
          icon: Globe,
          title: 'Europäisches Netzwerk',
          text: 'Abdeckung von 15+ europäischen Ländern vom Zentrum Zentralmakedoniens'
        },
        {
          icon: Shield,
          title: 'Vollständige Versicherung',
          text: 'Alle Transporte sind CMR-versichert'
        }
      ],
      servicingAreas: 'Service: Giannitsa, Thessaloniki, Edessa, Veria, Katerini, Serres und die gesamte Region Zentralmakedonien'
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-yellow-100 p-4 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="text-gray-700 font-medium">
              {currentContent.servicingAreas}
            </p>
          </div>

          {showMap && (
            <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.8234567891!2d22.4089!3d40.7934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ3JzM2LjIiTiAyMsKwMjQnMzIuMCJF!5e0!3m2!1sen!2sgr!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Intracosta Location Map"
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationSpecificContent;
