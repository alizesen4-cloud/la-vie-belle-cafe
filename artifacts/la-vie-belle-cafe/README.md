# La Vie Belle Cafe & Bakery

Refined bilingual React/Vite website for La Vie Belle Cafe & Bakery in Jubail, Saudi Arabia.

## Run locally

From the `Business-Website` repository root:

```bash
pnpm install --frozen-lockfile
cd artifacts/la-vie-belle-cafe
PORT=4173 BASE_PATH=/ pnpm dev
```

Open `http://localhost:4173`.

## Production build

```bash
cd artifacts/la-vie-belle-cafe
PORT=4173 BASE_PATH=/ pnpm build
PORT=4173 BASE_PATH=/ pnpm serve
```

The production files are written to `dist/public`.

## Notes

- The site uses the supplied cafe ambiance photographs in `public/ambiance/` and the existing supplied menu photographs in `public/menu_images/`.
- The menu is a visual category browser because exact item names, ingredients and prices were not provided.
- Friday opening hours remain explicitly unverified.
- Phone, WhatsApp, Instagram and Google Maps directions links are wired to the supplied business details.
- English/Arabic switching updates the complete page and document direction.
