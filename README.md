# E-Commerce Showcase Platform

![App Preview](https://imgix.cosmicjs.com/1babdc90-a304-11f0-bba7-d56988718db7-photo-1441986300917-64674bd600d8-1759789848698.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce showcase platform built with Next.js 15 and Cosmic CMS. This application beautifully displays your products, collections, and customer reviews with a clean, professional design.

## Features

- 🛍️ **Dynamic Product Catalog** - Browse all products with detailed information, pricing, and images
- 📦 **Smart Collections** - Curated product groupings like "Best Sellers" and "Tech Essentials"
- ⭐ **Customer Reviews** - Authentic reviews with star ratings and verified purchase badges
- 🎨 **Modern UI/UX** - Clean design with smooth animations and intuitive navigation
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🖼️ **Optimized Images** - Fast-loading images with imgix optimization
- 🔍 **SEO-Friendly** - Dynamic metadata generation for better search visibility

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e44297260d9dd939d1c220&clone_repository=68e4460b260d9dd939d1c240)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> Based on the content model I created for "Design a content model for an e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for Cosmic API integration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with bucket access
- Basic knowledge of React and Next.js

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with depth for related objects
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Collections with Products

```typescript
// Get collections with their related products
const { objects: collections } = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related products
```

### Fetching Product Reviews

```typescript
// Get reviews for a specific product
const { objects: reviews } = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .props(['id', 'title', 'metadata'])
  .depth(1) // Includes product details
```

## Cosmic CMS Integration

This application integrates with three main content types in your Cosmic bucket:

### Products
- Name, description, price, SKU
- Multiple product images
- In-stock status toggle
- Used in collections and reviews

### Collections
- Collection name and description
- Featured image
- Related products (object metafield)
- Showcased on homepage

### Reviews
- Customer name and review text
- Star rating (1-5 stars)
- Related product (object metafield)
- Verified purchase badge

All content is managed through the Cosmic dashboard and fetched dynamically using the Cosmic SDK with proper error handling and TypeScript type safety.

## Deployment Options

### Deploy to Vercel

The easiest way to deploy this Next.js application:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

Alternative deployment option:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

---

Built with [Cosmic](https://www.cosmicjs.com) - The Headless CMS for modern applications.

<!-- README_END -->