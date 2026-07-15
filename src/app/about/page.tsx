import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">About Us</h1>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] w-full bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#333]">
            <Image 
              src="/images/vehi.jpg" 
              alt="Grease Monkey Car Care" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-primary">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Grease Monkey was born out of a passion for immaculate cars and a frustration with sub-par cleaning products. We set out to create a line of premium, professional-grade car care solutions that are easy to use for everyone from weekend warriors to professional detailers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our range of exterior and interior car grooming sprays and hydrophobic solutions are meticulously formulated to leave your vehicle looking stunning without damaging the paint or surfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-[#111] border border-[#333]">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-primary mb-4">Quality</h3>
            <p className="text-gray-400">Premium formulas that deliver professional-level results every single time.</p>
          </div>
          <div className="p-8 bg-[#111] border border-[#333]">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-primary mb-4">Safety</h3>
            <p className="text-gray-400">Safe for your vehicle&apos;s paint, wraps, and delicate interior surfaces.</p>
          </div>
          <div className="p-8 bg-[#111] border border-[#333]">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-primary mb-4">Efficiency</h3>
            <p className="text-gray-400">Spend less time cleaning and more time enjoying your beautiful ride.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
