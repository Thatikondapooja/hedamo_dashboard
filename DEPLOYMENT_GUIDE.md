# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications. Deployment is automatic and free!

### Step 1: Push to GitHub

First, ensure your code is on GitHub:

\`\`\`bash
git add .
git commit -m "Prepare for deployment"
git push origin main
\`\`\`

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account (or sign in)
3. Click "Add New..." → "Project"
4. Search for `hedamo-dashboard` repository
5. Click "Import"

### Step 3: Configure Environment Variables

1. In the "Environment Variables" section, add:
   \`\`\`
   Key: NEXT_PUBLIC_APP_NAME
   Value: Hedamo Dashboard
   \`\`\`

2. Click "Deploy"

### Step 4: Wait for Deployment

- Vercel automatically builds and deploys
- You'll see a deployment log
- Once complete, you get a unique URL like `https://hedamo-dashboard.vercel.app`

### Step 5: Verify Deployment

1. Click "Visit" button
2. Test all features
3. Check that products persist
4. Toggle dark mode
5. Test form submission

## Automatic Deployments

### On Push to Main
- Vercel automatically deploys production
- URL: `https://hedamo-dashboard.vercel.app`
- Deployment visible in Vercel dashboard

### On Pull Request
- Preview deployment created automatically
- URL in PR comments: `https://hedamo-dashboard-pr-1.vercel.app`
- Great for testing before merging

### View Deployment Logs

1. Go to Vercel dashboard
2. Click your project
3. Click "Deployments" tab
4. Click deployment to see logs
5. Expand "Build Logs" section

## Custom Domain

### Add Custom Domain

1. Vercel dashboard → Project Settings → Domains
2. Click "Add" Domain
3. Enter your domain (e.g., `hedamo.com`)
4. Follow DNS configuration instructions
5. Wait for verification (10-30 minutes)

### Update DNS Records

Example for `example.com`:

1. Go to your domain registrar
2. Find DNS settings
3. Add CNAME record:
   \`\`\`
   Name: hedamo
   Type: CNAME
   Value: cname.vercel-dns.com
   \`\`\`
4. Save and wait for DNS propagation

## Environment Variables

### In Vercel Dashboard

1. Project Settings → Environment Variables
2. Click "Add"
3. Enter key and value
4. Select which environments (Production/Preview/Development)
5. Click "Save"
6. Redeploy to apply changes

### Local Development

Create `.env.local`:
\`\`\`
NEXT_PUBLIC_APP_NAME=Hedamo Dashboard
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

Note: Only `NEXT_PUBLIC_*` variables are exposed to browser.

## Monitoring

### Vercel Analytics

1. Dashboard → Analytics tab
2. Monitor:
   - Page views
   - Web vitals (Core Web Vitals)
   - Performance metrics
   - Deployment times

### Real-time Logs

1. Dashboard → Logs
2. Filter by:
   - Build logs
   - Runtime logs
   - Edge function logs

## Rollback

If deployment has issues:

1. Vercel dashboard → Deployments
2. Click previous working deployment
3. Click "Redeploy"
4. Vercel rebuilds and redeploys that version

## CI/CD Workflows

The project includes GitHub Actions workflows that run automatically:

### Test Workflow (test.yml)
- Runs on every push and PR
- Runs linting
- Runs build check
- Ensures code quality

### Deploy Workflow (deploy.yml)
- Triggers on main branch push
- Deploys to Vercel production
- Waits for deployment to complete

### Lighthouse Workflow (lighthouse.yml)
- Runs performance audits
- Generates performance report
- Comments results on PR

## Manual Build

If you want to build locally:

\`\`\`bash
# Build production bundle
npm run build

# Preview production build
npm run start
\`\`\`

## Troubleshooting

### Build Fails on Vercel

Check logs in Vercel dashboard:
1. Look for error messages
2. Common issues:
   - Missing environment variables
   - Syntax errors
   - Missing dependencies
   - TypeScript errors

### White Screen After Deploy

1. Check browser console for errors (F12)
2. Check Vercel deployment logs
3. Verify environment variables are set
4. Try clearing browser cache (Ctrl+Shift+Delete)

### Performance Issues

1. Check Core Web Vitals in Vercel Analytics
2. Use Lighthouse in DevTools (F12 → Lighthouse)
3. Check image optimization
4. Review bundle size

### Deployments Taking Too Long

1. Check if build is stuck
2. Check for large dependencies
3. Review build logs for issues
4. Consider optimizing images or code

## Production Checklist

Before deploying to production:

- [ ] All features working locally
- [ ] No console errors
- [ ] Dark mode working
- [ ] Products persist correctly
- [ ] Analytics displaying data
- [ ] Forms validating input
- [ ] Responsive design tested
- [ ] Performance acceptable

## Support

For Vercel-specific issues:
- Vercel docs: https://vercel.com/docs
- Status page: https://www.vercel-status.com
- Email support: support@vercel.com
