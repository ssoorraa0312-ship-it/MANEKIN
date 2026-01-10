import type { Metadata } from "next";
import { Inter, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "700", "800"] });

import Footer from "@/components/layout/Footer";
import SystemStatusBar from "@/components/ui/SystemStatusBar";
import { CartProvider } from "@/lib/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

export const metadata: Metadata = {
  title: "Aether Apparel",
  description: "Luxury Minimalism. Polished Brutalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${syne.variable}`}>
        <CartProvider>
          <SmoothScroll />
          <Preloader />
          <CustomCursor />
          <NoiseOverlay />
          <SystemStatusBar />
          <CartDrawer />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
