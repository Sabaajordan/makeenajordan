import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import type { ReactNode } from "react";

const PHONE_HREF = "tel:+962797890694";

export function LegalShell({
  children,
  title,
  backTo = "/",
}: {
  children: ReactNode;
  title: string;
  backTo?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-lg tracking-tight">
            <span className="font-bold text-brand">Makeena</span>
            <span className="ml-1.5 text-sm font-semibold text-muted-foreground">Jordan</span>
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call us</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">{title}</h1>
        <div className="mt-8 space-y-10 leading-relaxed text-foreground">
          {children}
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
          <p>
            <span className="font-semibold text-brand">Makeena</span> Jordan — Vending machine services
            for snacks & drinks.
          </p>
          <p>© {new Date().getFullYear()} Makeena Jordan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
