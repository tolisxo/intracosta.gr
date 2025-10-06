# Intracosta Transport & Logistics

Modern, multilingual website for Intracosta transport and logistics company.

## Features

- 🌍 Multilingual support (Greek, English, German)
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📋 Advanced quote request form
- 🔒 Secure form submission with CSRF protection
- 💾 Supabase database integration
- ⚡ SEO optimized

## Deployment to Vercel

### Environment Variables

Before deploying to Vercel, you need to set the following environment variables in your Vercel project settings:

1. Go to your Vercel project
2. Navigate to Settings → Environment Variables
3. Add the following variables:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Deploy

The project will automatically build and deploy when you push to your connected Git repository.

## Local Development

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your Supabase credentials
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `/src/components` - React components
- `/src/pages` - Page components for routing
- `/src/contexts` - React contexts (Language, etc.)
- `/src/utils` - Utility functions and Supabase client
- `/public` - Static assets
- `/supabase/migrations` - Database migration files

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- React Router
- Framer Motion
- React Helmet Async
