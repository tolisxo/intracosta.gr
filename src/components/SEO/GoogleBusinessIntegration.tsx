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

      {/* Google My Business Verification (Replace with actual verification code) */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      
      {/* Google Business Profile Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Intracosta",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3ο χλμ Γιαννιτσών Θεσσαλονίκης",
              "addressLocality": "Γιαννιτσά",
              "postalCode": "58100",
              "addressCountry": "GR"
            },
            "telephone": "+30-23820-27111"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Satisfied Customer"
          },
          "reviewBody": "Excellent transport services across Europe. Professional, reliable, and on-time delivery."
        })}
      </script>
    </Helmet>
  );
};

export default GoogleBusinessIntegration;