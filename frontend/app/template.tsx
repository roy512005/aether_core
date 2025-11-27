'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
            {/* Holo Wipe Effect */}
            <motion.div
                className="holo-wipe"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.1), transparent)',
                    zIndex: 9999,
                    pointerEvents: 'none',
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            />
        </motion.div>
    );
}
