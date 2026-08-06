import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/legal-shell";

export const Route = createFileRoute("/cancellation")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy — Makeena Jordan" },
      {
        name: "description",
        content:
          "Makeena Jordan's cancellation policy for wallet recharges and vending service agreements.",
      },
      { property: "og:title", content: "Cancellation Policy — Makeena Jordan" },
      {
        property: "og:description",
        content:
          "Makeena Jordan's cancellation policy for wallet recharges and vending service agreements.",
      },
      { property: "og:url", content: "/cancellation" },
    ],
    links: [{ rel: "canonical", href: "/cancellation" }],
  }),
  component: CancellationPage,
});

function CancellationPage() {
  return (
    <LegalShell title="Cancellation Policy" backTo="/">
      <section>
        <p className="text-sm text-muted-foreground">Last updated: October 01, 2020</p>
        <p className="mt-4 text-muted-foreground">
          Cancellation after recharge is not allowed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">No Cancellation After Recharge</h2>
        <p className="mt-4 text-muted-foreground">
          Once a wallet recharge has been completed, it cannot be cancelled, reversed, or refunded. Please
          review your recharge amount carefully before confirming the transaction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Questions</h2>
        <p className="mt-4 text-muted-foreground">
          If you have any questions about this Cancellation Policy, please contact us:
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
