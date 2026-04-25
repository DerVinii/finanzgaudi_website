import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export const metadata: Metadata = {
  title: "Joel Dziobek – Investmentpläne für junge Leute | Magdeburg",
  description:
    "Finanzberatung in Magdeburg. Joel Dziobek hilft jungen Menschen beim Vermögensaufbau mit persönlichen Investmentplänen. Ehrlich, transparent, auf Augenhöhe.",
  keywords: [
    "Finanzberater Magdeburg",
    "Investmentplan",
    "Vermögensaufbau",
    "Joel Dziobek",
    "ETF Sparplan",
    "Altersvorsorge junge Leute",
  ],
  openGraph: {
    title: "Joel Dziobek – Dein Weg zum Vermögensaufbau",
    description:
      "Investmentpläne für junge Menschen aus Magdeburg. Persönlich, transparent, zukunftssicher.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className="font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
