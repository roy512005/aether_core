import React from 'react';
import Button from './Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        We Build Digital Experiences <br />
                        <span className="gradient-text">That Drive Growth.</span>
                    </h1>
                    <p className={styles.subtext}>
                        From websites to software solutions — we design, develop, and deliver innovation.
                    </p>
                    <div className={styles.actions}>
                        <Button href="/quote" variant="primary">Get a Free Quote</Button>
                        <Button href="/portfolio" variant="outline">View Our Work</Button>
                    </div>
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
