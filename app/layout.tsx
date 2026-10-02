import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pythia-ai.xyz"),
  title: {
    default: "Pythia AI | Intelligence Amplified",
    template: "%s | Pythia AI"
  },
  description: "An early-stage AI project for the Alpha Protocol Network. Pythia AI is designed to coordinate compute across network nodes. It runs today as a standalone service.",
  keywords: ["AI", "machine learning", "distributed computing", "Alpha Protocol", "mesh network", "active inference"],
  authors: [{ name: "Pythia AI" }],
  openGraph: {
    title: "Pythia AI | Intelligence Amplified",
    description: "An early-stage AI project for the Alpha Protocol Network. Pythia AI is designed to coordinate compute across network nodes. It runs today as a standalone service.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pythia AI | Intelligence Amplified" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pythia AI | Intelligence Amplified",
    description: "An early-stage AI project for the Alpha Protocol Network. Pythia AI is designed to coordinate compute across network nodes. It runs today as a standalone service.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
