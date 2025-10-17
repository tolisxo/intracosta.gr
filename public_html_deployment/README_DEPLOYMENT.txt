🚀 INTRACOSTA WEBSITE - CPANEL DEPLOYMENT PACKAGE
==================================================

📁 WHAT'S IN THIS FOLDER:
This folder contains ALL the files you need to upload to your cPanel's public_html directory.

📋 EXACT FILES TO UPLOAD TO PUBLIC_HTML:
========================================

✅ REQUIRED FILES (Upload ALL of these):
- index.html                    (Main website file)
- .htaccess                     (CRITICAL - enables routing)
- assets/                       (CSS, JavaScript, images)
- locales/                      (Translation files for 3 languages)
- maps/                         (Interactive map data)
- team/                         (Team member photos)
- robots.txt                    (SEO file)
- sitemap.xml                   (SEO sitemap)

✅ IMAGE FILES (Upload ALL of these):
- intracosta001.png             (Main logo)
- intracosta002.png             (Secondary logo)
- intracosta003.png             (Additional logo)
- intracosta.svg                (SVG logo)
- intracosta-logo.svg           (Alternative logo)
- intracosta-logo-bird.svg      (Bird logo)
- e-bannerseuerdf730x90-1.jpg  (EU funding banner)
- sticker-website_etpa_gr_highres-1.jpg (ETPA sticker)

✅ OPTIONAL FILES (Can upload if needed):
- _headers                      (Netlify headers)
- _redirects                    (Netlify redirects)
- logocorrectversion.svg        (Logo variant)

🔧 STEP-BY-STEP DEPLOYMENT:
===========================

1. 📂 ACCESS CPANEL:
   - Log into your hosting provider's cPanel
   - Click "File Manager"
   - Navigate to "public_html" folder

2. 🗑️ CLEAR EXISTING FILES:
   - Select all existing files in public_html
   - Delete them (or backup first if needed)

3. 📤 UPLOAD NEW FILES:
   - Select ALL files from this folder
   - Upload them to public_html
   - Make sure to upload the CONTENTS of this folder, not the folder itself

4. ✅ VERIFY UPLOAD:
   Your public_html should contain:
   - index.html (in root)
   - .htaccess (in root) ← CRITICAL!
   - assets/ folder
   - locales/ folder
   - All image files
   - All other files

5. 🌐 TEST YOUR WEBSITE:
   - Visit your domain (e.g., https://intracosta.gr)
   - Test navigation between pages
   - Test language switching (ΕΛ/EN/DE)
   - Test service pages (e.g., /international-transport)

🚨 CRITICAL NOTES:
==================

⚠️  .htaccess FILE IS ESSENTIAL:
   - Without .htaccess, service pages will show 404 errors
   - Make sure .htaccess is uploaded to public_html root
   - File permissions should be 644

⚠️  FILE PERMISSIONS:
   - Files: 644 permissions
   - Folders: 755 permissions
   - Set in cPanel File Manager

⚠️  UPLOAD CONTENTS, NOT FOLDER:
   - Upload files FROM this folder TO public_html
   - Don't upload this folder itself

🔧 TROUBLESHOOTING:
===================

❌ Problem: 404 Error on Service Pages
✅ Solution: Check that .htaccess file is uploaded

❌ Problem: Website Shows "Cannot GET /"
✅ Solution: Ensure index.html is in public_html root

❌ Problem: CSS/Images Not Loading
✅ Solution: Check file permissions (644 for files, 755 for folders)

❌ Problem: Language Switching Not Working
✅ Solution: Verify locales/ folder is uploaded completely

📞 NEED HELP?
=============
If you encounter issues:
1. Check file permissions in cPanel
2. Verify all files are uploaded
3. Clear browser cache
4. Contact your hosting provider

🎉 SUCCESS CHECKLIST:
=====================
- [ ] All files uploaded to public_html
- [ ] .htaccess file is present
- [ ] Website loads on your domain
- [ ] Navigation works
- [ ] Language switching works
- [ ] Service pages work (e.g., /international-transport)
- [ ] All images display correctly

🚀 YOUR WEBSITE IS NOW LIVE!
============================
