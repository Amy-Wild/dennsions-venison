# Vercel Deployment Checklist - SEO & Indexability
**For**: Dennison's Venison + Future Sites
**Goal**: Production indexable, previews blocked

---

## Part 1: Multiple Sites on Vercel

### ✅ Unlimited Projects Confirmed
**Vercel Free Tier**:
- ✅ Unlimited Projects per account
- ✅ Each project = separate GitHub repo
- ✅ Independent domains, env vars, and build configs
- ✅ Unlimited preview deployments

**Current Setup**:
- Project 1: `silvia-health` (already deployed)
- Project 2: `dennsions-venison` (to be added)

---

## Part 2: Add New Project from GitHub

### Step 1: Connect Repository
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. **Import Git Repository**:
   - Select **GitHub**
   - Find **`dennsions-venison`** repo
   - Click **Import**

### Step 2: Configure Build Settings

**Framework Preset**: Next.js (auto-detected)

**Build & Development Settings**:
```
Build Command:    npm run build
Output Directory: out
Install Command:  npm install
Development Cmd:  npm run dev
```

**Root Directory**: `./` (leave as default)

### Step 3: Environment Variables
**For Dennison's Venison**: None required (static site, no env vars)

**For future sites with env vars**:
- Add `NODE_ENV=production` (if needed)
- Add API keys, database URLs, etc.
- ✅ Preview deploys use preview-specific env vars if configured

### Step 4: Deploy
1. Click **Deploy**
2. Wait ~2 minutes for initial build
3. Vercel generates temporary URL: `dennsions-venison-xyz123.vercel.app`

---

## Part 3: Domains Configuration

### Step 1: Add Custom Domain
1. In Project Settings → **Domains**
2. Click **Add Domain**
3. Enter: `dennisonsvenison.co.uk`
4. Vercel will show DNS configuration instructions

### Step 2: Configure DNS (at domain registrar)

**Option A: Vercel Nameservers (Recommended)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: CNAME/A Records**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Add www Subdomain
1. In Domains, click **Add Domain** again
2. Enter: `www.dennisonsvenison.co.uk`
3. Configure as CNAME to `cname.vercel-dns.com`

### Step 4: Set Primary Domain & Redirect

**Primary Domain**: `www.dennisonsvenison.co.uk` (recommended)

**Redirect**: `dennisonsvenison.co.uk` → `www.dennisonsvenison.co.uk`

**How to Set**:
1. In Domains list, find `www.dennisonsvenison.co.uk`
2. Click **⋮** menu → **Set as Primary**
3. Other domain auto-redirects (301) to primary

**Why www is primary**:
- Industry standard for commercial sites
- Easier to configure CDN/caching
- Matches existing sitemap URLs

---

## Part 4: Production vs Preview Indexability

### ✅ Default Behavior (No Action Needed)
Vercel **automatically** adds `x-robots-tag: noindex` to preview deployments:

**Production URL** (custom domain):
- ✅ `www.dennisonsvenison.co.uk` → Indexable
- ✅ No `X-Robots-Tag` header

**Preview URLs** (auto-generated):
- ❌ `dennsions-venison-git-main-user.vercel.app` → Blocked
- ❌ `dennsions-venison-pr-123.vercel.app` → Blocked
- Header: `X-Robots-Tag: noindex`

### Verify Preview Noindex

**Command** (after deploying a PR):
```bash
curl -I https://dennsions-venison-git-feature-xyz.vercel.app

# Expected output:
HTTP/2 200
x-robots-tag: noindex  # ✅ Preview blocked
```

### Verify Production Indexable

**Command**:
```bash
curl -I https://www.dennisonsvenison.co.uk

# Expected output:
HTTP/2 200
# ✅ NO x-robots-tag header = indexable
```

---

## Part 5: Advanced: Custom Middleware (Optional)

### ⚠️ When to Use Middleware
**Scenarios**:
1. Add noindex to specific routes (e.g., `/admin`)
2. Add security headers
3. A/B testing, redirects, etc.

### Example: Preview-Only Noindex (Explicit Control)

**Create `middleware.ts`** (root of repo):
```typescript
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Check if this is a Vercel preview deployment
  const isPreview = process.env.VERCEL_ENV === 'preview'

  if (isPreview) {
    // Add noindex header for preview deployments
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  // Production: no header added = indexable

  return response
}

export const config = {
  matcher: '/:path*', // Apply to all routes
}
```

**When to use**:
- ✅ If you want explicit control
- ✅ If you need route-specific robots headers
- ❌ NOT needed for basic preview blocking (Vercel does this automatically)

---

## Part 6: Sitemap & robots.txt Delivery

### ✅ Automatic Generation (Next.js)
Your `app/sitemap.ts` and `app/robots.ts` files are automatically served:

