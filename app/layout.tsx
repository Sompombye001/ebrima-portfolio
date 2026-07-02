import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";
import SmoothScrollProvider from "@/components/motion/smooth-scroll-provider";
import CustomCursor from "@/components/motion/custom-cursor";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PageLoader from "@/components/motion/page-loader";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://ebrimasompo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Software Engineer & UI/UX Designer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Ebrima Sompo",
    "Software Engineer Gambia",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Next.js Developer",
    "The Gambia",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Software Engineer & UI/UX Designer`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: "/images/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer & UI/UX Designer`,
    description: profile.tagline,
    images: ["/images/og.png"],
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <PageLoader />
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
