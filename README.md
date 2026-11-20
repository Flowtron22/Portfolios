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
- dist/scene.js: locally vendored Three.js cube renderer, pointer/keyboard input and reduced-motion behaviour.
- dist/cube-state.js: exact quarter-turn cube state and solved-state detection.
- dist/assets/: actual screenshots of the four supplied browser projects, supplied original CV PDF, favicon and Three.js files/license.

Content is rewritten from the supplied Flix application documents. Actual role titles and contribution boundaries are preserved; Game Director is the target position. The downloadable PDF remains the supplied Design Director CV; the website CV is rewritten for a general game-leadership audience. No education, awards, LinkedIn URL or performance metrics were invented. Combat Patrol and other solo-project descriptions are limited to supplied ownership and observed public interfaces.

Google Fonts supplies DM Sans and Barlow Condensed, with system fallbacks. Three.js is hosted locally so the scene needs no CDN. Project links open the supplied public browser prototypes, which may differ from local development versions.

## Solo: Art and Games

`#/solo` and `#/solo/art` show 35 images of 3D environments, sculpts, props and production artwork copied from https://urekagames.wordpress.com/. `#/solo/games` retains the four playable game projects. The source page also includes 2D logos, illustrations and posters, which are excluded from the 3D collection.

`dist/art.js` records each source URL, descriptive title, category and original dimensions. Source images have no captions, so the gallery uses descriptive labels rather than invented project credits or dates. Existing signatures, studio marks and artwork credits remain in the images. The Art introduction includes production artwork rather than claiming every image is a solo commercial project.

`dist/assets/art` contains a full-image JPEG (up to 1920 pixels on the longest edge) and a lightweight thumbnail per artwork. Both preserve the complete image and its aspect ratio. The native dialog viewer supports Previous/Next, keyboard left/right, Escape and focus restoration. Original image links lead to the WordPress originals. Downloaded originals and the import inventory are retained locally under ignored `.local/`.

## Play the hero cube

Drag the cube to rotate your view. Click/tap a visible face to turn it, or use the R/L/U/D/F/B buttons (right, left, upper, bottom, front, back). Turns are clockwise when looking directly at that face. Toggle Inverse for counterclockwise turns, or hold Shift while clicking. With the cube stage focused, R/L/U/D/F/B keys also turn faces; Shift reverses them. Scramble performs 20 legal turns, Undo reverses the most recent turn, and Reset restores the solved state. Player moves are counted separately from scrambling. The puzzle resets when you leave the overview.

Work and CV use the same company-grouped career history, latest first. Todak lists production leadership (2025–Present) before creative direction (Apr 2022–2024); each role lists its projects as separate bullet points. Earlier employers have individual entries. The decorative Mastra banner, footer, CV eyebrow/location and Pandora callout have been removed.
