const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const smtpHost = process.env.SMTP_HOST || 'mail.intracosta.com';
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const smtpUser = process.env.SMTP_USER || 'web@intracosta.com';
    const smtpPass = process.env.SMTP_PASS || 'wx7zI?PNuEn,QuWs';
    const mailFrom = process.env.MAIL_FROM || 'web@intracosta.com';
    const mailToContact = process.env.MAIL_TO_CONTACT || 'web@intracosta.com';

    const transporter = nodemailer.createTransporter({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    const { name, email, company, message } = req.body || {};
    const subject = `New contact from ${name || 'Unknown'}`;
    const text = `Name: ${name || ''}\nEmail: ${email || ''}\nCompany: ${company || ''}\nMessage: ${message || ''}`;

    await transporter.sendMail({
      from: mailFrom,
      to: mailToContact,
      replyTo: email || undefined,
      subject,
      text,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to send contact email', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
