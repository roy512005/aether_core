import React from 'react';
import Section from './Section';
import Button from './Button';
import styles from './CTA.module.css';

const CTA = () => {
    return (
        <Section className={styles.cta}>
            <div className={styles.content}>
                <h2 className={styles.title}>Ready to build something powerful?</h2>
                <p className={styles.text}>Let’s discuss your project today and bring your vision to life.</p>
                <Button href="/contact" variant="primary">Let's Talk</Button>
            </div>
        </Section>
    );
};

export default CTA;
