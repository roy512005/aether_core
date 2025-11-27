import React from 'react';
import AnimatedButton from './animations/AnimatedButton';
import Reveal from './animations/Reveal';
import ParticleBackground from './backgrounds/ParticleBackground';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <ParticleBackground />
            <div className="container">
                <div className={styles.content}>
                    <Reveal delay={0.2}>
                        <h1 className={styles.headline}>
                            We Build Digital Experiences <br />
                            <span className="gradient-text">That Drive Growth.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className={styles.subtext}>
                            From websites to software solutions — we design, develop, and deliver innovation.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className={styles.actions}>
                            <AnimatedButton href="/quote" variant="primary">Get a Free Quote</AnimatedButton>
                            <AnimatedButton href="/portfolio" variant="outline">View Our Work</AnimatedButton>
                        </div>
                    </Reveal>
                </div>
                <div className={styles.visual}>
                    {/* Placeholder for 3D/Abstract Animation */}
                    <div className={styles.circle}></div>
                    <div className={styles.grid}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
