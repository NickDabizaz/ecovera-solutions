import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/lib/fontawesome';

export const metadata: Metadata = {
  title: "Ecovera Solutions - Sustainable Environmental Solutions",
  description: "Leading provider of sustainable, eco-friendly solutions for businesses and individuals. Transform your operations with our green energy, waste management, and environmental consulting services.",
  keywords: ["sustainable solutions", "eco-friendly", "green energy", "environmental consulting", "waste management", "carbon footprint", "renewable energy"],
  authors: [{ name: "Ecovera Solutions Team" }],
  creator: "Ecovera Solutions",
  publisher: "Ecovera Solutions",
  robots: "index,follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Ecovera Solutions - Sustainable Environmental Solutions",
    description: "Transform your business with our comprehensive sustainable solutions. Reduce environmental impact while improving efficiency.",
    type: "website",
    locale: "en_US",
    siteName: "Ecovera Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecovera Solutions - Sustainable Environmental Solutions",
    description: "Leading provider of sustainable, eco-friendly solutions for a greener tomorrow.",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#4A7A46",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-clean-white text-deep-forest transition-colors duration-200 antialiased">
        <Header />
        <main className="flex-1 pt-20 relative"> {/* pt-20 untuk space header fixed */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
