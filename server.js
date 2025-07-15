import express from 'express';
import helmet from 'helmet';
import path from 'path';
import https from 'https';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

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

const key = fs.readFileSync(process.env.HTTPS_KEY || path.join(__dirname, 'key.pem'));
const cert = fs.readFileSync(process.env.HTTPS_CERT || path.join(__dirname, 'cert.pem'));

https.createServer({ key, cert }, app).listen(443, () => {
  console.log('HTTPS server running on port 443');
});
