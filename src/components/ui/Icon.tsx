import type { SVGProps } from "react";

export type IconName =
  | "crown"
  | "box"
  | "trowel"
  | "feather"
  | "shield"
  | "badge"
  | "clock"
  | "leaf"
  | "bell"
  | "glove"
  | "arrow"
  | "phone"
  | "mail"
  | "menu"
  | "close"
  | "check";

const paths: Record<IconName, React.ReactNode> = {
  crown: (
    <path d="M3 8l4 4 5-7 5 7 4-4-1.5 11h-15L3 8zm1.5 11h15" />
  ),
  box: (
    <>
      <path d="M3 7.5l9-4.5 9 4.5v9L12 21l-9-4.5v-9z" />
      <path d="M3 7.5L12 12l9-4.5M12 12v9" />
    </>
  ),
  trowel: (
    <>
      <path d="M3 21l5-5" />
      <path d="M7 17l-3-3 7-3 6-6 4 4-6 6-3 7-3-3z" />
    </>
  ),
  feather: (
    <>
      <path d="M20 4C13 4 7 9 6 16l-2 4" />
      <path d="M20 4c0 7-5 13-12 14M20 4l-9 9M16 8H9M14 13H8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5L8 22l4-2 4 2-1-7.5M9.5 9l1.5 1.5L15 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-9 7-15 16-15 0 9-6 15-15 15-1 0-1 0-1 0z" />
      <path d="M4 20C8 14 13 10 18 8" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10 19a2 2 0 004 0" />
    </>
  ),
  glove: (
    <>
      <path d="M7 11V5a1.5 1.5 0 013 0v5m0 0V4a1.5 1.5 0 013 0v6m0 0V5.5a1.5 1.5 0 013 0V14c0 4-2.5 7-6.5 7S7 18.5 7 15v-1l-2-2.5a1.6 1.6 0 012.4-2L7 11z" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h3l2 5-2 1.5a12 12 0 005.5 5.5L15 14l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12l4.5 4.5L19 7" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

/** Brand monogram — gilded "WG" used in nav, footer, and icons. */
export function Monogram({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.6"
      />
      <path
        d="M8 16l3.5 16L16 20l4.5 12L24 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M41 20a7 7 0 1 0 0 8M41 28v-4h-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
