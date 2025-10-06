import { Product } from '@/types'
import Link from 'next/link'

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.metadata.product_images?.[0]?.imgix_url || product.thumbnail;
  
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="aspect-square overflow-hidden bg-gray-100">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={product.metadata.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-4xl">📦</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.metadata.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.metadata.price.toFixed(2)}
            </span>
            {product.metadata.in_stock ? (
              <span className="text-sm text-green-600 font-semibold">In Stock</span>
            ) : (
              <span className="text-sm text-red-600 font-semibold">Out of Stock</span>
            )}
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">SKU: {product.metadata.sku}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}