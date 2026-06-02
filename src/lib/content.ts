/**
 * Single source of truth for site copy.
 * Edit text here; components stay presentational.
 */

import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "White Glove Hauling Co.",
  shortName: "White Glove Hauling",
  tagline: "The most exotic junk movers in the world.",
  region: "Dallas–Fort Worth",
  phone: "(214) 555-0147",
  phoneHref: "tel:+12145550147",
  email: "hello@whiteglovehauling.com",
  emailHref: "mailto:hello@whiteglovehauling.com",
  hours: "By appointment · Concierge line answered 24/7",
  url: "https://whiteglovehauling.com",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "The Service", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Enquiries", href: "#contact" },
];

export type Service = {
  title: string;
  blurb: string;
  detail: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    title: "Estate & Junk Removal",
    blurb: "Clutter dissolved. Spaces restored to their intended grace.",
    detail:
      "From a single heirloom to an entire estate, we clear with discretion — sorting, donating, and recycling so nothing of value is lost and nothing unwanted remains.",
    icon: "crown",
  },
  {
    title: "White-Glove Move-Outs",
    blurb: "Your belongings handled as heirlooms — threshold to destination.",
    detail:
      "Padded, wrapped, inventoried, and placed with care. We move what matters as though it were our own, and leave the old space immaculate.",
    icon: "box",
  },
  {
    title: "Construction & Renovation Debris",
    blurb: "The aftermath of beauty, quietly carried away.",
    detail:
      "Post-renovation rubble, demolition debris, and contractor overflow removed cleanly and on schedule — so the only thing left behind is the result.",
    icon: "trowel",
  },
  {
    title: "Anything, Hauled",
    blurb: "If it must go, consider it gone. No request too unusual.",
    detail:
      "Pianos, safes, statuary, the contents of a wine cellar — the peculiar is our specialty. Tell us what must vanish; we attend to the rest.",
    icon: "feather",
  },
];

export type Step = {
  numeral: string;
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    numeral: "I",
    title: "Request",
    body: "A discreet enquiry by form or our private concierge line. Tell us only what you wish.",
  },
  {
    numeral: "II",
    title: "Consultation",
    body: "A transparent, all-inclusive quote — arranged at the hour and entrance of your choosing.",
  },
  {
    numeral: "III",
    title: "The White-Glove Visit",
    body: "Vetted, uniformed specialists arrive on time, work unseen, and protect every surface.",
  },
  {
    numeral: "IV",
    title: "Effortless Resolution",
    body: "The space is restored, the matter settled, and the disposal handled responsibly on your behalf.",
  },
];

export type Differentiator = {
  title: string;
  body: string;
  icon: IconName;
};

export const differentiators: Differentiator[] = [
  {
    title: "Absolute Discretion",
    body: "Unmarked vehicles, confidential handling, and a signed promise of privacy on every engagement.",
    icon: "shield",
  },
  {
    title: "Insured & Vetted",
    body: "Fully insured, background-checked specialists trained in the care of fine homes and finer things.",
    icon: "badge",
  },
  {
    title: "Same-Day Availability",
    body: "When the moment demands it, we are at your door within hours — not days.",
    icon: "clock",
  },
  {
    title: "Responsible Disposal",
    body: "We donate, recycle, and rehome wherever possible. Discretion needn't cost the earth.",
    icon: "leaf",
  },
  {
    title: "Concierge Coordination",
    body: "One point of contact orchestrates designers, agents, and contractors so you needn't.",
    icon: "bell",
  },
  {
    title: "White-Glove, Always",
    body: "Floors protected, surfaces wiped, doorways measured. We leave a space better than we found it.",
    icon: "glove",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "10,000+", label: "Items rehomed & recycled" },
  { value: "100%", label: "Confidential engagements" },
  { value: "24/7", label: "Private concierge line" },
  { value: "DFW", label: "Served, exclusively" },
];

export type Testimonial = {
  quote: string;
  attribution: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They emptied a forty-year estate in an afternoon and I never heard a sound. The house felt larger, lighter — and entirely my own again.",
    attribution: "A Highland Park residence",
  },
  {
    quote:
      "Two pianos and a marble fountain, removed without a scratch on the parquet. I do not know how. I no longer ask.",
    attribution: "A Preston Hollow collector",
  },
  {
    quote:
      "Our renovation finished on a Friday; by Saturday morning there was no trace it had ever happened. Impeccable.",
    attribution: "A Turtle Creek penthouse",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What, exactly, will you haul?",
    a: "Nearly anything that isn't hazardous: furniture, appliances, estate contents, renovation debris, oddities, and the genuinely peculiar. If you're unsure, ask — the unusual is rather our specialty.",
  },
  {
    q: "Where do you operate?",
    a: "Dallas–Fort Worth and its most discerning neighborhoods, exclusively — Highland Park, Preston Hollow, University Park, Turtle Creek, Southlake, and beyond by arrangement.",
  },
  {
    q: "How is pricing determined?",
    a: "Every quote is transparent and all-inclusive — labor, hauling, and responsible disposal — confirmed before any work begins. No surprises, ever.",
  },
  {
    q: "How quickly can you arrive?",
    a: "Same-day service is frequently available. Our concierge line is answered around the clock; tell us the hour and we will meet it.",
  },
  {
    q: "Is my privacy protected?",
    a: "Entirely. We arrive in unmarked vehicles, handle every engagement in confidence, and are bound by a written promise of discretion.",
  },
  {
    q: "What becomes of what you remove?",
    a: "We donate, recycle, and rehome wherever possible, and dispose of the remainder responsibly — so a clean home leaves a clean conscience.",
  },
];

export const serviceOptions = [
  "Estate & Junk Removal",
  "White-Glove Move-Out",
  "Construction & Renovation Debris",
  "Something Unusual",
] as const;
