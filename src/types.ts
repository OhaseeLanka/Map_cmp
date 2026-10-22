import type { Tier } from "./tokens";

export type Hazard = "landslide" | "flood";
export type LayerMode = Hazard | "both" | "none";
export type VisualizationMode = "markers" | "heatmap" | "emergency";

export interface RiskProps {
  id: string;
  hazard: Hazard;
  score: number;      // relative risk score, NOT a probability
  tier: Tier;
  date: string;
  demo: boolean;
  scenario?: string;
  model_version?: string;
  score_ordinary?: number;
  tier_ordinary?: Tier;
  confidence?: number;
  river?: string;     // flood only
  depth_m?: number;   // flood only
  location?: string;
  water_level?: number;
  rainfall?: number;
  rainfall_3day?: number;
  rainfall_7day?: number;
  water_level_change?: number;
  severity?: string;
  predicted_severity?: string;
}

export interface RiskFeature {
  type: "Feature";
  geometry: { type: "Point"; coordinates: [number, number] };
  properties: RiskProps;
}

export interface RiskCollection {
  type: "FeatureCollection";
  features: RiskFeature[];
}

export interface FloodPriorityProperties {
  District: string;
  Division: string;
  boundary_name: string;
  priority_score: number;
  priority_level: Tier;
  match_status: string;
  verification_status: string;
  district_overlap_ratio: number;
  scenario_type: string;
  operational_warning: boolean;
}

export interface FloodPriorityFeature {
  type: "Feature";
  geometry: { type: "Polygon" | "MultiPolygon"; coordinates: number[][][] | number[][][][] };
  properties: FloodPriorityProperties;
}

export interface FloodPriorityCollection {
  type: "FeatureCollection";
  features: FloodPriorityFeature[];
}

export interface DataLoadState {
  data: RiskCollection | null;
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export interface RiskFilters {
  minScore: number;
  maxScore: number;
  tiers: Tier[];
  query: string;
}
