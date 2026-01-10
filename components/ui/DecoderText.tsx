"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

interface DecoderTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function DecoderText({ text, className, delay = 0 }: DecoderTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let iteration = 0;
        let timer: NodeJS.Timeout;

        const startDecoding = () => {
            timer = setInterval(() => {
                setDisplayText(prev => {
                    const result = text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                        })
                        .join("");

                    if (iteration >= text.length) {
                        clearInterval(timer);
                        setIsComplete(true);
                        // Ensure final text is exact
                        return text;
                    }

                    iteration += 1 / 3; // slows down the reveal per character
                    return result;
                });
            }, 30);
        };

        const timeoutId = setTimeout(startDecoding, delay * 1000);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(timer);
        };
    }, [text, delay]);

    return (
        <motion.span
            className={className}
            style={{ display: "inline-block" }}
        >
            {displayText}
        </motion.span>
    );
}
