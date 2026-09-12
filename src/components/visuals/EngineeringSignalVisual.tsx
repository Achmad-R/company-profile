// Decorative Engineering Signal panel for the hero. The stage labels are
// generic system language, not company facts, and the whole panel is hidden
// from assistive technology because the hero copy carries the meaning.
export default function EngineeringSignalVisual({
  animationDelay = "200ms",
}: {
  animationDelay?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="signal-panel hero-enter"
      style={{ animationDelay }}
    >
      <div className="signal-head">
        <span>Decision path / system 01</span>
        <span className="signal-live">Trace active</span>
      </div>
      <div className="signal-flow">
        <div className="signal-row">
          <span className="signal-index">01</span>
          <span className="signal-copy">
            <strong>Workflow context</strong>
            <small>Signals and evidence enter together</small>
          </span>
          <span className="signal-state">Linked</span>
        </div>
        <div className="signal-row">
          <span className="signal-index">02</span>
          <span className="signal-copy">
            <strong>Assisted signal</strong>
            <small>Recommendation remains reviewable</small>
          </span>
          <span className="signal-state">Bounded</span>
        </div>
        <div className="signal-row signal-human">
          <span className="signal-index">03</span>
          <span className="signal-copy">
            <strong>Human checkpoint</strong>
            <small>Evidence reviewed before action</small>
          </span>
          <span className="signal-state">Required</span>
        </div>
        <div className="signal-row">
          <span className="signal-index">04</span>
          <span className="signal-copy">
            <strong>Accountable output</strong>
            <small>Decision and ownership stay visible</small>
          </span>
          <span className="signal-state">Traceable</span>
        </div>
      </div>
      <div className="signal-foot">
        <span>
          <strong>Solid path</strong> / reviewed flow
        </span>
        <span>No hidden decision state</span>
      </div>
    </div>
  );
}
