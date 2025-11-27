import React from 'react';
import Section from './Section';
import Card from './Card';
import styles from './Testimonials.module.css';

const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', quote: 'They delivered our project on time and beyond expectations!' },
    { name: 'Jane Smith', role: 'Founder, StartupX', quote: 'The best IT partner we have ever worked with. Highly recommended.' },
];

const Testimonials = () => {
    return (
        <Section title="Client Testimonials" dark>
            <div className={styles.grid}>
                {testimonials.map((t, index) => (
                    <Card key={index} className={styles.card}>
                        <p className={styles.quote}>"{t.quote}"</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}></div>
                            <div>
                                <h4 className={styles.name}>{t.name}</h4>
                                <p className={styles.role}>{t.role}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
