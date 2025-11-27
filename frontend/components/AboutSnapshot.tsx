import React from 'react';
import Section from './Section';
import Button from './Button';
import styles from './AboutSnapshot.module.css';

const AboutSnapshot = () => {
    return (
        <Section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Who We Are</h2>
                    <p className={styles.text}>
                        We are a team of creative developers and designers turning ideas into products.
                        We empower businesses through technology and design, delivering world-class digital solutions.
                    </p>
                    <Button href="/about" variant="secondary">Learn More About Us</Button>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        {/* Placeholder for Team/Office Image */}
                        <img src="../public/Who.avif" alt="" className='h-full w-full object-cover' />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutSnapshot;
