import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecovera Solutions",
  description: "Sustainable solutions for a greener tomorrow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-clean-white text-deep-forest transition-colors duration-200">
        <Header />
        <main className="flex-1 pt-20"> {/* pt-20 untuk space header fixed */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
