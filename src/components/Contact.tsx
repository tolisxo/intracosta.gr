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
          email: t('contact.emailUsTitle'),
          emailSubtitle: t('contact.emailUsSubtitle'),
          phone: t('contact.callUsTitle'),
          phoneSubtitle: t('contact.callUsSubtitle'),
          address: t('contact.visitUsTitle'),
          addressSubtitle: t('contact.visitUsSubtitle'),
          emailValue: 'export@intracosta.com',
          phoneValue: '+30 23820 27111',
          addressValue: '3ο χλμ Γιαννιτσών Θεσσαλονίκης, GR58100 Γιαννιτσά',
          formTitle: t('contactFormTitle'),
          formSubmit: t('sendMessage'),
          nameLabel: t('name'),
          emailLabel: t('email'),
          companyLabel: t('companyName'),
          messageLabel: t('message')
        }}
      />
    </div>
  );
};

export default Contact;