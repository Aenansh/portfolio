import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import styles from "@/components/styles/cursor.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aenansh Mittal - Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} ${styles.cursorHidden} relative min-h-screen bg-black overflow-x-hidden`}>
        <AnimatedBackground />
        <CursorGlow />
        <div className="relative z-10 min-h-screen flex flex-col overflow-x-hidden">
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
