import React from 'react';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import Reveal from './animations/Reveal';
import styles from './WhyChooseUs.module.css';

const reasons = [
    { title: 'Fast Delivery', desc: 'We respect your time and deliver on schedule.' },
    { title: 'Dedicated Support', desc: '24/7 support to ensure your success.' },
    { title: 'Scalable Products', desc: 'Built to grow with your business.' },
    { title: '100% Satisfaction', desc: 'We don’t stop until you are happy.' },
];

const WhyChooseUs = () => {
    return (
        <Section title="Why Choose Us" dark>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <Reveal key={index} delay={index * 0.1} width="100%">
                        <HoloCard className={styles.card}>
                            <div className={styles.icon}>
                                {/* Icon placeholder */}
                                <div className={styles.dot}></div>
                            </div>
                            <h3 className={styles.title}>{reason.title}</h3>
                            <p className={styles.desc}>{reason.desc}</p>
                        </HoloCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default WhyChooseUs;
