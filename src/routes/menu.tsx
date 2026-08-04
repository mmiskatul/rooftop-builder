import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Printer, Flame, Star, Leaf } from "lucide-react";
import { GoldButton, PageHeader, Section } from "@/components/ui/section";
import { MENU, type MenuItem } from "@/data/restaurant";

const TITLE = "Menu — Kebabs, Naan, Pasta & Seafood | Rooftop Soi3";
const DESCRIPTION =
  "Explore the full Rooftop Soi3 menu: charcoal kebabs and grills, tandoori naan, pasta, seafood, steaks, beverages and desserts with prices in BDT.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const TAG_STYLE: Record<string, { icon: typeof Flame; label: string }> = {
  spicy: { icon: Flame, label: "Spicy" },
  "chef's special": { icon: Star, label: "Chef's special" },
  vegetarian: { icon: Leaf, label: "Vegetarian" },
};

function Tags({ tags }: { tags?: MenuItem["tags"] }) {
  if (!tags?.length) return null;
  return (
    <span className="mt-2 flex flex-wrap gap-2">
      {tags.map((t) => {
        const meta = TAG_STYLE[t];
        const Icon = meta.icon;
        return (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full border border-gold/35 px-2.5 py-0.5 text-[0.65rem] tracking-wider text-gold uppercase"
          >
            <Icon className="size-3" /> {meta.label}
          </span>
        );
      })}
    </span>
  );
}

function MenuPage() {
  // "all" shows every section; otherwise a single category id.
  const [active, setActive] = useState<string>("all");
  const sections = active === "all" ? MENU : MENU.filter((c) => c.id === active);

  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title={
          <>
            From the tandoor, the coals and{" "}
            <span className="text-gradient-gold">the wok line</span>.
          </>
        }
        intro="Prices in Bangladeshi Taka (৳) and inclusive of VAT. Ask your server about tonight's off-menu grills."
      />

      {/* ---------- Category tabs ---------- */}
      <div className="sticky top-[4.5rem] z-40 border-b border-border bg-background/92 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[{ id: "all", label: "All" }, ...MENU].map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === c.id
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <div className="space-y-20">
          {sections.map((category) => (
            <section key={category.id} aria-labelledby={`h-${category.id}`}>
              <h2 id={`h-${category.id}`} className="text-3xl sm:text-4xl">
                {category.label}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">{category.blurb}</p>
              <ul className="mt-9 grid gap-x-14 gap-y-8 lg:grid-cols-2">
                {category.items.map((item) => (
                  <li key={item.name} className="border-b border-border/70 pb-6">
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-lg leading-snug">{item.name}</h3>
                      <span
                        className="mb-1 h-px grow bg-border"
                        aria-hidden
                        style={{ minWidth: "1rem" }}
                      />
                      <span className="shrink-0 font-semibold text-gold">৳{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <Tags tags={item.tags} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-border pt-10">
          <GoldButton to="/reservations">Reserve a Table</GoldButton>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <Printer className="size-4" /> Print / save as PDF
          </button>
        </div>
      </Section>
    </>
  );
}
