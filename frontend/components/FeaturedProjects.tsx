'use client';

import React from 'react';
import Section from './Section';
import HoloCard from './animations/HoloCard';
import AnimatedButton from './animations/AnimatedButton';
import Reveal from './animations/Reveal';
import styles from './FeaturedProjects.module.css';

import { API_URL } from '../utils/api';

const FeaturedProjects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        fetch(`${API_URL}/api/public/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Section title="Featured Projects" subtitle="A glimpse of our best work.">
            <div className={styles.grid}>
                {projects.slice(0, 3).map((project: any, index: number) => (
                    <Reveal key={index} delay={index * 0.2} width="100%">
                        <HoloCard className={styles.card}>
                            <div className={styles.image} style={{ background: project.image }}></div>
                            <div className={styles.content}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.title}>{project.title}</h3>
                                <AnimatedButton href="/portfolio" variant="outline" className={styles.link}>View Project</AnimatedButton>
                            </div>
                        </HoloCard>
                    </Reveal>
                ))}
            </div>
            <div className={styles.centerAction}>
                <Reveal delay={0.6}>
                    <AnimatedButton href="/portfolio" variant="primary">View All Projects</AnimatedButton>
                </Reveal>
            </div>
        </Section>
    );
};

export default FeaturedProjects;
