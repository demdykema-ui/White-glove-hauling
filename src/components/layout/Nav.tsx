"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Icon, Monogram } from "@/components/ui/Icon";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-lux)] ${
        scrolled
          ? "border-b border-white/5 bg-obsidian/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Wordmark */}
        <Link
          href="#top"
          className="flex items-center gap-3 text-gold transition-colors hover:text-gold-bright"
          aria-label={`${site.name} — home`}
        >
          <Monogram size={38} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-[0.18em] text-ivory">
              WHITE GLOVE
            </span>
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.42em] text-gold">
              Hauling Co.
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium tracking-wide text-ash transition-colors hover:text-ivory"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full border border-gold/50 px-5 py-2.5 text-sm font-medium tracking-wide text-gold-bright transition-all duration-300 hover:border-gold hover:bg-gold hover:text-obsidian"
          >
            Request Concierge Service
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ivory transition-colors hover:text-gold lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-obsidian/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[var(--ease-lux)] lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3.5 font-display text-xl text-ivory transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-gold py-3.5 text-center text-sm font-medium tracking-wide text-obsidian"
          >
            Request Concierge Service
          </Link>
        </div>
      </div>
    </header>
  );
}
