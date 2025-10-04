# Local SEO Implementation Guide for Intracosta

## Overview
This guide provides comprehensive instructions for managing and optimizing local SEO for Intracosta's transport business in Giannitsa, Greece.

## Table of Contents
1. [NAP Consistency](#nap-consistency)
2. [Google Business Profile Setup](#google-business-profile-setup)
3. [Structured Data Implementation](#structured-data-implementation)
4. [Local Citations](#local-citations)
5. [Content Strategy](#content-strategy)
6. [Technical SEO](#technical-seo)

---

## NAP Consistency

### Official Business Information
**CRITICAL**: Use this exact information across ALL platforms to maintain NAP consistency.

```
Business Name: Intracosta
Legal Name: In.Tra.Costa EPE

Primary Address:
3ο χλμ Γιαννιτσών Θεσσαλονίκης
58100 Γιαννιτσά
Κεντρική Μακεδονία, Greece

Phone: +30 23820 27111
Email: info@intracosta.com
Website: https://www.intracosta.gr

Coordinates: 40.7934, 22.4089
```

### Additional Locations

**Secondary Office (Greece):**
```
1 χλμ Λάκκας-Σκύδρας
Πέλλα, Greece
```

**Germany Office:**
```
Intracosta Deutschland
Am Kanal 2-4
49549 Ladbergen, Germany
```

---

## Google Business Profile Setup

### Step 1: Claim Your Business

1. Visit [Google Business Profile](https://business.google.com/)
2. Sign in with your business Google account
3. Search for "Intracosta Giannitsa"
4. If found, claim it. If not, create new listing.

### Step 2: Complete Your Profile

**Business Category:**
- Primary: Transportation Service
- Additional: Logistics Service, Shipping Company, Freight Forwarding Service

**Business Description:**
```
Η Intracosta με έδρα στη Γιαννιτσά προσφέρει αξιόπιστες διεθνείς μεταφορές σε όλη την Ευρώπη από το 1999. Εξειδικευμένες υπηρεσίες οδικών μεταφορών, groupage, εκτελωνισμού και αποθήκευσης. Εξυπηρετούμε 15+ ευρωπαϊκές χώρες με καθημερινά δρομολόγια.

Intracosta based in Giannitsa offers reliable international transport across Europe since 1999. Specialized road transport, groupage, customs clearance and warehousing services. Serving 15+ European countries with daily routes.
```

**Services List:**
- International Road Transport
- Domestic Transport Greece
- Groupage Services
- Customs Clearance
- Warehousing & Storage
- Logistics Solutions
- Full Truckload (FTL)
- Less Than Truckload (LTL)

**Business Hours:**
```
Monday: 09:00 - 17:00
Tuesday: 09:00 - 17:00
Wednesday: 09:00 - 17:00
Thursday: 09:00 - 17:00
Friday: 09:00 - 17:00
Saturday: Closed
Sunday: Closed
```

**Business Attributes:**
- ✓ Identifies as women-led
- ✓ 25+ years in business
- ✓ Online estimates available
- ✓ CMR insurance included

### Step 3: Add Photos

**Required Photos:**
- Logo (1:1 ratio, min 720x720px)
- Cover photo (16:9 ratio, min 1080x608px)
- Office exterior (3-5 photos)
- Fleet photos (10+ photos)
- Team photos (3-5 photos)
- Interior/warehouse (5+ photos)

**Photo Guidelines:**
- High resolution (at least 720px)
- Well-lit, professional quality
- Recent (within 1 year)
- No watermarks or text overlays
- Show actual business operations

### Step 4: Posts & Updates

Post regularly (at least 2-3 times per month):
- Service announcements
- Route updates
- Company achievements
- Industry news
- Seasonal offers

---

## Structured Data Implementation

### Components Already Implemented

All structured data is implemented in React components located in `src/components/SEO/`:

1. **LocalBusinessSchema.tsx** - Main business schema
2. **GoogleBusinessIntegration.tsx** - Organization & FAQ schema
3. **LocalSEOHead.tsx** - Meta tags & Open Graph
4. **NAP.tsx** - NAP display component with microdata
5. **ReviewSchema.tsx** - Customer reviews schema
6. **CitationConsistency.tsx** - Hidden NAP for consistency

### Verify Structured Data

1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter: `https://www.intracosta.gr`
3. Verify all schemas are valid:
   - MovingCompany
   - Organization
   - FAQPage
   - BreadcrumbList
   - Reviews

### Schema Types Implemented

```json
{
  "schemas": [
    "LocalBusiness / MovingCompany",
    "Organization",
    "ContactPage",
    "Service",
    "FAQPage",
    "BreadcrumbList",
    "Review",
    "AggregateRating"
  ]
}
```

---

## Local Citations

### Priority Citation Platforms

Build citations on these platforms using the exact NAP information:

#### Tier 1 (Essential)
- [ ] Google Business Profile ⭐⭐⭐⭐⭐
- [ ] Bing Places for Business
- [ ] Apple Maps
- [ ] Facebook Business Page
- [ ] LinkedIn Company Page

#### Tier 2 (Important)
- [ ] Yelp
- [ ] Foursquare
- [ ] Here.com
- [ ] TomTom Places
- [ ] Waze Local

#### Tier 3 (Industry-Specific)
- [ ] Transport Directory Greece
- [ ] European Transport Association
- [ ] FreightBook
- [ ] Trans.eu
- [ ] Timocom

#### Tier 4 (Local Greek)
- [ ] e-forologia.gr
- [ ] 11888.gr
- [ ] vrisko.gr
- [ ] thessaloniki.com business directory
- [ ] Local Chamber of Commerce listings

### Citation Building Process

1. **Before You Start:**
   - Use the NAP data from `src/utils/seoConfig.ts`
   - Have logo files ready (SVG and PNG formats)
   - Prepare business photos
   - Have business registration documents

2. **For Each Platform:**
   - Use identical business name
   - Use identical address format
   - Use identical phone format
   - Link to same website URL
   - Use consistent categories
   - Add complete business description

3. **After Building Citation:**
   - Verify listing appears correctly
   - Bookmark listing URL
   - Document in spreadsheet
   - Set up notifications for reviews

---

## Content Strategy

### Location-Specific Pages

Create pages targeting specific service areas:

**Template Structure:**
```
[Service] in [City] | Intracosta

Content includes:
- H1: [Service] Services in [City]
- NAP prominently displayed
- Local landmarks/context
- Service area map
- Local testimonials
- Distance/travel time info
- Call-to-action with phone
```

**Priority Cities to Target:**
- Γιαννιτσά (Giannitsa) - Primary
- Θεσσαλονίκη (Thessaloniki) - Major hub
- Έδεσσα (Edessa)
- Βέροια (Veria)
- Κατερίνη (Katerini)
- Σέρρες (Serres)

### Location-Specific Keywords

**Greek Keywords:**
```
μεταφορές [πόλη]
διεθνείς μεταφορές [περιοχή]
logistics [πόλη]
εκτελωνισμός [περιοχή]
οδικές μεταφορές [πόλη]
αποθήκευση [περιοχή]
```

**English Keywords:**
```
transport [city]
international transport [region]
logistics [city]
customs clearance [area]
road transport [city]
warehousing [region]
```

### Content Recommendations

1. **Blog Posts:**
   - "Transport Routes from Giannitsa to Europe"
   - "Customs Clearance Guide for Greek Exporters"
   - "Benefits of Local Warehousing in Central Macedonia"
   - "Direct Transport from Thessaloniki to Germany"

2. **Landing Pages:**
   - Transport from Giannitsa to [Country]
   - Logistics Services in Central Macedonia
   - Warehousing Solutions near Thessaloniki
   - Express Transport Giannitsa-Germany

3. **FAQ Pages:**
   - Local business hours
   - Service areas covered
   - Pricing for local vs international
   - How to reach the Giannitsa office

---

## Technical SEO

### Meta Tags Configuration

All pages include location-specific meta tags:

```html
<!-- Geographic Tags -->
<meta name="geo.region" content="GR-CM" />
<meta name="geo.placename" content="Γιαννιτσά" />
<meta name="geo.position" content="40.7934;22.4089" />
<meta name="ICBM" content="40.7934, 22.4089" />
```

### Hreflang Implementation

Multi-language support for local SEO:

```html
<link rel="alternate" hreflang="el" href="https://www.intracosta.gr/el/" />
<link rel="alternate" hreflang="en" href="https://www.intracosta.gr/en/" />
<link rel="alternate" hreflang="de" href="https://www.intracosta.gr/de/" />
<link rel="alternate" hreflang="x-default" href="https://www.intracosta.gr/" />
```

### Sitemap

Generate and submit sitemap.xml to:
- Google Search Console
- Bing Webmaster Tools

Location: `https://www.intracosta.gr/sitemap.xml`

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://www.intracosta.gr/sitemap.xml
```

---

## Performance Monitoring

### KPIs to Track

1. **Google Search Console:**
   - Local search impressions
   - Click-through rate
   - Average position for local keywords
   - Mobile usability

2. **Google Business Profile Insights:**
   - Total views (search vs maps)
   - Customer actions (calls, directions, website clicks)
   - Photo views
   - Review count and average rating

3. **Website Analytics:**
   - Organic traffic from Giannitsa/Thessaloniki region
   - Conversion rate for local visitors
   - Top landing pages for local traffic
   - Mobile vs desktop traffic

### Monthly Checklist

- [ ] Post 2-3 updates on Google Business Profile
- [ ] Respond to all reviews (positive & negative)
- [ ] Update business hours if changed
- [ ] Add new photos (minimum 2 per month)
- [ ] Check NAP consistency across top 20 citations
- [ ] Monitor local keyword rankings
- [ ] Review and respond to questions in GBP
- [ ] Update seasonal service information

---

## Review Management

### Requesting Reviews

**After successful delivery:**
```
Email Template:

Θέμα: Πώς ήταν η εμπειρία σας με την Intracosta;

Αγαπητέ/ή [Όνομα],

Ευχαριστούμε που επιλέξατε την Intracosta για τις μεταφορές σας.
Θα θέλαμε πολύ να μοιραστείτε την εμπειρία σας.

[Link to Google Review]

Με εκτίμηση,
Ομάδα Intracosta
+30 23820 27111
```

### Responding to Reviews

**Positive Review Response Template:**
```
Ευχαριστούμε πολύ για τα καλά σας λόγια! Είμαστε χαρούμενοι που σας εξυπηρετήσαμε επιτυχώς. Η ομάδα μας είναι πάντα εδώ για τις μεταφορικές σας ανάγκες.

Thank you for your kind words! We're happy to have served you successfully. Our team is always here for your transport needs.
```

**Negative Review Response Template:**
```
Σας ευχαριστούμε για το feedback σας. Λυπούμαστε που η εμπειρία σας δεν ήταν όπως αναμέναμε. Θα θέλαμε να επικοινωνήσουμε μαζί σας για να λύσουμε το θέμα. Παρακαλούμε επικοινωνήστε στο +30 23820 27111.

Thank you for your feedback. We're sorry your experience wasn't as expected. We'd like to connect with you to resolve this. Please contact us at +30 23820 27111.
```

---

## Tools & Resources

### Verification Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Citation Management
- Moz Local
- BrightLocal
- Whitespark
- Yext

### Rank Tracking
- BrightLocal
- SE Ranking
- SEMrush Local
- Whitespark Local Rank Tracker

### Review Management
- Google Business Profile App
- ReviewTrackers
- Birdeye
- Podium

---

## Quick Start Checklist

### Week 1: Foundation
- [ ] Claim Google Business Profile
- [ ] Complete all GBP information
- [ ] Add 15+ high-quality photos
- [ ] Verify structured data on website
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools

### Week 2: Citations
- [ ] Build Tier 1 citations (5 platforms)
- [ ] Create spreadsheet to track citations
- [ ] Verify NAP consistency
- [ ] Add business to Apple Maps
- [ ] Complete Facebook Business Page

### Week 3: Content
- [ ] Create location-specific landing pages
- [ ] Add NAP to footer of all pages
- [ ] Optimize existing pages with local keywords
- [ ] Create FAQ page with local questions
- [ ] Add embedded Google Map to contact page

### Week 4: Outreach & Reviews
- [ ] Request reviews from 10 past clients
- [ ] Respond to existing reviews
- [ ] Create review request email template
- [ ] Set up review monitoring alerts
- [ ] Create process for ongoing review requests

---

## Support & Maintenance

### Monthly Tasks
- Update GBP posts
- Monitor and respond to reviews
- Check citation consistency
- Add new photos to GBP
- Review local keyword rankings

### Quarterly Tasks
- Audit all citations for accuracy
- Update business information if changed
- Review and refresh location content
- Analyze local SEO performance
- Adjust strategy based on results

### Annual Tasks
- Comprehensive NAP audit
- Update all business photos
- Review and update service descriptions
- Competitive analysis
- Strategy planning for next year

---

## Contact Information for Support

For questions about this implementation:
- Technical: Review code in `src/components/SEO/`
- Configuration: Check `src/utils/seoConfig.ts`
- Content: Review this guide and update as needed

---

**Document Version:** 1.0
**Last Updated:** 2025-10-04
**Maintained By:** Development Team
