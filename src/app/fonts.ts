import { cacheLife } from "next/cache";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  // The width axis lets the hero name narrow under the cursor (VariableProximity).
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

// Generated images (favicon, share card) can't use next/font, so they fetch the TTF directly.
// `text` limits the download to the characters actually drawn.
export async function loadArchivo(weight: number, text: string) {
  "use cache";
  cacheLife("max");
  const cssUrl = `https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl).then((response) => response.text());
  const fontUrl = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`Could not load Archivo ${weight} for a generated image`);
  }
  return fetch(fontUrl).then((response) => response.arrayBuffer());
}
