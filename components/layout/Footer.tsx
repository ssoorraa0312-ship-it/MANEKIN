import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>COLLECTIONS</h4>
                        <Link href="/shop/new" className={styles.link}>LATEST DROP</Link>
                        <Link href="/shop/archive" className={styles.link}>ARCHIVE</Link>
                        <Link href="/shop/collabs" className={styles.link}>COLLABORATIONS</Link>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>INFORMATION</h4>
                        <Link href="/about" className={styles.link}>MANIFESTO</Link>
                        <Link href="/stores" className={styles.link}>STOCKISTS</Link>
                        <Link href="/careers" className={styles.link}>CAREERS</Link>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>LEGAL</h4>
                        <Link href="/legal/terms" className={styles.link}>TERMS OF USE</Link>
                        <Link href="/legal/privacy" className={styles.link}>PRIVACY POLICY</Link>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>CONNECT</h4>
                        <Link href="https://instagram.com" className={styles.link}>INSTAGRAM</Link>
                        <Link href="https://twitter.com" className={styles.link}>TWITTER</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                {/* Logo removed as requested */}
                <div className={styles.copyright}>
                    <span>&copy; 2026</span>
                    <span>EST. TOKYO</span>
                </div>
            </div>
        </footer>
    );
}
