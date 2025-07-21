import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PremiumContact } from './ui/premium-contact';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleFormSubmit = async (formData: any) => {
    const sanitizeInput = (val: string) => val.replace(/<[^>]*>?/gm, '');
    const getCsrfToken = () => {
      const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
      return match ? match[1] : '';
    };

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company || ''),
      message: sanitizeInput(formData.message)
    };

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token': getCsrfToken(),
      },
      body: JSON.stringify(sanitizedData),
    });
  };

  return (
    <div id="contact">
      <PremiumContact 
        onSubmit={handleFormSubmit}
        contactInfo={{
          email: 'export@intracosta.com',
          phone: '+30 23820 27111',
          address: '3ο χλμ Γιαννιτσών Θεσσαλονίκης, GR58100 Γιαννιτσά'
        }}
      />
    </div>
  );
};

export default Contact;