import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-8 border-t border-[#333333]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et tortor ac sem varius tincidunt non ac eros.
            </p>
            <div className="pt-4 border-t border-[#333]">
              <p className="text-gray-400 mb-2 uppercase text-sm font-semibold tracking-wider">Support Center</p>
              <a href="tel:021403346" className="text-2xl font-bold hover:text-primary transition-colors">
                021 403 346
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Products</h3>
            <ul className="space-y-4">
              <li><Link href="/category/exterior" className="text-gray-400 hover:text-primary transition-colors">Exterior</Link></li>
              <li><Link href="/category/interior" className="text-gray-400 hover:text-primary transition-colors">Interior</Link></li>
              <li><Link href="/category/polish" className="text-gray-400 hover:text-primary transition-colors">Polish</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/my-account" className="text-gray-400 hover:text-primary transition-colors">My Account</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refunds" className="text-gray-400 hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#333]">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Grease Monkey, All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
