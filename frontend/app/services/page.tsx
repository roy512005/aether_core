import React from 'react';
import Section from '../../components/Section';
import HoloCard from '../../components/animations/HoloCard';
import Reveal from '../../components/animations/Reveal';
import styles from './page.module.css';

const servicesList = [
    { title: 'Web Development', desc: 'We build responsive, SEO-friendly, high-performance websites that convert visitors into customers.' },
    { title: 'App Development', desc: 'From Android to iOS — our apps are designed for performance, security, and scalability.' },
    { title: 'Custom Software', desc: 'We design tailor-made software to simplify your business operations.' },
    { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that keep your users engaged.' },
    { title: 'E-Commerce', desc: 'Your online store, optimized for conversion, powered by modern tech.' },
    { title: 'Digital Marketing', desc: 'We create digital identities that connect and sell.' },
];

export default function Services() {
    return (
        <main>
            <Section title="Our Services" subtitle="Comprehensive digital solutions tailored to your needs." className={styles.hero}>
                <div className={styles.grid}>
                    {servicesList.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <HoloCard className={styles.card}>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.desc}>{service.desc}</p>
                            </HoloCard>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </main>
    );
}
