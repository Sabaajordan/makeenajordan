import { createFileRoute, Link } from "@tanstack/react-router";
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
  MessageCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-vending.jpg";
import machineImage from "@/assets/vending-michelangelo.jpg";
import covimMachine from "@/assets/covim-machine.jpg";
import covimPrestige from "@/assets/covim-prestige.jpg";
import covimCapsules from "@/assets/covim-capsules.jpg";
import { MakeenaLogo } from "@/components/makeena-logo";

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
const WA_NUMBER = "962797890694";
const waOrder = (item: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hello Makeena, I'd like to order: ${item}.`,
  )}`;

const capsuleFlavors: { name: string; tag: string; inStock: boolean }[] = [
  { name: "Maestrale", tag: "gold — full-bodied", inStock: true },
  { name: "Scirocco", tag: "brown — classic espresso", inStock: false },
  { name: "Libeccio", tag: "dark — intense", inStock: false },
  { name: "Levante", tag: "silver — smooth", inStock: false },
  { name: "Suave", tag: "blue — decaffeinato", inStock: false },
];

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" aria-label="Makeena Jordan — Home">
            <MakeenaLogo />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#products" className="transition-colors hover:text-foreground">Products</a>
            <a href="#coffee" className="transition-colors hover:text-foreground">Coffee</a>
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
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="Snack and drink vending machines installed in a modern office lobby in Amman"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/78" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/80">
              The first of its kind in Jordan
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] text-ink-foreground md:text-6xl">
              Snacks & cold drinks for your workplace — installed free.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              Makeena Jordan supplies, stocks and maintains first-class vending machines across Amman.
              No start-up fees. No rental fees. No hassles.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lift transition-transform hover:scale-[1.03]"
              >
                Get a free machine <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-7 py-3.5 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                {PHONE}
              </a>
            </div>
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
        {/* Coffee by Covim */}
        <section id="coffee" className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Coffee by Covim
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Authentic Italian espresso, delivered daily.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-foreground/75">
                Makeena is the exclusive partner for Covim in Jordan — a Genoese roaster
                supplying espresso to Italian bars since 1974. Three ways to serve it at your site.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Card 1 — Machine */}
              <a
                href={waOrder("Covim CS100R espresso machine — 120 JD")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-ink-foreground/5 ring-1 ring-ink-foreground/10 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-black to-neutral-900 p-6">
                  <img
                    src={covimMachine}
                    alt="Covim CS100R capsule espresso machine dispensing an espresso into a branded cup"
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Machine
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">Covim CS100R</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
                    Compact capsule espresso machine, Made in Italy. Zero fuss for the office —
                    two-button service, easy refill.
                  </p>
                  <div className="mt-5 flex items-end justify-between">
                    <span className="font-display text-2xl font-bold text-ink-foreground">
                      120 <span className="text-sm font-semibold text-ink-foreground/60">JD</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                      <MessageCircle className="h-3.5 w-3.5" /> Order on WhatsApp
                    </span>
                  </div>
                </div>
              </a>

              {/* Card 2 — Prestige beans */}
              <a
                href={waOrder("Covim Prestige 1 kg whole beans — 25 JD")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-ink-foreground/5 ring-1 ring-ink-foreground/10 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 p-6">
                  <img
                    src={covimPrestige}
                    alt="Covim Prestige 1 kg bag of whole-bean espresso coffee"
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Whole beans
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">Covim Prestige — 1 kg</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
                    A balanced Arabica-Robusta blend for sites with a bean-to-cup grinder.
                    Rich crema, chocolatey finish.
                  </p>
                  <div className="mt-5 flex items-end justify-between">
                    <span className="font-display text-2xl font-bold text-ink-foreground">
                      25 <span className="text-sm font-semibold text-ink-foreground/60">JD</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                      <MessageCircle className="h-3.5 w-3.5" /> Order on WhatsApp
                    </span>
                  </div>
                </div>
              </a>

              {/* Card 3 — Superba capsules (per-flavor stock) */}
              <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-ink-foreground/5 ring-1 ring-ink-foreground/10">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-neutral-200 p-6">
                  <img
                    src={covimCapsules}
                    alt="Covim Superba capsule range — Maestrale, Scirocco, Libeccio, Levante and Suave decaffeinato"
                    width={800}
                    height={480}
                    loading="lazy"
                    className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Capsules
                    </p>
                    <span className="font-display text-lg font-bold text-ink-foreground">
                      25 <span className="text-xs font-semibold text-ink-foreground/60">JD / box</span>
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">Superba — 5 blends</h3>
                  <p className="mt-1 text-xs text-ink-foreground/60">Box of 48 capsules</p>

                  <ul className="mt-5 space-y-2 text-sm">
                    {capsuleFlavors.map((f) =>
                      f.inStock ? (
                        <li key={f.name}>
                          <a
                            href={waOrder(`Covim Superba ${f.name} capsules — 25 JD per box of 48`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/row flex items-center justify-between rounded-lg bg-accent/10 px-3 py-2 font-medium text-ink-foreground transition-colors hover:bg-accent hover:text-ink"
                          >
                            <span className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-accent" />
                              {f.name}
                              <span className="text-xs font-normal text-ink-foreground/60 group-hover/row:text-ink/70">
                                {f.tag}
                              </span>
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold">
                              <MessageCircle className="h-3.5 w-3.5" /> Order
                            </span>
                          </a>
                        </li>
                      ) : (
                        <li
                          key={f.name}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-ink-foreground/45"
                          aria-disabled="true"
                        >
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-ink-foreground/25" />
                            {f.name}
                            <span className="text-xs font-normal">{f.tag}</span>
                          </span>
                          <span className="rounded-full bg-ink-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                            Sold out
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </article>
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
