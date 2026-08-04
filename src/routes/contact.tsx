import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Music2, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { PageHeader, Section, SectionHeading } from "@/components/ui/section";
import { HOURS, RESTAURANT } from "@/data/restaurant";

const TITLE = "Contact & Directions — Rooftop Soi3, Dhanmondi Dhaka";
const DESCRIPTION =
  "Find Rooftop Soi3 at R Plaza, Satmasjid Road, Dhanmondi, Dhaka 1209. Phone, email, socials, opening hours, map and contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

const inputClass =
  "mt-2 w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-ring";

const SOCIAL_ICONS = { Instagram, Facebook, TikTok: Music2 } as const;

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(raw);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Questions, bookings or <span className="text-gradient-gold">just directions</span>.
          </>
        }
        intro="We're on the top floor of R Plaza on Satmasjid Road. Call, message or drop by — the terrace opens at noon."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---------- Details ---------- */}
          <div className="space-y-10">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <h2 className="text-lg">Address</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {RESTAURANT.address.line1}
                    <br />
                    {RESTAURANT.address.line2}
                  </p>
                  <a
                    href={RESTAURANT.mapLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-sm font-semibold text-gold hover:text-gold-soft"
                  >
                    Get directions
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <h2 className="text-lg">Phone</h2>
                  <a
                    href={RESTAURANT.phoneHref}
                    className="mt-1 block text-sm text-muted-foreground hover:text-gold"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <h2 className="text-lg">Email</h2>
                  <a
                    href={`mailto:${RESTAURANT.email}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-gold"
                  >
                    {RESTAURANT.email}
                  </a>
                </div>
              </li>
            </ul>

            <div>
              <h2 className="eyebrow">Follow us</h2>
              <div className="mt-4 flex gap-3">
                {RESTAURANT.socials.map((s) => {
                  const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
                    >
                      <Icon className="size-4" /> {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ---------- Hours table ---------- */}
            <div>
              <h2 className="eyebrow">Opening hours</h2>
              <table className="mt-4 w-full text-sm">
                <caption className="sr-only">Rooftop Soi3 weekly opening hours</caption>
                <tbody>
                  {HOURS.map((h) => (
                    <tr key={h.day} className="border-b border-border/60">
                      <th scope="row" className="py-3 text-left font-medium">
                        {h.day}
                      </th>
                      <td className="py-3 text-right text-muted-foreground">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ---------- Contact form ---------- */}
          <div>
            {sent ? (
              <div
                role="status"
                className="animate-fade-up rounded-lg border border-gold/40 bg-card p-10 text-center"
              >
                <CheckCircle2 className="mx-auto size-10 text-gold" />
                <h2 className="mt-6 text-2xl">Message sent</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thanks for writing in — we usually reply within a day. For same-day bookings,
                  calling is faster.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6 rounded-lg border border-border bg-card p-8"
              >
                <h2 className="text-2xl">Send us a message</h2>
                <label className="block text-sm">
                  <span className="font-medium">Name</span>
                  <input name="name" className={inputClass} placeholder="Your name" />
                  {errors.name ? (
                    <span role="alert" className="mt-2 block text-xs text-destructive">
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <label className="block text-sm">
                  <span className="font-medium">Email</span>
                  <input
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                  {errors.email ? (
                    <span role="alert" className="mt-2 block text-xs text-destructive">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
                <label className="block text-sm">
                  <span className="font-medium">Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    maxLength={1000}
                    className={inputClass}
                    placeholder="How can we help?"
                  />
                  {errors.message ? (
                    <span role="alert" className="mt-2 block text-xs text-destructive">
                      {errors.message}
                    </span>
                  ) : null}
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
                >
                  <Send className="size-4" /> Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ---------- Map ---------- */}
      <Section className="border-t border-border bg-surface/40">
        <SectionHeading eyebrow="On the map" title="R Plaza, Satmasjid Road" align="center" />
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <iframe
            title="Google Map showing Rooftop Soi3 in Dhanmondi, Dhaka"
            src={RESTAURANT.mapEmbed}
            loading="lazy"
            className="h-[24rem] w-full sm:h-[30rem]"
          />
        </div>
      </Section>
    </>
  );
}
