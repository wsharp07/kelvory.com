# AGENTS.md

## Project overview

- This repository is a pure static marketing site for `kelvory.com`.
- There is no build step or framework. Pages are plain HTML, CSS, JavaScript, and SVG assets.
- Public pages are `index.html` and `404.html`.
- The internal brand guide lives at `internal/brand-guide.html` and should not be deployed publicly.
- The repository was bootstrapped locally with Git on branch `main` and an initial commit so it is ready to connect to a GitHub remote.

## Deployment assumptions

- The site is configured for GitHub Pages via `.github/workflows/deploy-pages.yml`.
- `.nojekyll` is present so GitHub Pages will not run Jekyll processing on the static files.
- `CNAME` is set to `kelvory.com`. If the production hostname changes, update that file.
- The workflow currently deploys on pushes to `main`. If the repository uses a different default branch, update the workflow trigger.
- On a fresh repository, GitHub Pages may need to be enabled once in `Settings -> Pages` with source set to `GitHub Actions` before `actions/configure-pages` will deploy successfully.
- The workflow intentionally copies only the public site files and the two live SVG assets (`assets/favicon.svg` and `assets/logo-symbol.svg`) to avoid accidentally publishing internal exploration assets.

## Design system notes

- Brand direction is "high-technology skunkworks": dark atmospheric surfaces, cyan/lime/cobalt signal accents, geometric framing, and restrained glow.
- The current public homepage is a teaser-style R&D surface for Kelvory as a cognitive extension lab. Copy should emphasize AI as an extension of human cognition, digital twins, memory-native environments, linked knowledge, operator control, and the idea of helping human ability catch up to human intellect rather than agency-style service selling.
- The public header now uses a dark rounded slab with simple nav links on desktop and a three-line hamburger button on mobile. Keep navigation free of CTA buttons.
- Homepage-specific layout is now driven by custom sections such as `.logo-strip-section`, `.statement-section`, `.values-section`, `.services-section`, `.timeline`, and `.case-study-card`. Prefer extending those patterns rather than reintroducing generic feature-card grids on the public home page.
- The homepage now includes explicit Mission and Vision messaging inside `.statement-section`, with a `.mission-grid` and `.cognition-map` framing AI as a digital twin / second cognitive system.
- Public-facing pages should not expose email addresses or contact CTAs unless the user explicitly asks to bring them back. The current homepage and `404.html` are intentionally teaser-only.
- Avoid references to outside companies on the public homepage, and keep the internal brand guide philosophies written as standalone principles rather than attributing them to other organizations.
- Legacy cyan/lime/cobalt tokens still exist in `styles.css` for internal pages and older exploration surfaces. Do not remove them casually just because the public homepage now uses the violet system.
- Typography uses `Sora` for headlines, `IBM Plex Sans` for body copy, and `IBM Plex Mono` for technical labels.
- The SVG logo lives in `assets/logo-symbol.svg`; the favicon is `assets/favicon.svg`.
- Logo exploration concepts live in `assets/logo-explorations/`, with a comparison board at `logo-options.html`. The production logo now uses the `Eclipse Ring` direction in `assets/logo-symbol.svg`.
- The current minimalist icon explorations are `launch-window`, `twin-vector`, and `horizon-arc` in `assets/logo-explorations/`. They keep the public site's violet palette and compact icon-left, wordmark-right layout, but shift away from literal monograms toward more abstract "future systems" symbols.
- Recent user feedback: the icon direction should not feel locked to a `K`; sharper abstract forms that imply future, motion, or next-state systems are preferred.
- Newer feedback narrows preference toward the `Twin Vector` family specifically. Close sibling variations in the same sharp abstract language are preferred over broad concept jumps.
- Focused `Twin Vector` variants now include `twin-vector`, `climb-vector`, and `vector-channel` in `assets/logo-explorations/`.
- Latest feedback supersedes that narrower direction: the user does not like the Twin Vector family and instead wants one rounded monoline `K` inspired by the attached `M` reference plus abstract symbols inspired by the attached halo, eclipse, and triad references.
- The current reference-driven study set is `pulse-k`, `sensor-halo`, `eclipse-ring`, and `triad-node` in `assets/logo-explorations/`.
- `assets/favicon.svg` is now a simplified `Eclipse Ring` favicon tuned for small-size legibility on dark backgrounds.
- User correction after rollout: option `#3` (`Eclipse Ring`) was the intended selected mark, not `Sensor Halo`.
- `logo-options.html` currently focuses on that new set and marks `Eclipse Ring` as the selected production direction.
- Keep additions visually sharp and intentional. Avoid generic SaaS layouts or default purple-on-white styling.
- Public nav anchors now target `#mission`, `#directions`, and `#principles`; the process section uses `#method`.
- `internal/brand-guide.html` now mirrors the public framing with updated Mission and Vision language centered on cognitive extension and trusted digital twins.

## Editing guidance

- Prefer preserving the static-site approach unless the user explicitly asks for a framework migration.
- Use relative links and asset paths so the site works cleanly on GitHub Pages and local static servers.
- If adding new pages, include them in navigation where appropriate and consider whether `404.html` needs an updated return path.
- `styles.css` is shared by the public homepage, `404.html`, `internal/brand-guide.html`, and `logo-options.html`. Visual changes to shared primitives should be checked against those pages, not just `index.html`.
- A reliable local preview flow is `python3 -m http.server 8123` from the repo root, then headless Chrome with an isolated `--user-data-dir` for screenshots.
