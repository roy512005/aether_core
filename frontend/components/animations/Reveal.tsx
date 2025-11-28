'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    variant?: 'slide' | 'fade' | 'scale' | 'pop';
    className?: string;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    width = 'fit-content',
    delay = 0,
    direction = 'up',
    variant = 'slide',
    className = ''
}) => {
    const ref = useRef(null);
    // Expand viewport bottom by 200px so animation triggers BEFORE element enters view
    const isInView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" });

    const getVariants = () => {
        const hidden: any = { opacity: 0 };
        const visible: any = { opacity: 1 };

        if (variant === 'slide') {
            if (direction === 'up') hidden.y = 75;
            if (direction === 'down') hidden.y = -75;
            if (direction === 'left') hidden.x = 75;
            if (direction === 'right') hidden.x = -75;

            visible.y = 0;
            visible.x = 0;
        } else if (variant === 'scale') {
            hidden.scale = 0.8;
            visible.scale = 1;
        } else if (variant === 'pop') {
            hidden.scale = 0;
            visible.scale = 1;
            visible.transition = { type: "spring", stiffness: 260, damping: 20 };
        }

        return { hidden, visible };
    };

    const variants = getVariants();

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
