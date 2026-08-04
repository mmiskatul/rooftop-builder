import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, Instagram } from "lucide-react";
import { PageHeader, Section, SectionHeading } from "@/components/ui/section";
import heroImg from "@/assets/hero-rooftop.jpg";
import interiorImg from "@/assets/interior.jpg";
import ambianceImg from "@/assets/ambiance-table.jpg";
import kebabImg from "@/assets/dish-kebab.jpg";
import naanImg from "@/assets/dish-naan.jpg";
import tandooriImg from "@/assets/dish-tandoori.jpg";
import seafoodImg from "@/assets/dish-seafood.jpg";
import chefImg from "@/assets/chef.jpg";

const TITLE = "Gallery — Rooftop Views, Food & Evening Ambiance | Rooftop Soi3";
const DESCRIPTION =
  "Photos of Rooftop Soi3: the open-air terrace at sunset, charcoal-grilled kebabs, tandoori naan, seafood platters and the warm evening ambiance in Dhanmondi.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

/** Swap these entries for real restaurant photography when available. */
const PHOTOS = [
  { src: heroImg, alt: "Rooftop terrace at dusk with string lights and the Dhaka skyline", tall: true },
  { src: kebabImg, alt: "Beef sheek kebab platter over open flame" },
  { src: ambianceImg, alt: "Candlelit table for two with city bokeh behind", tall: true },
  { src: naanImg, alt: "Rooftop Soi3 special naan in a basket with butter" },
  { src: interiorImg, alt: "Indoor dining room with lantern lighting and skyline windows", wide: true },
  { src: tandooriImg, alt: "Tandoori chicken with mint chutney" },
  { src: chefImg, alt: "Chef grilling kebabs over charcoal", wide: true },
  { src: seafoodImg, alt: "Grilled prawn platter with lemon and herbs" },
];

function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openPhoto = openIndex === null ? null : PHOTOS[openIndex];

  // Close the lightbox on Escape.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            The terrace, the grills and <span className="text-gradient-gold">the golden hour</span>.
          </>
        }
        intro="Tap any photo to view it larger. Placeholder imagery — to be replaced with real photography from the restaurant."
      />

      <Section>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <li
              key={p.alt}
              className={p.wide ? "col-span-2 md:col-span-2" : undefined}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View larger: ${p.alt}`}
                className="group block w-full overflow-hidden rounded-lg border border-border"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    p.tall ? "h-64 sm:h-[28rem]" : "h-64 sm:h-72"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Instagram teaser ---------- */}
      <Section className="border-t border-border bg-surface/40">
        <SectionHeading
          eyebrow="@rooftopsoi3"
          title="More on Instagram"
          intro="We post the night's specials, sunset shots and event nights. Follow along — or embed the live feed here later."
          align="center"
        />
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <Instagram className="size-4" /> Follow @rooftopsoi3
          </a>
        </div>
      </Section>

      {/* ---------- Lightbox ---------- */}
      {openPhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setOpenIndex(null)}
          className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={() => setOpenIndex(null)}
            className="absolute top-5 right-5 rounded-full border border-border p-2.5 text-foreground"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={openPhoto.src}
              alt={openPhoto.alt}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {openPhoto.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
