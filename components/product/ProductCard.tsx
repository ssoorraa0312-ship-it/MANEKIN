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
                <div className={styles.receiptOverlay}>
                    <div className={styles.receiptLine}>
                        <span>ITEM COST:</span>
                        <span>¥{product.price.toLocaleString()}</span>
                    </div>
                    {product.stylingFee && (
                        <div className={styles.receiptLine}>
                            <span>STYLING FEE:</span>
                            <span>¥{product.stylingFee.toLocaleString()}</span>
                        </div>
                    )}
                    <div className={styles.receiptDivider} />
                    <div className={styles.receiptTotal}>
                        <span>TOTAL:</span>
                        <span>¥{((product.price) + (product.stylingFee || 0)).toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.details}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <span className={styles.category}>{product.category}</span>
                </div>
            </div>
        </Link>
    );
}
