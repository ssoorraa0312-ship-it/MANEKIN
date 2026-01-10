"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="custom-cursor"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                scale: isHovering ? 2.5 : 1,
            }}
        >
            <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          background-color: #ededed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        @media (max-width: 768px) {
            .custom-cursor {
                display: none;
            }
        }
      `}</style>
        </motion.div>
    );
}
