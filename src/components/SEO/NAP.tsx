import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface NAPProps {
  variant?: 'full' | 'compact' | 'inline';
  showIcons?: boolean;
  className?: string;
}

const NAP: React.FC<NAPProps> = ({ 
  variant = 'full', 
  showIcons = true, 
  className = '' 
}) => {
  const napData = {
    name: 'Intracosta',
    addresses: [
      {
        label: 'Έδρα',
        street: '1 χλμ Λάκκας-Σκύδρας',
        city: 'Πέλλα',
        country: 'Ελλάδα'
      },
      {
        label: 'Υποκατάστημα',
        street: '3,5 χλμ Γιαννιτσών-Θεσσαλονίκης',
        city: 'Πέλλα',
        country: 'Ελλάδα'
      },
      {
        label: 'Intracosta Deutschland',
        street: 'Am Kanal 2-4',
        city: 'Ladbergen',
        country: 'Germany'
      }
    ],
    phone: '+30 23820 27111',
    email: 'info@intracosta.com',
    emails: [
      'info@intracosta.com',
      'export@intracosta.com',
      'import@intracosta.com',
      'dispo.greece@intracosta.com',
      'account@intracosta.com'
    ]
  };

  if (variant === 'inline') {
    const mainAddress = napData.addresses[0];
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <span itemProp="name">{napData.name}</span>
        <span className="text-gray-400">•</span>
        <span itemProp="address">{mainAddress.street}, {mainAddress.city}</span>
        <span className="text-gray-400">•</span>
        <span itemProp="telephone">{napData.phone}</span>
      </span>
    );
  }

  if (variant === 'compact') {
    const mainAddress = napData.addresses[0];
    return (
      <div className={`space-y-1 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
        <div className="font-semibold" itemProp="name">{napData.name}</div>
        <div className="text-sm text-gray-600" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{mainAddress.street}</span><br />
          <span itemProp="addressLocality">{mainAddress.city}, {mainAddress.country}</span>
        </div>
        <div className="text-sm text-gray-600" itemProp="telephone">{napData.phone}</div>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
      
      <div className="space-y-3">
        {/* Addresses */}
        <div className="flex items-start space-x-3">
          {showIcons && <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />}
          <div className="space-y-2 text-gray-700">
            <div className="font-semibold text-gray-900">Διεύθυνση:</div>
            {napData.addresses.map((address, index) => (
              <div key={index} itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="text-sm">
                <span className="font-medium text-gray-800">- {address.label}:</span>{' '}
                <span itemProp="streetAddress">{address.street}</span>,{' '}
                <span itemProp="addressLocality">{address.city}</span>,{' '}
                <span itemProp="addressCountry">{address.country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          {showIcons && <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />}
          <a 
            href={`tel:${napData.phone}`}
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            itemProp="telephone"
          >
            {napData.phone}
          </a>
        </div>

        {/* Emails */}
        <div className="flex items-start space-x-3">
          {showIcons && <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />}
          <div className="space-y-1">
            {napData.emails.map((email, index) => (
              <a 
                key={index}
                href={`mailto:${email}`}
                className="block text-gray-700 hover:text-yellow-500 transition-colors text-sm"
                itemProp="email"
                title={`Click to send email to ${email}`}
              >
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAP;