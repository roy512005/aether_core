import React from 'react';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import Reveal from './animations/Reveal';
import styles from './WhyChooseUs.module.css';

const reasons = [
    { title: 'Innovation First', desc: 'We stay ahead of the curve, utilizing cutting-edge technologies like AI, WebGL, and Blockchain to give you a competitive edge.' },
    { title: 'Expert Team', desc: 'Our team consists of industry veterans, creative designers, and skilled engineers dedicated to delivering excellence in every project.' },
    { title: 'Client-Centric', desc: 'Your success is our priority. We work collaboratively with you, ensuring transparent communication and tailored solutions.' },
    { title: '100% Satisfaction', desc: 'We don’t stop until you are happy.' },
];

const WhyChooseUs = () => {
    return (
        <Section title="Why Choose Us" dark>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <Reveal key={index} delay={index * 0.1} className={styles.cardparent} width="100%">
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
