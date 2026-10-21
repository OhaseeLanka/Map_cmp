// Design tokens. After the Figma design is confirmed, change values HERE (and in styles.css variables) only.
export const TIERS = ["Very Low", "Low", "Moderate", "High", "Very High"] as const;
export type Tier = (typeof TIERS)[number];

export const TIER_COLORS: Record<Tier, string> = {
  "Very Low": "#ffffb2",
  "Low": "#fecc5c",
  "Moderate": "#fd8d3c",
  "High": "#f03b20",
  "Very High": "#bd0026",
};

export const BASEMAP_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
export const INITIAL_VIEW = { center: [80.4, 6.95] as [number, number], zoom: 8 };
