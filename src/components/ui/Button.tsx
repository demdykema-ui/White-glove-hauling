import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "solid" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-wide transition-all duration-300 ease-[var(--ease-lux)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian";

const variants: Record<Variant, string> = {
  solid:
    "bg-gold text-obsidian hover:bg-gold-bright hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(197,162,83,0.6)] hover:shadow-[0_16px_50px_-12px_rgba(231,200,115,0.7)]",
  ghost:
    "border border-slate text-ivory hover:border-gold hover:text-gold-bright hover:-translate-y-0.5",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  withArrow?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  variant = "solid",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
