"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import RevealText from '../ui/RevealText';
import styles from './BentoGrid.module.css';

interface BentoItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    href: string;
    size: 'large' | 'medium' | 'small' | 'tall' | 'wide';
}

const items: BentoItem[] = [
    {
        id: '1',
        title: 'ARCHIVE 01',
        subtitle: 'THE BEGINNING',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=1974&auto=format&fit=crop',
        href: '/collections/archive-01',
        size: 'large',
    },
    {
        id: '2',
        title: 'READY TO WEAR',
        subtitle: 'FALL 2026',
        image: 'https://images.unsplash.com/photo-1549558547-7505299cc497?q=80&w=2546&auto=format&fit=crop',
        href: '/shop/rtw',
        size: 'tall',
    },
    {
        id: '3',
        title: 'FOOTWEAR',
        subtitle: 'WALK ON AIR',
        image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2021&auto=format&fit=crop',
        href: '/shop/footwear',
        size: 'medium',
    },
    {
        id: '4',
        title: 'CAMPAIGN',
        subtitle: 'BEHIND THE SCENES',
        image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=2565&auto=format&fit=crop',
        href: '/journal/campaign',
        size: 'medium',
    },
    {
        id: '5',
        title: 'ACCESSORIES',
        subtitle: 'DETAILS MATTER',
        image: 'https://images.unsplash.com/photo-1616423664042-995f745d3e04?q=80&w=2574&auto=format&fit=crop',
        href: '/shop/accessories',
        size: 'wide',
    },
];

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Creating parallax effect: moving image up/down slightly as we scroll
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div ref={ref} className={styles.imageContainer}>
            <motion.div style={{ y, height: "130%", width: "100%", position: "relative" }}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={styles.bgImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </motion.div>
            <div className={styles.overlay} />
        </div>
    );
}

export default function BentoGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <RevealText text="EXPLORE AETHER" className={styles.sectionTitle} wordMode />
            </div>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <FadeIn key={item.id} className={`${styles.card} ${styles[item.size]}`} delay={index * 0.1}>
                        <Link href={item.href} className={styles.link}>
                            <div className={styles.imageWrapper}>
                                <ParallaxImage src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardSubtitle}>{item.subtitle}</div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
