import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Monogram } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-obsidian py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rule-gold mb-12 opacity-40" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#top"
              className="flex items-center gap-3 text-gold"
              aria-label={`${site.name} — home`}
            >
              <Monogram size={40} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-[0.18em] text-ivory">
                  WHITE GLOVE
                </span>
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.42em] text-gold">
                  Hauling Co.
                </span>
              </span>
            </Link>
            <p className="mt-5 font-display text-lg italic text-ash">
              {site.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.24em] text-gold">
              Navigate
            </span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ash transition-colors hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.24em] text-gold">
              Concierge
            </span>
            <a
              href={site.phoneHref}
              className="text-sm text-ash transition-colors hover:text-ivory"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="text-sm text-ash transition-colors hover:text-ivory"
            >
              {site.email}
            </a>
            <span className="text-sm text-ash">{site.region}</span>
            <span className="text-sm text-ash">By appointment · 24/7</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs tracking-wide text-ash/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Discretion · Care · Disappearance.</span>
        </div>
      </div>
    </footer>
  );
}
