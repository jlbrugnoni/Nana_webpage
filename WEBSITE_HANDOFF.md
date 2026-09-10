# Adri Bru website: temporary state and launch handoff

This project includes a temporary under-construction screen that can be enabled while the artist's final content is being prepared. It is currently disabled, so the complete website is public.

## Temporary-page behavior

- When enabled, every route displays the temporary screen through `src/pages/_app.tsx`.
- The screen contains the Adri Bru logo, an English/Spanish language selector, the translated under-construction message, and an Instagram link.
- Instagram points to `https://www.instagram.com/byadribru/`.
- The original site pages and artwork data have not been deleted.

## Feature controls

All temporary visibility settings are in `src/config/site.ts`:

```ts
export const siteFeatures = {
  underConstruction: false,
  originals: true,
  facebook: false,
  etsy: false,
} as const;
```

- `underConstruction`: Set to `true` to show the temporary page, or `false` to show the complete website.
- `originals`: Currently `true`, which shows its navigation item and makes `/originals` available. Set it to `false` to hide both.
- `facebook`: Set to `true` only after replacing the provisional Facebook URL with the artist's real profile.
- `etsy`: Set to `true` only after replacing the provisional Etsy URL with the artist's real shop.

## Work completed

- The Originals navigation, homepage preview, and direct `/originals` route are currently enabled with provisional catalog content.
- Replaced the old four-item mock catalog with 23 newly supplied artwork images, named `originals_001` through `originals_023` while preserving each image format and normalizing extensions to lowercase.
- Added unique bilingual placeholder descriptions in `src/data/paintings.ts`; these descriptions must be replaced with approved artwork copy before final launch.
- Replaced placeholder titles, sizes, materials, years, and prices for PDF-matched works using `ADRI BRU AVAILABLE WORKS 2026.pdf`. `originals_004` does not appear in that PDF; it is manually configured as untitled, size to be confirmed, €250, and sold. `originals_023` is `Yo te protejo`. The PDF works `Cuando coincidimos` and `Díptico sin título` do not have matching uploaded catalog images yet.
- Reworked the artwork presentation as open gallery regions with transparent, object-contained images and adjacent information. Avoid reintroducing opaque card backgrounds around the scanned PNG artwork.
- In the full catalog's desktop layout, the information column stretches to the artwork height, with balanced top and bottom spacing, availability near the top, and the inquiry button anchored near the bottom.
- Hid Facebook in the header and footer.
- Hid Etsy in the footer.
- Updated Instagram links in the header, footer, and temporary page to `https://www.instagram.com/byadribru/`.
- Simplified the contact page by using `Get in touch / Ponte en contacto` as its sole main heading and removing the redundant Follow along social-links section.
- Replaced the provisional About biography with artist-approved English and Spanish copy, removed the old practice/inspiration placeholders, and replaced all three old artist images with the single portrait at `public/gallery/artist.jpg`.
- Updated the header WhatsApp link to derive its destination from `contact.phoneValue`. The current number is `+34 616 08 88 72`, producing `https://wa.me/34616088872`.
- Header social links use matching 44 × 44 px circular targets with 20 × 20 px icons for balanced visual weight and comfortable interaction.
- Artwork inquiry buttons open a message to `info@adribru.com` with a localized English or Spanish subject and short editable body containing the artwork title.
- Sold artworks are labeled `Sold / Vendida`, and their inquiry buttons are visibly disabled and cannot open an email.
- Artwork series are displayed in numerical order within each group: P1-P3, Portrait 1-5, and Face 1-5. File-based artwork IDs remain stable even when display order changes.
- Added the bilingual temporary page. Its always-available English and Spanish copy lives in `src/components/UnderConstruction.tsx`; matching translation entries also live under `construction` in both locale files for future reuse.

## Final-launch checklist

1. Replace all provisional biography, contact, artwork, pricing, availability, and metadata in the English and Spanish locale files and in `src/data/paintings.ts`.
2. Replace provisional images in `public/gallery/` and confirm each image reference in the source code.
3. Verify the email, phone, location, Instagram, and any new social/shop URLs.
4. If Facebook or Etsy will be used, update their URLs before enabling their feature flags.
5. Set `originals: true` only after checking the catalog in both languages and on mobile and desktop.
6. Set `underConstruction: false` to publish the complete site.
7. Run `npm run build` and review every page in both English and Spanish before deployment.

## Important implementation note

The temporary screen is intentionally applied in `_app.tsx`, so visitors see it on every URL—not only the home page. Turning off `underConstruction` restores normal routing immediately.
