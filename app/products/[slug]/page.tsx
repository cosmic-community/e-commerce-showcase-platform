// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import ReviewsList from '@/components/ReviewsList'

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug) as Product | null;
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  
  return {
    title: `${product.metadata.name} | E-Commerce Showcase`,
    description: product.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug) as Product | null;
  
  if (!product) {
    notFound();
  }
  
  const reviews = await getProductReviews(product.id) as Review[];
  
  return (
    <div className="py-12 bg-white">
      <div className="container-custom">
        <ProductDetail product={product} />
        <div className="mt-16">
          <ReviewsList reviews={reviews} />
        </div>
      </div>
    </div>
  )
}