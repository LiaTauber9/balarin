import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../page.module.scss";

const images = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
];

export default function ImageTrack() {
    const trackRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const mouseDownAt = useRef(0);
    const prevPercentage = useRef(0);

    const x = useMotionValue(0); // for motion transform
    const xPercentage = useTransform(x, [0, window.innerWidth], [0, -100]);

    const onMouseDown = (e: { clientX: number; }) => {
        setIsDragging(true);
        mouseDownAt.current = e.clientX;
    };

    const onMouseMove = (e: { clientX: number; }) => {
        if (!isDragging) return;

        const mouseDelta = mouseDownAt.current - e.clientX;
        const maxDelta = window.innerWidth / 2;
        let percentage = (mouseDelta / maxDelta) * -100;

        const newPercentage = Math.min(Math.max(prevPercentage.current + percentage, -100), 0);
        prevPercentage.current = newPercentage;

        x.set(newPercentage);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="track-container"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <motion.div
                className="image-track"
                ref={trackRef}
                style={{
                    x: xPercentage,
                }}
            >
                {images.map((src, index) => (
                    <motion.div className="track-image" key={index}>
                        <img src={src} alt={`image-${index}`} className="image" />
                    </motion.div>
                ))}
            </motion.div>
        </div>

    );
}
