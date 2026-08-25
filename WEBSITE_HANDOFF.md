# Adri Bru website: temporary state and launch handoff

This project currently shows a temporary under-construction screen while the artist's final content is being prepared. The complete website remains in the codebase and can be restored without rebuilding it.

## Current public experience

- Every route displays the temporary screen through `src/pages/_app.tsx`.
- The screen contains the Adri Bru logo, an English/Spanish language selector, the translated under-construction message, and an Instagram link.
- Instagram points to `https://www.instagram.com/byadribru/`.
- The original site pages and artwork data have not been deleted.

## Feature controls

All temporary visibility settings are in `src/config/site.ts`:

```ts
export const siteFeatures = {
  underConstruction: true,
  originals: false,
  facebook: false,
  etsy: false,
} as const;
```

- `underConstruction`: Set to `false` to reveal the complete website again.
- `originals`: Set to `true` when the original-artwork catalog has real information. This restores its navigation item and makes `/originals` available.
- `facebook`: Set to `true` only after replacing the provisional Facebook URL with the artist's real profile.
- `etsy`: Set to `true` only after replacing the provisional Etsy URL with the artist's real shop.

## Work completed

- Hid the Originals navigation item and disabled the direct `/originals` route while its content is provisional.
- Hid Facebook in the header and footer.
- Hid Etsy in the footer.
- Updated Instagram links in the header, footer, contact page, and temporary page to `https://www.instagram.com/byadribru/`.
- Updated the header WhatsApp link to derive its destination from `contact.phoneValue`. The current number is `+34 616 08 88 72`, producing `https://wa.me/34616088872`.
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
