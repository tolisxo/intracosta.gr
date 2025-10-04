# Local SEO Quick Start Guide

## 🎯 30-Minute Setup

### Step 1: Google Business Profile (10 minutes)

1. Go to https://business.google.com/
2. Click "Manage now"
3. Search for: **Intracosta, Giannitsa**
4. If found: Claim it | If not: Create new listing

**Essential Info to Add:**
```
Name: Intracosta
Category: Transportation Service
Address: 3ο χλμ Γιαννιτσών Θεσσαλονίκης, 58100 Γιαννιτσά
Phone: +30 23820 27111
Website: https://www.intracosta.gr
Hours: Mon-Fri 09:00-17:00
```

### Step 2: Add Photos (10 minutes)

Upload at least 10 photos:
- 1 logo (square format)
- 1 cover photo (wide format)
- 3-5 truck/fleet photos
- 3-5 office/warehouse photos
- 2-3 team photos

### Step 3: Get Verification Code (5 minutes)

1. In Google Business Profile, click "Get verified"
2. Copy the verification code
3. Open `src/components/SEO/GoogleBusinessIntegration.tsx`
4. Replace line 38:
   ```tsx
   {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
   ```
   With:
   ```tsx
   <meta name="google-site-verification" content="YOUR_ACTUAL_CODE_HERE" />
   ```

### Step 4: Enable Search Console (5 minutes)

1. Go to https://search.google.com/search-console
2. Add property: `https://www.intracosta.gr`
3. Verify using Google Business Profile verification
4. Submit sitemap: `https://www.intracosta.gr/sitemap.xml`

---

## 📋 First Week Checklist

### Day 1: Foundation
- [ ] Complete Google Business Profile
- [ ] Upload 15+ photos
- [ ] Add business description
- [ ] Set business hours
- [ ] Add all services
- [ ] Request verification

### Day 2: Technical
- [ ] Add Google verification code to website
- [ ] Verify Google Search Console
- [ ] Submit sitemap
- [ ] Check structured data with Rich Results Test
- [ ] Verify mobile-friendliness

### Day 3: Citations - Tier 1
- [ ] Bing Places for Business
- [ ] Apple Maps
- [ ] Facebook Business Page (update/complete)
- [ ] LinkedIn Company Page (update/complete)

### Day 4: Citations - Tier 2
- [ ] Yelp for Business
- [ ] Foursquare
- [ ] Here.com
- [ ] TomTom Places

### Day 5: Review Strategy
- [ ] Create review request email template
- [ ] List 10 happy customers to contact
- [ ] Set up review monitoring alerts
- [ ] Prepare response templates

---

## 🔍 Verify Your Implementation

### Test 1: Rich Results (2 minutes)
1. Go to https://search.google.com/test/rich-results
2. Enter: `https://www.intracosta.gr`
3. Verify you see:
   - ✓ MovingCompany schema
   - ✓ Organization schema
   - ✓ FAQPage schema
   - ✓ Review schemas

### Test 2: Mobile-Friendly (1 minute)
1. Go to https://search.google.com/test/mobile-friendly
2. Enter: `https://www.intracosta.gr`
3. Verify: "Page is mobile-friendly"

### Test 3: NAP Consistency (2 minutes)
Check these pages show identical info:
- [ ] Home page footer
- [ ] Contact page
- [ ] About page
- [ ] All service pages

**Must match exactly:**
```
Intracosta
3ο χλμ Γιαννιτσών Θεσσαλονίκης, 58100 Γιαννιτσά
+30 23820 27111
info@intracosta.com
```

### Test 4: Google Preview (1 minute)
Search Google for: `site:intracosta.gr`

Verify you see:
- Proper titles
- Complete descriptions
- Correct URL structure

---

## 📞 Citation Building Template

Copy this exact information for ALL citations:

### Business Details
```
Legal Name: In.Tra.Costa EPE
DBA/Trade Name: Intracosta
Founded: 1999
Industry: Transportation & Logistics
```

### Primary Location
```
Street: 3ο χλμ Γιαννιτσών Θεσσαλονίκης
City: Γιαννιτσά
Postal Code: 58100
Region: Κεντρική Μακεδονία
Country: Greece
```

### Contact
```
Phone: +30 23820 27111
Email: info@intracosta.com
Website: https://www.intracosta.gr
```

### Social Media
```
Facebook: https://www.facebook.com/intracosta
LinkedIn: https://www.linkedin.com/company/intracosta
```

### Business Description (English)
```
Intracosta provides reliable international transport services across Europe since 1999. Based in Giannitsa, Greece, we specialize in road transport, groupage services, customs clearance, and warehousing. Our fleet of 50+ trucks serves 15+ European countries with daily routes to Germany, Austria, Netherlands, Belgium, and more. Family-owned business with 25+ years of experience in logistics solutions.
```

### Business Description (Greek)
```
Η Intracosta προσφέρει αξιόπιστες υπηρεσίες διεθνών μεταφορών σε όλη την Ευρώπη από το 1999. Με έδρα στη Γιαννιτσά, εξειδικευόμαστε σε οδικές μεταφορές, υπηρεσίες groupage, εκτελωνισμό και αποθήκευση. Ο στόλος μας 50+ φορτηγών εξυπηρετεί 15+ ευρωπαϊκές χώρες με καθημερινά δρομολόγια προς Γερμανία, Αυστρία, Ολλανδία, Βέλγιο και άλλα. Οικογενειακή επιχείρηση με 25+ χρόνια εμπειρίας σε λύσεις logistics.
```

