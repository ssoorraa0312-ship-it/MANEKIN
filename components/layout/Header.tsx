"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from '@/lib/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { openCart, items } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Link href="/" className={styles.logo}>
                Aether
            </Link>

            <nav className={styles.nav}>
                <Link href="/shop" className={styles.navLink}>Shop</Link>
                <Link href="/collections" className={styles.navLink}>Collections</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
            </nav>

            <div className={styles.actions}>
                <button className={styles.iconBtn} aria-label="Search">
                    <Search size={20} strokeWidth={1.5} />
                </button>
                <button className={styles.iconBtn} aria-label="Cart" onClick={openCart}>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    {items.length > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: 'var(--accent)',
                            borderRadius: '50%',
                            width: '8px',
                            height: '8px'
                        }} />
                    )}
                </button>
                <button className={`${styles.iconBtn} ${styles.mobileOnly}`} aria-label="Menu" style={{ display: 'none' }}>
                    {/* Hidden on desktop usually, but using display none inline for now as handled by media query in CSS realistically */}
                    <Menu size={20} strokeWidth={1.5} />
                </button>
            </div>
        </header>
    );
}
