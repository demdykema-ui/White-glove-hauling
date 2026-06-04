import { site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-aurora bg-noise relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Drifting glow */}
      <div
        aria-hidden
        className="aurora-drift pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-3xl"
      />
      {/* Faint deco grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,162,83,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,162,83,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 text-center lg:px-10">
        <span className="reveal is-visible inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.02] px-5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.34em] text-gold backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
          {site.region} · By Appointment
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          White-glove removal for fine homes,
          <br className="hidden sm:block" /> estates, and the{" "}
          <span className="text-gilded italic">irreplaceable</span>.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ash sm:text-xl">
          The most exotic junk movers in the world — discreet, fully insured,
          and gone without a trace. Estate clear-outs, luxury move-outs,
          renovation debris, and the genuinely peculiar, made to vanish.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="#contact" variant="solid" withArrow>
            Request a Quote
          </ButtonLink>
          <ButtonLink href="#services" variant="ghost">
            Explore the Service
          </ButtonLink>
        </div>

        <p className="mt-8 text-sm tracking-wide text-ash/80">
          Private concierge line ·{" "}
          <a
            href={site.phoneHref}
            className="text-platinum underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            {site.phone}
          </a>
        </p>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ash transition-colors hover:text-gold"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[0.62rem] uppercase tracking-[0.3em]">
            Discover
          </span>
          <Icon
            name="arrow"
            size={20}
            className="rotate-90 animate-bounce"
          />
        </span>
      </a>
    </section>
  );
}
