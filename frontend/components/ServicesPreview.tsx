import React from 'react';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import Reveal from './animations/Reveal';
import styles from './ServicesPreview.module.css';

const services = [
    { title: 'Web Development', desc: 'Custom, high-performance websites built with React, Next.js, and modern frameworks. We ensure responsive design, SEO optimization, and lightning-fast load times.' },
    { title: 'App Development', desc: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, scalable apps that engage users and drive growth.' },
    { title: 'UI/UX Design', desc: 'User-centric design that blends aesthetics with functionality. We create immersive digital experiences that delight users and elevate your brand.' },
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
