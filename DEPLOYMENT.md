# Hedamo Deployment Guide

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier available)
- Node.js 18+ installed locally

## Step-by-Step Deployment

### 1. Prepare Your Repository

\`\`\`bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Hedamo transparency dashboard"

# Create main branch
git branch -M main

# Add remote
git remote add origin https://github.com/yourusername/hedamo.git

# Push to GitHub
git push -u origin main
\`\`\`

### 2. Setup Vercel Deployment

#### Option A: Using Vercel CLI (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
\`\`\`

#### Option B: Using Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Vercel auto-configures Next.js
5. Click "Deploy"

### 3. Configure Environment Variables

In Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add required variables:
   \`\`\`
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   \`\`\`
3. Save and redeploy

### 4. Setup GitHub Actions

The CI/CD workflows are already configured. To activate them:

1. Go to GitHub Repository → Settings → Secrets
2. Add these secrets:
   \`\`\`
   VERCEL_TOKEN: [Your Vercel API Token]
   VERCEL_ORG_ID: [Your Vercel Organization ID]
   VERCEL_PROJECT_ID: [Your Vercel Project ID]
   \`\`\`

3. Get these values:
   - **VERCEL_TOKEN**: Account Settings → Tokens
   - **VERCEL_ORG_ID**: Project Settings → General
   - **VERCEL_PROJECT_ID**: Project Settings → General

### 5. Verify Deployment

1. After push to main branch, GitHub Actions will trigger
2. Check "Actions" tab in GitHub to see workflow progress
3. Vercel deployment URL appears in PR comments
4. Production deployment on main merge

## Production Checklist

- [ ] All environment variables configured
- [ ] GitHub secrets added correctly
- [ ] CI/CD workflows testing
- [ ] Lighthouse performance audit passing
- [ ] Error handling implemented
- [ ] Analytics enabled (Vercel Analytics)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate verified
- [ ] Database connected (if applicable)
- [ ] Backup and recovery plan ready

## Monitoring

### Vercel Dashboard
- Real-time deployment logs
- Performance metrics
- Error tracking
- Analytics overview

### GitHub Actions
- Workflow run history
- Test results
- Deployment status
- Build logs

## Rollback

If issues occur after deployment:

\`\`\`bash
# Revert to previous version
git revert HEAD
git push origin main

# Vercel will automatically deploy the previous version
\`\`\`

## Troubleshooting

### Deployment Failed

1. Check build logs in Vercel Dashboard
2. Verify all dependencies in package.json
3. Check environment variables
4. Run `npm run build` locally to test

### Performance Issues

1. Check Lighthouse audit results
2. Optimize images and assets
3. Enable caching strategies
4. Review bundle size

### Environment Variables Not Loading

1. Verify variable names match .env.example
2. Check Vercel Dashboard settings
3. Redeploy after adding variables
4. Verify NEXT_PUBLIC_ prefix for client-side vars

## Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate generation

## Analytics

Vercel Analytics is enabled. View metrics:
1. Vercel Dashboard → Analytics
2. Monitor Core Web Vitals
3. Track user engagement
4. Identify performance bottlenecks

## Support

- Vercel Documentation: https://vercel.com/docs
- GitHub Actions: https://docs.github.com/actions
- Next.js Deployment: https://nextjs.org/docs/deployment
