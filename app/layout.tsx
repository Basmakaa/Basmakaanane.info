import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: `${profile.name} — Software Engineer & AI Developer`,
  description:
    "Basma Kaanane — Software Engineer, AI & Full-Stack Developer, and woman in tech building warm, human-centered technology.",
  metadataBase: new URL("https://basmakaanane.info"),
  openGraph: {
    title: `${profile.name} — Software Engineer & AI Developer`,
    description:
      "Building warm, human-centered technology. AI, full-stack, and a whole lot of curiosity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-ink-950 text-white antialiased selection:bg-accent/30 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
