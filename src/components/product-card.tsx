import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col items-center text-center bg-card transition-all duration-300 hover:-translate-y-2">
      <div className="relative w-full aspect-square mb-6 bg-[#1a1a1a] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 uppercase font-bold tracking-wider rounded-none px-8">
            Add to Cart
          </Button>
        </div>
      </div>
      
      <div className="px-4 pb-6">
        <Link 
          href={`/category/${category.toLowerCase()}`}
          className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block"
        >
          {category}
        </Link>
        <div className="w-8 h-0.5 bg-[#333] mx-auto mb-4" />
        <Link href={`/product/${id}`}>
          <h5 className="text-lg font-bold hover:text-primary transition-colors mb-2 text-balance leading-tight">
            {name}
          </h5>
        </Link>
        <span className="text-xl font-medium">${price}</span>
      </div>
    </div>
  );
}
