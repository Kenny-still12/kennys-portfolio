import { ImageResponse } from "next/og";
import { site, themeColors } from "@/data/site";
import { loadArchivo } from "./fonts";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PADDING = 80;
const GRID_COLUMNS = 12;

// next/og only understands inline styles and flexbox, so this mirrors the hero by hand.
export default async function OpengraphImage() {
  const { bg, text, muted, border, accent } = themeColors.light;
  const [bold, regular] = await Promise.all([
    loadArchivo(800, site.name),
    loadArchivo(400, site.role),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: PADDING,
          background: bg,
          color: text,
          fontFamily: "Archivo",
          position: "relative",
        }}
      >
        {Array.from({ length: GRID_COLUMNS + 1 }, (_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: PADDING + (index * (size.width - PADDING * 2)) / GRID_COLUMNS,
              width: 1,
              background: border,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            right: -260,
            top: -180,
            width: 640,
            height: 640,
            borderRadius: "50%",
            border: `2px solid ${border}`,
          }}
        />

        <div style={{ display: "flex", maxWidth: 760, fontSize: 30, color: muted }}>{site.role}</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 32 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 160,
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
            }}
          >
            {site.name.split(" ").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div style={{ width: 40, height: 40, marginBottom: 8, background: accent }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: bold, weight: 800 },
        { name: "Archivo", data: regular, weight: 400 },
      ],
    },
  );
}
