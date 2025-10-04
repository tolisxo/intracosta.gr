import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

interface Citation {
  platform: string;
  url: string;
  verified: boolean;
}

const citations: Citation[] = [
  { platform: 'Google Business Profile', url: 'https://g.page/intracosta', verified: true },
  { platform: 'Facebook', url: 'https://www.facebook.com/intracosta', verified: true },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/intracosta', verified: true },
  { platform: 'Bing Places', url: '#', verified: false },
  { platform: 'Apple Maps', url: '#', verified: false },
  { platform: 'Yelp', url: '#', verified: false }
];

const napCitations = {
  name: 'Intracosta',
  legalName: 'In.Tra.Costa EPE',
  address: {
    primary: '3ο χλμ Γιαννιτσών Θεσσαλονίκης',
    city: 'Γιαννιτσά',
    region: 'Κεντρική Μακεδονία',
    postalCode: '58100',
    country: 'Greece'
  },
  phone: '+30 23820 27111',
  email: 'info@intracosta.com',
  website: 'https://www.intracosta.gr'
};

const CitationConsistency: React.FC = () => {
  return (
    <div className="hidden" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content={napCitations.name} />
      <meta itemProp="legalName" content={napCitations.legalName} />
      <meta itemProp="telephone" content={napCitations.phone} />
      <meta itemProp="email" content={napCitations.email} />
      <meta itemProp="url" content={napCitations.website} />

      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content={napCitations.address.primary} />
        <meta itemProp="addressLocality" content={napCitations.address.city} />
        <meta itemProp="addressRegion" content={napCitations.address.region} />
        <meta itemProp="postalCode" content={napCitations.address.postalCode} />
        <meta itemProp="addressCountry" content={napCitations.address.country} />
      </div>

      {citations.map((citation, index) => (
        <link key={index} itemProp="sameAs" href={citation.url} />
      ))}
    </div>
  );
};

export const CitationGuide: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        NAP Citation Management
      </h3>

      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <h4 className="font-semibold text-blue-900 mb-3">
            Official Business Information - Use Exactly As Shown:
          </h4>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Business Name:</span>
                <div className="font-mono bg-white p-2 mt-1 rounded text-sm">
                  {napCitations.name}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Address:</span>
                <div className="font-mono bg-white p-2 mt-1 rounded text-sm">
                  {napCitations.address.primary}<br />
                  {napCitations.address.postalCode} {napCitations.address.city}<br />
                  {napCitations.address.region}, {napCitations.address.country}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Phone:</span>
                <div className="font-mono bg-white p-2 mt-1 rounded text-sm">
                  {napCitations.phone}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Email:</span>
                <div className="font-mono bg-white p-2 mt-1 rounded text-sm">
                  {napCitations.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
          <h4 className="font-semibold text-yellow-900 mb-3">
            Citation Platform Status:
          </h4>
          <ul className="space-y-2">
            {citations.map((citation, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <span className={`w-3 h-3 rounded-full ${citation.verified ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span className="font-medium">{citation.platform}</span>
                <span className="text-gray-600">
                  {citation.verified ? '(Verified)' : '(Pending Setup)'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
          <h4 className="font-semibold text-green-900 mb-3">
            NAP Consistency Tips:
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ Use identical formatting across all platforms</li>
            <li>✓ Include country code in phone number (+30)</li>
            <li>✓ Keep business hours consistent</li>
            <li>✓ Use the same category classifications</li>
            <li>✓ Update all citations simultaneously if address changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CitationConsistency;
