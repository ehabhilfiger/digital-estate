export const PRICING = {
  FOUNDATION: { label: "Foundation", price: 3500, priceMax: 6000, currency: "USD" },
  ESTATE:     { label: "Estate",     price: 8000, priceMax: 15000, currency: "USD" },
  ARCHITECT:  { label: "Architect",  price: 20000, currency: "USD" },
} as const;

// Helper functions for display
export function formatPrice(tier: keyof typeof PRICING): string {
  const t = PRICING[tier];
  if ('priceMax' in t && t.priceMax) {
    return `$${t.price.toLocaleString()}–$${t.priceMax.toLocaleString()}`;
  }
  return `$${t.price.toLocaleString()}+`;
}
