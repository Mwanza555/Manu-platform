# Portfolio — études temporaires

Ces trois images ont été générées pour prévisualiser le Portfolio. Elles ne
représentent ni des clients ni des réalisations de Manu. Les contenus affichés
sur le site sont définis dans `client/src/data/portfolio/projects.ts` et portent
le drapeau `demo: true`.

`demo-kalo-branding.png` est un quatrième visuel, créé comme pilote pour le
nouveau Hero du Portfolio. Il montre une marque entièrement fictive appliquée
à plusieurs supports. La référence fournie par l'utilisateur (`Branding studio.jpg`)
a guidé le type de présentation, sans reprise de sa marque ni de ses créations.

Lors de l'intégration des vrais projets, remplacer les images sources et les
variantes optimisées, renseigner les textes documentés, puis retirer `demo`.
Le script `client/scripts/optimize-portfolio-demos.mjs` ne modifie que les
variantes `demo-*` et ne supprime aucun autre média.

## Briefs transmis au générateur d'images intégré

### demo-kalo-branding.png

```text
Use case: product-mockup / logo-brand. Create an ORIGINAL fictional graphic-design portfolio case-study presentation board for a branding project, not an artwork or abstract illustration. The attached image is a REFERENCE for the KIND OF PRESENTATION only: a structured mosaic showing one coherent visual identity applied across several real deliverables. Do not copy its Serra brand, monogram, typography, colors, layout exactly, wording, or any existing mark. Invent an original fictional boutique cultural venue brand called 'KALO'. Tall portrait composition, polished Behance-style brand identity board. Seven distinct but coordinated rounded panels with tight spacing: (1) prominent clean KALO wordmark and small symbol on solid color, (2) standalone symbol, (3) typography study with large Aa and alphabet sample, (4) restrained four-swatch palette, (5) physically plausible printed business cards / invitation stationery, (6) a pair of real event posters on a wall, (7) social media post mockups on phones or flat cards. Strong typographic hierarchy, legible simple labels, systematic graphic design, realistic print applications, consistent logo across all panels. Palette: midnight blue, warm ivory, vivid coral, muted sky blue; visually distinct from the green/yellow reference. Fine editorial craft with intentional spacing and practical brand applications. Verbatim text only where legible: 'KALO', 'Aa', 'IDENTITÉ VISUELLE'. Avoid meaningless decorative shapes, painterly imagery, random photographs, illegible paragraphs, extra brand names, misleading claim that this is Manu's real work, watermarks. This is a fictional visual direction proof for a portfolio; do not show a website UI.
```

### demo-identite.png

```text
Use case: product-mockup
Asset type: temporary portfolio project cover for a graphic designer website
Primary request: a striking fictional visual identity presentation, photographed as a premium editorial design still life. Arrange a large ivory poster, two overlapping design sheets, and one thick card on a dark charcoal studio surface. The graphic system is bold abstract black geometric arcs and bars with one restrained cobalt-blue accent; crisp print edges and tactile uncoated paper. This is a conceptual study, not an existing brand.
Composition/framing: wide landscape composition with the printed work dominating the frame; balanced asymmetry, clear silhouette, generous but not empty margins, suitable for a large immersive website hero crop.
Lighting/mood: directional soft studio lighting, nuanced paper shadows, sophisticated gallery atmosphere.
Constraints: no readable text, no brand names, no logos resembling real brands, no people, no watermark, no UI mockup. The artwork itself should feel authored and graphic, not like generic office stock photography.
```

### demo-evenement.png

```text
Use case: ads-marketing
Asset type: temporary portfolio project cover for a graphic designer website
Primary request: a fictional cultural event key visual presented as a large physical poster in an art-directed exhibition setting. The poster design is expressive abstract geometry: vivid vermilion-orange field, deep burgundy curved forms, small ivory shapes, dramatic typographic rhythm suggested by abstract lines but absolutely no readable letters or words. One primary poster and a partial second print layered behind it. This is an original speculative design study, not an actual event.
Composition/framing: portrait-oriented printed poster seen at a slight angle within a wide landscape photograph, energetic asymmetry, poster dominates, enough surrounding dark neutral wall to feel like an editorial portfolio image.
Lighting/mood: dramatic yet clean gallery light, tactile matte paper, rich colors, premium contemporary graphic design.
Constraints: no readable text, no dates, no brand names, no logos resembling real brands, no people, no watermark, no UI.
```

### demo-contenu.png

```text
Use case: ads-marketing
Asset type: temporary portfolio project cover for a graphic designer website
Primary request: a fictional editorial content-design series presented as three overlapping square printed campaign tiles on a pale warm-gray studio floor. The tiles share a coherent but lively visual system: large abstract typographic shapes without readable letters, modular grids, crisp ivory and deep pine-green fields, one muted lavender accent, cropped geometric photography-like textures. Original speculative design study, not an existing campaign.
Composition/framing: wide landscape view with the three distinct tiles at varied heights and slight rotations, sophisticated asymmetry, clear edges, sufficient margins for responsive cropping.
Lighting/mood: soft directional daylight, subtle paper shadows, premium contemporary art-direction portfolio feeling.
Constraints: no readable text, no brand names, no real logos, no people, no watermark, no devices or UI mockups. Emphasize designed visual content rather than generic lifestyle photography.
```
