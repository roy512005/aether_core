import React from 'react';
import Section from './Section';
import AnimatedButton from './animations/AnimatedButton';
import Reveal from './animations/Reveal';
import styles from './AboutSnapshot.module.css';

const AboutSnapshot = () => {
    return (
        <Section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Reveal direction="right">
                        <h2 className={styles.title}>Who We Are</h2>
                    </Reveal>
                    <Reveal direction="right" delay={0.4}>
                        <p className={styles.text}>
                            We are a team of creative developers and designers turning ideas into products.
                            We empower businesses through technology and design, delivering world-class digital solutions.
                        </p>
                    </Reveal>
                    <Reveal direction="right" delay={0.6}>
                        <AnimatedButton href="/about" variant="secondary">Learn More About Us</AnimatedButton>
                    </Reveal>
                </div>
                <div className={styles.imageWrapper}>
                    <Reveal direction="left" variant="scale">
                        <div className={styles.imagePlaceholder}>
                            {/* Placeholder for Team/Office Image */}
                            <img src="/Who.avif" alt="Team" className='h-full w-full object-cover' />
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};

export default AboutSnapshot;
