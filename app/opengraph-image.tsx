import { ImageResponse } from "next/og";

export const alt = "Pythia AI | Intelligence Amplified";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#0b0b14", color: "#f5f5f5" }}>
        <div style={{ fontSize: 96, fontWeight: 800, color: "#6366f1" }}>Pythia AI</div>
        <div style={{ fontSize: 52, marginTop: 24, color: "#f5f5f5" }}>Intelligence Amplified</div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#b9c0cf", maxWidth: 1000 }}>An early-stage AI project for the Alpha Protocol Network</div>
        <div style={{ fontSize: 26, marginTop: 56, color: "#6366f1" }}>pythia-ai.xyz</div>
      </div>
    ),
    size,
  );
}
