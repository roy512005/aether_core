import React from 'react';
import Section from '../../components/Section';
import Reveal from '../../components/animations/Reveal';
import HoloCard from '../../components/animations/HoloCard';
import styles from './page.module.css';
import WorkingProcess from '@/components/WorkingProcess';

export default function About() {
    return (
        <main>
            <Section title="About Us" subtitle="We are a creative IT solutions company empowering businesses through technology and design." className={styles.hero}>
                <div className={styles.grid}>
                    <Reveal delay={0.2} className={styles.cardparent} width="100%">
                        <HoloCard className={styles.card}>
                            <h3>Our Mission</h3>
                            <p>To deliver world-class digital solutions that combine innovation, design, and functionality.</p>
                        </HoloCard>
                    </Reveal>
                    <Reveal delay={0.4} className={styles.cardparent} width="100%">
                        <HoloCard className={styles.card}>
                            <h3>Our Vision</h3>
                            <p>To become the most trusted IT partner for startups and enterprises worldwide.</p>
                        </HoloCard>
                    </Reveal>
                    <Reveal delay={0.6} className={styles.cardparent} width="100%">
                        <HoloCard className={styles.card}>
                            <h3>Our Values</h3>
                            <p>Integrity | Innovation | Quality | Transparency</p>
                        </HoloCard>
                    </Reveal>
                </div>
            </Section>
            <WorkingProcess />
        </main>
    );
}
