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
- The current public homepage blends Xtract's black/violet/magenta palette with Conicorn-style section pacing: centered orbital hero, ecosystem logo strip, statement/media block, values trio, services grid, process timeline, case-study card, and a strong closing CTA.
- Homepage-specific layout is now driven by custom sections such as `.logo-strip-section`, `.statement-section`, `.values-section`, `.services-section`, `.timeline`, and `.case-study-card`. Prefer extending those patterns rather than reintroducing generic feature-card grids on the public home page.
- Legacy cyan/lime/cobalt tokens still exist in `styles.css` for internal pages and older exploration surfaces. Do not remove them casually just because the public homepage now uses the violet system.
- Typography uses `Sora` for headlines, `IBM Plex Sans` for body copy, and `IBM Plex Mono` for technical labels.
- The SVG logo lives in `assets/logo-symbol.svg`; the favicon is `assets/favicon.svg`.
- Logo exploration concepts live in `assets/logo-explorations/`, with a comparison board at `logo-options.html`. The current production logo is still unchanged.
- Keep additions visually sharp and intentional. Avoid generic SaaS layouts or default purple-on-white styling.

## Editing guidance

- Prefer preserving the static-site approach unless the user explicitly asks for a framework migration.
- Use relative links and asset paths so the site works cleanly on GitHub Pages and local static servers.
- If adding new pages, include them in navigation where appropriate and consider whether `404.html` needs an updated return path.
- `styles.css` is shared by the public homepage, `404.html`, `internal/brand-guide.html`, and `logo-options.html`. Visual changes to shared primitives should be checked against those pages, not just `index.html`.
- A reliable local preview flow is `python3 -m http.server 8123` from the repo root, then headless Chrome with an isolated `--user-data-dir` for screenshots.
