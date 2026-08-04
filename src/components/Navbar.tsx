import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/** Nav links — each one is a real route under src/routes. */
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent over the hero, solid once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-none"
          aria-label="Rooftop Soi3 home"
        >
          <span className="font-display text-xl tracking-tight sm:text-2xl">
            Rooftop <span className="text-gradient-gold">Soi3</span>
          </span>
          <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
            Dhanmondi · Dhaka
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="relative py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/reservations"
            className="rounded-full border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile slide-in panel */}
      <div
        className={`overflow-hidden border-border bg-background/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[28rem] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link, i) => (
            <li key={link.to} style={{ animationDelay: `${i * 45}ms` }} className="animate-fade-up">
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                className="block border-b border-border/60 py-3.5 font-display text-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Link
              to="/reservations"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Reserve a Table
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
