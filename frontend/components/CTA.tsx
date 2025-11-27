import React from 'react';
import Section from './Section';
import AnimatedButton from './animations/AnimatedButton';
import Reveal from './animations/Reveal';
import styles from './CTA.module.css';

const CTA = () => {
    return (
        <Section className={styles.cta}>
            <div className={styles.content}>
                <Reveal variant="scale">
                    <h2 className={styles.title}>Ready to build something powerful?</h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className={styles.text}>Let’s discuss your project today and bring your vision to life.</p>
                </Reveal>
                <Reveal delay={0.4}>
                    <AnimatedButton href="/contact" variant="primary">Let's Talk</AnimatedButton>
                </Reveal>
            </div>
        </Section>
    );
};

export default CTA;
