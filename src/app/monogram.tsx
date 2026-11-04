import { ImageResponse } from "next/og";
import { site, themeColors } from "@/data/site";
import { loadArchivo } from "./fonts";

// Shared by icon.tsx (browser tab) and apple-icon.tsx (iOS home screen).
// next/og only understands inline styles, which is why there are no Tailwind classes here.
export async function renderMonogram(size: number, rounded: boolean) {
  const font = await loadArchivo(800, site.initials);
  const { accent, bg } = themeColors.light;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          color: bg,
          borderRadius: rounded ? size * 0.18 : 0,
          fontFamily: "Archivo",
          fontSize: size * 0.5,
          letterSpacing: "-0.04em",
        }}
      >
        {site.initials}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Archivo", data: font, weight: 800 }],
    },
  );
}
