# Squarespace 7.1 Trial Setup & Ownership Transfer Guide

This package is pre-configured so you can deploy the complete **USS LCS-102 ("Yankee Dollar") Landing Craft Support Museum** website into a **Squarespace 7.1 Free Trial** in under 5 minutes—even on a free trial without needing paid Code Injection.

---

## Step 1: Start the Free Squarespace 7.1 Trial (1 Minute)
1. Go to [squarespace.com/templates](https://www.squarespace.com/templates) and click **Start with any blank or dark template** (no credit card required for the 14-day trial).
2. Name the site: **`USS LCS-102 Landing Craft Support Museum`**.

---

## Step 2: Paste the Global Custom CSS (1 Minute)
1. In the left Squarespace sidebar, click **Website** → **Pages**.
2. Scroll to the bottom of the Pages panel and click **Website Tools** → **Custom CSS**.
3. Open [`squarespace/custom-css.css`](file:///d:/Freelancing/military-/squarespace/custom-css.css), copy the entire file, paste it into the **Custom CSS** box, and click **Save** (top right).
   - *What this does:* Loads the Intrepid Museum-inspired naval typography (`Barlow Condensed`, `Plus Jakarta Sans`, `JetBrains Mono`), applies the dark hull/gold/crimson theme, hides Squarespace's empty placeholder header/footer, and makes Code Block sections 100% full-bleed across the viewport.

---

## Step 3: Paste the Full-Page Code Block on the Homepage (2 Minutes)
1. Click **Edit** (top left of your Squarespace Homepage preview).
2. Remove any default placeholder sections, or click **Add Section** → **Add a blank section**.
3. Hover over the blank section, click **Edit Section** → set **Row Count** to `1`, toggle **Fill Screen** `OFF`, and set **Section Width / Content Width** to **L (100%)**.
4. Click **+ Add Block** → select **Code** (available on all free trial plans!).
5. In the Code Block editor:
   - Make sure **Mode** is set to `HTML` and **Display Source** is toggled `OFF`.
   - Delete `<p>Hello, World!</p>`.
   - Copy the entire contents of [`squarespace/full-page-code-block.html`](file:///d:/Freelancing/military-/squarespace/full-page-code-block.html) and paste it in.
   - Stretch the Code Block bounding box edge-to-edge across the Fluid Engine grid so there is no side margin.
6. Click **Save** → **Exit** (top left).

> **Note on Images & Video:** Every photo and the drone video inside [`squarespace/full-page-code-block.html`](file:///d:/Freelancing/military-/squarespace/full-page-code-block.html) is already wired to live HTTPS URLs from `lcsmuseum.org` and `usslcs102.org`, so all 20 archival photos and the hero video will load immediately inside Squarespace without manual file uploads. Local copies are also saved in [`assets/images/`](file:///d:/Freelancing/military-/assets/images) if you ever wish to upload them to Squarespace's **Asset Library**.

---

## Step 4: Share the Live Trial Preview Link with Roger Wood
Because Squarespace trial sites are private by default, set a site-wide preview password so Roger can view the live site right away:
1. Go to **Settings** (gear icon at bottom left) → **Site Availability**.
2. Select **Password Protected** and set a simple password (e.g., `LCS102`).
3. Click **Save**.
4. Copy your trial domain (e.g., `https://something-xyz.squarespace.com`) and send it to Roger along with the password `LCS102`.

---

## Step 5: Transfer Squarespace Ownership to Roger Wood (Final Delivery)
When Roger approves the site and is ready to take ownership:
1. Go to **Settings** → **Permissions & Ownership**.
2. Click **Invite Contributor**.
3. Enter Roger Wood's name and email address, and enable **Administrator** permissions.
4. Once Roger accepts the invite, return to **Settings** → **Permissions & Ownership** → click **Transfer Ownership** and select Roger Wood.

