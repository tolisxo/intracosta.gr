import express from 'express';
import helmet from 'helmet';
import path from 'path';
import https from 'https';
import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

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

const csrfProtection = csurf({ cookie: { httpOnly: true, secure: true, sameSite: 'strict' } });
app.use(csrfProtection);
app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken(), { secure: true, sameSite: 'strict' });
  next();
});

app.post('/api/contact', (req, res) => {
  res.json({ success: true });
});
app.post('/api/quote', (req, res) => {
  res.json({ success: true });
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
