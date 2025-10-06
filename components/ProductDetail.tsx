'use client'

import { Product } from '@/types'
import { useState } from 'react'

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const images = product.metadata.product_images || [];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const currentImage = images[selectedImageIndex];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <div>
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
          {currentImage ? (
            <img
              src={`${currentImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
              alt={product.metadata.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-6xl">📦</span>
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square overflow-hidden rounded-lg ${
                  index === selectedImageIndex ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={`${image.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                  alt={`${product.metadata.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{product.metadata.name}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl font-bold text-primary">
            ${product.metadata.price.toFixed(2)}
          </span>
          {product.metadata.in_stock ? (
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              In Stock
            </span>
          ) : (
            <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          )}
        </div>
        <div className="mb-6">
          <span className="text-gray-600">SKU: {product.metadata.sku}</span>
        </div>
        <div 
          className="prose prose-lg mb-8"
          dangerouslySetInnerHTML={{ __html: product.metadata.description }}
        />
        <button
          disabled={!product.metadata.in_stock}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
            product.metadata.in_stock
              ? 'bg-primary hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.metadata.in_stock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}