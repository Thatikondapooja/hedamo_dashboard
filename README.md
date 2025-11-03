# Hedamo - Product Transparency Dashboard

A comprehensive AI-powered product transparency and management platform built with Next.js 16, React 19, and Tailwind CSS v4. This application empowers producers to showcase their commitment to quality and sustainability through intuitive interfaces and powerful AI-driven insights.

## Features

### Core Features
- **Product Management** - Browse, create, and manage your product catalog
- **Transparency Scoring** - AI-powered transparency analysis with detailed scoring (0-100)
- **Multi-Step Form Wizard** - Intuitive product submission flow with validation
- **Product Analytics** - Real-time dashboards with distribution charts and insights
- **Dark Mode** - Full dark/light theme support with system preference detection
- **Responsive Design** - Mobile-first design that works seamlessly on all devices

### Dashboard Features
- Interactive product table with sorting and filtering
- Color-coded transparency score indicators
- Product status tracking (draft, submitted, published)
- Detailed product analytics view
- Risk flag analysis and severity indicators
- AI-generated improvement suggestions

### Analytics Features
- Score distribution visualization
- Category breakdown charts
- Portfolio overview metrics
- Status-based analytics
- Real-time data aggregation

### Advanced Features
- Dark mode with persistent preferences
- Smooth animations and transitions
- Radial progress gauges for score visualization
- Chart visualizations using Recharts
- Mock API with realistic delays
- Production-ready error handling

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19.2
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **Database**: Mock API (easily swappable)
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Project Structure

\`\`\`
hedamo/
├── app/
│   ├── layout.tsx              # Root layout with dark mode support
│   ├── page.tsx                # Dashboard landing page
│   ├── globals.css             # Global styles with design tokens
│   ├── products/
│   │   ├── page.tsx            # Products listing
│   │   └── [id]/
│   │       └── page.tsx        # Product detail view
│   ├── add-product/
│   │   └── page.tsx            # Product form wizard
│   ├── analytics/
│   │   └── page.tsx            # Analytics dashboard
│   └── settings/
│       └── page.tsx            # Settings page
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx         # Navigation sidebar
│   │   └── top-nav.tsx         # Top navigation bar
│   ├── products/
│   │   ├── product-table.tsx   # Products table view
│   │   └── product-detail.tsx  # Detailed product view
│   ├── forms/
│   │   ├── product-form-wizard.tsx
│   │   └── steps/
│   │       ├── basic-info-step.tsx
│   │       ├── ingredients-step.tsx
│   │       ├── certifications-step.tsx
│   │       ├── review-step.tsx
│   │       └── success-step.tsx
│   ├── analytics/
│   │   ├── analytics-dashboard.tsx
│   │   ├── stats-overview.tsx
│   │   ├── score-distribution-chart.tsx
│   │   └── category-breakdown-chart.tsx
│   ├── visualizations/
│   │   └── score-gauge.tsx     # Radial score visualization
│   └── ui/
│       ├── button.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── card.tsx
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   ├── mock-data.ts            # Mock data and utilities
│   ├── api.ts                  # API simulation layer
│   └── utils.ts                # Utility functions
├── hooks/
│   ├── use-dark-mode.tsx       # Dark mode hook
│   └── use-mobile.tsx          # Mobile detection hook
├── .github/
│   └── workflows/
│       ├── test.yml            # Testing workflow
│       ├── deploy.yml          # Deployment workflow
│       └── lighthouse.yml      # Performance audit workflow
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint configuration
└── vercel.json                 # Vercel deployment config
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/hedamo.git
   cd hedamo
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

\`\`\`bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Testing
npm run test             # Run test suite (when configured)
\`\`\`

## Usage Guide

### Adding a Product

1. Navigate to **Add Product** from the sidebar
2. Fill in **Basic Information** (name, description, category)
3. Add **Ingredients** with sourcing details
4. Select or add **Certifications**
5. Review all details
6. Submit for AI analysis

### Viewing Analytics

1. Click **Analytics** in the sidebar
2. View portfolio metrics and score distribution
3. Monitor category breakdown
4. Track status distribution

### Managing Products

1. Go to **Products** page
2. View all products in the table
3. Click **View** to see detailed analysis
4. Access AI suggestions and risk flags
5. Delete products as needed

## API Integration

The project includes a mock API layer (`lib/api.ts`) that simulates backend calls. To integrate with a real API:

1. Update API endpoints in `lib/api.ts`
2. Replace mock data with real database queries
3. Implement proper error handling
4. Add authentication as needed

Example:
\`\`\`typescript
export const api = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch('/api/products')
    return response.json()
  },
  // ... more endpoints
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import this repository
   - Vercel auto-detects Next.js configuration

3. **Environment Variables**
   Add any required environment variables in Vercel dashboard

4. **Deploy**
   - Automatic deployment on push to main
   - Preview deployments for PRs

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## CI/CD Pipeline

The project includes GitHub Actions workflows for:

- **Testing** (`test.yml`) - Runs on every push and PR
- **Deployment** (`deploy.yml`) - Auto-deploys to Vercel on main branch
- **Lighthouse** (`lighthouse.yml`) - Performance audits

### Setting Up CI/CD

1. **Add Secrets to GitHub**
   - `VERCEL_TOKEN` - From Vercel account settings
   - `VERCEL_ORG_ID` - From Vercel project
   - `VERCEL_PROJECT_ID` - From Vercel project

2. **Push to trigger workflows**
   \`\`\`bash
   git push origin feature-branch
   \`\`\`

## Design System

### Color Palette
- **Primary**: Purple (oklch(0.4 0.2 280))
- **Secondary**: Blue (oklch(0.7 0.1 200))
- **Accent**: Cyan (oklch(0.5 0.2 180))
- **Neutral**: Gray scale with light/dark variants

### Typography
- **Font**: Geist (sans) + Geist Mono
- **Heading**: Bold, 24-64px
- **Body**: Regular, 14-16px
- **Line Height**: 1.4-1.6

## Performance Optimizations

- React Compiler enabled for optimal rendering
- Image optimization through Next.js
- CSS-in-JS with Tailwind for zero-runtime overhead
- Efficient component splitting and lazy loading
- Mock API with realistic delays for testing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linter: `npm run lint`
5. Commit and push
6. Open a pull request

## License

MIT License - feel free to use this project for personal or commercial use.

## Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Review code comments

## Roadmap

- [ ] Real database integration
- [ ] User authentication (Auth0/Supabase)
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF/CSV)
- [ ] API documentation
- [ ] Unit and integration tests
- [ ] Performance monitoring
- [ ] Mobile app version
- [ ] Internationalization (i18n)
- [ ] Real AI analysis integration

## Author

Built with ❤️ for product transparency and sustainability.

---

**Last Updated**: November 2025
