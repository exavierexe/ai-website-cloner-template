import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/GreaseMonkeyLogo-MIN.png" 
              alt="Grease Monkey Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold uppercase tracking-wider">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">About Us</Link>
            <Link href="/shop" className="text-muted-foreground transition-colors hover:text-primary">Shop</Link>
            <Link href="/gallery" className="text-muted-foreground transition-colors hover:text-primary">Gallery</Link>
            <Link href="/faqs" className="text-muted-foreground transition-colors hover:text-primary">FAQs</Link>
            <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">Contact Us</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
          <button className="text-white hover:text-primary transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
