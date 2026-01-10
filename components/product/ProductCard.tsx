import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/product/${product.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.details}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <span className={styles.category}>{product.category}</span>
                </div>
                <span className={styles.price}>${product.price}</span>
            </div>
        </Link>
    );
}
