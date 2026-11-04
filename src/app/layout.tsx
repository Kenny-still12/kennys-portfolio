import type { Metadata } from "next";
import { Providers } from "@/components/layout/Providers";
import { site } from "@/data/site";
import { archivo, plexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
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
