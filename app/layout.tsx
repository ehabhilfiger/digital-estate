import type { Metadata } from "next";
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://backupestate.vercel.app"),
  title: {
    default: "Digital Estate Architect — Private AI & Server Rooms (Chicagoland)",
    template: "%s | Digital Estate Architect"
  },
  description: "Private server rooms, sovereign AI, and secure automation for law firms, clinics, and elite clients in Chicagoland.",
  keywords: ["private servers", "on-prem AI", "zero-trust network", "digital estate", "Chicago IT consultant", "Synology", "TrueNAS", "Proxmox", "network security", "law firm IT", "HIPAA compliance", "ABA compliance"],
  authors: [{ name: "Ehab Allababidi", url: "https://backupestate.vercel.app" }],
  creator: "Ehab Allababidi",
  publisher: "Digital Estate Architect",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://backupestate.vercel.app",
    title: "Digital Estate Architect — Private AI & Server Rooms",
    description: "Sovereign AI, private infrastructure, elite deployments.",
    siteName: "Digital Estate Architect",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Estate Architect - Private AI & Server Rooms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Estate Architect — Private AI & Server Rooms",
    description: "Sovereign AI, private infrastructure, elite deployments.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preload" href="/me.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="border-t border-white/10 bg-slate-950/90 text-white/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Compliance & trust</div>
              <p className="mt-3 max-w-md text-sm text-white/60">
                HIPAA-aligned handling, ABA confidentiality, and GDPR-ready data processes for Chicagoland firms and clinics.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">HIPAA aware</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SOC 2 inspired runbooks</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Zero-trust default</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-right">
              <Link href="/privacy" className="text-white/70 transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-white/70 transition hover:text-white">Terms of Service</Link>
              <Link href="/compliance" className="text-white/70 transition hover:text-white">Compliance & GDPR</Link>
              <Link href="/sla" className="text-white/70 transition hover:text-white">Service Levels</Link>
              <Link href="/careers" className="text-white/70 transition hover:text-white">Join the Team</Link>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Digital Estate Architect. All rights reserved.</span>
              <span>Chicago, IL • concierge@backupestate.com • +1 (773) 920-0030</span>
            </div>
          </div>
        </footer>
        <Analytics />
        <Script id="ld-local" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Digital Estate Architect",
            "areaServed": "Chicagoland",
            "url": "https://backupestate.vercel.app",
            "description": "Private server rooms and sovereign AI deployments.",
            "telephone": "+1-773-920-0030",
            "email": "defcon5ready@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "addressCountry": "US"
            }
          })}
        </Script>
        <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Private AI & Server Room Design",
            "provider": { "@type": "Organization", "name": "Digital Estate Architect" }
          })}
        </Script>
      </body>
    </html>
  );
}
