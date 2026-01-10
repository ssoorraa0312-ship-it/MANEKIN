"use client";

import { useCart } from '@/lib/context/CartContext';
import styles from './CartDrawer.module.css';
import { X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
    const { isCartOpen, closeCart, items, removeItem, total } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <div className={styles.overlay} onClick={closeCart}>
                    <motion.div
                        className={styles.drawer}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className={styles.header}>
                            <h2 className={styles.title}>Cart ({items.length})</h2>
                            <button onClick={closeCart} className={styles.closeBtn}>
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {items.length === 0 ? (
                            <div className={styles.empty}>Your cart is empty</div>
                        ) : (
                            <div className={styles.items}>
                                {items.map((item, index) => (
                                    <div key={`${item.id}-${item.size}-${index}`} className={styles.item}>
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className={styles.image}
                                                sizes="80px"
                                            />
                                        </div>
                                        <div className={styles.itemDetails}>
                                            <div>
                                                <h3 className={styles.itemName}>{item.name}</h3>
                                                <span className={styles.itemMeta}>Size: {item.size}</span>
                                                <span className={styles.itemMeta}>Qty: {item.quantity}</span>
                                            </div>
                                            <div className={styles.itemFooter}>
                                                <span>${item.price * item.quantity}</span>
                                                <button
                                                    onClick={() => removeItem(item.id, item.size)}
                                                    className={styles.removeBtn}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {items.length > 0 && (
                            <div className={styles.footer}>
                                <div className={styles.total}>
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>
                                <button className={styles.checkoutBtn}>Checkout</button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
