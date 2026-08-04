import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2, MapPin, Phone, Mail } from "lucide-react";
import { HOURS, RESTAURANT } from "@/data/restaurant";

const SOCIAL_ICONS = { Instagram, Facebook, TikTok: Music2 } as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">
            Rooftop <span className="text-gradient-gold">Soi3</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {RESTAURANT.cuisine}. Open-air dining above Satmasjid Road with panoramic views of the
            Dhaka skyline.
          </p>
          <div className="mt-6 flex gap-3">
            {RESTAURANT.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/menu", label: "Menu" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reservations", label: "Reservations" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Hours</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {HOURS.map((h) => (
              <li key={h.day}>
                <span className="block text-foreground">{h.day}</span>
                <span className="text-muted-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Find us</h2>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {RESTAURANT.address.line1}
                <br />
                {RESTAURANT.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              <a href={RESTAURANT.phoneHref} className="hover:text-gold">
                {RESTAURANT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold">
                {RESTAURANT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Rooftop Soi3. All rights reserved.
      </div>
    </footer>
  );
}
