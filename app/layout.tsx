import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asrazia.dev"),
  title: `${personal.fullName} — ${personal.headline}`,
  description: personal.bio,
  openGraph: {
    title: `${personal.fullName} — AI/ML Developer`,
    description: personal.bio,
    type: "website",
    images: [personal.photo],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.fullName} — AI/ML Developer`,
    description: personal.bio,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-bg-primary text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
