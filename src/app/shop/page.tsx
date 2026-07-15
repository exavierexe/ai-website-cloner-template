import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function ShopPage() {
  const allProducts = products;

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">Shop All Products</h1>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filter Placeholder */}
          <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-[#333] pb-2">Categories</h3>
              <ul className="space-y-3">
                <li><button className="text-primary font-medium hover:text-primary transition-colors">All Products</button></li>
                <li><button className="text-gray-400 hover:text-primary transition-colors">Exterior</button></li>
                <li><button className="text-gray-400 hover:text-primary transition-colors">Interior</button></li>
                <li><button className="text-gray-400 hover:text-primary transition-colors">Polish</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-[#333] pb-2">Price Filter</h3>
              <div className="flex items-center space-x-4">
                <input type="number" placeholder="Min" className="w-full bg-[#1a1a1a] border border-[#333] px-3 py-2 text-white" />
                <span className="text-gray-500">-</span>
                <input type="number" placeholder="Max" className="w-full bg-[#1a1a1a] border border-[#333] px-3 py-2 text-white" />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
