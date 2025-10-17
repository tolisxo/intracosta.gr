#!/bin/bash

# cPanel Deployment Script for Intracosta Website
# This script prepares your website for cPanel deployment

echo "🚀 Starting cPanel Deployment Preparation..."
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project for production..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist folder not created."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📁 Your website files are ready in the 'dist' folder"
echo ""
echo "📋 NEXT STEPS FOR CPANEL DEPLOYMENT:"
echo "====================================="
echo ""
echo "1. 📂 Access your cPanel File Manager"
echo "2. 🗂️  Navigate to 'public_html' folder"
echo "3. 📤 Upload ALL contents from the 'dist' folder to 'public_html'"
echo "4. ✅ Make sure .htaccess file is uploaded (it's in the dist folder)"
echo "5. 🌐 Visit your domain to verify the website works"
echo ""
echo "📁 Files to upload from 'dist' folder:"
echo "   - index.html"
echo "   - assets/ (folder with CSS, JS, images)"
echo "   - .htaccess"
echo "   - All other files and folders"
echo ""
echo "🔧 If you have issues:"
echo "   - Check that .htaccess file is uploaded"
echo "   - Verify file permissions (644 for files, 755 for folders)"
echo "   - Clear browser cache and try again"
echo ""
echo "🎉 Deployment preparation complete!"
echo "   Your website is ready to upload to cPanel!"
