import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuv Games API - API Games Validation",
  description: "Use Nuv Games API to check and validate game user accounts. It's free, public, and requires no login or API key.",
  keywords: [
    "Nuv Games API",
    "Game Checker",
    "Game Account Validation",
    "Free Game API",
    "Public Game API",
    "Nuvrify",
    "API for Developer",
    "Open Source Program",
    "Nuv Games Vercel",
  ],
  authors: [{ name: "kangyann", url: "https://nuv-games-api.vercel.app" }],
  creator: "Nuvrify",
  robots: "index, follow",
  openGraph: {
    title: "Nuv Games API - Free Game Account Validation",
    description:
      "Check game user IDs easily with Nuv Games API. No authentication required. Public and free to use.",
    url: "https://nuv-games-api.vercel.app",
    siteName: "Nuv Games API",
    images: [
      {
        url: "https://nuv-games-api.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Nuv Games API"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuv Games API - Free Game Account Validation",
    description:
      "Public API to check game user accounts without login or API key.",
    images: ["https://nuv-games-api.vercel.app/icon.png"]
  },
  metadataBase: new URL("https://nuv-games-api.vercel.app")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
