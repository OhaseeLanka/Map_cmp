# Risk Atlas — Landslide Risk Map

React + TypeScript + MapLibre GL JS. All data in `public/data` is DEMO data.

The app opens with a formal Risk Atlas landing page that introduces the product and
links into the interactive map through **Explore the live map**. The map can return
to the overview using the **Overview** control in the top bar.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Replace demo data with real results
The map currently loads only `public/data/landslide_real.geojson`. Flood integration can
be added later when the flood dataset is ready. Real landslide features use the properties
`id`, `hazard`, `score`, `tier`, `date`, and `demo`; set `"demo": false` for real results.

The app validates each export at runtime. Scores must be numeric values from 0 to 1,
tiers must match the five values in `src/tokens.ts`, IDs must be unique per dataset,
and geometries must be valid points.

## Current dashboard capabilities
- Explicit loading, validation errors, retry, and empty filter states
- Landslide layer controls
- Search by location ID, hazard, or river
- Score range and tier filters
- Accessible record list as an alternative to map selection
- Summary counts, demo/provenance messaging, and language-ready English/Sinhala/Tamil labels
- Responsive mobile layout
- Animated flood spread halos, optional elevation contours, and optional 3D terrain
- Optional road network and population exposure overlays

For operational deployment, add dataset metadata (source, model version, update date,
coverage, and uncertainty) alongside the GeoJSON and replace the demo provenance text.

The contour toggle reads `public/data/terrain_contours.geojson` when supplied. The
demo can use any valid GeoJSON LineString/MultiLineString contour export with an
optional `elevation` property. The 3D terrain toggle uses public Terrarium elevation
tiles and should be replaced with an approved/self-hosted DEM for production use.

The Road network toggle uses live OpenStreetMap-derived vector tiles from OpenFreeMap,
so it covers Sri Lanka rather than only the demo viewport lines. It requires network
access and follows OpenStreetMap/OpenFreeMap availability and usage terms. For offline
or operational deployments, replace this source with an approved RDA/GIS tile service.
The old `public/data/roads_demo.geojson` file is retained as a small reference fixture.
Population is still a demo context layer in `public/data/population_demo.geojson`; replace
it with authoritative population estimates and keep the `population` property numeric.

## Real flood monitoring data

The map loads the six latest location readings from
`public/data/flood_real.geojson`, prepared from `yearly_severity_assessment_2025.geojson`.
The complete 2,188-row daily source history is retained in
`public/data/flood_timeseries_2025.json` and the map shows a latest-reading table.
The source contains named locations but no geometry, so the six map points use
approximate coordinates. Blue halos and blue heatmap density communicate relative
flood impact around those monitoring points; they are not measured river polygons
or inundation boundaries.

## Restyle after the Figma design
Colours and the basemap are in `src/tokens.ts` and the CSS variables at the top of `src/styles.css`.

## Future domain features
SHAP breakdown, rainfall/scenario slider, high-contrast theme, 3D terrain, village
and administrative views, population exposure, critical infrastructure, and evacuation
routes still require corresponding model and source datasets.
