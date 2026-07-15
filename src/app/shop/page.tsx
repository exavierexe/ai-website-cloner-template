import { ProductCard } from "@/components/product-card";

export default function ShopPage() {
  const allProducts = [
    { id: "ceramic-wash", name: "Ceramic Wash", price: "39.99", image: "/images/Ceramic-Wash.png", category: "EXTERIOR" },
    { id: "bundle", name: "Ultimate Grooming Bundle", price: "149.99", image: "/images/bundle.png", category: "BUNDLE" },
    { id: "wheel-magic", name: "Wheel Magic (500ml)", price: "29.99", image: "/images/Wheel-Magic.png", category: "EXTERIOR" },
    { id: "leather-restorer", name: "Leather Restorer (500ml)", price: "34.99", image: "/images/Leather-restorer.png", category: "INTERIOR" },
    { id: "sparkle-rite", name: "Sparkle Rite (500ml)", price: "24.99", image: "/images/Sparkle-Rite.png", category: "EXTERIOR" },
    { id: "like-new", name: "Like New Exterior & Interior Satin Dressing (500ml)", price: "29.99", image: "/images/Like-New.png", category: "INTERIOR" },
    { id: "dress-it-up", name: "Dress It Up (500ml)", price: "29.99", image: "/images/Dress-it-up.png", category: "EXTERIOR" },
    { id: "leather-vinyl", name: "Leather & Vinyl Cleaner (500ml)", price: "29.99", image: "/images/Leather-and-vinyl-cleaner.png", category: "INTERIOR" },
    { id: "bead-it", name: "BEAD IT (500ml)", price: "99.99", image: "/images/Bead-It.png", category: "EXTERIOR" },
    { id: "waterless-wash", name: "Waterless Wash (500ml)", price: "29.99", image: "/images/Waterless-Wash.png", category: "EXTERIOR" },
    { id: "carpet-cleaner", name: "Carpet & Upholstery Cleaner Concentrate (1 litre)", price: "19.99", image: "/images/Carpet-and-upholstery-cleaner.png", category: "INTERIOR" },
    { id: "knockdown-weed-killer", name: "Knockdown Weed Killer", price: "49.99", image: "/images/Knockdown-Weed-Killer.png", category: "EXTERIOR" },
    { id: "fab-clean", name: "Fab Clean Carpet Shampoo Concentrate (1 litre)", price: "19.99", image: "/images/Fab-Clean.png", category: "INTERIOR" },
    { id: "pro-shift", name: "Pro Shift Protein Based Spot Remover Concentrate (1 litre)", price: "19.99", image: "/images/Pro-Shift-Spot-remover.png", category: "INTERIOR" },
    { id: "windscreen-cleaner", name: "Windscreen Cleaner - for Washing Tank (500ml)", price: "9.99", image: "/images/Bugger-Off.png", category: "EXTERIOR" },
  ];

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
