"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    layout?: boolean;
    transition?: any; // Allow custom transition
}

export default function FadeIn({ children, delay = 0, className = '', direction = 'up', layout = false, transition }: FadeInProps) {
    const directionOffset = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    };

    const defaultTransition = { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionOffset[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={transition || defaultTransition}
            className={className}
            layout={layout}
        >
            {children}
        </motion.div>
    );
}
