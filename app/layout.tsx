import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  title: "Ehab Allababidi — Digital Estate Architect (Private Servers, Smart Estates & On-Prem AI)",
  description: "Chicago-based programmer-installer specializing in private servers, zero-trust networks, and on-premises AI. On-site & remote services for boutique firms and privacy-focused professionals.",
  keywords: ["private servers", "on-prem AI", "zero-trust network", "digital estate", "Chicago IT consultant", "Synology", "TrueNAS", "Proxmox", "network security", "law firm IT"],
  authors: [{ name: "Ehab Allababidi", url: "https://digital-estate-orcin.vercel.app" }],
  creator: "Ehab Allababidi",
  publisher: "Ehab Allababidi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digital-estate-orcin.vercel.app",
    title: "Ehab Allababidi — Digital Estate Architect",
    description: "Private Servers, Smart Estates & On-Prem AI. Chicago-based on-site & remote infrastructure specialist.",
    siteName: "Digital Estate Architect",
    images: [
      {
        url: "https://digital-estate-orcin.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ehab Allababidi - Digital Estate Architect - Private Servers, Smart Estates & On-Prem AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehab Allababidi — Digital Estate Architect",
    description: "Private Servers, Smart Estates & On-Prem AI. Chicago-based infrastructure specialist.",
    images: ["https://digital-estate-orcin.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://digital-estate-orcin.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#B87333" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
