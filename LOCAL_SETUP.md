# Local Development Setup

## Prerequisites
- Node.js 18 or higher installed
- npm or yarn package manager
- Git for version control

## Step-by-Step Setup

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/hedamo-dashboard.git
cd hedamo-dashboard
\`\`\`

Replace `yourusername` with your actual GitHub username.

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

This installs all required packages including Next.js, React, Tailwind CSS, and UI components.

### 3. Environment Configuration
\`\`\`bash
cp .env.example .env.local
\`\`\`

The `.env.local` file contains environment variables. For local development, the defaults should work fine.

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

The server will start on `http://localhost:3000`

### 5. Access the Application
Open your browser and navigate to:
- **Main Dashboard**: http://localhost:3000
- **Products**: http://localhost:3000/products
- **Add Product**: http://localhost:3000/add-product
- **Analytics**: http://localhost:3000/analytics

## Development Commands

\`\`\`bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linting
npm run lint

# Format code
npm run format  # If configured
\`\`\`

## Common Issues

### Port 3000 Already in Use
\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Module Not Found Errors
\`\`\`bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
\`\`\`

### Cache Issues
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run dev
\`\`\`

## Making Changes

1. Edit files in the `app/` and `components/` directories
2. Changes are reflected immediately with hot reload
3. Check console for TypeScript or linting errors
4. The application will show errors in the browser if build fails

## Testing Product Features

### Add a Product
1. Click "Add Product" in the sidebar
2. Fill in details (name, category, ingredients)
3. Add certifications
4. Review and submit
5. Redirect to products page shows your new product

### View Analytics
1. Click "Analytics" in the sidebar
2. See product distribution, scores, and metrics
3. View category breakdowns

### Toggle Dark Mode
1. Click the moon/sun icon in the top navigation
2. Theme persists in browser localStorage

## Debugging

### Enable Verbose Logging
Open browser DevTools (F12 or Ctrl+Shift+I):
- Go to Console tab
- Add the following in the products page:
\`\`\`javascript
localStorage.setItem('DEBUG', 'true')
\`\`\`

### Check Local Storage
DevTools → Application → Local Storage:
- View saved products
- See dark mode preference
- Debug any stored data

## Next Steps

Once comfortable with local development:
1. Make your changes
2. Test thoroughly in browser
3. Commit changes: `git add . && git commit -m "Your message"`
4. Push to GitHub: `git push origin main`
5. Vercel automatically deploys on push

## Getting Help

- Check browser Console for error messages
- Review Network tab in DevTools for failed requests
- Check `.next` folder for build artifacts
- Ensure Node.js version matches requirements
