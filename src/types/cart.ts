import type { Product } from "@/lib/products";

export interface CartItem extends Product {
  quantity: number;
}
