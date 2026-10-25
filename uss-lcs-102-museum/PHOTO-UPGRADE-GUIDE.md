# USS LCS-102 Museum — Volunteer Photo Upgrade Guide

All historical and shipboard photographs scraped from `lcsmuseum.org` and `usslcs102.org` are stored in a single folder:
- **Local / Source Folder:** `/public/assets/images/`
- **Live Hostinger Folder:** `public_html/assets/images/`

---

## How to Upgrade Any Low-Resolution Photo (Zero Coding Required)

1. **Locate the new high-resolution scan or photo** on your computer.
2. **Rename your new photo** so it matches the **exact filename** of the existing photo in the table below (for example, `crew05.jpg` or `original-flag-102.jpg`).
3. **Drag and drop** the file into `public_html/assets/images/` inside your Hostinger File Manager (choose "Overwrite").
4. Done! The website automatically displays the upgraded high-resolution photo across the homepage and gallery.

---

## Priority List: Low-Resolution Screen-Scraped Photos to Upgrade First

These 12 archival images were extracted from the legacy sites at lower pixel dimensions (`435px` to `985px`) and are currently protected on the website by an **Archival Darkroom Frame** so they do not stretch or pixelate:

| Filename in `/assets/images/` | Current Size | Subject / Description |
| :--- | :--- | :--- |
| `crew05.jpg` | `435 × 697` | Shipboard maintenance & preservation detail |
| `crew04.jpg` | `467 × 668` | Below-deck engine & electrical restoration |
| `hd-wwii-cert02.jpg` | `640 × 825` | LCS Flotilla 4 "Mighty Midgets" Occupation of Japan Certificate |
| `wwii-dispatch.jpg` | `640 × 1050` | Declassified WWII naval action dispatch |
| `crew01.jpg` | `654 × 946` | Volunteer restoration crew member on watch |
| `hd-wwii-crew02.jpg` | `705 × 955` | Wartime shipmates on gun deck (1945) |
| `hd-wwii-crew06.jpg` | `755 × 920` | WWII crew ashore in the Pacific |
| `wwii-crew.jpg` | `929 × 597` | 1945 wartime crew of the "Mighty Midgets" |
| `members-reunion.jpg` | `957 × 388` | Association members & volunteers reunion |
| `yankee-dollar-insignia.jpg` | `985 × 1047` | Original WWII "Yankee Dollar" ship insignia |
| `lcs86-alongside-porter.jpg` | `1198 × 496` | LCS-86 rescuing survivors alongside USS William D. Porter |
| `original-flag-102.jpg` | `1287 × 744` | Veterans holding the framed original 48-star WWII flag |

---

## How to Add Brand-New Photos or Edit Captions

If the museum team wants to add new photos to the gallery later:
1. Drop the new `.jpg` or `.png` file into `/public/assets/images/`.
2. Open [`src/data/ship-data.json`](src/data/ship-data.json) and scroll to `"galleryItems"`.
3. Add a new block with `"title"`, `"category"` (`"ship"`, `"wwii"`, `"restoration"`, or `"community"`), `"image"`, and `"desc"`.

