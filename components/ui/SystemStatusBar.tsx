"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SystemStatusBar() {
    const [time, setTime] = useState("");
    const [mem, setMem] = useState(0);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(now.toISOString().split("T")[1].split(".")[0]);
            setMem(Math.floor(Math.random() * 20) + 40); // Fake memory flux
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 9999,
                fontFamily: "monospace",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.5)",
                pointerEvents: "none",
                mixBlendMode: "difference",
            }}
        >
            <div style={{ display: "flex", gap: "24px" }}>
                <span>SYS: NORMAL</span>
                <span>MEM: {mem}%</span>
                <span>LAT: 35.6895° N</span>
            </div>
            <div>
                <span>UTC: {time}</span>
                <span style={{ marginLeft: "24px" }}>AETHER_OS v2.0</span>
            </div>
        </motion.div>
    );
}
