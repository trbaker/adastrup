# GIS Learning Studio — Anonymous Maps Edition

A no-framework, learner-facing web app prototype that adapts the open textbook **Geographic Information Systems and Cartography** by Adam Dastrup (Salt Lake Community College Pressbooks, 2022).

Source textbook: https://slcc.pressbooks.pub/maps/

## Important map-access change

This build is configured for **anonymous access only**. Students do not need an ArcGIS account, API key, OAuth login, or school organization login to use the course maps.

The app explicitly sets:

```js
esriConfig.request.useIdentity = false;
```

That ArcGIS Maps SDK setting prevents `esri/request` from asking `IdentityManager` for credentials. If an external service is secured or becomes unavailable later, the map displays an availability message instead of opening an ArcGIS sign-in prompt.

The previous ArcGIS `Search` widget and `BasemapGallery` were removed because they can invoke services that require authenticated or application-token access.

## Anonymous map sources

The course uses the ArcGIS Maps SDK for JavaScript as the interactive mapping framework, but the map data and basemaps come only from public anonymous services:

### Operational layers — U.S. Census Bureau TIGERweb

- **U.S. States** — TIGERweb Current, layer 80  
  `https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/80`
- **U.S. Counties** — TIGERweb Current, layer 82  
  `https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/82`
- **Incorporated Places** — TIGERweb Current, layer 4  
  `https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/4`

These are U.S. Census Bureau public ArcGIS REST services and require no ArcGIS token.

### Basemaps

- **OpenStreetMap** — loaded with the ArcGIS `OpenStreetMapLayer`; no ArcGIS credential is used. OpenStreetMap attribution remains visible through the map framework.
- **USGS Topo** — The National Map public tiled service  
  `https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer`
- **USGS Imagery Only** — The National Map public tiled imagery service  
  `https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer`

No `arcgis.com` web map, ArcGIS Online hosted feature layer, Basemap Styles service, World Geocoding service, or private organization resource is requested by the course map code.

## Map controls

The default ArcGIS Online Search and Basemap Gallery widgets have been replaced with course-owned controls:

- OpenStreetMap / USGS Topo / USGS Imagery basemap buttons
- Fixed example-place presets for New York City, Chicago, Denver, Los Angeles, Miami, Seattle, and Salt Lake City
- ArcGIS Layer List for turning Census layers on/off
- ArcGIS Legend
- Home extent control

The place presets simply move the map to stored coordinates; they do not call a geocoding service.

## What the prototype includes

- Nine modules matching the textbook's major units.
- English, French, and Spanish instructional content and interface.
- Three reading bands for every multi-paragraph lesson: Essential, Standard, Advanced.
- Browser-based progress saving with return-to-last-place behavior.
- Export/import of progress JSON for moving between devices without student accounts.
- Two-question formative check per module with immediate explanations, confidence calibration, retry, and a missed-question retrieval deck.
- Four motivation modes: none, Explorer XP, Cartographer Badges, and Map Quest.
- Live ArcGIS Maps SDK maps using anonymous U.S. Census, USGS, and OpenStreetMap services.
- Mapping missions connected to each textbook unit.
- Student field notes saved locally.
- PWA shell caching for local course files (live maps require internet).
- Accessibility supports: semantic landmarks, keyboard focus, skip link, high contrast, scalable text, readable spacing, reduced motion, focus mode, visible focus, and non-mouse map task directions.

## Run it

Because the app loads ArcGIS from a CDN and registers a service worker, serve the folder over HTTP rather than opening `index.html` directly.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

The same files can be deployed to GitHub Pages or another static host.

### If replacing an older GitHub Pages copy

Upload **all files** from this version. The service-worker cache name has been changed to `gis-learning-studio-v2-anonymous`, which helps browsers discard the prior map code. After deployment, a hard refresh is still recommended on devices that previously opened the old version.

## Production checks recommended

1. Run automated accessibility testing (axe/WAVE) and manual keyboard + screen-reader testing before claiming WCAG 2.1 AA conformance.
2. Review French and Spanish GIS terminology with fluent GIS educators.
3. Periodically verify the Census and USGS public-service URLs. Because identity requests are disabled, a future access-policy change will produce a map error rather than a login challenge.
4. For high-volume deployment, review OpenStreetMap's tile usage policy or replace OSM with an institutionally hosted/contracted anonymous basemap if traffic warrants it.

## License and attribution

The source book states that **Geographic Information Systems and Cartography** is licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** except where otherwise noted.

This prototype is intended as a noncommercial educational adaptation. When redistributing adapted textbook content, retain attribution, the same/share-alike license terms, and any item-level attribution or exceptions present in the source.