**URLs**:
- `https://www.dennisonsvenison.co.uk/sitemap.xml` ✅
- `https://www.dennisonsvenison.co.uk/robots.txt` ✅

**Verification** (after deploy):
```bash
curl https://www.dennisonsvenison.co.uk/robots.txt
# Expected:
# User-agent: *
# Allow: /
# Sitemap: https://www.dennisonsvenison.co.uk/sitemap.xml

curl https://www.dennisonsvenison.co.uk/sitemap.xml
# Expected: Valid XML with all 5 pages
```

### ⚠️ Production URLs Only
Your sitemap currently uses production URLs:
```typescript
url: 'https://www.dennisonsvenison.co.uk',  // ✅ Correct
```

**Important**: Never use preview URLs in sitemap:
```typescript
// ❌ WRONG
url: 'https://dennsions-venison.vercel.app',

// ✅ CORRECT
url: 'https://www.dennisonsvenison.co.uk',
```

---

## Part 7: ISR / SSG / Caching

### Current Setup: Static Site Generation (SSG)
**Your config** (`next.config.js`):
```javascript
output: 'export',  // Static export
```

**Behavior**:
- All pages built at deploy time
- Served as static HTML files
- ✅ Maximum performance
- ✅ Lowest cost
- ✅ Perfect for crawlers (instant HTML)

### Caching Headers (Automatic)
Vercel automatically sets optimal cache headers for static files:

```
Cache-Control: public, max-age=0, must-revalidate  # HTML
Cache-Control: public, max-age=31536000, immutable  # JS/CSS/images
```

**Impact on Crawlers**: ✅ **Positive**
- Bots get fresh HTML on every request
- No stale content issues

### If You Switch to ISR (Future)
**Incremental Static Regeneration** (for frequently updated content):

**Enable**:
```typescript
// In page component
export const revalidate = 3600 // Revalidate every hour
```

**Trade-offs**:
- ✅ Content updates without rebuild
- ⚠️ Can't use `output: 'export'` (needs Next.js server)
- ⚠️ More expensive (uses Vercel Functions)

**For Dennison's Venison**: ✅ Stick with static export (content rarely changes)

---

## Part 8: Post-Deploy Verification

### Checklist (After First Deploy)

#### 1. Verify Production Indexable
```bash
# Check headers
curl -I https://www.dennisonsvenison.co.uk

# Expected:
# HTTP/2 200
# NO x-robots-tag header ✅

# Check meta robots tag
curl -s https://www.dennisonsvenison.co.uk | grep "robots"

# Expected:
# <meta name="robots" content="index, follow"> ✅
```

#### 2. Verify Preview Blocked
```bash
# Get preview URL from Vercel dashboard (after creating a PR)
curl -I https://dennsions-venison-git-feature-branch.vercel.app

# Expected:
# HTTP/2 200
# x-robots-tag: noindex ✅
```

#### 3. Verify robots.txt
```bash
curl https://www.dennisonsvenison.co.uk/robots.txt

# Expected:
# User-agent: *
# Allow: /
# Sitemap: https://www.dennisonsvenison.co.uk/sitemap.xml
```

#### 4. Verify Sitemap
```bash
curl https://www.dennisonsvenison.co.uk/sitemap.xml

# Expected: XML with 5 URLs:
# - https://www.dennisonsvenison.co.uk
# - https://www.dennisonsvenison.co.uk/about
# - https://www.dennisonsvenison.co.uk/products
# - https://www.dennisonsvenison.co.uk/services
# - https://www.dennisonsvenison.co.uk/contact
```

#### 5. Verify Canonical Tags (After Fix)
```bash
curl -s https://www.dennisonsvenison.co.uk | grep canonical

# Expected:
# <link rel="canonical" href="https://www.dennisonsvenison.co.uk"> ✅
```

#### 6. Verify Page Content (Not Blank)
```bash
curl -s https://www.dennisonsvenison.co.uk | grep -i "from the hills"

# Expected: Text found ✅ (confirms HTML has content)
```

#### 7. Check Open Graph Tags
```bash
curl -s https://www.dennisonsvenison.co.uk | grep "og:"

# Expected:
# <meta property="og:title" content="...">
# <meta property="og:description" content="...">
# <meta property="og:url" content="https://www.dennisonsvenison.co.uk">
```

---

## Part 9: Google Search Console Setup

### Step 1: Add Property
1. Go to https://search.google.com/search-console
2. Click **Add Property** → **URL prefix**
3. Enter: `https://www.dennisonsvenison.co.uk`

### Step 2: Verify Ownership

**Method 1: HTML Tag** (Recommended)
1. GSC provides a meta tag: `<meta name="google-site-verification" content="ABC123">`
2. Add to `app/layout.tsx`:

