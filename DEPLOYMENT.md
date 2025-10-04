# Deployment Guide

## Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Navigate to project directory
cd C:\Users\defco\digital-estate

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. **Create GitHub Repository**
   ```bash
   # If not already connected to GitHub
   gh repo create digital-estate-orcin --public --source=. --remote=origin --push
   
   # Or manually create repo and push
   git remote add origin https://github.com/YOUR_USERNAME/digital-estate-orcin.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Next.js**
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`
   - Click **Deploy**

3. **Enable Analytics**
   - Go to project dashboard
   - Navigate to **Analytics** tab
   - Enable Vercel Analytics (already integrated in code)

### Option 3: Vercel for Git

```bash
# Link to existing Vercel project (if you have one)
vercel link

# Or create new project
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Visit production URL
- [ ] Check all sections load correctly
- [ ] Test contact form submission
- [ ] Verify sitemap at /sitemap.xml
- [ ] Check robots.txt at /robots.txt
- [ ] Verify OG image displays in social shares

### 2. Run Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit on production URL
lhci autorun --collect.url=https://digital-estate-orcin.vercel.app
```

**Target Scores:**
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### 3. Test Functionality
- [ ] Contact form sends (check server logs)
- [ ] All navigation links work
- [ ] Mobile responsive design
- [ ] Keyboard navigation (Tab through page)
- [ ] Skip to content link (Tab once on page load)

### 4. Update Domain (if custom)
If using custom domain:
1. Go to Vercel project settings
2. Navigate to **Domains**
3. Add your custom domain
4. Update DNS records as instructed
5. Update `metadataBase` in `app/layout.tsx`
6. Update links in `next-sitemap.config.js`

### 5. Configure Email Service (Optional)
To enable contact form emails:

**Using Resend:**
```bash
npm install resend
```

In Vercel dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add: `RESEND_API_KEY` = your_api_key

Uncomment email code in `/app/api/contact/route.ts`

**Using SendGrid:**
```bash
npm install @sendgrid/mail
```

Add `SENDGRID_API_KEY` to environment variables

### 6. Replace Placeholders

**Priority Updates:**
1. **Headshot Photo**
   - Replace `/public/headshot-placeholder.svg` with `/public/me.jpg`
   - Recommended: 400×400px, optimized to ~150-200KB
   - Update image path in `app/page.tsx`

2. **OG Image**
   - Create 1200×630 branded image
   - Save as `/public/og-image.jpg`
   - Update path in `app/layout.tsx`

3. **Calendly Link**
   - Create Calendly booking page
   - Update link in Contact section (search for "yourhandle")

4. **PDF One-Pager**
   - Open `/public/onepager.html` in browser
   - Print to PDF (Ctrl+P → Save as PDF)
   - Save as `/public/onepager.pdf`
   - Update link in Contact section

5. **Social Links**
   - Add LinkedIn, Twitter profiles to JSON-LD schema in `app/page.tsx`

6. **Project Photos**
   - Add real photos to case studies (optimize with sharp or similar)
   - Update Accomplishments section

### 7. Monitor & Optimize

**Vercel Analytics**
- Already enabled via `@vercel/analytics`
- View metrics in Vercel dashboard → Analytics

**Logs**
- Check function logs: Vercel dashboard → Functions
- Monitor contact form submissions

**Performance**
- Enable Vercel Speed Insights (optional)
- Monitor Core Web Vitals

## Environment Variables Reference

None required for basic deployment. Optional:

| Variable | Purpose | Required |
|----------|---------|----------|
| `RESEND_API_KEY` | Email via Resend | No |
| `SENDGRID_API_KEY` | Email via SendGrid | No |
| `SITE_URL` | Custom domain | No (auto-detected) |

## Troubleshooting

**Build Fails:**
```bash
# Clear cache and rebuild
npm run build -- --no-cache
```

**Sitemap Not Generating:**
```bash
# Check next-sitemap config
cat next-sitemap.config.js

# Manually generate
npm run postbuild
```

**Contact Form Not Working:**
- Check server logs in Vercel dashboard
- Verify API route at `/api/contact`
- Check browser console for errors

**Images Not Loading:**
- Verify files exist in `/public` directory
- Check Next.js image optimization settings
- Ensure paths are correct (case-sensitive)

## Success Criteria

All 10 tasks completed:
- [x] Real information (Ehab Allababidi, defcon5ready@gmail.com, 773-920-0030)
- [x] One-pager HTML (convert to PDF)
- [x] SEO metadata and social cards
- [x] sitemap.xml, robots.txt, humans.txt
- [x] JSON-LD schema (Person, Service, LocalBusiness)
- [x] Contact API and form
- [x] Accessibility features
- [x] Performance optimizations
- [x] Social proof (case studies)
- [x] All sections present with Law Firm pricing ($4,800)

## Support

Project: Digital Estate Architect  
Contact: defcon5ready@gmail.com  
Phone: (773) 920-0030  
Location: Chicago, Illinois

---

**Next Steps After Deployment:**
1. Run Lighthouse audit
2. Replace placeholder images
3. Add real project photos
4. Configure email service
5. Share production URL!
