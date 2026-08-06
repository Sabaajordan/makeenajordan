import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/legal-shell";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery Policy & Merchandise — Makeena Jordan" },
      {
        name: "description",
        content:
          "Makeena Jordan's merchandise, services and delivery policy for digital wallet recharges and vending services.",
      },
      { property: "og:title", content: "Delivery Policy & Merchandise — Makeena Jordan" },
      {
        property: "og:description",
        content:
          "Makeena Jordan's merchandise, services and delivery policy for digital wallet recharges and vending services.",
      },
      { property: "og:url", content: "/delivery" },
    ],
    links: [{ rel: "canonical", href: "/delivery" }],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <LegalShell title="Delivery Policy & Merchandise" backTo="/">
      <section>
        <p className="text-sm text-muted-foreground">Last updated: October 01, 2020</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Merchandise & Services</h2>
        <p className="mt-4 text-muted-foreground">
          We offer digital recharge to mobile wallet in the following denominations:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>JOD 5.00</li>
          <li>JOD 10.00</li>
          <li>JOD 15.00</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Delivery Policy & Methods</h2>
        <p className="mt-4 text-muted-foreground">
          Physical delivery is not available. All recharges and purchases are delivered digitally through
          our mobile wallet system.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Questions</h2>
        <p className="mt-4 text-muted-foreground">
          If you have any questions about this Delivery Policy, please contact us:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            By email:{" "}
            <a
              href="mailto:info@makeenajordan.com"
              className="text-brand underline underline-offset-4 hover:no-underline"
            >
              info@makeenajordan.com
            </a>
          </li>
          <li>
            By phone number:{" "}
            <a
              href="tel:+962797890694"
              className="text-brand underline underline-offset-4 hover:no-underline"
            >
              +962797890694
            </a>
          </li>
        </ul>
      </section>

      <p className="text-xs text-muted-foreground">
        Generated using{" "}
        <a
          href="https://www.termsfeed.com/privacy-policy-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline underline-offset-4 hover:no-underline"
        >
          TermsFeed Privacy Policy Generator
        </a>
        .
      </p>
    </LegalShell>
  );
}
