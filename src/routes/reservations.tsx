import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarCheck, Clock, Info, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { PageHeader, Section, SectionHeading } from "@/components/ui/section";
import { HOURS, RESTAURANT } from "@/data/restaurant";

const TITLE = "Reservations — Book a Rooftop Table | Rooftop Soi3";
const DESCRIPTION =
  "Reserve a table at Rooftop Soi3 in Dhanmondi, Dhaka. Pick your date, time and party size — terrace seating fills fast on weekend evenings.";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: ReservationsPage,
});

/** Validation runs on submit; messages surface inline under each field. */
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a reachable phone number")
    .max(24, "Phone number is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  partySize: z.string().min(1, "Select a party size"),
  notes: z.string().trim().max(500, "Please keep notes under 500 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const inputClass =
  "mt-2 w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-ring";

function ReservationsPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [confirmed, setConfirmed] = useState<{ name: string; date: string; time: string } | null>(
    null,
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse({ ...raw, notes: raw.notes ?? "" });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    // Front-end only for now: swap this for a booking backend when ready.
    setConfirmed({
      name: result.data.name,
      date: result.data.date,
      time: result.data.time,
    });
  }

  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title={
          <>
            Book a table <span className="text-gradient-gold">under the skyline</span>.
          </>
        }
        intro="Terrace seating is limited and goes quickly between 7 and 9 PM. Send a request and we'll confirm by phone."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* ---------- Booking form ---------- */}
          <div>
            {confirmed ? (
              <div
                role="status"
                className="animate-fade-up rounded-lg border border-gold/40 bg-card p-10 text-center"
              >
                <CheckCircle2 className="mx-auto size-10 text-gold" />
                <h2 className="mt-6 text-2xl">Request received, {confirmed.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We've noted your table for <strong className="text-foreground">{confirmed.date}</strong>{" "}
                  at <strong className="text-foreground">{confirmed.time}</strong>. Our team will call
                  to confirm within a few hours. For anything urgent, ring us at{" "}
                  <a href={RESTAURANT.phoneHref} className="text-gold">
                    {RESTAURANT.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setConfirmed(null)}
                  className="mt-8 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name}>
                    <input name="name" className={inputClass} placeholder="Your name" />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input
                      name="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </Field>
                </div>

                <Field label="Email" error={errors.email}>
                  <input
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-3">
                  <Field label="Date" error={errors.date}>
                    <input name="date" type="date" className={inputClass} />
                  </Field>
                  <Field label="Time" error={errors.time}>
                    <input name="time" type="time" className={inputClass} />
                  </Field>
                  <Field label="Party size" error={errors.partySize}>
                    <select name="partySize" defaultValue="2" className={inputClass}>
                      {["1", "2", "3", "4", "5", "6", "8", "10", "12+"].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === "1" ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Special requests" error={errors.notes}>
                  <textarea
                    name="notes"
                    rows={4}
                    maxLength={500}
                    className={inputClass}
                    placeholder="Birthday, terrace edge table, dietary needs…"
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
                >
                  <CalendarCheck className="size-4" /> Request this table
                </button>
              </form>
            )}
          </div>

          {/* ---------- Hours & policy ---------- */}
          <aside className="space-y-8">
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="flex items-center gap-2 text-xl">
                <Clock className="size-5 text-gold" /> Opening hours
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex flex-col gap-1 border-b border-border/60 pb-3">
                    <span>{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-surface/60 p-8">
              <h2 className="flex items-center gap-2 text-xl">
                <Info className="size-5 text-gold" /> Walk-ins & bookings
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>Walk-ins are welcome on weekdays and before 6:30 PM.</li>
                <li>
                  Friday and Saturday evenings we recommend booking at least a day in advance —
                  terrace tables are the first to go.
                </li>
                <li>Groups of eight or more, please call us directly so we can set a long table.</li>
                <li>We hold reserved tables for 20 minutes past the booking time.</li>
              </ul>
              <a
                href={RESTAURANT.phoneHref}
                className="mt-6 inline-block text-sm font-semibold text-gold hover:text-gold-soft"
              >
                Call {RESTAURANT.phone}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/40">
        <SectionHeading
          eyebrow="Private events"
          title="Hosting something bigger?"
          intro="Birthdays, mehendi nights, corporate dinners — the terrace can be reserved in part or in full. Mention it in your request or call us and we'll build a menu around it."
          align="center"
        />
      </Section>
    </>
  );
}

/** Labelled form field with inline validation message. */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-foreground">{label}</span>
      {children}
      {error ? (
        <span role="alert" className="mt-2 block text-xs text-destructive">
          {error}
        </span>
      ) : null}
    </label>
  );
}
