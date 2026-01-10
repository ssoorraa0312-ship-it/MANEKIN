"use client";

import { useCart } from '@/lib/context/CartContext';
import { Product } from '@/lib/data';
import styles from './AddToCartButton.module.css';

export default function AddToCartButton({ product }: { product: Product }) {
    const { addItem, openCart } = useCart();

    const handleAddToCart = () => {
        addItem(product);
        openCart();
    };

    return (
        <button className={styles.addToCart} onClick={handleAddToCart}>
            Add to Cart
        </button>
    );
}
