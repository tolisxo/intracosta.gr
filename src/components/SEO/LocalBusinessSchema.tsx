import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

interface LocalBusinessSchemaProps {
  page?: 'home' | 'services' | 'contact' | 'about';
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ page = 'home' }) => {
  const { language } = useLanguage();

  const businessData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Intracosta",
    "alternateName": "In.Tra.Costa EPE",
    "description": {
      el: "Αξιόπιστες διεθνείς μεταφορές σε όλη την Ευρώπη. Οδικές μεταφορές, groupage, εκτελωνισμός και αποθήκευση.",
      en: "Reliable international transport across Europe. Road transport, groupage, customs clearance and warehousing.",
      de: "Zuverlässiger internationaler Transport in ganz Europa. Straßentransport, Sammelladung, Zollabfertigung und Lagerung."
    }[language],
    "url": "https://www.intracosta.gr",
    "logo": "https://www.intracosta.gr/logocorrectversion.svg",
    "image": [
      "https://www.intracosta.gr/logocorrectversion.svg",
      "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg"
    ],
    "telephone": "+30 23820 27111",
    "email": "info@intracosta.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3ο χλμ Γιαννιτσών Θεσσαλονίκης",
      "addressLocality": "Γιαννιτσά",
      "postalCode": "58100",
      "addressRegion": "Κεντρική Μακεδονία",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7934",
      "longitude": "22.4089"
    },
    "openingHours": [
      "Mo-Fr 09:00-17:00"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+30 23820 27111",
        "contactType": "customer service",
        "email": "info@intracosta.com",
        "availableLanguage": ["Greek", "English", "German"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+30 23820 27111",
        "contactType": "sales",
        "email": "export@intracosta.com",
        "availableLanguage": ["Greek", "English", "German"]
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Greece"
      },
      {
        "@type": "Country", 
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Country",
        "name": "Poland"
      },
      {
        "@type": "Country",
        "name": "Luxembourg"
      },
      {
        "@type": "Country",
        "name": "Denmark"
      },
      {
        "@type": "Country",
        "name": "Cyprus"
      }
    ],
    "serviceType": [
      "International Road Transport",
      "Domestic Transport",
      "Groupage Services",
      "Customs Clearance",
      "Warehousing",
      "Logistics Solutions"
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "foundingDate": "1999",
    "numberOfEmployees": "50-100",
    "knowsAbout": [
      "International Road Transport",
      "Logistics",
      "Supply Chain Management",
      "Customs Clearance",
      "Freight Forwarding",
      "European Transport Routes"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "European Transport Association"
      }
    ],
    "award": "ISO 9001 Certified Transport Services",
    "slogan": {
      el: "Αξιόπιστες διεθνείς μεταφορές σε όλη την Ευρώπη",
      en: "Reliable international transport across Europe",
      de: "Zuverlässiger internationaler Transport in ganz Europa"
    }[language],
    "sameAs": [
      "https://www.facebook.com/intracosta",
      "https://www.linkedin.com/company/intracosta"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transport Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Road Transport",
            "description": "Full truckload and groupage services across Europe",
            "areaServed": ["Greece", "Germany", "Austria", "Netherlands", "Belgium"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.intracosta.gr/international-transport"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customs Clearance",
            "description": "Complete customs documentation and clearance services",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.intracosta.gr/logistics-services"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehousing",
            "description": "Secure storage and inventory management",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.intracosta.gr/warehousing"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Transport Greece",
            "description": "Reliable domestic transport services within Greece",
            "areaServed": "Greece",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.intracosta.gr/domestic-transport"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Add page-specific schema
  const pageSpecificSchema = {
    services: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "International Transport Services",
      "provider": {
        "@type": "MovingCompany",
        "name": "Intracosta"
      },
      "areaServed": businessData.areaServed,
      "serviceType": businessData.serviceType
    },
    contact: {
      "@context": "https://schema.org", 
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "MovingCompany",
        "name": "Intracosta",
        "contactPoint": businessData.contactPoint
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessData)}
      </script>
      {page !== 'home' && pageSpecificSchema[page as keyof typeof pageSpecificSchema] && (
        <script type="application/ld+json">
          {JSON.stringify(pageSpecificSchema[page as keyof typeof pageSpecificSchema])}
        </script>
      )}
    </Helmet>
  );
};

export default LocalBusinessSchema;