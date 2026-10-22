import type { Hazard, LayerMode } from "./types";

export function getVisibleHazards(mode: LayerMode): Hazard[] {
  switch (mode) {
    case "landslide":
      return ["landslide"];
    case "flood":
      return ["flood"];
    case "both":
      return ["landslide", "flood"];
    case "none":
    default:
      return [];
  }
}

export function isFloodVisible(mode: LayerMode): boolean {
  return mode === "flood" || mode === "both";
}

export function isLandslideVisible(mode: LayerMode): boolean {
  return mode === "landslide" || mode === "both";
}
