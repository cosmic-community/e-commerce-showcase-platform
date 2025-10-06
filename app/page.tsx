import { getProducts, getCollections } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import Hero from '@/components/Hero'
import FeaturedCollections from '@/components/FeaturedCollections'
import ProductGrid from '@/components/ProductGrid'

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts() as Product[];
  const collections = await getCollections() as Collection[];
  
  return (
    <>
      <Hero collections={collections} />
      <FeaturedCollections collections={collections} />
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Products</h2>
            <p className="text-gray-600">Discover our complete collection of premium items</p>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  )
}