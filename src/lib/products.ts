export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  { id: "ceramic-wash", name: "Ceramic Wash", price: "39.99", image: "/images/Ceramic-Wash.png", category: "EXTERIOR" },
  { id: "bundle", name: "Ultimate Grooming Bundle", price: "149.99", image: "/images/bundle.png", category: "BUNDLE" },
  { id: "wheel-magic", name: "Wheel Magic (500ml)", price: "29.99", image: "/images/Wheel-Magic.png", category: "EXTERIOR" },
  { id: "leather-restorer", name: "Leather Restorer (500ml)", price: "34.99", image: "/images/Leather-restorer.png", category: "INTERIOR" },
  { id: "sparkle-rite", name: "Sparkle Rite (500ml)", price: "24.99", image: "/images/Sparkle-Rite.png", category: "EXTERIOR" },
  { id: "like-new", name: "Like New Exterior & Interior Satin Dressing (500ml)", price: "29.99", image: "/images/Like-New.png", category: "INTERIOR" },
  { id: "dress-it-up", name: "Dress It Up (500ml)", price: "29.99", image: "/images/Dress-it-up.png", category: "EXTERIOR" },
  { id: "leather-vinyl", name: "Leather & Vinyl Cleaner (500ml)", price: "29.99", image: "/images/Leather-and-vinyl-cleaner.png", category: "INTERIOR" },
  { id: "bead-it", name: "BEAD IT (500ml)", price: "99.99", image: "/images/Bead-It.png", category: "EXTERIOR" },
  { id: "waterless-wash", name: "Waterless Wash (500ml)", price: "29.99", image: "/images/Waterless-Wash.png", category: "EXTERIOR" },
  { id: "carpet-cleaner", name: "Carpet & Upholstery Cleaner Concentrate (1 litre)", price: "19.99", image: "/images/Carpet-and-upholstery-cleaner.png", category: "INTERIOR" },
  { id: "knockdown-weed-killer", name: "Knockdown Weed Killer", price: "49.99", image: "/images/Knockdown-Weed-Killer.png", category: "EXTERIOR" },
  { id: "fab-clean", name: "Fab Clean Carpet Shampoo Concentrate (1 litre)", price: "19.99", image: "/images/Fab-Clean.png", category: "INTERIOR" },
  { id: "pro-shift", name: "Pro Shift Protein Based Spot Remover Concentrate (1 litre)", price: "19.99", image: "/images/Pro-Shift-Spot-remover.png", category: "INTERIOR" },
  { id: "windscreen-cleaner", name: "Windscreen Cleaner - for Washing Tank (500ml)", price: "9.99", image: "/images/Bugger-Off.png", category: "EXTERIOR" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
