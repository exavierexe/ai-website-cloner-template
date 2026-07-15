"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "./ui/button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    itemCount,
    subtotal,
    updateQuantity,
    removeItem,
    clearCart,
    closeCart,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-[#0d0d0d] border-l border-[#333] transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333]">
          <h2 className="text-xl font-bold uppercase tracking-wider">
            Your Cart ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="h-12 w-12 text-gray-600" />
              <p className="text-gray-400">Your cart is empty</p>
              <Button onClick={closeCart} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-20 shrink-0 bg-[#1a1a1a]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold leading-tight mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#333]">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-[#333] transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-[#333] transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-gray-500 hover:text-primary transition-colors uppercase tracking-wider"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold">
                      ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#333] p-6 space-y-4">
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 uppercase text-sm tracking-wider">
                Subtotal
              </span>
              <span className="text-2xl font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Shipping &amp; taxes calculated at checkout. Afterpay available
              at checkout.
            </p>
            <Button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full uppercase font-bold tracking-wider rounded-none py-6"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Redirecting...
                </>
              ) : (
                "Checkout"
              )}
            </Button>
            <button
              onClick={clearCart}
              className="w-full text-xs text-gray-500 hover:text-primary transition-colors uppercase tracking-wider"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
