import { Collection } from '@/types'
import Link from 'next/link'

interface HeroProps {
  collections: Collection[];
}

export default function Hero({ collections }: HeroProps) {
  const featuredCollection = collections[0];
  
  if (!featuredCollection) {
    return null;
  }
  
  const imageUrl = featuredCollection.metadata.featured_image?.imgix_url;
  
  return (
    <section className="relative h-[600px] bg-gray-900 text-white overflow-hidden">
      {imageUrl && (
        <div className="absolute inset-0">
          <img
            src={`${imageUrl}?w=1920&h=1200&fit=crop&auto=format,compress`}
            alt={featuredCollection.metadata.name}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      )}
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            {featuredCollection.metadata.name}
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            {featuredCollection.metadata.description}
          </p>
          <Link
            href="#collections"
            className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  )
}