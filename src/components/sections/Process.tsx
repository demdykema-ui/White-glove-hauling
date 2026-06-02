import { steps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/5 bg-charcoal/30 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Process"
          title="Four steps. None of them yours."
          intro="From first enquiry to final sweep, the burden is ours and the ease is yours."
        />

        <ol className="mt-16 grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.numeral} delay={i * 100}>
              <div className="relative">
                <span className="font-display text-6xl font-medium text-gold/25">
                  {step.numeral}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-0 top-7 hidden h-px w-1/2 bg-gradient-to-r from-gold/30 to-transparent lg:block"
                  />
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium text-ivory">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
