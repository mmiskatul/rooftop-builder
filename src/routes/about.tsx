import { createFileRoute } from "@tanstack/react-router";
import { Wind, Building2, Flame, Users } from "lucide-react";
import { GoldButton, PageHeader, Section, SectionHeading } from "@/components/ui/section";
import interiorImg from "@/assets/interior.jpg";
import heroImg from "@/assets/hero-rooftop.jpg";
import chefImg from "@/assets/chef.jpg";
import ambianceImg from "@/assets/ambiance-table.jpg";

const TITLE = "About Rooftop Soi3 — Open-Air Dining Above Dhanmondi";
const DESCRIPTION =
  "The story behind Rooftop Soi3: an open-air terrace on Satmasjid Road blending kebab-house tradition with Asian-fusion cooking and panoramic Dhaka skyline views.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

/** Edit these four points to change the "what makes us different" grid. */
const DIFFERENTIATORS = [
  {
    icon: Wind,
    title: "Open-air seating",
    body: "The whole terrace is outdoors. Ceiling fans, planters and a breeze that makes Dhaka evenings bearable.",
  },
  {
    icon: Building2,
    title: "Panoramic skyline",
    body: "Uninterrupted views across Dhanmondi — best between 6 and 8 PM when the city switches its lights on.",
  },
  {
    icon: Flame,
    title: "Live charcoal grills",
    body: "Kebabs are skewered to order and finished over open coals, never held under a lamp.",
  },
  {
    icon: Users,
    title: "Built for gatherings",
    body: "Two-seat corners for dates, long tables for eight or more, and quiet indoor seating when it rains.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            A rooftop table, a charcoal grill, and{" "}
            <span className="text-gradient-gold">the whole city below</span>.
          </>
        }
        intro="Rooftop Soi3 is a rooftop kebab house and Asian-fusion kitchen on Satmasjid Road, Dhanmondi — built around open air, slow evenings and food worth lingering over."
      />

      {/* ---------- Story ---------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <SectionHeading eyebrow="The concept" title="Why a rooftop?" />
            <p>
              Dhanmondi is dense. Ground-floor restaurants fight traffic noise and closed windows,
              so we went up instead. The top floor of R Plaza gave us something rare in this city: an
              unobstructed horizon and a breeze that arrives every evening around sunset.
            </p>
            <p>
              We kept the build simple — timber decking, planters along the parapet, lanterns on the
              tables and string lights overhead. Nothing that competes with the view. When the sky
              turns amber over Satmasjid Road, the room lights itself.
            </p>
            <p>
              The kitchen is deliberately broad. A tandoor for naan and kebabs, a charcoal grill for
              steaks and barbecue, and a wok line for the Chinese and Asian-fusion side of the menu.
              One table can order sheek kebab, prawn aglio e olio and chilli garlic fish and everyone
              leaves happy.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={heroImg}
              alt="Rooftop Soi3 terrace at sunset with the Dhaka skyline"
              loading="lazy"
              width={1920}
              height={1088}
              className="h-64 w-full rounded-lg object-cover sm:col-span-2"
            />
            <img
              src={interiorImg}
              alt="Indoor dining room with warm lantern lighting"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-56 w-full rounded-lg object-cover"
            />
            <img
              src={ambianceImg}
              alt="Candlelit table set for two on the terrace"
              loading="lazy"
              width={960}
              height={1280}
              className="h-56 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ---------- Chef highlight (placeholder copy — editable) ---------- */}
      <Section className="border-y border-border bg-surface/40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <img
            src={chefImg}
            alt="Chef grilling kebabs over open charcoal flames in the Rooftop Soi3 kitchen"
            loading="lazy"
            width={1280}
            height={1024}
            className="w-full rounded-lg object-cover shadow-[var(--shadow-elegant)]"
          />
          <div>
            <SectionHeading
              eyebrow="The kitchen"
              title="Skewered to order, never before"
              intro="Our head chef trained in Peshawari and North Indian grill kitchens before spending years on wok lines across Southeast Asia. That combination is the whole menu."
            />
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="text-foreground">Marination:</span> kebabs rest a minimum of eight
                hours in yoghurt, cream or spice pastes made in-house each morning.
              </li>
              <li>
                <span className="text-foreground">Bread:</span> every naan and roti is slapped into
                the tandoor after you order — that is why they arrive hot.
              </li>
              <li>
                <span className="text-foreground">Sourcing:</span> seafood arrives from the coast on
                a daily run; anything unsold is not carried over.
              </li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Placeholder chef bio — replace with your team's real details and photo.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- Differentiators ---------- */}
      <Section>
        <SectionHeading eyebrow="What makes us different" title="Four reasons people come back" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="hover-lift rounded-lg border border-border bg-card p-8">
              <Icon className="size-6 text-gold" />
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3">
          <GoldButton to="/reservations">Reserve a Table</GoldButton>
          <GoldButton to="/menu" variant="outline">
            See the menu
          </GoldButton>
        </div>
      </Section>
    </>
  );
}
