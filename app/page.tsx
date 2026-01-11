"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/product/ProductGrid";
import CommandMenu from "@/components/ui/CommandMenu";
import Marquee from "@/components/ui/Marquee";
import { products } from "@/lib/data";

export default function Home() {
  const [category, setCategory] = useState<'all' | 'mens' | 'womens'>('all');
  const [sortOrder, setSortOrder] = useState<'price_asc' | 'price_desc' | null>(null);

  const handleCategorySelect = (cat: 'mens' | 'womens') => {
    setCategory(cat);

    // Smooth scroll to product grid
    const grid = document.getElementById('product-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.gender === category || p.gender === 'unisex');

  // Sorting
  if (sortOrder === 'price_asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price_desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  const title = category === 'all' ? "Latest Arrivals" : `${category.toUpperCase()} COLLECTION`;

  return (
    <main>
      <Hero />
      <Marquee text="FALL WINTER 2026 — RAW AESTHETICS — GRAVITY IS A CHOICE" repeat={4} />
      <div id="product-grid">
        <ProductGrid
          items={filteredProducts}
          title={title}
        />
      </div>
      <CommandMenu
        currentCategory={category}
        onSelectCategory={handleCategorySelect}
        currentSort={sortOrder}
        onSortChange={setSortOrder}
      />
      <Marquee text="LIMITED STOCK — EXCLUSIVE DROPS — WORLDWIDE SHIPPING" repeat={6} duration={25} outline />
    </main>
  );
}
