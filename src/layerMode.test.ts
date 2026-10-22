import { describe, expect, it } from "vitest";
import { getVisibleHazards } from "./layerMode";

describe("getVisibleHazards", () => {
  it("starts empty when the map is in the default mode", () => {
    expect(getVisibleHazards("none")).toEqual([]);
  });

  it("shows only flood hazards when flood is selected", () => {
    expect(getVisibleHazards("flood")).toEqual(["flood"]);
  });

  it("shows both hazards when both is selected", () => {
    expect(getVisibleHazards("both")).toEqual(["landslide", "flood"]);
  });
});
