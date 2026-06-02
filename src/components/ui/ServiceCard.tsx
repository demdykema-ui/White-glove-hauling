import type { Service } from "@/lib/content";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-charcoal/60 p-8 transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-1.5 hover:border-gold/40 hover:bg-charcoal">
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold transition-colors duration-500 group-hover:border-gold/50 group-hover:text-gold-bright">
        <Icon name={service.icon} size={26} />
      </span>

      <h3 className="relative mt-7 font-display text-2xl font-medium text-ivory">
        {service.title}
      </h3>
      <p className="relative mt-3 font-display text-lg italic leading-snug text-gold/90">
        {service.blurb}
      </p>
      <p className="relative mt-4 text-sm leading-relaxed text-ash">
        {service.detail}
      </p>

      <span
        aria-hidden
        className="relative mt-auto pt-7 text-gold opacity-0 transition-all duration-500 group-hover:opacity-100"
      >
        <Icon
          name="arrow"
          size={20}
          className="transition-transform duration-500 group-hover:translate-x-1.5"
        />
      </span>
    </article>
  );
}
