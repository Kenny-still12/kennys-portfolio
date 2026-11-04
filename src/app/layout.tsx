import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/layout/Providers";
import { site, themeColors } from "@/data/site";
import { archivo, plexMono } from "./fonts";
import "./globals.css";

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  // Turns relative URLs (like the generated share image) into absolute ones, which social sites require.
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

// Tints the browser UI on mobile. Follows the OS setting, since it's sent before the theme toggle runs.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColors.light.bg },
    { media: "(prefers-color-scheme: dark)", color: themeColors.dark.bg },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg font-sans text-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
