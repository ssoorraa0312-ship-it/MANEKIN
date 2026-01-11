import Image from 'next/image';

import FadeIn from '@/components/ui/FadeIn';
import RevealText from '@/components/ui/RevealText';
import DecoderText from '@/components/ui/DecoderText';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src="https://images.unsplash.com/photo-1549557766-3d7195454641?q=80&w=2546&auto=format&fit=crop"
                    alt="Aether Campaign"
                    fill
                    priority
                    className={styles.image}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <FadeIn delay={0.2}>
                    <div className={styles.subtitle}>
                        <DecoderText text="WE DON'T SELL TAGS." delay={0.5} />
                    </div>
                </FadeIn>
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <RevealText text="MANEKIN" className={styles.title} wordMode delay={0.4} />
                </div>

            </div>
        </section>
    );
}
