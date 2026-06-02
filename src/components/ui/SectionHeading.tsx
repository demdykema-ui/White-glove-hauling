import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
        <span className="h-px w-8 bg-gold/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl md:text-[3.25rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ash">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