**File**: `app/layout.tsx:32` (in metadata)
```diff
export const metadata: Metadata = {
  title: "...",
  description: "...",
+ verification: {
+   google: 'ABC123',  // Your verification code from GSC
+ },
}
```

3. Deploy to Vercel
4. Click **Verify** in GSC

**Method 2: DNS TXT Record**
1. GSC provides a TXT record value
2. Add TXT record to domain registrar:
   ```
   Type: TXT
   Name: @
   Value: google-site-verification=ABC123
   ```
3. Wait 5-10 minutes for DNS propagation
4. Click **Verify** in GSC

### Step 3: Submit Sitemap
1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `https://www.dennisonsvenison.co.uk/sitemap.xml`
3. Click **Submit**

**Expected**: "Success" with 5 pages discovered

### Step 4: Request Indexing (Optional - Speeds Up Discovery)

**Homepage**:
1. Go to **URL Inspection** (top search bar)
2. Enter: `https://www.dennisonsvenison.co.uk`
3. Click **Request Indexing**

**Key Pages** (repeat for each):
- `https://www.dennisonsvenison.co.uk/about`
- `https://www.dennisonsvenison.co.uk/products`
- `https://www.dennisonsvenison.co.uk/services`
- `https://www.dennisonsvenison.co.uk/contact`

**Timeline**:
- Sitemap submission: Google crawls within 1-3 days
- Request indexing: Usually indexed within 24 hours
- Full site indexing: 1-2 weeks

---

## Part 10: Vercel Project Settings Checklist

### General Settings
- [x] Project Name: `dennsions-venison`
- [x] Framework: Next.js
- [x] Build Command: `npm run build`
- [x] Output Directory: `out`
- [x] Node Version: 18.x (or latest LTS)

### Domains
- [x] Primary Domain: `www.dennisonsvenison.co.uk`
- [x] Redirect: `dennisonsvenison.co.uk` → `www.dennisonsvenison.co.uk` (301)
- [x] SSL: Auto-enabled ✅

### Environment Variables
- [x] `NODE_ENV=production` (optional - Vercel sets this automatically)
- [ ] No sensitive env vars needed (static site)

### Git Integration
- [x] Production Branch: `main` (or `master`)
- [x] Auto-deploy on push: ✅ Enabled
- [x] Preview deployments: ✅ Enabled (auto-noindex)

### Functions & APIs
- [x] Serverless Functions: ❌ Not used (static export)
- [x] Edge Functions: ❌ Not used

### Performance
- [x] Compression: ✅ Auto-enabled (gzip/brotli)
- [x] HTTP/2: ✅ Auto-enabled
- [x] Global CDN: ✅ Auto-enabled

### Security Headers (Optional - Add in vercel.json)

**Create `vercel.json`** (root of repo):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    }
  ]
}
```

**Important**: ❌ Do NOT add `X-Robots-Tag: noindex` here (would block production!)

---

## Part 11: Multi-Site Comparison (Silvia vs Dennison's)

### Silvia Health
**Framework**: Next.js 14 (App Router)
**Build**: `output: 'export'` (static)
**Domain**: `silvia.health`
**Env Vars**: Yes (API keys, database, etc.)
**Caching**: Static files

### Dennison's Venison
**Framework**: Next.js 14 (App Router)
**Build**: `output: 'export'` (static)
**Domain**: `www.dennisonsvenison.co.uk`
**Env Vars**: None (pure static)
**Caching**: Static files

### Shared Settings (Both Sites)
- ✅ Production indexable
- ✅ Previews noindex (automatic)
- ✅ Sitemap.xml generated
- ✅ robots.txt permissive
- ✅ SSL auto-enabled
- ✅ Global CDN
- ✅ Gzip/Brotli compression

### Independent Settings (Per Project)
- Domains
- Environment variables
- Build commands
- Git branch mappings

---

## Part 12: Common Pitfalls & How to Avoid

### ❌ Pitfall 1: Accidentally Deploying with noindex
**Symptom**: Production site has `X-Robots-Tag: noindex`
**Cause**: Custom middleware or env var logic gone wrong

**Prevention**:
1. Use SEO Guard CI workflow (from Part 1)
2. Always test headers with curl after deploy
3. Never use env vars to toggle robots (error-prone)

### ❌ Pitfall 2: Sitemap Points to Preview URLs
**Symptom**: Sitemap contains `dennsions-venison.vercel.app` URLs
**Cause**: Using `process.env.VERCEL_URL` in sitemap

**Fix**: Hard-code production domain:
```typescript
// ❌ WRONG
url: `https://${process.env.VERCEL_URL}`,

// ✅ CORRECT
url: 'https://www.dennisonsvenison.co.uk',
```

### ❌ Pitfall 3: Missing Canonical = Duplicate Content
**Symptom**: Google indexes both `www` and non-`www` versions
**Cause**: No canonical tags + no redirect

**Fix** (from Part 1):
- Add canonical tags to all pages
- Set primary domain in Vercel
- Verify redirect: `curl -I https://dennisonsvenison.co.uk` → 301 to `www`

