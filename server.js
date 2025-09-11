import express from 'express';
import helmet from 'helmet';
import path from 'path';
import https from 'https';
import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:'],
      objectSrc: ["'none'"],
      connectSrc: ["'self'"],
    },
  },
}));
app.use(helmet.hsts());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const isProduction = process.env.NODE_ENV === 'production';
const csrfProtection = csurf({ cookie: { httpOnly: true, secure: isProduction, sameSite: 'strict' } });
app.use(csrfProtection);
app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken(), { secure: isProduction, sameSite: 'strict' });
  next();
});

// Email transport
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailFrom = process.env.MAIL_FROM || `no-reply@${(process.env.DOMAIN || 'intracosta.gr')}`;
const mailToContact = process.env.MAIL_TO_CONTACT || process.env.MAIL_TO || 'export@intracosta.com';
const mailToQuote = process.env.MAIL_TO_QUOTE || process.env.MAIL_TO || 'export@intracosta.com';

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465, // true for 465, false for other ports
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

function buildPlainText(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value ?? ''}`)
    .join('\n');
}

app.post('/api/contact', async (req, res) => {
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
});

app.post('/api/quote', async (req, res) => {
  try {
    const payload = req.body || {};
    const subject = `New quote request from ${payload?.companyName || 'Unknown company'}`;
    const text = buildPlainText(payload);

    await transporter.sendMail({
      from: mailFrom,
      to: mailToQuote,
      replyTo: payload?.email || undefined,
      subject,
      text,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to send quote email', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const staticPath = path.join(__dirname, 'dist');
app.use(express.static(staticPath));

app.get('/robots.txt', (_req, res) => {
  res.sendFile(path.join(staticPath, 'robots.txt'));
});

app.get('/sitemap.xml', (_req, res) => {
  res.sendFile(path.join(staticPath, 'sitemap.xml'));
});

// Serve index.html for any SPA route
app.get('*', (_req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

const port = process.env.PORT || 443;

let server;
try {
  const keyPath = process.env.HTTPS_KEY || path.join(__dirname, 'key.pem');
  const certPath = process.env.HTTPS_CERT || path.join(__dirname, 'cert.pem');
  const key = fs.readFileSync(keyPath);
  const cert = fs.readFileSync(certPath);
  server = https.createServer({ key, cert }, app);
} catch {
  console.warn('Failed to load HTTPS certificates, falling back to HTTP');
  server = http.createServer(app);
}

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
