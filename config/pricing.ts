type EliteBuild = {
  label: string;
  summary: string;
  price: number;
  priceMax?: number;
  currency: string;
};

export const ELITE_PRICING = {
  PRIVATE_NAS: {
    label: "Elite Build 01: Private NAS Estate",
    summary: "Sovereign storage cluster with concierge backup and secure remote access",
    price: 50000,
    priceMax: 250000,
    currency: "USD",
  },
  COMMAND_CENTER: {
    label: "Elite Build 02: Estate Command Center",
    summary: "Zero-trust estate network with automation, visualization, and incident response",
    price: 250000,
    priceMax: 1000000,
    currency: "USD",
  },
  AI_RESEARCH: {
    label: "Elite Build 03: AI Research Estate",
    summary: "GPU clusters, sovereign AI workloads, and global replication under concierge care",
    price: 1000000,
    priceMax: undefined,
    currency: "USD",
  },
} as const satisfies Record<string, EliteBuild>;

export type EliteBuildKey = keyof typeof ELITE_PRICING;

export function formatPrice(tier: EliteBuildKey): string {
  const t = ELITE_PRICING[tier];
  const minLabel = `$${t.price.toLocaleString()}`;
  const maxLabel = typeof t.priceMax === "number" && t.priceMax > t.price
    ? `$${t.priceMax.toLocaleString()}`
    : null;

  return maxLabel ? `${minLabel}–${maxLabel}` : `${minLabel}+`;
}

export function getBuildMetadata(tier: EliteBuildKey) {
  return ELITE_PRICING[tier];
}
