import React from 'react';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import Reveal from './animations/Reveal';
import styles from './ServicesPreview.module.css';

const services = [
    { title: 'Web Development', desc: 'Responsive, SEO-friendly, high-performance websites.' },
    { title: 'App Development', desc: 'Android & iOS apps designed for performance.' },
    { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that engage users.' },
    { title: 'Custom Software', desc: 'Tailor-made software to simplify operations.' },
    { title: 'E-Commerce', desc: 'Online stores optimized for conversion.' },
    { title: 'Digital Marketing', desc: 'Digital identities that connect and sell.' },
];

const ServicesPreview = () => {
    return (
        <Section title="Our Services" subtitle="Comprehensive digital solutions for your business.">
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <Reveal key={index} delay={index * 0.1} width="100%">
                        <HoloCard className={styles.card} delay={index * 0.1}>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                        </HoloCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default ServicesPreview;
