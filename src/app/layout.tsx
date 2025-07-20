import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PagePreloader from "./components/PagePreloader";
import PageTransition from "./components/PageTransition";
import { defaultMetadata } from "./metadata";
import { CacheProvider } from "./components/CacheProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <CacheProvider>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <PagePreloader />
        </CacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
