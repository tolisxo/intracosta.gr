# cPanel Deployment Guide for Intracosta Website

## 🚀 Quick Start

### Option 1: Automated Deployment (Recommended)
```bash
npm run deploy:prepare
```
This will build your website and show you exactly what to do next.

### Option 2: Manual Steps
```bash
npm run build
```
Then follow the manual upload steps below.

---

## 📋 Step-by-Step cPanel Deployment

### Step 1: Build Your Website
1. Open terminal/command prompt
2. Navigate to your project folder:
   ```bash
   cd /path/to/your/intracosta.gr-10
   ```
3. Run the build command:
   ```bash
   npm run build
   ```
4. Wait for build to complete (you'll see "✓ built in X.XXs")

### Step 2: Access cPanel
1. Log into your hosting provider's cPanel
2. Find and click **"File Manager"**
3. Navigate to your domain's folder:
   - Usually `public_html` for main domain
   - Or `public_html/subdomain` for subdomains

### Step 3: Upload Files
1. **Clear existing files** (if any) from `public_html`
2. **Upload ALL contents** from the `dist` folder:
   - Select all files in `dist` folder
   - Upload to `public_html`
   - **Important**: Upload the contents of `dist`, not the `dist` folder itself

### Step 4: Verify Upload
Your `public_html` should contain:
- ✅ `index.html`
- ✅ `assets/` folder (with CSS, JS, images)
- ✅ `.htaccess` file
- ✅ All other files from `dist`

### Step 5: Test Your Website
1. Visit your domain (e.g., `https://intracosta.gr`)
2. Test navigation between pages
3. Test language switching
4. Test service pages (e.g., `/international-transport`)

---

## 🔧 Troubleshooting

### Problem: 404 Error on Service Pages
**Solution**: Make sure `.htaccess` file is uploaded
- Check that `.htaccess` exists in `public_html`
- Verify file permissions (644)

### Problem: Website Shows "Cannot GET /"
**Solution**: Check file structure
- Ensure `index.html` is in `public_html` root
- Not in a subfolder

### Problem: CSS/JS Not Loading
**Solution**: Check file permissions
- Files: 644 permissions
- Folders: 755 permissions
- Use cPanel File Manager to set permissions

### Problem: Images Not Showing
**Solution**: Check file paths
- Ensure all files from `dist` are uploaded
- Check that `assets` folder contains all images

---

## 🔄 Setting Up Automatic Deployment

### Method 1: cPanel Git Version Control
1. In cPanel, go to **"Git Version Control"**
2. **Clone Repository**:
   - Repository URL: `https://github.com/yourusername/intracosta.gr.git`
   - Repository Path: `/home/yourusername/repositories/intracosta`
3. **Set up Deployment**:
   - Deployment Path: `/home/yourusername/public_html`
   - Post-receive Hook:
     ```bash
     cd /home/yourusername/repositories/intracosta
     npm install
     npm run build
     cp -r dist/* /home/yourusername/public_html/
     ```

### Method 2: Manual Git Deployment
1. SSH into your server
2. Clone repository:
   ```bash
   git clone https://github.com/yourusername/intracosta.gr.git
   cd intracosta.gr
   ```
3. Build and deploy:
   ```bash
   npm install
   npm run build
   cp -r dist/* /path/to/public_html/
   ```

---

## 📁 File Structure After Deployment

```
public_html/
├── index.html          # Main HTML file
├── .htaccess          # Apache configuration
├── assets/            # CSS, JS, images
│   ├── index-xxx.css
│   ├── index-xxx.js
│   └── images/
├── locales/           # Translation files
│   ├── el/
│   ├── en/
│   └── de/
└── other static files
```

---

## 🎯 Important Notes

1. **Always build before deploying**: Run `npm run build` to create the `dist` folder
2. **Upload dist contents**: Upload files from `dist` folder, not the `dist` folder itself
3. **Keep .htaccess**: This file is essential for React Router to work
4. **Test thoroughly**: Check all pages and functionality after deployment
5. **Backup first**: Always backup your current website before deploying

---

## 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all files are uploaded correctly
3. Check file permissions in cPanel
4. Clear browser cache and try again
5. Contact your hosting provider if server issues persist

---

## ✅ Deployment Checklist

- [ ] Built the project (`npm run build`)
- [ ] Accessed cPanel File Manager
- [ ] Cleared old files from `public_html`
- [ ] Uploaded all contents from `dist` folder
- [ ] Verified `.htaccess` file is present
- [ ] Tested website on domain
- [ ] Tested all service pages
- [ ] Tested language switching
- [ ] Verified all images load correctly

**🎉 Your website is now live on cPanel!**
