import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [
        { category: "mens" },
        { category: "womens" },
    ];
}

export default async function ShopCategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;

    const validCategories = ["mens", "womens"];
    if (!validCategories.includes(category)) {
        notFound();
    }

    // Filter products: category specific + unisex
    const filteredProducts = products.filter(
        (p) => p.gender === category || p.gender === "unisex"
    );

    const title = category === "mens" ? "MENS COLLECTION" : "WOMENS COLLECTION";

    return (
        <main style={{ paddingTop: "100px" }}>
            <ProductGrid items={filteredProducts} title={title} />
        </main>
    );
}
