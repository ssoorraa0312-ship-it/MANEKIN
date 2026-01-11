import { products as allProducts } from '@/lib/data';
import { Product } from '@/lib/data';
import ProductCard from './ProductCard';
import FadeIn from '../ui/FadeIn';
import styles from './ProductGrid.module.css';

import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

interface ProductGridProps {
    items?: Product[];
    title?: string;
    headerAction?: React.ReactNode;
}

export default function ProductGrid({ items = allProducts, title = "Latest Arrivals", headerAction }: ProductGridProps) {
    return (
        <section className={`container ${styles.gridSection}`}>
            <div className={styles.headingWrapper}>
                <AnimatePresence mode="wait">
                    <motion.h2
                        key={title}
                        className={styles.heading}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        {title}
                    </motion.h2>
                </AnimatePresence>
                {headerAction}
            </div>
            <LayoutGroup>
                <div className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {items.map((product, index) => (
                            // Wrap in motion.div because FadeIn might have its own transforms that conflict with layout
                            // Or just pass layout to FadeIn. Let's try passing layout.
                            // Wait, keys need to be stable. product.id is stable.
                            // Using a "Heavy" spring for that gravity feel
                            <FadeIn
                                key={product.id}
                                layout
                                transition={{
                                    opacity: { duration: 0.4 },
                                    layout: { type: "spring", stiffness: 150, damping: 35, mass: 1.5 }, // Heavy spring
                                    y: { duration: 0.4 } // Regular enter animation
                                }}
                            >
                                <ProductCard product={product} />
                            </FadeIn>
                        ))}
                    </AnimatePresence>
                </div>
            </LayoutGroup>
        </section>
    );
}
