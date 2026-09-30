# GIS Learning Studio

A no-framework, learner-facing web app prototype that adapts the open textbook **Geographic Information Systems and Cartography** by Adam Dastrup (Salt Lake Community College Pressbooks, 2022).

Source textbook: https://slcc.pressbooks.pub/maps/

## What the prototype includes

- Nine modules matching the textbook's major units.
- English, French, and Spanish instructional content and interface.
- Three reading bands for every multi-paragraph lesson: Essential, Standard, Advanced.
- Browser-based progress saving with return-to-last-place behavior.
- Export/import of progress JSON for moving between devices without student accounts.
- Two-question formative check per module with immediate explanations, confidence calibration, retry, and a missed-question retrieval deck.
- Four motivation modes: none, Explorer XP, Cartographer Badges, and Map Quest.
- Live ArcGIS Maps SDK for JavaScript maps using public ArcGIS Online hosted feature layers.
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

## ArcGIS data used in the prototype

The map lab uses public hosted layers for U.S. states, counties, and major cities. The code is deliberately isolated in `initMap()` inside `app.js` so those layers can be replaced by textbook-specific ArcGIS Online web maps, Living Atlas items, school-owned web maps, or teacher-selected layers later.

## Production enhancements recommended

1. Replace concise course readings with a reviewed, section-by-section adaptation of the full Pressbooks text, retaining attribution for each reused figure, video, and third-party component.
2. Add teacher/LMS integration (LTI 1.3 or standards-based export) only if an institution needs centralized progress; the current prototype intentionally avoids collecting student identity.
3. Run automated accessibility testing (axe/WAVE) and manual keyboard + screen-reader testing before production use. WCAG 2.1 AA conformance is a verification claim and should not be asserted solely from code inspection.
4. Add teacher-authored ArcGIS Online web maps for projection comparison, raster analysis, vector overlay, classification, terrain, and cartographic design.
5. Add human review by fluent French and Spanish GIS educators for domain terminology.

## License and attribution

The source book states that **Geographic Information Systems and Cartography** is licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** except where otherwise noted.

This prototype is intended as a noncommercial educational adaptation. When redistributing adapted textbook content, retain attribution, the same/share-alike license terms, and any item-level attribution or exceptions present in the source.
