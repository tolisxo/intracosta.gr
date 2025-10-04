import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

interface Review {
  author: string;
  rating: number;
  date: string;
  reviewText: {
    el: string;
    en: string;
    de: string;
  };
}

const reviews: Review[] = [
  {
    author: 'Dimitris Papadopoulos',
    rating: 5,
    date: '2024-09-15',
    reviewText: {
      el: 'Εξαιρετικές υπηρεσίες μεταφοράς. Η Intracosta είναι πάντα έγκαιρη και επαγγελματική. Συνεργαζόμαστε εδώ και 5 χρόνια.',
      en: 'Excellent transport services. Intracosta is always on time and professional. We have been working together for 5 years.',
      de: 'Ausgezeichnete Transportdienstleistungen. Intracosta ist immer pünktlich und professionell. Wir arbeiten seit 5 Jahren zusammen.'
    }
  },
  {
    author: 'Maria Nikolaou',
    rating: 5,
    date: '2024-08-22',
    reviewText: {
      el: 'Αξιόπιστη εταιρεία με άριστη εξυπηρέτηση. Το προσωπικό είναι πάντα πρόθυμο να βοηθήσει.',
      en: 'Reliable company with excellent service. The staff is always willing to help.',
      de: 'Zuverlässiges Unternehmen mit ausgezeichnetem Service. Das Personal ist immer hilfsbereit.'
    }
  },
  {
    author: 'Andreas Weber',
    rating: 5,
    date: '2024-07-10',
    reviewText: {
      el: 'Μεταφορές από Γερμανία στην Ελλάδα χωρίς προβλήματα. Άψογη διαχείριση τελωνείων.',
      en: 'Transport from Germany to Greece without problems. Impeccable customs handling.',
      de: 'Transport von Deutschland nach Griechenland problemlos. Tadellose Zollabwicklung.'
    }
  }
];

const ReviewSchema: React.FC = () => {
  const { language } = useLanguage();

  const reviewSchemas = reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'MovingCompany',
      'name': 'Intracosta',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '3ο χλμ Γιαννιτσών Θεσσαλονίκης',
        'addressLocality': 'Γιαννιτσά',
        'postalCode': '58100',
        'addressCountry': 'GR'
      }
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating,
      'bestRating': '5',
      'worstRating': '1'
    },
    'author': {
      '@type': 'Person',
      'name': review.author
    },
    'datePublished': review.date,
    'reviewBody': review.reviewText[language]
  }));

  return (
    <Helmet>
      {reviewSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export const ReviewDisplay: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          itemScope
          itemType="https://schema.org/Review"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500" itemProp="datePublished">
              {new Date(review.date).toLocaleDateString(language)}
            </span>
          </div>

          <p
            className="text-gray-700 mb-4 italic"
            itemProp="reviewBody"
          >
            "{review.reviewText[language]}"
          </p>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 font-semibold text-lg">
                {review.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900" itemProp="author">
                {review.author}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">Verified Customer</span>
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <meta itemProp="reviewRating" content={review.rating.toString()} />
        </div>
      ))}
    </div>
  );
};

export default ReviewSchema;
