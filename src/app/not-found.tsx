import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { notFound } from "@/data/site";

export const metadata: Metadata = {
  title: notFound.title,
};

// No navbar or footer: their links are #anchors that only exist on the homepage.
export default function NotFound() {
  return (
    <main
      id="main"
      className="container-page grid min-h-dvh content-center gap-y-8 py-16 md:grid-cols-12"
    >
      <p className="font-mono text-sm text-muted md:col-span-2 md:pt-4">{notFound.code}</p>
      <div className="md:col-span-10">
        <h1 className="text-heading">{notFound.title}</h1>
        <p className="mt-6 max-w-md text-lg text-muted">{notFound.message}</p>
        <div className="mt-10">
          <Button href="/">
            <ArrowLeft aria-hidden="true" className="size-4" />
            {notFound.homeLabel}
          </Button>
        </div>
      </div>
    </main>
  );
}
