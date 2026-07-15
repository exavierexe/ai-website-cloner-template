import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProductById } from "@/lib/products";

export async function POST(request: Request) {
  try {
    const { items } = await request.json() as { items: { id: string; quantity: number }[] };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const lineItems = items.map((item) => {
      const product = getProductById(item.id);
      if (!product) throw new Error(`Product not found: ${item.id}`);
      return {
        price_data: {
          currency: "nzd",
          product_data: {
            name: product.name,
            images: [`${process.env.NEXT_PUBLIC_SITE_URL}${product.image}`],
          },
          unit_amount: Math.round(parseFloat(product.price) * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/canceled`,
      shipping_address_collection: {
        allowed_countries: ["NZ", "AU"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "nzd" },
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],
      automatic_tax: { enabled: true },
      metadata: {
        source: "greasemonkey-shop",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
