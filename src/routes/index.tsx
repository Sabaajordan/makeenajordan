import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Sparkles,
  PackageCheck,
  Clock,
  BadgeDollarSign,
  Building2,
  ArrowRight,
} from "lucide-react";
import machineImage from "@/assets/machine.jpg";
import { MakeenaLogo } from "@/components/makeena-logo";
import { HeroMachine } from "@/components/hero-machine";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makeena Jordan — Vending Machine Services in Amman" },
      {
        name: "description",
        content:
          "Makeena Jordan installs, stocks and maintains snack & drink vending machines in Amman. No start-up fees, no rental fees — offices, hotels, schools, malls and factories.",
      },
      { property: "og:title", content: "Makeena Jordan — Vending Machine Services in Amman" },
      {
        property: "og:description",
        content:
          "First-class snacks & drinks vending machine service in Jordan. Free installation, full stocking, cleaning and maintenance.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Makeena Jordan",
          description:
            "Snacks & drinks vending machine services in Amman, Jordan. Installation, stocking, cleaning and maintenance included.",
          telephone: "+962797890694",
          email: "info@makeenajordan.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Khilda",
            addressLocality: "Amman",
            addressCountry: "JO",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+962 79 789 0694";
const PHONE_HREF = "tel:+962797890694";

const benefits = [
  {
    icon: Clock,
    title: "More productive hours",
    body: "Snacks and drinks within arm's reach — no more time lost on supermarket runs during the working day.",
  },
  {
    icon: PackageCheck,
    title: "Adjustable trays, happier teams",
    body: "Versatile shelving fits a wide product range, so everyone finds something they actually want.",
  },
  {
    icon: BadgeDollarSign,
    title: "Zero cost, zero hassle",
    body: "No start-up fees. No rental fees. No extra staff or floor space needed to sell food and cold drinks.",
  },
  {
    icon: Wrench,
    title: "One call, fast response",
    body: "Comprehensive technical support with prompt response times across Amman.",
  },
  {
    icon: Sparkles,
    title: "We fill and clean it",
    body: "Full maintenance, restocking and cleaning are handled by our team — you never lift a finger.",
  },
  {
    icon: Building2,
    title: "Every kind of location",
    body: "Hotels, schools, malls, factories and offices — cold drink, snack or combo machines to match.",
  },
];

const products = [
  {
    title: "Chips & Toasted Bread",
    items: ["Doritos", "Lays", "Mr. Chips", "Sun Bites Bread", "and more"],
  },
  {
    title: "Pastries & Soups",
    items: ["Croissant", "Cakes", "Indomie", "Corn", "Soups", "Sahlab", "and more"],
  },
  {
    title: "Candy, Chocolate & Biscuit",
    items: [
      "Twix Twin / Kit Kat",
      "Snickers / Mars / Bounty",
      "Maltesers / M&M / Oreo",
      "Lu Prince / Chocolate + Biscuit",
      "Kinder Bueno / Fitness Bar",
      "Nutella & Go / Canary Biscuit",
      "Knoppers / Tuc / Cheese Biscuit",
      "and more",
    ],
  },
  {
    title: "Drinks",
    items: [
      "Mr. Brown Ice Coffee",
      "Lipton Ice Tea / Rani Juice",
      "Coca-Cola products",
      "PepsiCo products",
      "Red Bull / Energy Drinks",
      "Water / Tropicana",
      "Baladna Milk & Juices",
      "and more",
    ],
  },
];

const steps = [
  { n: "01", title: "We survey your site", body: "Tell us the location and headcount — we recommend the right machine mix." },
  { n: "02", title: "We install for free", body: "Delivery, placement and setup at no cost to you. No rental contract fees." },
  { n: "03", title: "We keep it running", body: "Stocking with the products you choose, plus cleaning, servicing and support." },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" aria-label="Makeena Jordan — Home">
            <MakeenaLogo />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#products" className="transition-colors hover:text-foreground">Products</a>
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call us</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero — pinned scroll reveal on desktop, play-on-enter on mobile */}
        <section
          ref={heroRef}
          className="relative h-screen min-h-[640px] overflow-hidden bg-gradient-to-b from-sand via-background to-background md:h-screen"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 55% at 80% 20%, oklch(0.78 0.09 205 / 0.35), transparent 60%), radial-gradient(50% 50% at 15% 90%, oklch(0.52 0.09 205 / 0.18), transparent 65%)",
            }}
          />
          <div className="relative mx-auto grid h-full max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_1fr] md:items-center md:py-14">
            <div>
              <p
                data-hero-badge
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand backdrop-blur"
              >
                The first of its kind in Jordan
              </p>
              <h1
                data-hero-headline
                className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] text-foreground md:text-6xl"
              >
                Snacks & cold drinks for your workplace — installed free.
              </h1>
              <p
                data-hero-subhead
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                Makeena Jordan supplies, stocks and maintains first-class vending machines across Amman.
                No start-up fees. No rental fees. No hassles.
              </p>
              <div data-hero-ctas className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lift transition-transform hover:scale-[1.03]"
                >
                  Get a free machine <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {PHONE}
                </a>
              </div>
            </div>
            <HeroMachine sectionRef={heroRef} />
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-border bg-sand">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
            {[
              ["0 JOD", "Setup & rental cost"],
              ["100%", "Servicing handled by us"],
              ["1 call", "Technical support"],
              ["Amman", "Full coverage"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="font-display text-2xl font-bold text-brand">{big}</p>
                <p className="mt-1 text-sm text-muted-foreground">{small}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Our services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Vending machines for the workplace</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              User-friendly machines that increase workplace productivity by putting snacks and beverages
              within easy reach of every employee.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About + machine */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Makeena</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A complete vending management service
              </h2>
              <p className="mt-5 leading-relaxed text-ink-foreground/75">
                We provide the best array of favourite cold beverages and snacks in cold drink, snack or
                combo vending machines. Fully customizable, our machines are the best choice in the
                industry — serving hotels, schools, malls, factories and offices.
              </p>
              <p className="mt-4 leading-relaxed text-ink-foreground/75">
                We install the machines, keep them stocked with the inventory you want, and handle all
                servicing and maintenance.
              </p>
              <p className="mt-6 font-display text-xl font-semibold text-accent">
                Our solutions are free. No start-up fees. No rental fees. No hassles.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-25 blur-2xl" />
              <img
                src={machineImage}
                alt="Makeena combo vending machine stocked with chocolate bars, chips and cold drinks"
                width={1008}
                height={1200}
                loading="lazy"
                className="relative w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t-2 border-brand pt-6">
                <span className="font-display text-4xl font-bold text-brand/25">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Our products</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">What goes inside the machine</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the mix that suits your team — we stock it and keep it full.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((cat) => (
                <div key={cat.title} className="rounded-2xl bg-card p-7 shadow-lift">
                  <h3 className="text-base font-semibold">{cat.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {cat.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl bg-brand-gradient px-7 py-14 text-brand-foreground md:px-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Ready for a machine at your site?</h2>
                <p className="mt-4 max-w-md leading-relaxed text-brand-foreground/85">
                  Makeena vending machine services in Amman — the first of its kind in Jordan, giving
                  customers a first-class snacks & drinks vending service.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-ink-foreground transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> {PHONE}
                </a>
              </div>
              <div className="space-y-5 text-brand-foreground/90 md:justify-self-end">
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">Contact info</p>
                <a href={PHONE_HREF} className="flex items-center gap-3 hover:underline">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
                <a href="mailto:info@makeenajordan.com" className="flex items-center gap-3 hover:underline">
                  <Mail className="h-5 w-5" /> info@makeenajordan.com
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  Makeena Jordan — Vending Services
                  <br />
                  Khilda, Amman, Jordan
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-5 text-sm text-muted-foreground sm:flex-row">
            <p>
              <span className="font-semibold text-brand">Makeena</span> Jordan — Vending machine services
              for snacks & drinks.
            </p>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/terms" className="transition-colors hover:text-foreground">
                Terms
              </Link>
              <Link to="/privacy" className="transition-colors hover:text-foreground">
                Privacy
              </Link>
              <Link to="/refund" className="transition-colors hover:text-foreground">
                Refund
              </Link>
              <Link to="/cancellation" className="transition-colors hover:text-foreground">
                Cancellation
              </Link>
              <Link to="/delivery" className="transition-colors hover:text-foreground">
                Delivery
              </Link>
            </nav>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Makeena Jordan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
