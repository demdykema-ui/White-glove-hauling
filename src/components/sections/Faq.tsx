import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Faq() {
  return (
    <section className="relative border-t border-white/5 bg-charcoal/30 py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Enquiries"
          title="Questions, answered candidly."
        />

        <div className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-ivory transition-colors hover:text-gold-bright [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-transform duration-300 group-open:rotate-90">
                    <Icon name="arrow" size={16} />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ash">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
