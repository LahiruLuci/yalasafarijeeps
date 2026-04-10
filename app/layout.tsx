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

export const metadata: Metadata = {
  metadataBase: new URL("https://yalasafarijeeps.com"),
  title: {
    default: "Yala Safari Jeeps | Premium Safari Experience in Sri Lanka",
    template: "%s | Yala Safari Jeeps"
  },
  description: "Experience the wild beauty of Yala National Park with Yala Safari Jeeps. Book your premium, luxury safari adventure in Sri Lanka today.",
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
  }
};

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
      </head>
      <body className="min-h-full flex flex-col w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
