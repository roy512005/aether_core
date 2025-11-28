'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Button.module.css'; // Reusing base styles

interface AnimatedButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    href?: string;
    className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    href,
    className = ''
}) => {
    const Component = href ? motion.a : motion.button;
    const props = href ? { href } : { onClick };

    const buttonRef = React.useRef<any>(null);

    // Magnetic Effect
    React.useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = button.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left - rect.width / 2;
            const y = mouseEvent.clientY - rect.top - rect.height / 2;

            // Move button slightly towards cursor
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        };

        const handleMouseLeave = () => {
            button.style.transform = 'translate(0px, 0px)';
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        // @ts-ignore
        <Component
            ref={buttonRef}
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
            whileHover={{
                scale: 1.05,
                boxShadow: variant === 'primary'
                    ? "0 0 25px rgba(0, 243, 255, 0.8)"
                    : "0 0 25px rgba(188, 19, 254, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
            {/* Glow Trail Effect */}
            <motion.div
                className="glow-effect"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, transparent 5%, rgba(255,255,255,0.1) 50%, transparent 95%)',
                    zIndex: 1,
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
            />
        </Component>
    );
};

export default AnimatedButton;
