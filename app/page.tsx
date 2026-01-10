import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import ProductGrid from "@/components/product/ProductGrid";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee text="FALL WINTER 2026 — RAW AESTHETICS — GRAVITY IS A CHOICE" repeat={4} />
      <BentoGrid />
      <Marquee text="LIMITED STOCK — EXCLUSIVE DROPS — WORLDWIDE SHIPPING" repeat={6} duration={25} outline />
      <ProductGrid />
    </main>
  );
}
