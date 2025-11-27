import React from 'react';
import Section from '../../components/Section';
import styles from './page.module.css';

export default function About() {
    return (
        <main>
            <Section title="About Us" subtitle="We are a creative IT solutions company empowering businesses through technology and design." className={styles.hero}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Our Mission</h3>
                        <p>To deliver world-class digital solutions that combine innovation, design, and functionality.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Our Vision</h3>
                        <p>To become the most trusted IT partner for startups and enterprises worldwide.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Our Values</h3>
                        <p>Integrity | Innovation | Quality | Transparency</p>
                    </div>
                </div>
            </Section>
            <Section title="Our Team" dark>
                <div className={styles.teamGrid}>
                    {/* Placeholder for team members */}
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}></div>
                        <h4>Alex Johnson</h4>
                        <p>CEO & Founder</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}></div>
                        <h4>Sarah Williams</h4>
                        <p>Lead Designer</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}></div>
                        <h4>Michael Brown</h4>
                        <p>CTO</p>
                    </div>
                </div>
            </Section>
        </main>
    );
}
