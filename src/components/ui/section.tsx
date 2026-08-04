import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/** Page hero used by every inner page (About, Menu, Gallery, ...). */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="border-b border-border bg-surface/40 px-5 pt-36 pb-14 sm:px-8 sm:pt-44 sm:pb-20">
      <div className="mx-auto max-w-7xl animate-fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}

/** Standard vertical rhythm wrapper for page sections. */
export function Section({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`px-5 py-20 sm:px-8 sm:py-28 ${className}`} {...rest}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {intro ? <p className="mt-5 leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

/** Primary gold CTA. `to` renders a router Link, otherwise a plain button-ish span. */
export function GoldButton({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:brightness-110"
      : "border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground";
  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="text-sm tracking-[0.2em] text-gold">
      {"★".repeat(rating)}
      <span className="text-muted-foreground">{"★".repeat(5 - rating)}</span>
    </span>
  );
}