### Categories
```
Primary: Transportation Service
Secondary: Logistics Service
Additional: Freight Forwarding, Shipping Company, Moving Company
```

### Keywords
```
international transport, road transport, logistics, warehousing, customs clearance, groupage, freight forwarding, transport greece, transport europe, μεταφορές
```

### Service Areas
```
Greece, Germany, Austria, Netherlands, Belgium, Poland, Luxembourg, Denmark, Cyprus, Czech Republic, Slovakia, Hungary, Romania, Bulgaria, Slovenia
```

---

## 📧 Quick Email Templates

### Review Request Email

**Subject:** How was your experience with Intracosta?

```
Dear [Customer Name],

Thank you for choosing Intracosta for your transport needs.

We would greatly appreciate if you could take 2 minutes to share your experience with our service. Your feedback helps us improve and helps other businesses make informed decisions.

Leave a review here:
[Google Review Link]

Thank you for your time and trust!

Best regards,
Intracosta Team
+30 23820 27111
info@intracosta.com
```

### Positive Review Response

```
Thank you so much for the kind words! We're delighted to have served you successfully and look forward to working with you again. Our team is always here for your transport needs.

Ευχαριστούμε πολύ για τα καλά σας λόγια! Χαιρόμαστε που σας εξυπηρετήσαμε επιτυχώς και ανυπομονούμε να συνεργαστούμε ξανά.
```

### Negative Review Response

```
Thank you for your feedback. We sincerely apologize that your experience didn't meet expectations. We'd like to discuss this with you personally to make things right. Please contact us at +30 23820 27111 or info@intracosta.com.

Σας ευχαριστούμε για το feedback. Λυπούμαστε ειλικρινά και θέλουμε να επικοινωνήσουμε μαζί σας. Παρακαλούμε καλέστε μας στο +30 23820 27111.
```

---

## 🎓 Pro Tips

### 1. Post Regularly on Google Business Profile
- **Frequency:** 2-3 times per month minimum
- **Types:** Service updates, company news, promotions, tips
- **Include:** Call-to-action + phone number

### 2. Respond to ALL Reviews
- **Timeframe:** Within 24-48 hours
- **Positive:** Thank them, invite back
- **Negative:** Apologize, offer to discuss offline

### 3. Keep Photos Fresh
- Add 2-4 new photos monthly
- Show seasonal changes
- Feature new trucks/equipment
- Highlight team members

### 4. Monitor Your Listings
- Google Business Profile: Weekly
- Top 10 citations: Monthly
- All citations: Quarterly

### 5. Track These Metrics
- Google Business Profile views: Target 500+/month
- Website clicks from GBP: Target 100+/month
- Phone calls from GBP: Target 50+/month
- Reviews: Target 2-4/month
- Average rating: Maintain 4.5+

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T:
- Use different business names across platforms
- List PO boxes (use physical address)
- Include keywords in business name
- Delete negative reviews (respond instead)
- Use toll-free or tracking numbers
- Add city name to business name
- Use different phone formats

### ✅ DO:
- Keep NAP identical everywhere
- Use consistent formatting
- Include international code (+30)
- Respond to all reviews professionally
- Use high-quality, recent photos
- Update info immediately when changed
- Monitor for duplicate listings

---

## 🚨 Emergency Fixes

### If Rankings Drop Suddenly:

1. **Check NAP Consistency**
   - Verify all citations match
   - Fix any inconsistencies immediately

2. **Check Google Business Profile**
   - Ensure not suspended
   - Verify all info correct
   - Check for suggested edits

3. **Check Website**
   - Verify structured data valid
   - Test mobile-friendliness
   - Check page load speed

4. **Check Competitors**
   - Compare their profiles
   - Note any new features they added
   - Adjust your strategy

---

## 📱 Mobile Optimization

Your site is already mobile-optimized, but ensure:
- [ ] Click-to-call works: +30 23820 27111
- [ ] Click-to-email works: info@intracosta.com
- [ ] Maps open in native app
- [ ] Forms work on mobile
- [ ] All text readable without zoom

---

## 🎯 30-Day Goals

### Week 1: Foundation
- Complete Google Business Profile
- Get verified
- Upload 15+ photos

### Week 2: Citations
- Build 10 high-quality citations
- Verify NAP consistency

### Week 3: Reviews
- Collect 5+ customer reviews
- Respond to all reviews

### Week 4: Content
- Post 3 updates on GBP
- Create 1 location-specific blog post
- Share on social media

---

## 📚 Resources

### Quick Links:
- **Google Business Profile:** https://business.google.com/
- **Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Schema Validator:** https://validator.schema.org/

### Documentation:
- Full Guide: `docs/LOCAL_SEO_GUIDE.md`
- Implementation Details: `docs/SEO_IMPLEMENTATION_SUMMARY.md`
- Configuration: `src/utils/seoConfig.ts`

---

## 🆘 Need Help?

### Technical Issues:
- Check component files in `src/components/SEO/`
- Review configuration in `src/utils/seoConfig.ts`
- Validate structured data online

### Business Updates:
- Edit `src/utils/seoConfig.ts`
- Update all citations manually
- Verify changes on website

### Performance Questions:
- Check Google Search Console
- Review GBP Insights
- Monitor keyword rankings

---

**Last Updated:** 2025-10-04
**Version:** 1.0
**Status:** Ready to Use
