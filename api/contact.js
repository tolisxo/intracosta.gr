import nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailFrom = process.env.MAIL_FROM || 'web@intracosta.com';
const mailToContact = process.env.MAIL_TO_CONTACT || process.env.MAIL_TO || 'web@intracosta.com';

const transporter = nodemailer.createTransporter({
  host: smtpHost || 'mail.intracosta.com',
  port: smtpPort || 465,
  secure: (smtpPort || 465) === 465,
  auth: {
    user: smtpUser || 'web@intracosta.com',
    pass: smtpPass || 'wx7zI?PNuEn,QuWs'
  },
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
});

function buildPlainText(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value ?? ''}`)
    .join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body || {};
    const subject = `New contact from ${name || 'Unknown'}`;
    const text = buildPlainText({ name, email, company, message });

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
