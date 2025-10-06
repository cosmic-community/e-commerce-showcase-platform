import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            ShopCosmic
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#collections" className="text-gray-700 hover:text-primary transition-colors">
              Collections
            </Link>
            <Link href="/#products" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}