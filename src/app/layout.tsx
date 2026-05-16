import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorBackground from "@/components/effects/CursorGlow";

export const metadata: Metadata = {
  title: "UPLB HCI Research Laboratory",
  description: "UPLB HCI Research Laboratory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <CursorBackground />

        <section className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}