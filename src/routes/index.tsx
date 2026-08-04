import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { GoldButton, Section, SectionHeading, Stars } from "@/components/ui/section";
import { MENU, RESTAURANT, REVIEWS, HOURS } from "@/data/restaurant";
import heroImg from "@/assets/hero-rooftop.jpg";
import kebabImg from "@/assets/dish-kebab.jpg";
import naanImg from "@/assets/dish-naan.jpg";
import tandooriImg from "@/assets/dish-tandoori.jpg";
import seafoodImg from "@/assets/dish-seafood.jpg";
import interiorImg from "@/assets/interior.jpg";
import ambianceImg from "@/assets/ambiance-table.jpg";

const TITLE = "Rooftop Soi3 — Rooftop Dining & Kebabs in Dhanmondi, Dhaka";
const DESCRIPTION =
  "Open-air rooftop dining on Satmasjid Road, Dhanmondi. Charcoal kebabs, signature naan, pasta and seafood served under the Dhaka skyline. Reserve a table.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/** Featured signature dishes shown on the home page. */
const FEATURED = [
  {
    img: naanImg,
    name: "Rooftop Soi3 Special Naan",
    note: "Cheese, herb butter and nuts — the one everybody orders.",
    price: 220,
  },
  {
    img: kebabImg,
    name: "Beef Sheek Kebab",
    note: "Hand-minced beef with green chilli, straight off the charcoal.",
    price: 420,
  },
  {
    img: tandooriImg,
    name: "Tandoori Chicken",
    note: "Clay-oven roasted, smoky, served with mint chutney.",
    price: 490,
  },
  {
    img: seafoodImg,
    name: "Grilled Prawn Platter",
    note: "Jumbo prawns, lemon butter, herb rice.",
    price: 890,
  },
];

function Index() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Rooftop Soi3 terrace at dusk with string lights and the Dhaka skyline"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="scrim-dusk absolute inset-0" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8 sm:pb-28">
          <p className="eyebrow animate-fade-up">{RESTAURANT.cuisine}</p>
          <h1
            className="animate-fade-up mt-5 max-w-4xl text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            Kebabs, skyline and <span className="text-gradient-gold">string lights</span> above
            Dhanmondi.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            An open-air rooftop table, the city glowing below, and charcoal grills running all
            evening. This is dinner in Dhaka the way it should feel.
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <GoldButton to="/reservations">Reserve a Table</GoldButton>
            <GoldButton to="/menu" variant="outline">
              View the Menu
            </GoldButton>
          </div>
        </div>
      </section>

      {/* ---------- Story teaser ---------- */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Five floors up, the city gets quiet."
              intro="Rooftop Soi3 began with one idea: give Dhanmondi a table in the open air. We kept the grills visible, the lights low and the menu wide — kebabs and naan from the tandoor, pasta and steaks from the range, seafood tossed in the wok."
            />
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              Read our story <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={interiorImg}
              alt="Warm lantern-lit interior seating at Rooftop Soi3"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full rounded-lg object-cover shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-8 -left-4 hidden w-44 rounded-lg border border-border bg-background/90 p-5 backdrop-blur sm:block">
              <p className="font-display text-3xl text-gold">4.6</p>
              <Stars rating={5} />
              <p className="mt-2 text-xs text-muted-foreground">Loved by Dhanmondi diners</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- Featured dishes carousel (scroll-snap) ---------- */}
      <Section className="border-y border-border bg-surface/40">
        <SectionHeading
          eyebrow="Signature plates"
          title="What the kitchen is known for"
          intro="Four dishes that keep people coming back. Swipe through, then browse the full menu."
        />
        <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FEATURED.map((dish) => (
            <li
              key={dish.name}
              className="hover-lift w-[16rem] shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-card sm:w-[19rem]"
            >
              <img
                src={dish.img}
                alt={dish.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg">{dish.name}</h3>
                  <span className="shrink-0 text-sm font-semibold text-gold">৳{dish.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dish.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <GoldButton to="/menu" variant="outline">
            Full menu · {MENU.length} sections
          </GoldButton>
        </div>
      </Section>

      {/* ---------- Ambiance gallery preview ---------- */}
      <Section>
        <SectionHeading eyebrow="Ambiance" title="Evenings on the terrace" align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <img
            src={ambianceImg}
            alt="Candlelit table for two with the city skyline behind"
            loading="lazy"
            width={960}
            height={1280}
            className="h-72 w-full rounded-lg object-cover sm:h-96"
          />
          <img
            src={heroImg}
            alt="String lights over the rooftop seating at sunset"
            loading="lazy"
            width={1920}
            height={1088}
            className="h-72 w-full rounded-lg object-cover sm:h-96"
          />
          <img
            src={interiorImg}
            alt="Indoor dining room with lantern lighting"
            loading="lazy"
            width={1536}
            height={1024}
            className="h-72 w-full rounded-lg object-cover sm:h-96"
          />
        </div>
        <div className="mt-10 text-center">
          <GoldButton to="/gallery" variant="outline">
            Open the gallery
          </GoldButton>
        </div>
      </Section>

      {/* ---------- Reviews ---------- */}
      <Section className="border-y border-border bg-surface/40">
        <SectionHeading eyebrow="Guest reviews" title="What diners say" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <li key={r.name} className="rounded-lg border border-border bg-card p-7">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 font-display text-lg leading-relaxed">
                “{r.quote}”
              </blockquote>
              <p className="mt-5 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {r.name}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Location teaser ---------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Find us"
              title="R Plaza, Satmasjid Road"
              intro="Dhanmondi, Dhaka 1209. Take the lift to the top floor — the terrace is straight ahead."
            />
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="text-muted-foreground">
                  {RESTAURANT.address.line1}, {RESTAURANT.address.line2}
                </span>
              </li>
              {HOURS.map((h) => (
                <li key={h.day} className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground">{h.day}</span> — {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <GoldButton to="/reservations">Reserve a Table</GoldButton>
              <GoldButton to="/contact" variant="outline">
                Contact & directions
              </GoldButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Map showing Rooftop Soi3 at R Plaza, Satmasjid Road, Dhanmondi"
              src={RESTAURANT.mapEmbed}
              loading="lazy"
              className="h-80 w-full lg:h-[26rem]"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
