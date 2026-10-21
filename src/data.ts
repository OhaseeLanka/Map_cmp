import { TIERS, type Tier } from "./tokens";
import type { FloodPriorityCollection, FloodPriorityFeature, Hazard, RiskCollection, RiskFeature, RiskProps } from "./types";

const isHazard = (value: unknown): value is Hazard => value === "flood" || value === "landslide";
const isTier = (value: unknown): value is Tier => typeof value === "string" && TIERS.includes(value as Tier);

function parseFeature(value: unknown, index: number): RiskFeature {
  if (!value || typeof value !== "object") throw new Error(`Feature ${index + 1} is not an object.`);
  const feature = value as { geometry?: unknown; properties?: unknown; type?: unknown };
  const geometry = feature.geometry as { type?: unknown; coordinates?: unknown } | undefined;
  const properties = feature.properties as Partial<RiskProps> | undefined;
  const coordinates = geometry?.coordinates;

  if (feature.type !== "Feature" || geometry?.type !== "Point" || !Array.isArray(coordinates) ||
      coordinates.length !== 2 || coordinates.some((coordinate) => typeof coordinate !== "number" || !Number.isFinite(coordinate))) {
    throw new Error(`Feature ${index + 1} must contain a valid Point geometry.`);
  }
  if (!properties || typeof properties.id !== "string" || !isHazard(properties.hazard) ||
      typeof properties.score !== "number" || !Number.isFinite(properties.score) ||
      properties.score < 0 || properties.score > 1 || !isTier(properties.tier) ||
      typeof properties.date !== "string" || typeof properties.demo !== "boolean") {
    throw new Error(`Feature ${index + 1} has invalid risk properties.`);
  }
  if (properties.hazard === "flood" && properties.depth_m !== undefined &&
      (typeof properties.depth_m !== "number" || !Number.isFinite(properties.depth_m) || properties.depth_m < 0)) {
    throw new Error(`Feature ${index + 1} has invalid flood depth.`);
  }
  if (properties.score_ordinary !== undefined &&
      (typeof properties.score_ordinary !== "number" || !Number.isFinite(properties.score_ordinary) ||
        properties.score_ordinary < 0 || properties.score_ordinary > 1)) {
    throw new Error(`Feature ${index + 1} has invalid ordinary-condition score.`);
  }
  if (properties.tier_ordinary !== undefined && !isTier(properties.tier_ordinary)) {
    throw new Error(`Feature ${index + 1} has invalid ordinary-condition tier.`);
  }
  if (properties.confidence !== undefined &&
      (typeof properties.confidence !== "number" || !Number.isFinite(properties.confidence) ||
        properties.confidence < 0 || properties.confidence > 1)) {
    throw new Error(`Feature ${index + 1} has invalid confidence.`);
  }

  return {
    type: "Feature",
    geometry: { type: "Point", coordinates: [coordinates[0], coordinates[1]] },
    properties: { ...properties } as RiskProps,
  };
}

export function parseRiskCollection(value: unknown, sourceName: string): RiskCollection {
  if (!value || typeof value !== "object" || (value as { type?: unknown }).type !== "FeatureCollection" ||
      !Array.isArray((value as { features?: unknown }).features)) {
    throw new Error(`${sourceName} is not a valid GeoJSON FeatureCollection.`);
  }

  const features = (value as { features: unknown[] }).features.map(parseFeature);
  const ids = new Set<string>();
  for (const feature of features) {
    if (ids.has(feature.properties.id)) throw new Error(`${sourceName} contains duplicate ID ${feature.properties.id}.`);
    ids.add(feature.properties.id);
  }
  return { type: "FeatureCollection", features };
}

export function parseFloodPriorityCollection(value: unknown, sourceName: string): FloodPriorityCollection {
  if (!value || typeof value !== "object" || (value as { type?: unknown }).type !== "FeatureCollection" ||
      !Array.isArray((value as { features?: unknown }).features)) {
    throw new Error(`${sourceName} is not a valid GeoJSON FeatureCollection.`);
  }
  const features = (value as { features: unknown[] }).features.map((item, index): FloodPriorityFeature => {
    if (!item || typeof item !== "object") throw new Error(`${sourceName} feature ${index + 1} is invalid.`);
    const feature = item as { type?: unknown; geometry?: { type?: unknown; coordinates?: unknown }; properties?: Partial<FloodPriorityFeature["properties"]> };
    const properties = feature.properties;
    if (feature.type !== "Feature" || (feature.geometry?.type !== "Polygon" && feature.geometry?.type !== "MultiPolygon") ||
        !properties || typeof properties.District !== "string" || typeof properties.Division !== "string" ||
        typeof properties.boundary_name !== "string" || typeof properties.priority_score !== "number" ||
        !Number.isFinite(properties.priority_score) || properties.priority_score < 0 || properties.priority_score > 1 ||
        !isTier(properties.priority_level) || typeof properties.scenario_type !== "string" ||
        typeof properties.operational_warning !== "boolean") {
      throw new Error(`${sourceName} feature ${index + 1} has invalid flood priority properties.`);
    }
    return {
      type: "Feature",
      geometry: { type: feature.geometry.type, coordinates: feature.geometry.coordinates as FloodPriorityFeature["geometry"]["coordinates"] },
      properties: properties as FloodPriorityFeature["properties"],
    };
  });
  return { type: "FeatureCollection", features };
}
