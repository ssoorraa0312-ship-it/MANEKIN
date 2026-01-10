"use client";

"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  text: string;
  repeat?: number;
  duration?: number;
  outline?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  repeat = 4,
  duration = 20,
  outline = false,
}) => {
  const content = Array(repeat).fill(text).join(" — ");

  return (
    <div className="marquee-container">
      <motion.div
        className={`marquee-text ${outline ? "outline-text" : ""}`}
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {content} — {content}
      </motion.div>
      <style jsx>{`
        .marquee-container {
          width: 100vw;
          overflow: hidden;
          background: var(--bg-primary);
          padding: var(--spacing-md) 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          white-space: nowrap;
          display: flex;
          align-items: center;
        }
        .marquee-text {
          font-family: var(--font-body);
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          display: inline-block;
          will-change: transform;
        }
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default Marquee;
