import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './page.module.css';

const projects = [
    { title: 'SmartPay', category: 'App Development', desc: 'Recharge App. Increased user engagement by 35%.', image: 'linear-gradient(45deg, #00f3ff, #bc13fe)' },
    { title: 'EcoTrack', category: 'Web Development', desc: 'Sustainability tracking platform.', image: 'linear-gradient(45deg, #00ff9d, #00f3ff)' },
    { title: 'NeonDash', category: 'UI/UX Design', desc: 'Futuristic dashboard design system.', image: 'linear-gradient(45deg, #bc13fe, #ff0055)' },
    { title: 'HealthPlus', category: 'Custom Software', desc: 'Hospital management system.', image: 'linear-gradient(45deg, #ff0055, #ff9d00)' },
];

export default function Portfolio() {
    return (
        <main>
            <Section title="Our Portfolio" subtitle="Showcasing our best work and success stories." className={styles.hero}>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Card key={index} className={styles.card}>
                            <div className={styles.image} style={{ background: project.image }}></div>
                            <div className={styles.content}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.desc}>{project.desc}</p>
                                <Button href="#" variant="outline" className={styles.link}>View Case Study</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </main>
    );
}
