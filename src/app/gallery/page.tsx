import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/images/IMG-27-1.jpeg",
    "/images/IMG-28.jpeg",
    "/images/vehi.jpg",
    "/images/Banner-_3.jpeg",
  ];

  return (
    <div className="py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">Gallery</h1>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((src, i) => (
            <div key={i} className="relative h-[400px] w-full bg-[#1a1a1a] rounded-sm overflow-hidden group">
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
