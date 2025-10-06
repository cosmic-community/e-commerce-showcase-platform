import { Collection } from '@/types'
import CollectionCard from '@/components/CollectionCard'

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  if (!collections || collections.length === 0) {
    return null;
  }
  
  return (
    <section id="collections" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-600">Curated selections of our best products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  )
}