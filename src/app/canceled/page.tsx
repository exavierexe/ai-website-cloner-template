import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CanceledPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <XCircle className="h-20 w-20 text-gray-500 mx-auto mb-8" />
        <h1 className="text-4xl font-black uppercase tracking-widest mb-4">
          Order Canceled
        </h1>
        <div className="w-16 h-0.5 bg-[#333] mx-auto mb-6" />
        <p className="text-gray-400 text-lg mb-8">
          Your checkout was canceled. No charge has been made.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-primary text-primary-foreground uppercase font-bold tracking-wider px-8 py-3 hover:bg-primary/80 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
