import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const imageUrl = collection.metadata.featured_image?.imgix_url;
  const productsCount = collection.metadata.products?.length || 0;
  
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={collection.metadata.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-blue-700" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          {collection.metadata.name}
        </h3>
        <p className="text-gray-200 mb-4">
          {collection.metadata.description}
        </p>
        <div className="text-white font-semibold">
          {productsCount} {productsCount === 1 ? 'Product' : 'Products'}
        </div>
      </div>
    </div>
  )
}