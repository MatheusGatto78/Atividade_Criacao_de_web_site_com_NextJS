// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Meu Site",
    template: "%s | Meu Site",
  },
  description: "Site de exemplo com Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1 container mx-auto max-w-5xl p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
