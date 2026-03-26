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
- Typography uses `Sora` for headlines, `IBM Plex Sans` for body copy, and `IBM Plex Mono` for technical labels.
- The SVG logo lives in `assets/logo-symbol.svg`; the favicon is `assets/favicon.svg`.
- Logo exploration concepts live in `assets/logo-explorations/`, with a comparison board at `logo-options.html`. The current production logo is still unchanged.
- Keep additions visually sharp and intentional. Avoid generic SaaS layouts or default purple-on-white styling.

## Editing guidance

- Prefer preserving the static-site approach unless the user explicitly asks for a framework migration.
- Use relative links and asset paths so the site works cleanly on GitHub Pages and local static servers.
- If adding new pages, include them in navigation where appropriate and consider whether `404.html` needs an updated return path.
