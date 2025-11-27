import React from 'react';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import Reveal from './animations/Reveal';
import styles from './Testimonials.module.css';

const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', quote: 'They delivered our project on time and beyond expectations!' },
    { name: 'Jane Smith', role: 'Founder, StartupX', quote: 'The best IT partner we have ever worked with. Highly recommended.' },
];

const Testimonials = () => {
    return (
        <Section title="Client Testimonials" dark>
            <div className={styles.grid}>
                {testimonials.map((t, index) => (
                    <Reveal key={index} delay={index * 0.2} width="100%">
                        <HoloCard className={styles.card}>
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}></div>
                                <div>
                                    <h4 className={styles.name}>{t.name}</h4>
                                    <p className={styles.role}>{t.role}</p>
                                </div>
                            </div>
                        </HoloCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
