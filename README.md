# Kelvory static site

This project is a pure static website for `kelvory.com`. It uses:

- `index.html` for the landing page
- `brand-guide.html` for the brand system and culture guide
- `404.html` for the GitHub Pages error surface
- `styles.css` for all visual design
- `script.js` for scroll reveals and footer year updates
- `assets/` for the SVG logo and favicon
- `.github/workflows/deploy-pages.yml` for GitHub Pages deployment
- `CNAME` for the production custom domain

## Local preview

Run any simple static server from this directory, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## GitHub Pages deployment

This project is configured for GitHub Pages with a custom workflow and custom domain.

1. Push this directory to a GitHub repository.
2. Make sure the default branch is `main`, or update `.github/workflows/deploy-pages.yml`.
3. In GitHub, go to `Settings` -> `Pages`.
4. Set the source to `GitHub Actions`.
5. Confirm your custom domain is `kelvory.com`.
6. Point your DNS to GitHub Pages using GitHub's current custom-domain instructions.

If the first workflow run fails before Pages has ever been enabled for the repository, open `Settings` -> `Pages`, choose `GitHub Actions` once, and re-run or re-push. GitHub must enable custom workflow publishing for the repository before `actions/configure-pages` can succeed.

No build command is required because the site is deployed directly as static files.
