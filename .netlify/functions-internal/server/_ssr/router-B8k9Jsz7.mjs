import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B8k9Jsz7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-wmbx4w9_.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Makeena Jordan — Vending Machine Services in Amman" },
			{
				name: "description",
				content: "Free-to-install snack & drink vending machines for offices, hotels, schools and factories across Amman, Jordan. Full stocking, cleaning and maintenance included."
			},
			{
				name: "author",
				content: "Makeena Jordan"
			},
			{
				property: "og:site_name",
				content: "Makeena Jordan"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-7HstspYe.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Makeena Jordan — Vending Machine Services in Amman" },
			{
				name: "description",
				content: "Makeena Jordan installs, stocks and maintains snack & drink vending machines in Amman. No start-up fees, no rental fees — offices, hotels, schools, malls and factories."
			},
			{
				property: "og:title",
				content: "Makeena Jordan — Vending Machine Services in Amman"
			},
			{
				property: "og:description",
				content: "First-class snacks & drinks vending machine service in Jordan. Free installation, full stocking, cleaning and maintenance."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "Makeena Jordan",
				description: "Snacks & drinks vending machine services in Amman, Jordan. Installation, stocking, cleaning and maintenance included.",
				telephone: "+962797890694",
				email: "info@makeenajordan.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Khilda",
					addressLocality: "Amman",
					addressCountry: "JO"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./cancellation-B30pfR7B.mjs");
var Route$4 = createFileRoute("/cancellation")({
	head: () => ({
		meta: [
			{ title: "Cancellation Policy — Makeena Jordan" },
			{
				name: "description",
				content: "Makeena Jordan's cancellation policy for wallet recharges and vending service agreements."
			},
			{
				property: "og:title",
				content: "Cancellation Policy — Makeena Jordan"
			},
			{
				property: "og:description",
				content: "Makeena Jordan's cancellation policy for wallet recharges and vending service agreements."
			},
			{
				property: "og:url",
				content: "/cancellation"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cancellation"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./delivery-DB-7K0nF.mjs");
var Route$3 = createFileRoute("/delivery")({
	head: () => ({
		meta: [
			{ title: "Delivery Policy & Merchandise — Makeena Jordan" },
			{
				name: "description",
				content: "Makeena Jordan's merchandise, services and delivery policy for digital wallet recharges and vending services."
			},
			{
				property: "og:title",
				content: "Delivery Policy & Merchandise — Makeena Jordan"
			},
			{
				property: "og:description",
				content: "Makeena Jordan's merchandise, services and delivery policy for digital wallet recharges and vending services."
			},
			{
				property: "og:url",
				content: "/delivery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/delivery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-Du1QdlIl.mjs");
var Route$2 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — Makeena Jordan" },
			{
				name: "description",
				content: "Read Makeena Jordan's Privacy Policy to learn how we collect, use and protect your personal data."
			},
			{
				property: "og:title",
				content: "Privacy Policy — Makeena Jordan"
			},
			{
				property: "og:description",
				content: "Read Makeena Jordan's Privacy Policy to learn how we collect, use and protect your personal data."
			},
			{
				property: "og:url",
				content: "/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./refund-BhHeJ5Bm.mjs");
var Route$1 = createFileRoute("/refund")({
	head: () => ({
		meta: [
			{ title: "Refund Policy — Makeena Jordan" },
			{
				name: "description",
				content: "Makeena Jordan's refund policy for wallet recharges and vending machine purchases."
			},
			{
				property: "og:title",
				content: "Refund Policy — Makeena Jordan"
			},
			{
				property: "og:description",
				content: "Makeena Jordan's refund policy for wallet recharges and vending machine purchases."
			},
			{
				property: "og:url",
				content: "/refund"
			}
		],
		links: [{
			rel: "canonical",
			href: "/refund"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-anBjTsa6.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms and Conditions — Makeena Jordan" },
			{
				name: "description",
				content: "Read the Terms and Conditions for using Makeena Jordan's vending machine services and website."
			},
			{
				property: "og:title",
				content: "Terms and Conditions — Makeena Jordan"
			},
			{
				property: "og:description",
				content: "Read the Terms and Conditions for using Makeena Jordan's vending machine services and website."
			},
			{
				property: "og:url",
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	CancellationRoute: Route$4.update({
		id: "/cancellation",
		path: "/cancellation",
		getParentRoute: () => Route$6
	}),
	DeliveryRoute: Route$3.update({
		id: "/delivery",
		path: "/delivery",
		getParentRoute: () => Route$6
	}),
	PrivacyRoute: Route$2.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$6
	}),
	RefundRoute: Route$1.update({
		id: "/refund",
		path: "/refund",
		getParentRoute: () => Route$6
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
