import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PagePreloader from "./components/PagePreloader";
import PageTransition from "./components/PageTransition";
import { defaultMetadata } from "./metadata";
import { CacheProvider } from "./components/CacheProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CacheProvider>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <PagePreloader />
        </CacheProvider>
      </body>
    </html>
  );
}
