import { describe, expect, it } from "vitest";
import { parseRiskCollection } from "./data";

const feature = (overrides: Record<string, unknown> = {}) => ({
  type: "Feature",
  geometry: { type: "Point", coordinates: [80, 7] },
  properties: { id: "R-1", hazard: "flood", score: 0.5, tier: "Moderate", date: "2026-01-01", demo: false, ...overrides },
});

describe("parseRiskCollection", () => {
  it("accepts a valid collection", () => {
    const result = parseRiskCollection({ type: "FeatureCollection", features: [feature()] }, "test");
    expect(result.features[0].properties.id).toBe("R-1");
  });

  it("rejects invalid scores", () => {
    expect(() => parseRiskCollection({ type: "FeatureCollection", features: [feature({ score: 2 })] }, "test")).toThrow("invalid risk properties");
  });

  it("rejects duplicate IDs", () => {
    expect(() => parseRiskCollection({ type: "FeatureCollection", features: [feature(), feature()] }, "test")).toThrow("duplicate ID");
  });

  it("rejects invalid geometry", () => {
    expect(() => parseRiskCollection({ type: "FeatureCollection", features: [feature({})] }, "test")).not.toThrow();
    expect(() => parseRiskCollection({
      type: "FeatureCollection",
      features: [{ ...feature(), geometry: { type: "LineString", coordinates: [] } }],
    }, "test")).toThrow("valid Point geometry");
  });
});
