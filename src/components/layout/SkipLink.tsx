export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-control focus:bg-signal-cyan focus:px-5 focus:py-2 focus:text-control focus:font-semibold focus:text-background"
    >
      Skip to main content
    </a>
  );
}
