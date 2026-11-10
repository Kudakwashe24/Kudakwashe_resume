import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kudakwashe Mukombachoto — Frontend Developer & UI Engineer",
  description:
    "Cape Town based Frontend Developer with 5+ years commercial experience building high-performance web applications, bespoke WordPress platforms, and digital client experiences.",
  authors: [{ name: "Kudakwashe Mukombachoto", url: "https://github.com/Kudakwashe24" }],
  keywords: [
    "Frontend Developer",
    "Cape Town Web Developer",
    "Vue.js",
    "React",
    "Next.js",
    "WordPress",
    "Tailwind CSS",
    "Kudakwashe Mukombachoto",
  ],
  metadataBase: new URL("https://kudakwashe.netlify.app"),
  openGraph: {
    title: "Kudakwashe Mukombachoto — Frontend Developer",
    description: "Building responsive, resilient web experiences with precision and care.",
    url: "https://kudakwashe.netlify.app",
    siteName: "Kudakwashe Mukombachoto Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kudakwashe Mukombachoto — Frontend Developer",
    description: "Commercial Frontend Developer based in Cape Town, South Africa.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen relative">{children}</body>
    </html>
  );
}
