import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://yalasafarijeeps.com"),
  title: {
    default: "Yala Safari Jeep Tours | Private Yala National Park Safaris",
    template: "%s | Yala Safari Jeeps",
  },
  description: "Book private Yala National Park jeep safaris with local guides, hotel pickup, and WhatsApp confirmation.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Yala Safari Jeeps | Premium Safari Experience in Sri Lanka",
    description: "Experience the wild beauty of Yala National Park with Yala Safari Jeeps. Book your premium, luxury safari adventure in Sri Lanka today.",
    url: "https://yalasafarijeeps.com",
    siteName: "Yala Safari Jeeps",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Schema />
        <BreadcrumbSchema />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col w-full">
        <Navbar />
        <main className="flex-grow flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
