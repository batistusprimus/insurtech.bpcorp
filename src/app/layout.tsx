import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import React from "react";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance BP Corp",
  description: "Vente de leads B2B qualifiés à la performance (CPL)",
};

function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-[#10B981] shadow-sm py-2 px-4 md:py-4 md:px-8 flex items-center justify-between transition-all">
      <a href="#hero" className="flex items-center">
        <Image src="/2.png" alt="Logo BPC" width={48} height={48} className="h-12 w-12 object-contain" priority />
      </a>
      <nav className="hidden md:flex gap-8 text-[var(--color-text-primary)] font-medium">
        <a href="#social-proof" className="px-2 py-1 rounded transition-colors hover:bg-[#10B981]/20 hover:text-[#10B981]">Clients</a>
        <a href="#how-it-works" className="px-2 py-1 rounded transition-colors hover:bg-[#10B981]/20 hover:text-[#10B981]">Comment ça marche</a>
        <a href="#verticals" className="px-2 py-1 rounded transition-colors hover:bg-[#10B981]/20 hover:text-[#10B981]">Votre besoin ?</a>
        <a href="#faq" className="px-2 py-1 rounded transition-colors hover:bg-[#10B981]/20 hover:text-[#10B981]">FAQ</a>
        <a href="#cta" className="px-2 py-1 rounded transition-colors hover:bg-[#10B981]/20 hover:text-[#10B981]">Réserver un call</a>
      </nav>
      <a
        href="https://app.iclosed.io/e/baptistepiocelle/contact"
        className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#10B981] text-white font-semibold rounded-full text-sm shadow-sm hover:bg-[#059669] transition-colors border border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M16 11.37V7a4 4 0 10-8 0v4.37M12 17v-4m0 0l-2 2m2-2l2 2" />
        </svg>
        Réserver un call
      </a>
    </header>
  );
}

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
