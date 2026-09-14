type SectionHeadingProps = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  tabIndex?: number;
  signalNode?: boolean;
};

export default function SectionHeading({
  id,
  label,
  heading,
  intro,
  tabIndex = -1,
  signalNode = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-copy">
      <p className="font-mono text-label tracking-[0.2em] text-signal-cyan uppercase">
        {signalNode ? (
          <span
            aria-hidden="true"
            data-heading-node
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-signal-cyan align-middle"
          />
        ) : null}
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
