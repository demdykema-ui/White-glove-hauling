import { site } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-aurora relative isolate overflow-hidden py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="aurora-drift pointer-events-none absolute right-0 top-1/4 -z-10 h-[40vh] w-[40vh] rounded-full blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Invitation */}
        <Reveal className="flex flex-col justify-center">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            Enquiries
          </span>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl">
            An invitation to the{" "}
            <span className="text-gilded italic">effortless.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ash">
            Tell us what must go. Our concierge will arrange a quiet,
            all-inclusive quote and a visit at the hour that suits you. No
            request too large, too small, or too strange.
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 text-ivory transition-colors hover:text-gold-bright"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold transition-colors group-hover:border-gold/60">
                  <Icon name="phone" size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ash">
                    Private Concierge Line
                  </span>
                  <span className="font-display text-xl">{site.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="group flex items-center gap-4 text-ivory transition-colors hover:text-gold-bright"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold transition-colors group-hover:border-gold/60">
                  <Icon name="mail" size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ash">
                    By Correspondence
                  </span>
                  <span className="font-display text-xl">{site.email}</span>
                </span>
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm tracking-wide text-ash">
            {site.hours}
            <br />
            Serving {site.region}, by appointment.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
