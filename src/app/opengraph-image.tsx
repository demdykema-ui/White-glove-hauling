import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — The most exotic junk movers in the world.`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, rgba(231,200,115,0.18), transparent 70%), radial-gradient(40% 40% at 85% 90%, rgba(197,162,83,0.12), transparent 70%)",
          color: "#f4f1ea",
          fontFamily: "serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#c5a253",
          }}
        >
          White Glove Hauling Co.
        </div>
        <div
          style={{
            display: "flex",
            width: 80,
            height: 2,
            backgroundColor: "#c5a253",
            margin: "36px 0",
          }}
        />
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.05,
            maxWidth: 920,
            fontStyle: "italic",
          }}
        >
          The most exotic junk movers in the world.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            letterSpacing: 6,
            color: "#9a9aa3",
            textTransform: "uppercase",
          }}
        >
          Dallas–Fort Worth · By Appointment
        </div>
      </div>
    ),
    { ...size },
  );
}
