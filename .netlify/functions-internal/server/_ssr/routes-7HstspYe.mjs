import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as Building2, i as PackageCheck, l as BadgeDollarSign, n as Sparkles, o as Mail, r as Phone, s as Clock, t as Wrench, u as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-7HstspYe.js
var import_jsx_runtime = require_jsx_runtime();
var hero_vending_default = "/assets/hero-vending-BgW794BG.jpg";
var machine_default = "/assets/machine-BqdrczES.jpg";
var PHONE = "+962 79 789 0694";
var PHONE_HREF = "tel:+962797890694";
var benefits = [
	{
		icon: Clock,
		title: "More productive hours",
		body: "Snacks and drinks within arm's reach — no more time lost on supermarket runs during the working day."
	},
	{
		icon: PackageCheck,
		title: "Adjustable trays, happier teams",
		body: "Versatile shelving fits a wide product range, so everyone finds something they actually want."
	},
	{
		icon: BadgeDollarSign,
		title: "Zero cost, zero hassle",
		body: "No start-up fees. No rental fees. No extra staff or floor space needed to sell food and cold drinks."
	},
	{
		icon: Wrench,
		title: "One call, fast response",
		body: "Comprehensive technical support with prompt response times across Amman."
	},
	{
		icon: Sparkles,
		title: "We fill and clean it",
		body: "Full maintenance, restocking and cleaning are handled by our team — you never lift a finger."
	},
	{
		icon: Building2,
		title: "Every kind of location",
		body: "Hotels, schools, malls, factories and offices — cold drink, snack or combo machines to match."
	}
];
var products = [
	{
		title: "Chips & Toasted Bread",
		items: [
			"Doritos",
			"Lays",
			"Mr. Chips",
			"Sun Bites Bread",
			"and more"
		]
	},
	{
		title: "Pastries & Soups",
		items: [
			"Croissant",
			"Cakes",
			"Indomie",
			"Corn",
			"Soups",
			"Sahlab",
			"and more"
		]
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
			"and more"
		]
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
			"and more"
		]
	}
];
var steps = [
	{
		n: "01",
		title: "We survey your site",
		body: "Tell us the location and headcount — we recommend the right machine mix."
	},
	{
		n: "02",
		title: "We install for free",
		body: "Delivery, placement and setup at no cost to you. No rental contract fees."
	},
	{
		n: "03",
		title: "We keep it running",
		body: "Stocking with the products you choose, plus cleaning, servicing and support."
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "text-lg tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-brand",
								children: "Makeena"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-sm font-semibold text-muted-foreground",
								children: "Jordan"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#services",
									className: "transition-colors hover:text-foreground",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#products",
									className: "transition-colors hover:text-foreground",
									children: "Products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "transition-colors hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "transition-colors hover:text-foreground",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PHONE_HREF,
							className: "inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Call us"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_vending_default,
								alt: "Snack and drink vending machines installed in a modern office lobby in Amman",
								width: 1600,
								height: 1104,
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/78" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto max-w-6xl px-5 py-24 md:py-32",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/80",
										children: "The first of its kind in Jordan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-6 max-w-3xl text-4xl font-bold leading-[1.05] text-ink-foreground md:text-6xl",
										children: "Snacks & cold drinks for your workplace — installed free."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75",
										children: "Makeena Jordan supplies, stocks and maintains first-class vending machines across Amman. No start-up fees. No rental fees. No hassles."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-9 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											className: "inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lift transition-transform hover:scale-[1.03]",
											children: ["Get a free machine ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: PHONE_HREF,
											className: "inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-7 py-3.5 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10",
											children: PHONE
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-b border-border bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4",
							children: [
								["0 JOD", "Setup & rental cost"],
								["100%", "Servicing handled by us"],
								["1 call", "Technical support"],
								["Amman", "Full coverage"]
							].map(([big, small]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-bold text-brand",
								children: big
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: small
							})] }, small))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "services",
						className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-[0.18em] text-brand",
									children: "Our services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-bold md:text-4xl",
									children: "Vending machines for the workplace"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-relaxed text-muted-foreground",
									children: "User-friendly machines that increase workplace productivity by putting snacks and beverages within easy reach of every employee."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
							children: benefits.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-lg font-semibold",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: body
									})
								]
							}, title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-ink text-ink-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-[0.18em] text-accent",
									children: "Makeena"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-bold md:text-4xl",
									children: "A complete vending management service"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 leading-relaxed text-ink-foreground/75",
									children: "We provide the best array of favourite cold beverages and snacks in cold drink, snack or combo vending machines. Fully customizable, our machines are the best choice in the industry — serving hotels, schools, malls, factories and offices."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-relaxed text-ink-foreground/75",
									children: "We install the machines, keep them stocked with the inventory you want, and handle all servicing and maintenance."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 font-display text-xl font-semibold text-accent",
									children: "Our solutions are free. No start-up fees. No rental fees. No hassles."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl bg-brand-gradient opacity-25 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: machine_default,
									alt: "Makeena combo vending machine stocked with chocolate bars, chips and cold drinks",
									width: 1008,
									height: 1200,
									loading: "lazy",
									className: "relative w-full rounded-3xl object-cover"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "how",
						className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold md:text-4xl",
							children: "How it works"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-8 md:grid-cols-3",
							children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t-2 border-brand pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-bold text-brand/25",
										children: s.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: s.body
									})
								]
							}, s.n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "products",
						className: "bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold uppercase tracking-[0.18em] text-brand",
										children: "Our products"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-3xl font-bold md:text-4xl",
										children: "What goes inside the machine"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg text-muted-foreground",
										children: "Choose the mix that suits your team — we stock it and keep it full."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
								children: products.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-card p-7 shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold",
										children: cat.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-2 text-sm text-muted-foreground",
										children: cat.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" }), i]
										}, i))
									})]
								}, cat.title))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl bg-brand-gradient px-7 py-14 text-brand-foreground md:px-16 md:py-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-10 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-bold md:text-4xl",
										children: "Ready for a machine at your site?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-md leading-relaxed text-brand-foreground/85",
										children: "Makeena vending machine services in Amman — the first of its kind in Jordan, giving customers a first-class snacks & drinks vending service."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: PHONE_HREF,
										className: "mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-ink-foreground transition-transform hover:scale-[1.03]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
											" ",
											PHONE
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-5 text-brand-foreground/90 md:justify-self-end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold uppercase tracking-[0.18em]",
											children: "Contact info"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: PHONE_HREF,
											className: "flex items-center gap-3 hover:underline",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }),
												" ",
												PHONE
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:info@makeenajordan.com",
											className: "flex items-center gap-3 hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" }), " info@makeenajordan.com"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-start gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0" }),
												"Makeena Jordan — Vending Services",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Khilda, Amman, Jordan"
											]
										})
									]
								})]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-between gap-5 text-sm text-muted-foreground sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-brand",
							children: "Makeena"
						}), " Jordan — Vending machine services for snacks & drinks."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-wrap justify-center gap-x-6 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "transition-colors hover:text-foreground",
									children: "Terms"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "transition-colors hover:text-foreground",
									children: "Privacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/refund",
									className: "transition-colors hover:text-foreground",
									children: "Refund"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/cancellation",
									className: "transition-colors hover:text-foreground",
									children: "Cancellation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/delivery",
									className: "transition-colors hover:text-foreground",
									children: "Delivery"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-sm text-muted-foreground sm:text-left",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Makeena Jordan. All rights reserved."
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
