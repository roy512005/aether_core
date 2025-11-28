'use client';

import React, { useEffect, useState } from 'react';
import Section from '../../components/Section';
import HoloCard from '../../components/animations/HoloCard';
import Reveal from '../../components/animations/Reveal';
import styles from './page.module.css';
import { API_URL } from '../../utils/api';

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/public/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <main>
            <Section title="Our Portfolio" subtitle="Explore our complete collection of digital masterpieces." className={styles.hero}>
                <div className={styles.grid}>
                    {projects.map((project: any, index: number) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <HoloCard className={styles.card}>
                                <div className={styles.image} style={{ background: project.image }}></div>
                                <div className={styles.content}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                </div>
                            </HoloCard>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </main>
    );
}
