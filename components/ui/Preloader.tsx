"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = "hidden";

        const duration = 2000; // 2 seconds loading
        const start = performance.now();

        const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Easing for the counter
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOut * 100));

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "";
                }, 500); // Slight delay at 100%
            }
        };

        requestAnimationFrame(updateCounter);

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="preloader"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="counter-container">
                        <motion.p
                            className="counter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {count}%
                        </motion.p>
                    </div>
                    <style jsx>{`
            .preloader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: #050505; /* Matches global Void Black */
              color: #ededed;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .counter-container {
              overflow: hidden;
            }
            .counter {
              font-family: var(--font-heading); /* Using Playfair for elegance */
              font-size: clamp(3rem, 10vw, 10rem);
              font-weight: 400;
              line-height: 1;
              font-feature-settings: "tnum";
              font-variant-numeric: tabular-nums;
            }
          `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
