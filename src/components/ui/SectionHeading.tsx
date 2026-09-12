type SectionHeadingProps = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  tabIndex?: number;
};

export default function SectionHeading({
  id,
  label,
  heading,
  intro,
  tabIndex = -1,
}: SectionHeadingProps) {
  return (
    <div className="max-w-copy">
      <p className="font-mono text-label tracking-[0.2em] text-signal-cyan uppercase">
        {label}
      </p>
      <h2
        id={id}
        tabIndex={tabIndex}
        className="mt-4 text-section font-semibold tracking-tight text-balance"
      >
        {heading}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-copy text-body text-secondary-text">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
