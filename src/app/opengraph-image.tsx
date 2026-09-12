import { ImageResponse } from "next/og";
import { brand } from "@/content/site-content";

const assetLabel = "Fictional portfolio concept";

export const alt = `${brand.wordmark} — ${assetLabel}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#070a0f",
          backgroundImage:
            "linear-gradient(rgba(86, 221, 229, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(86, 221, 229, 0.07) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          color: "#f4f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 90,
            right: 112,
            display: "flex",
            width: 330,
            height: 430,
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 24,
            background: "rgba(15, 21, 32, 0.78)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 150,
            right: 276,
            display: "flex",
            width: 3,
            height: 310,
            background: "linear-gradient(180deg, #56dde5 0%, #8a7cff 68%, #56dde5 100%)",
          }}
        />
        {[190, 305, 420].map((top, index) => (
          <div key={top} style={{ display: "flex" }}>
            <div
              style={{
                position: "absolute",
                top,
                right: 276,
                display: "flex",
                width: index === 1 ? 110 : 70,
                height: 2,
                background: index === 1 ? "#8a7cff" : "#56dde5",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: top - 9,
                right: 268,
                display: "flex",
                width: 19,
                height: 19,
                border: `3px solid ${index === 1 ? "#8a7cff" : "#56dde5"}`,
                borderRadius: 999,
                backgroundColor: "#070a0f",
                boxShadow:
                  index === 1 ? "0 0 24px rgba(138, 124, 255, 0.75)" : "none",
              }}
            />
          </div>
        ))}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "70px 80px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#56dde5",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.14em",
            }}
          >
            {brand.wordmark}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 760,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.045em",
            }}
          >
            {brand.tagline}
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "12px 18px",
              border: "1px solid rgba(138, 124, 255, 0.72)",
              borderRadius: 999,
              backgroundColor: "rgba(138, 124, 255, 0.12)",
              color: "#c7c0ff",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            {assetLabel}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
