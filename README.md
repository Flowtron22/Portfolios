# Ahmad Fadzil — Game Direction & Creative Leadership

Responsive browser portfolio with a playable Three.js Rubik’s cube, professional credits, four solo-project detail views, contact page and a web CV with the supplied PDF.

## Run locally

Requires Node.js 22 or later. No dependency installation is needed.

```sh
npm run dev
```

Open http://localhost:8517. On another device on the same network, use this computer's LAN IP with port 8517.

## Validate

```sh
npm run check
npm test
npm run build
```

## Deploy to Vercel

Import this GitHub repository into Vercel. Use Framework Preset **Other**, Build Command **npm run build**, and Output Directory **dist**. The included vercel.json sets the build command and output directory. Navigation uses hash routes so project and CV views work without server rewrites. No environment variables are required.

## Edit

- dist/app.js: professional copy, career history, project links and detail views.
- dist/style.css: responsive layout, colours and typography.
- dist/mobile.css: portrait phone layout, menu, touch targets, cube controls and artwork viewer.
- dist/scene.js: locally vendored Three.js cube renderer, pointer/keyboard input and reduced-motion behaviour.
- dist/cube-state.js: exact quarter-turn cube state and solved-state detection.
- dist/assets/: actual screenshots of the four supplied browser projects, supplied original CV PDF, favicon and Three.js files/license.

Content is rewritten from the supplied Flix application documents. Actual role titles and contribution boundaries are preserved; Game Director is the target position. The downloadable PDF remains the supplied Design Director CV; the website CV is rewritten for a general game-leadership audience. No education, awards, LinkedIn URL or performance metrics were invented. Combat Patrol and other solo-project descriptions are limited to supplied ownership and observed public interfaces.

Google Fonts supplies DM Sans and Barlow Condensed, with system fallbacks. Three.js is hosted locally so the scene needs no CDN. Project links open the supplied public browser prototypes, which may differ from local development versions.

## Solo: Art and Games

`#/solo` and `#/solo/art` show a curated collection of 3D environments, sculpts, props and production artwork from https://urekagames.wordpress.com/ and supplied images. `#/solo/games` retains the four playable game projects. The source page also includes 2D logos, illustrations and posters, which are excluded from the 3D collection.

`dist/art.js` records each source URL, descriptive title, category and original dimensions. Source images have no captions. Descriptive labels are retained as accessible image names rather than visible titles or invented project credits. Existing signatures, studio marks and artwork credits remain in the images. The Art introduction includes production artwork rather than claiming every image is a solo commercial project.

`dist/assets/art` contains a full image and a lightweight thumbnail per artwork. Imported WordPress images use JPEGs up to 1920 pixels on the longest edge; newly supplied images retain their original PNGs. Both preserve the complete image and its aspect ratio. The native dialog viewer supports Previous/Next, keyboard left/right, Escape and focus restoration. Original image links lead to the WordPress originals. Downloaded originals and the import inventory are retained locally under ignored `.local/`.

## Play the hero cube

Drag the cube to rotate your view. Click/tap a visible face to turn it, or use the R/L/U/D/F/B buttons (right, left, upper, bottom, front, back). Turns are clockwise when looking directly at that face. Toggle Inverse for counterclockwise turns, or hold Shift while clicking. With the cube stage focused, R/L/U/D/F/B keys also turn faces; Shift reverses them. Scramble performs 20 legal turns, Undo reverses the most recent turn, and Reset restores the solved state. Player moves are counted separately from scrambling. The puzzle resets when you leave the overview.

Work and CV use the same company-grouped career history, latest first. Todak lists production leadership (2025–Present) before creative direction (Apr 2022–2024); each role lists its projects as separate bullet points. Earlier employers have individual entries. The decorative Mastra banner, footer, CV eyebrow/location and Pandora callout have been removed.

## Portrait phones

Phone navigation collapses into a Menu button below 701 px. It closes after selecting a page or pressing Escape. The mobile stylesheet uses fluid headings, stacked content, safe-area insets and controls at least 44 px high. Cube controls use separate face/action rows with an automatic container height, so they do not clip on narrow screens. On touch devices, vertical gestures over the cube can scroll the page; taps turn faces and horizontal drags rotate the view. The artwork viewer keeps navigation and Close within the viewport.

Verified in browser viewports at 320, 375, 390 and 430 px wide, plus the desktop layout. Phone viewport checks do not replace physical-device testing.

The mobile opening prioritizes the portrait/name, a compact role heading and the playable cube. The summary and portfolio links follow the cube. Face and action buttons occupy two compact rows. At 320×568, 375×667, 390×844 and 430×932 browser viewport sizes, the portrait and complete cube controls fit on the initial screen.

The Art page is an image-only masonry collage: three columns on desktop and two on phones, with natural aspect ratios, narrow gaps and no card borders, padding, titles or categories. Art/Games navigation and full-image viewer controls remain available.

Gallery curation: removed the Sculptober overview, modular stone ruins sheet, stylized landscape study, tank material study and tank topology image. Added five supplied images: dragon head views, horned mask character views, golem-house island diorama, and painted/unpainted Mastra bust photos. New additions lead the collage; their original PNG files are preserved alongside JPEG thumbnails. The gallery contained 35 images after those replacements.

Further curation removed the portrait sculpt, stylized girl sculpt and single-view dragon head. The three-view dragon image remains. The current gallery contains 32 images.

## Design writing

The Design tab beside Art and Games is available at `#/solo/design`. `dist/design.js` holds the article catalogue and renders subject-grouped listings and individual readers at `#/solo/design/<slug>`. Entries support a title, subject, content type, summary and sections with paragraphs, bullets or numbered steps. Text is escaped before rendering. The catalogue is intentionally empty until the user supplies approved source documents; no sample articles are published.

The top gallery row now prioritizes the painted Mastra bust, unpainted Mastra bust and Davy Jones sculpt. A responsive masonry grid preserves this order across the top and keeps images uncropped. The granny sculpt uses the newly supplied original PNG.

## Player types and motivation

The Design library begins with three guides on player motivation. The 8 Kinds of Fun, Bartle Taxonomy of Player Types, and What Type of Gamer Are You? share the first desktop row and stack on phones.

`dist/design-player-types.js` contains standalone guides with source credits, original game examples and practical design applications. The 13 editorial images are stored under `dist/assets/design/player-types/`. Dimensions, credits and original-image links are recorded in `dist/design-player-type-figures.js`.
