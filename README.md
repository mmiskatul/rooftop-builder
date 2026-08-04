# Rooftop Builder

Website Generation Prompt — Rooftop Soi3

Copy everything below into Lovable (or similar AI website builder) as your starting prompt.

PROMPT

Build a modern, production-ready restaurant website for Rooftop Soi3, a rooftop dining restaurant located in Dhanmondi, Dhaka, Bangladesh, known for panoramic skyline views, kebabs, naan, pasta, seafood, and Asian-fusion cuisine.

Design Direction

Aesthetic: modern, upscale, warm — evoke golden-hour rooftop dining, string lights, city skyline at dusk

Color palette: deep charcoal/navy background with warm amber/gold accents (reflecting rooftop ambiance), off-white text

Typography: elegant serif for headings (e.g. Playfair Display / Cormorant), clean sans-serif for body (e.g. Inter / Poppins)

High-impact hero imagery/video of rooftop skyline views and plated dishes

Generous whitespace, smooth scroll animations, subtle hover/parallax effects

Fully responsive — mobile-first, since most diners will browse on phones

Fast-loading, accessible (proper contrast, alt text, semantic HTML)

Site Structure — Each nav item = its own page/route

Build this as a multi-page site (not single-page scroll). Navigation bar with the following links, each routing to its own dedicated page:

Home (/)

Full-screen hero with skyline photo/video + tagline + "Reserve a Table" CTA

Brief intro/story teaser

Featured dishes carousel (3-4 signature items)

Ambiance photo gallery preview

Customer review highlights (star ratings, short quotes)

Location teaser with map thumbnail

Footer with hours, address, socials, contact

About (/about)

Restaurant story: rooftop concept, what makes the ambiance unique

Interior/exterior photos

Chef/kitchen highlight section (placeholder content, editable)

What makes it different (open-air seating, skyline views, cuisine blend)

Menu (/menu)

Full categorized digital menu: Kebabs & Grills, Naan & Breads, Pasta, Seafood, Steaks, Beverages, Desserts

Each item: name, short description, price in ৳ (BDT)

Filter/tab navigation between categories

Optional: dietary tags (spicy, chef's special)

Downloadable/printable menu option

Gallery (/gallery)

Grid/masonry photo gallery: rooftop views, food shots, interior, evening ambiance

Lightbox on click

Optional Instagram feed embed section

Reservations (/reservations)

Booking form: name, phone, email, date, time, party size, special requests

Restaurant hours displayed clearly

Note about walk-ins vs advance booking

Confirmation state/message on submit

Contact (/contact)

Address: R Plaza, Satmasjid Road, Dhanmondi, Dhaka 1209

Embedded Google Map

Phone number, email, social links (Instagram, Facebook, TikTok)

Contact form

Opening hours table

Global Components

Sticky/transparent-to-solid navbar on scroll, with active-page indicator

Mobile hamburger menu with smooth slide-in animation

Footer present on all pages: logo, quick links, hours, social icons, address, copyright

"Reserve a Table" CTA button always accessible in navbar

Loading states and smooth page transitions

Technical Requirements

Use React with React Router (or Next.js App Router) for true separate pages/routes — not anchor-scroll sections

Component-based structure: reusable Navbar, Footer, Button, Card, MenuItem components

Placeholder images from a free stock source (Unsplash) tagged for rooftop dining, Asian/Middle Eastern grilled food, city skyline at dusk — to be swapped with real photos later

SEO basics: page titles, meta descriptions per page, semantic heading structure

Clean, commented code so content (menu items, prices, hours, images) can be easily updated later

Content to Use

Restaurant name: Rooftop Soi3

Location: R Plaza, Satmasjid Road, Dhanmondi, Dhaka 1209, Bangladesh

Cuisine: Asian fusion / Chinese / Kebab house with rooftop dining

Signature items: Rooftop Soi3 Special Naan, Beef Sheek Kebab, BBQ Chicken, Peshwari Chicken, Afghan Malai Kebab, Chicken Reshmi Kebab, Tandoori Chicken, Mushroom/American Steak

Vibe: open-air rooftop, city skyline views, relaxed evening dining, good for dates and gatherings

Generate the full multi-page site now with all routes wired up and navigation working.

Notes for you before pasting

Replace placeholder images with real restaurant photos once you have them — this matters a lot for a visuals-driven business like this.

Double-check menu prices/items against their current physical menu before publishing — I pulled a partial list from a delivery listing.

If you want single-page-scroll instead of multi-page, just remove the "Each nav item = its own page/route" instruction and React Router lines.

the url http://rooftopsoi3.com/

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/72bff1f8-0a5a-4c20-8b1a-d6974a261355).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
