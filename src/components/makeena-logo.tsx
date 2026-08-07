import type { SVGProps } from "react";

export function MakeenaMark({
  title = "Makeena",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 48 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
      {...props}
    >
      <rect x="4" y="3" width="40" height="50" rx="6" />
      <circle cx="18" cy="22" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="30" cy="22" r="2.6" fill="currentColor" stroke="none" />
      <path d="M15 32 Q24 40 33 32" />
      <path d="M10 53 v3 a2 2 0 0 0 2 2 h2 a2 2 0 0 0 2 -2 v-3" />
      <path d="M32 53 v3 a2 2 0 0 0 2 2 h2 a2 2 0 0 0 2 -2 v-3" />
    </svg>
  );
}

export function MakeenaLogo({ className }: { className?: string }) {
  return (
    <span className={"inline-flex items-center gap-2.5 " + (className ?? "")}>
      <MakeenaMark className="h-8 w-auto text-brand" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-[0.14em] text-brand">MAKEENA</span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wide text-muted-foreground">
          3al Mashi
        </span>
      </span>
    </span>
  );
}
