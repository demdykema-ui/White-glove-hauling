import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Spoken Quietly"
          title="What discretion sounds like."
          intro="Our clients prefer not to be named. Their words, however, we are permitted to share."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.attribution}
              delay={i * 110}
              className="relative flex h-full flex-col rounded-2xl border border-white/[0.07] bg-charcoal/50 p-8"
            >
              <span
                aria-hidden
                className="font-display text-7xl leading-none text-gold/30"
              >
                &ldquo;
              </span>
              <p className="-mt-4 font-display text-xl italic leading-relaxed text-ivory/90">
                {t.quote}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="h-px w-6 bg-gold/60" aria-hidden />
                <cite className="text-sm not-italic uppercase tracking-[0.18em] text-gold">
                  {t.attribution}
                </cite>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
