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
    address: {
      street: '3ο χλμ Γιαννιτσών Θεσσαλονίκης',
      city: 'Γιαννιτσά',
      postalCode: 'GR58100',
      country: 'Ελλάδα'
    },
    phone: '+30 23820 27111',
    email: 'info@intracosta.com'
  };

  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <span itemProp="name">{napData.name}</span>
        <span className="text-gray-400">•</span>
        <span itemProp="address">{napData.address.street}, {napData.address.city}</span>
        <span className="text-gray-400">•</span>
        <span itemProp="telephone">{napData.phone}</span>
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-1 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
        <div className="font-semibold" itemProp="name">{napData.name}</div>
        <div className="text-sm text-gray-600" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{napData.address.street}</span><br />
          <span itemProp="postalCode">{napData.address.postalCode}</span> <span itemProp="addressLocality">{napData.address.city}</span>
        </div>
        <div className="text-sm text-gray-600" itemProp="telephone">{napData.phone}</div>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
      <h3 className="text-lg font-semibold text-gray-900" itemProp="name">
        {napData.name}
      </h3>
      
      <div className="space-y-2">
        <div className="flex items-start space-x-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          {showIcons && <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />}
          <div className="text-gray-700">
            <div itemProp="streetAddress">{napData.address.street}</div>
            <div>
              <span itemProp="postalCode">{napData.address.postalCode}</span>{' '}
              <span itemProp="addressLocality">{napData.address.city}</span>
            </div>
            <div itemProp="addressCountry">{napData.address.country}</div>
          </div>
        </div>

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

        <div className="flex items-center space-x-3">
          {showIcons && <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />}
          <a 
            href={`mailto:${napData.email}`}
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            itemProp="email"
          >
            {napData.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NAP;