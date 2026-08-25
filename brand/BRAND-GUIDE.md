# LYL brand kit

Three logo concepts, each delivered in every format you'll need. The site currently uses
**sun-badge**. Switching to another concept takes about a minute — see the bottom of this file.

## The palette — Periwinkle & Rose

| Role | Hex | Where it shows up |
|---|---|---|
| Periwinkle | `#7F8FDE` | Logo mark, accents, outline buttons |
| Deep periwinkle | `#5A6BC4` | Links, secondary headings |
| Indigo | `#434F9B` | Hero, footer, dark sections |
| Coral rose | `#E27055` | Buttons, tags, the "Radiate Kindness" tagline |
| Light rose | `#FFC2B2` | Highlights on dark backgrounds |
| Cream | `#FFFBF8` | Page backgrounds |
| Text | `#2E3350` / `#6A7091` | Body copy / muted copy |

Bright blue-violet with a warm coral accent. Energetic and youthful — no green anywhere, and
a clean break from the old teal site.

**Accessibility note:** white text on the coral button sits at 3.1:1 contrast, which is under
the WCAG AA threshold of 4.5:1. If you want the site to pass an accessibility audit, change
`--coral-500` in `styles.css` to `#B84A32`. Everything else on the site already passes.

## Typography

**Poppins** for headings, logo, and the wordmark. **Inter** for body text. Both are free on
Google Fonts and already loaded by the site. In the logo files the type is converted to
outlines, so the files render correctly anywhere — no font install required.

## What's in each concept folder

```
icon.svg / .png              Mark only. Favicons, app icons, stickers.
icon-light.svg / .png        Same mark for dark backgrounds (footer, dark slides).
logo-horizontal.svg / .png   Mark + name + tagline, side by side. Website header, letterhead.
logo-horizontal-white.svg    Horizontal lockup for dark backgrounds.
logo-stacked.svg / .png      Mark above the name. Flyers, t-shirts, tote bags.
profile-square.svg / .png    1000×1000, safe inside a circular crop.
linkedin-banner.svg / .png   1128×191 cover image.
favicon-32.png               Browser tab icon.
favicon-180.png              iOS home-screen icon.
```

## Where each file goes

**Website** — already wired up. `icon.svg` in the header, `icon-light.svg` in the footer,
favicons in the page `<head>`.

**Instagram** — upload `profile-square.png` as your profile picture. Instagram crops to a
circle; the mark is sized to stay comfortably inside that crop.

**LinkedIn** — use `profile-square.png` for the page logo (LinkedIn wants at least 268×268;
this is 1000×1000) and `linkedin-banner.png` for the cover image.

**Flyers, docs, Canva** — `logo-stacked.png` or `logo-horizontal.png`. Both have transparent
backgrounds, so they sit on any color.

## Using the logo well

- Leave clear space around it, at least the height of the mark itself.
- Don't put the standard logo on a dark background — use the `-light` or `-white` versions.
- Don't stretch it. Scale proportionally, always.
- Don't recolor it outside the palette above.
- Below about 40px tall, drop the wordmark and use `icon.svg` alone.

## Switching to a different concept

The site defaults to `sun-badge`. To use `sunburst-heart` or `ripple` instead, find and
replace across the four HTML files:

```
brand/sun-badge/   →   brand/sunburst-heart/
```

Every concept folder has identically named files, so nothing else needs to change.

## Regenerating or tweaking

The logos are plain SVG — editable in Figma, Illustrator, or Inkscape. To recolor everything
at once, open any `.svg` in a text editor and swap the hex codes listed in the palette table.
