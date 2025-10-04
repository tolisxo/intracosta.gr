import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleBusinessIntegration: React.FC = () => {
  return (
    <Helmet>
      {/* Google Business Profile Integration */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Intracosta",
          "url": "https://www.intracosta.gr",
          "logo": "https://www.intracosta.gr/logocorrectversion.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+30-23820-27111",
            "contactType": "customer service",
            "areaServed": "GR",
            "availableLanguage": ["Greek", "English", "German"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3ο χλμ Γιαννιτσών Θεσσαλονίκης",
            "addressLocality": "Γιαννιτσά",
            "postalCode": "58100",
            "addressCountry": "GR"
          },
          "sameAs": [
            "https://www.google.com/maps/place/Intracosta",
            "https://www.facebook.com/intracosta",
            "https://www.linkedin.com/company/intracosta"
          ]
        })}
      </script>

      {/* Google My Business Verification - Add your actual verification code */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}

      {/* Google Business Profile - Place ID for map embed */}
      <link rel="me" href="https://g.page/intracosta" />
      
      {/* FAQPage Schema for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What areas does Intracosta serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Intracosta serves all major European countries including Germany, Austria, Netherlands, Belgium, Poland, Luxembourg, Denmark, and Cyprus with daily transport routes from our Giannitsa facility."
              }
            },
            {
              "@type": "Question",
              "name": "What transport services does Intracosta offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer international road transport, domestic Greek transport, groupage services, customs clearance, warehousing, and full logistics solutions. All services include CMR insurance coverage."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact Intracosta in Giannitsa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can reach us at +30 23820 27111, email info@intracosta.com, or visit our office at 3rd km Giannitsa-Thessaloniki Road, GR58100. We are open Monday-Friday 09:00-17:00."
              }
            }
          ]
        })}
      </script>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.intracosta.gr/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Transport Services Giannitsa",
              "item": "https://www.intracosta.gr/international-transport"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default GoogleBusinessIntegration;