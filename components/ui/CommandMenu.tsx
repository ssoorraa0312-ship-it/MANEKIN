"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CommandMenu.module.css";

interface CommandMenuProps {
    currentCategory: 'all' | 'mens' | 'womens';
    onSelectCategory: (category: 'mens' | 'womens') => void;
    currentSort: 'price_asc' | 'price_desc' | null;
    onSortChange: (sort: 'price_asc' | 'price_desc') => void;
}

export default function CommandMenu({
    currentCategory,
    onSelectCategory,
    currentSort,
    onSortChange
}: CommandMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <AnimatePresence mode="popLayout">
                {!isOpen ? (
                    <motion.button
                        key="trigger"
                        layoutId="command-menu"
                        className={styles.trigger}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Command Menu"
                    >
                        <motion.div
                            className={styles.starWrapper}
                            /* Clean Materialize: Scale up from small, no stretching */
                            initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                            {/* Large Triangle: Hollow, Centered */}
                            <svg className={styles.triangleLarge} viewBox="-60 -60 120 120">
                                <path d="M0 -57.735 L50 28.8675 L-50 28.8675 Z" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                            </svg>
                            {/* Small Triangle: Solid (Filled), Centered */}
                            <svg className={styles.triangleSmall} viewBox="-60 -60 120 120">
                                <path d="M0 -57.735 L50 28.8675 L-50 28.8675 Z" fill="currentColor" stroke="none" />
                            </svg>
                        </motion.div>
                    </motion.button>
                ) : (
                    <motion.div
                        key="panel"
                        layoutId="command-menu"
                        className={styles.pannel}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className={styles.content}
                            /* Content Sharp Exit */
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.8, filter: "blur(0px)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.section}>
                                <h3 className={styles.label}>FILTER</h3>
                                <div className={styles.options}>
                                    <button
                                        onClick={() => onSelectCategory('mens')}
                                        className={`${styles.option} ${currentCategory === 'mens' ? styles.selected : ''}`}
                                    >
                                        MENS
                                    </button>
                                    <div className={styles.divider} />
                                    <button
                                        onClick={() => onSelectCategory('womens')}
                                        className={`${styles.option} ${currentCategory === 'womens' ? styles.selected : ''}`}
                                    >
                                        WOMENS
                                    </button>
                                </div>
                            </div>

                            <div className={styles.separatorVertical} />

                            <div className={styles.section}>
                                <h3 className={styles.label}>SORT</h3>
                                <div className={styles.options}>
                                    <button
                                        onClick={() => onSortChange('price_asc')}
                                        className={`${styles.option} ${currentSort === 'price_asc' ? styles.selected : ''}`}
                                    >
                                        PRICE ↑
                                    </button>
                                    <div className={styles.divider} />
                                    <button
                                        onClick={() => onSortChange('price_desc')}
                                        className={`${styles.option} ${currentSort === 'price_desc' ? styles.selected : ''}`}
                                    >
                                        PRICE ↓
                                    </button>
                                </div>
                            </div>

                            <div className={styles.closeAction} onClick={() => setIsOpen(false)}>
                                <span className={styles.closeIcon}>×</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
