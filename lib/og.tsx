import { ImageResponse } from "next/og";

/**
 * Shared Open Graph / Twitter card image (1200×630), reused by both
 * app/opengraph-image.tsx and app/twitter-image.tsx. Reproduces the home hero:
 * cream background, the headline with an ochre-italic emphasis, and the name.
 * Uses ImageResponse's built-in font (no external fetch) so the build stays
 * offline-safe; colours/spacing mirror the design tokens.
 */
export const ogAlt = "Parv Kaur — Higher Education Consultant";
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 88px",
          background: "#faf8ff",
          color: "#080b16",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#86878f",
          }}
        >
          Higher Education Consultant
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 68,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            maxWidth: 1010,
          }}
        >
          <span>Bridging&nbsp;</span>
          <span style={{ fontStyle: "italic", color: "#b0792a" }}>data, strategy&nbsp;</span>
          <span>and the classroom across French business schools.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 44, height: 6, background: "#8a5510" }} />
          <div style={{ display: "flex", fontSize: 32, letterSpacing: "0.01em" }}>Parv Kaur</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
