// src/app/layout.tsx
import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyApp - Users, Products & Cars",
  description: "Next.js App Router layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        {/* Tepadagi qotirilgan Navbar */}
        <Navbar />

        {/* Xuddi React Router'dagi <Outlet /> o'rniga {children} ishlatiladi */}
        <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
