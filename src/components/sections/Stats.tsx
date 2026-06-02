import { stats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-charcoal/30 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(60% 120% at 50% 50%, rgba(197,162,83,0.5), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className="flex flex-col items-center text-center"
          >
            <span className="text-gilded font-display text-5xl font-semibold sm:text-6xl">
              {stat.value}
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.24em] text-ash">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
