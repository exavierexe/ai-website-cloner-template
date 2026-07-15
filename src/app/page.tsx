import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/products";

export default function Home() {
  const bestSellers = [
    "wheel-magic",
    "bead-it",
    "waterless-wash",
  ].map((id) => getProductById(id)!);

  const topRated = [
    "like-new",
    "fab-clean",
    "windscreen-cleaner",
  ].map((id) => getProductById(id)!);

  const suggested = [
    "leather-vinyl",
    "carpet-cleaner",
    "pro-shift",
  ].map((id) => getProductById(id)!);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Banner-_3.jpeg" 
            alt="Hero Banner" 
            fill 
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
            Premium Car Care
            <span className="block text-primary">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium">
            Our range of exterior and interior car grooming sprays and hydrophobic solutions will leave your vehicle looking stunning.
          </p>
          <div className="pt-8">
            <Button size="lg" className="text-lg px-12 py-6 uppercase font-bold tracking-widest rounded-none">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-wider">Time and Effort Saving</h2>
            <p className="text-lg opacity-90">
              With the efficiency and effectiveness of Grease Monkey cleaning products, you can achieve professional-level results in less time and with less effort.
            </p>
            <p className="text-lg opacity-90">
              Spend more time driving & enjoying your clean and beautiful vehicle and less time on tedious cleaning tasks!
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="/images/vehi.jpg" 
              alt="Clean Vehicle" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products Grids */}
      <section className="py-24 container mx-auto px-4 space-y-24">
        {/* Best Sellers */}
        <div>
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">Best Sellers</h2>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div>
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">Top Rated</h2>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topRated.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Suggested */}
        <div>
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">Suggested</h2>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggested.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-[#111111] py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black uppercase tracking-widest mb-16 text-primary">Reviews</h2>
          <div className="space-y-6 bg-black p-12 border border-[#333]">
            <p className="text-2xl font-medium leading-relaxed italic">
              &quot;I&apos;ve tried numerous car polishes and not gonna lie, Grease Monkey&apos;s premium formula is simply outstanding. Not only did it give my vehicle a flawless shine, but it also didn&apos;t harm the paint. Finally, a product that delivers on its promises&quot;
            </p>
            <p className="text-primary font-bold uppercase tracking-widest">— Michael R.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-[#333] text-center">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          <h3 className="text-3xl font-black uppercase tracking-widest">Subscribe Now</h3>
          <p className="text-gray-400">Subscribe now to receive updates, news, and special offers!</p>
          <form className="flex flex-col sm:flex-row gap-4 mt-8">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-[#1a1a1a] border border-[#333] px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              required 
            />
            <Button size="lg" className="px-10 py-6 uppercase font-bold tracking-widest rounded-none whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
