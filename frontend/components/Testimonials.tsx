'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import styles from './Testimonials.module.css';

import { API_URL } from '../utils/api';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch(`${API_URL}/api/public/testimonials`)
            .then(res => res.json())
            .then(data => setTestimonials(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <Section title="Client Testimonials" dark>
            <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className={styles.innerCarousel}
                    animate={{ x: [0, -width] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials].map((t: any, index) => (
                        <motion.div className={styles.item} key={index}>
                            <HoloCard className={styles.card}>
                                <p className={styles.quote}>"{t.message}"</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}></div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h4 className={styles.name}>{t.name}</h4>
                                        <p className={styles.role}>{t.role}</p>
                                    </div>
                                </div>
                            </HoloCard>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default Testimonials;
