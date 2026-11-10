import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/space-grotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/space-grotesk-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/space-grotesk-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = localFont({
  src: [
    {
      path: "../public/fonts/plus-jakarta-sans-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/plus-jakarta-sans-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/plus-jakarta-sans-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/plus-jakarta-sans-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/jetbrains-mono-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/jetbrains-mono-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/jetbrains-mono-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mono",
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
    "WordPress",
    "WooCommerce",
    "Vue.js",
    "React",
    "Next.js",
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