### ❌ Pitfall 4: robots.txt Blocks Production
**Symptom**: Site not appearing in Google
**Cause**: Copied staging robots.txt with `Disallow: /`

**Prevention**:
1. Check `public/robots.txt` before deploy
2. Verify with: `curl https://www.dennisonsvenison.co.uk/robots.txt`
3. Never use env-based robots.txt (too risky)

### ❌ Pitfall 5: Blank Pages (Client-Only Rendering)
**Symptom**: `curl` shows no content, only `<div id="root"></div>`
**Cause**: Pure client-side SPA (no SSR/SSG)

**Prevention**: ✅ You're using Next.js `output: 'export'` = 100% static HTML
**Verification**: `curl https://www.dennisonsvenison.co.uk | grep "From the hills"` → Found

---

## Quick Reference: Verification Commands

### Production Site (www.dennisonsvenison.co.uk)
```bash
# 1. No noindex header
curl -I https://www.dennisonsvenison.co.uk | grep -i robot
# Expected: No output (no header) ✅

# 2. Meta robots = index
curl -s https://www.dennisonsvenison.co.uk | grep "robots"
# Expected: <meta name="robots" content="index, follow"> ✅

# 3. robots.txt allows crawling
curl https://www.dennisonsvenison.co.uk/robots.txt
# Expected: Allow: / ✅

# 4. Sitemap exists and has production URLs
curl https://www.dennisonsvenison.co.uk/sitemap.xml | grep "dennisonsvenison.co.uk"
# Expected: 5 URLs found ✅

# 5. Page has content (not blank)
curl -s https://www.dennisonsvenison.co.uk | grep -i "from the hills"
# Expected: Text found ✅

# 6. Canonical tag (after fix)
curl -s https://www.dennisonsvenison.co.uk | grep canonical
# Expected: <link rel="canonical" href="https://www.dennisonsvenison.co.uk"> ✅

# 7. Open Graph image (after fix)
curl -s https://www.dennisonsvenison.co.uk | grep "og:image"
# Expected: <meta property="og:image" content="..."> ✅
```

### Preview Site (After Creating PR)
```bash
# Get preview URL from Vercel dashboard (e.g., dennsions-venison-git-fix-123.vercel.app)

# Verify noindex header
curl -I https://dennsions-venison-git-fix-123.vercel.app | grep -i robot
# Expected: X-Robots-Tag: noindex ✅
```

---

## Final Deployment Steps

### Phase 1: Pre-Deploy (Local)
- [x] Fix canonical tags (all pages)
- [x] Add Organization JSON-LD
- [x] Add Open Graph images
- [x] Create custom 404 page
- [x] Create custom error page
- [x] Add lazy loading to images
- [x] Commit and push to `main`

### Phase 2: Vercel Setup
- [ ] Import `dennsions-venison` repo to Vercel
- [ ] Configure build settings (build: `npm run build`, output: `out`)
- [ ] Add custom domain `www.dennisonsvenison.co.uk`
- [ ] Add non-www domain `dennisonsvenison.co.uk`
- [ ] Set `www` as primary (auto-redirect from non-www)
- [ ] Wait for DNS propagation (5-30 minutes)

### Phase 3: Post-Deploy Verification
- [ ] Run all curl verification commands
- [ ] Verify production indexable (no X-Robots-Tag)
- [ ] Verify preview blocked (X-Robots-Tag: noindex)
- [ ] Check robots.txt accessible
- [ ] Check sitemap.xml accessible
- [ ] Verify canonical tags in HTML
- [ ] Verify Open Graph tags in HTML

### Phase 4: Google Search Console
- [ ] Add property for `www.dennisonsvenison.co.uk`
- [ ] Verify ownership (HTML tag or DNS)
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage
- [ ] Request indexing for key pages
- [ ] Monitor crawl stats over next 7 days

### Phase 5: Ongoing Monitoring
- [ ] Set up SEO Guard CI workflow
- [ ] Check Search Console weekly (first month)
- [ ] Monitor indexed pages (expect 5 pages within 2 weeks)
- [ ] Fix any crawl errors reported by GSC

---

## Support Resources

### Vercel Documentation
- Domains: https://vercel.com/docs/concepts/projects/domains
- Preview Deployments: https://vercel.com/docs/concepts/deployments/preview-deployments
- Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables

### Next.js SEO
- Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Sitemap Generation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

### Google Search Console
- Getting Started: https://support.google.com/webmasters/answer/9128668
- Sitemaps: https://support.google.com/webmasters/answer/156184
- Request Indexing: https://support.google.com/webmasters/answer/6065812

---

**End of Vercel Deployment Checklist**
