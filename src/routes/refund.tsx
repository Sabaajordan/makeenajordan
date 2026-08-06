import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/legal-shell";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Makeena Jordan" },
      {
        name: "description",
        content:
          "Makeena Jordan's refund policy for wallet recharges and vending machine purchases.",
      },
      { property: "og:title", content: "Refund Policy — Makeena Jordan" },
      {
        property: "og:description",
        content:
          "Makeena Jordan's refund policy for wallet recharges and vending machine purchases.",
      },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalShell title="Refund Policy" backTo="/">
      <section>
        <p className="text-sm text-muted-foreground">Last updated: October 01, 2020</p>
        <p className="mt-4 text-muted-foreground">
          Refund is not allowed after recharging wallets or making a purchase through our Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">No Refunds</h2>
        <p className="mt-4 text-muted-foreground">
          All wallet recharges and product purchases are final. Once a recharge or purchase is completed,
          we do not offer refunds, returns, or exchanges.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Questions</h2>
        <p className="mt-4 text-muted-foreground">
          If you have any questions about this Refund Policy, please contact us:
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
    </LegalShell>
  );
}
