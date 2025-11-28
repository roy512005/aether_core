'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Card.module.css'; // Reusing base styles

interface HoloCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const HoloCard: React.FC<HoloCardProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={`${styles.card} ${className}`}
            style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(0, 243, 255, 0.2)",
                borderColor: "rgba(0, 243, 255, 0.5)"
            }}
        >
            {children}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
                    zIndex: 10
                }}
                animate={{
                    x: ['-100%', '100%']
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                    delay: Math.random() * 2 // Randomize start time for organic feel
                }}
            />
        </motion.div>
    );
};

export default HoloCard;
