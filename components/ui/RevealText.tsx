"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
    wordMode?: boolean; // Split by words instead of lines/block
}

export default function RevealText({ text, className = "", delay = 0, wordMode = false }: RevealTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.8
            },
        },
        hidden: {
            opacity: 0,
            y: 35, // Slide up from below
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (wordMode) {
        const words = text.split(" ");
        return (
            <motion.div
                style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                ref={ref}
                className={className}
            >
                {words.map((word, index) => (
                    <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    // Block mode (simple slide up for whole text block)
    return (
        <div style={{ overflow: "hidden" }} className={className} ref={ref}>
            <motion.div
                variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: delay }}
            >
                {text}
            </motion.div>
        </div>
    );
}
