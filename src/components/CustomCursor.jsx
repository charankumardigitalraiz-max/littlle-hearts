import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Heart } from 'lucide-react';

const CustomCursor = () => {
    // Use large negative initial values to keep it offscreen until movement
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 50, stiffness: 1000, restDelta: 0.001 };
    const edgeX = useSpring(mouseX, springConfig);
    const edgeY = useSpring(mouseY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: edgeX,
                y: edgeY,
                pointerEvents: 'none',
                zIndex: 999999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <motion.div
                style={{
                    x: "-50%",
                    y: "-50%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.8 : 1,
                        rotate: isHovering ? [0, 15, -15, 0] : 0,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                    }}
                    style={{
                        color: 'var(--neon-pink)',
                        filter: 'drop-shadow(0 0 12px rgba(255, 0, 127, 0.6))',
                    }}
                >
                    <Heart
                        size={isHovering ? 40 : 30}
                        fill="currentColor"
                        stroke="none"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CustomCursor;
