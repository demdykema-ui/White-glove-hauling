import { differentiators } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why White Glove"
          title="Exotic in standard, invisible in execution."
          intro="The difference is not in what we remove, but in how little you notice us doing it."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 80}
              className="group bg-obsidian p-8 transition-colors duration-500 hover:bg-charcoal"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/20 text-gold transition-colors duration-500 group-hover:border-gold/50 group-hover:text-gold-bright">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium text-ivory">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ash">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
