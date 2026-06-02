"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions, site } from "@/lib/content";
import { Icon } from "./Icon";

const fieldBase =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory placeholder:text-ash/60 transition-colors duration-300 focus:border-gold/60 focus:bg-white/[0.05] focus:outline-none";
const labelBase =
  "mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-ash";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // No backend yet — present a graceful confirmation.
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-gold/30 bg-charcoal/60 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
          <Icon name="check" size={32} />
        </span>
        <h3 className="mt-6 font-display text-3xl text-ivory">
          Consider it received.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ash">
          Our concierge will be in touch within the hour. For anything urgent,
          our private line is{" "}
          <a
            href={site.phoneHref}
            className="text-gold underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 text-sm tracking-wide text-gold underline-offset-4 transition-colors hover:text-gold-bright hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/[0.07] bg-charcoal/50 p-8 sm:p-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className={labelBase}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldBase}
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className={labelBase}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(214) 000-0000"
            className={fieldBase}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@residence.com"
            className={fieldBase}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelBase}>
            Service of Interest
          </label>
          <select id="service" name="service" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Select a service…
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-charcoal">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelBase}>
            How may we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what must vanish…"
            className={`${fieldBase} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-[0.95rem] font-medium tracking-wide text-obsidian shadow-[0_10px_40px_-12px_rgba(197,162,83,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
      >
        Request Concierge Service
        <Icon
          name="arrow"
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
      <p className="mt-4 text-center text-xs tracking-wide text-ash/70">
        Confidential. We never share your details.
      </p>
    </form>
  );
}
