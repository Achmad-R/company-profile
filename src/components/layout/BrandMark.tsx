import { brand } from "@/content/site-content";

export default function BrandMark() {
  return (
    <a
      href="#main-content"
      aria-label={`${brand.name} — back to top`}
      className="inline-flex min-h-11 items-center gap-2.5"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        className="shrink-0 text-secondary-text"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="7"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.4"
        />
        <path
          d="M7 16h6.5M18.5 16H25M16 8.5V12m0 8v3.5"
          fill="none"
          stroke="#56dde5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="7" cy="16" r="2.4" fill="#8a7cff" />
        <circle cx="25" cy="16" r="2.4" fill="#56dde5" />
        <circle cx="16" cy="16" r="2" fill="#f4f7fb" />
        <circle cx="16" cy="8.5" r="1.6" fill="#8a7cff" />
        <circle cx="16" cy="23.5" r="1.6" fill="#56dde5" />
      </svg>
      <span
        aria-hidden="true"
        className="font-mono text-sm font-semibold tracking-[0.18em] text-primary-text"
      >
        {brand.wordmark}
      </span>
    </a>
  );
}
