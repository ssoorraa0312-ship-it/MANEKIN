import { products } from '@/lib/data';
import ProductCard from './ProductCard';
import FadeIn from '../ui/FadeIn';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
    return (
        <section className={`container ${styles.gridSection}`}>
            <FadeIn>
                <h2 className={styles.heading}>Latest Arrivals</h2>
            </FadeIn>
            <div className={styles.grid}>
                {products.map((product, index) => (
                    <FadeIn key={product.id} delay={index * 0.1}>
                        <ProductCard product={product} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
