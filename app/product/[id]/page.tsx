import { products } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/product/AddToCartButton';
import FadeIn from '@/components/ui/FadeIn';
import styles from './page.module.css';

interface ProductPageProps {
    params: Promise<{ id: string }>; // Updated for Next.js 15+ async params
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.productWrapper}>
                <FadeIn className={styles.imageSection}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={styles.image}
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </FadeIn>

                <FadeIn className={styles.detailsSection} delay={0.2} direction="left">
                    <span className={styles.category}>{product.category}</span>
                    <h1 className={styles.name}>{product.name}</h1>
                    <p className={styles.price}>${product.price}</p>
                    <p className={styles.description}>
                        Experience the pinnacle of modern design. This piece utilizes premium materials
                        to create a silhouette that stands defying gravity. Meticulously crafted for
                        those who demand excellence in every stitch.
                    </p>
                    <AddToCartButton product={product} />
                </FadeIn>
            </div>
        </div>
    );
}
