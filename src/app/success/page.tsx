import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;

  let customerEmail: string | null = null;

  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      customerEmail = session.customer_details?.email ?? null;
    } catch {
      // ignore retrieval errors
    }
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-8" />
        <h1 className="text-4xl font-black uppercase tracking-widest mb-4">
          Order Confirmed
        </h1>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
        <p className="text-gray-400 text-lg mb-2">
          Thank you for your purchase!
        </p>
        {customerEmail && (
          <p className="text-gray-400 mb-8">
            A confirmation email has been sent to{" "}
            <span className="text-white font-medium">{customerEmail}</span>
          </p>
        )}
        <Link
          href="/shop"
          className="inline-block bg-primary text-primary-foreground uppercase font-bold tracking-wider px-8 py-3 hover:bg-primary/80 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
