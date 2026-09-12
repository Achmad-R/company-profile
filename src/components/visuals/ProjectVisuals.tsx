// Abstract concept-project diagrams drawn locally from each project's visual
// brief. They are decorative (hidden from assistive technology); all project
// meaning stays in the rendered text.
const LABEL_FILL = "#8390a3";
const TRACK_STROKE = "rgba(255,255,255,0.22)";
const PANEL_FILL = "#0f1520";
const PANEL_STROKE = "rgba(255,255,255,0.16)";

function MicroLabel({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={LABEL_FILL}
      fontSize="9"
      fontFamily="ui-monospace, monospace"
      letterSpacing="1.5"
    >
      {children}
    </text>
  );
}

export function SignalOpsVisual() {
  return (
    <svg
      viewBox="0 0 400 225"
      className="h-full w-full"
      focusable="false"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="399" height="224" rx="12" fill="#0b1018" />
      <line x1="24" y1="120" x2="376" y2="120" stroke={TRACK_STROKE} strokeWidth="1.5" />
      <line
        x1="24"
        y1="120"
        x2="344"
        y2="120"
        stroke="#56dde5"
        strokeWidth="1.5"
        strokeOpacity="0.65"
      />
      <line
        x1="344"
        y1="48"
        x2="344"
        y2="192"
        stroke="#69d39c"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        strokeOpacity="0.8"
      />
      {[
        { x: 56, label: "ALERT", fill: "#8a7cff" },
        { x: 152, label: "EVIDENCE", fill: "#56dde5" },
        { x: 248, label: "REVIEW", fill: "#56dde5" },
      ].map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy="120" r="12" fill="none" stroke={node.fill} strokeOpacity="0.35" />
          <circle cx={node.x} cy="120" r="6.5" fill={node.fill} />
          <MicroLabel x={node.x} y={162}>
            {node.label}
          </MicroLabel>
        </g>
      ))}
      <rect x="128" y="170" width="48" height="14" rx="7" fill="none" stroke="#56dde5" strokeOpacity="0.6" />
      <rect x="224" y="170" width="48" height="14" rx="7" fill="none" stroke="#56dde5" strokeOpacity="0.6" />
      <polygon points="344,106 358,120 344,134 330,120" fill="#69d39c" />
      <circle cx="344" cy="120" r="3" fill="#070a0f" />
      <MicroLabel x={344} y={162}>
        APPROVE
      </MicroLabel>
      <MicroLabel x={344} y={36}>
        HUMAN GATE
      </MicroLabel>
    </svg>
  );
}

export function RelayGridVisual() {
  const sources = [40, 100, 160];
  const transforms = [70, 130];
  return (
    <svg
      viewBox="0 0 400 225"
      className="h-full w-full"
      focusable="false"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="399" height="224" rx="12" fill="#0b1018" />
      <MicroLabel x={58} y={20}>
        SOURCES
      </MicroLabel>
      <MicroLabel x={158} y={20}>
        TRANSFORM
      </MicroLabel>
      <MicroLabel x={258} y={20}>
        EXCEPTIONS
      </MicroLabel>
      <MicroLabel x={352} y={20}>
        STATE
      </MicroLabel>
      {sources.map((y) => (
        <g key={`source-${y}`}>
          <path
            d={`M92 ${y + 15} C 120 ${y + 15}, 120 85, 140 85`}
            fill="none"
            stroke="#56dde5"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <rect x="28" y={y - 3} width="64" height="36" rx="6" fill={PANEL_FILL} stroke={PANEL_STROKE} />
        </g>
      ))}
      {transforms.map((y, index) => (
        <g key={`transform-${y}`}>
          <path
            d={`M192 ${y + 15} C 214 ${y + 15}, 214 115, 234 115`}
            fill="none"
            stroke={index === 0 ? "#56dde5" : "#8a7cff"}
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <rect x="140" y={y - 3} width="52" height="36" rx="6" fill={PANEL_FILL} stroke={PANEL_STROKE} />
        </g>
      ))}
      <rect x="246" y="104" width="24" height="42" rx="6" fill="none" stroke="#8a7cff" strokeOpacity="0.45" />
      <rect x="240" y="98" width="52" height="36" rx="6" fill={PANEL_FILL} stroke="#8a7cff" />
      <circle cx="266" cy="110" r="4" fill="#8a7cff" />
      <line x1="280" y1="106" x2="288" y2="106" stroke="#8a7cff" strokeWidth="2" strokeLinecap="round" />
      <line x1="280" y1="112" x2="288" y2="112" stroke="#8a7cff" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M292 116 C 312 116, 312 116, 326 116"
        fill="none"
        stroke="#69d39c"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />
      <rect x="326" y="98" width="52" height="36" rx="6" fill={PANEL_FILL} stroke="#69d39c" />
      <circle cx="352" cy="116" r="5" fill="#69d39c" />
      <path d="M350 116l3.5 3.5L358 114" fill="none" stroke="#070a0f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <MicroLabel x={200} y={208}>
        LINEAGE TRACEABLE
      </MicroLabel>
    </svg>
  );
}

export function VantageSimVisual() {
  return (
    <svg
      viewBox="0 0 400 225"
      className="h-full w-full"
      focusable="false"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="399" height="224" rx="12" fill="#0b1018" />
      <MicroLabel x={108} y={20}>
        RUN A
      </MicroLabel>
      <MicroLabel x={292} y={20}>
        RUN B
      </MicroLabel>
      <rect x="24" y="30" width="168" height="118" rx="8" fill={PANEL_FILL} stroke={PANEL_STROKE} />
      <rect x="208" y="30" width="168" height="118" rx="8" fill={PANEL_FILL} stroke={PANEL_STROKE} />
      <polyline
        points="36,128 70,108 104,114 138,78 180,88"
        fill="none"
        stroke="#56dde5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="220,120 254,124 288,96 322,102 364,70"
        fill="none"
        stroke="#8a7cff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="138" y1="66" x2="138" y2="140" stroke="#56dde5" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.7" />
      <line x1="288" y1="84" x2="288" y2="140" stroke="#8a7cff" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.7" />
      <rect x="128" y="52" width="20" height="14" rx="4" fill="#0b1018" stroke="#56dde5" />
      <rect x="278" y="70" width="20" height="14" rx="4" fill="#0b1018" stroke="#8a7cff" />
      <line x1="108" y1="148" x2="108" y2="176" stroke={TRACK_STROKE} strokeWidth="1.5" />
      <line x1="292" y1="148" x2="292" y2="176" stroke={TRACK_STROKE} strokeWidth="1.5" />
      <rect x="24" y="176" width="352" height="30" rx="8" fill={PANEL_FILL} stroke="#69d39c" strokeOpacity="0.7" />
      <circle cx="108" cy="191" r="4" fill="#69d39c" />
      <circle cx="292" cy="191" r="4" fill="#69d39c" />
      <line x1="120" y1="191" x2="280" y2="191" stroke="#69d39c" strokeWidth="1.5" strokeOpacity="0.7" />
      <MicroLabel x={200} y={200}>
        DECISION RECORD
      </MicroLabel>
    </svg>
  );
}
