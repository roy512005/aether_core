import React from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';
import styles from './FeaturedProjects.module.css';

const projects = [
    { title: 'SmartPay', category: 'App Development', image: 'linear-gradient(45deg, #00f3ff, #bc13fe)' },
    { title: 'EcoTrack', category: 'Web Development', image: 'linear-gradient(45deg, #00ff9d, #00f3ff)' },
    { title: 'NeonDash', category: 'UI/UX Design', image: 'linear-gradient(45deg, #bc13fe, #ff0055)' },
];

const FeaturedProjects = () => {
    return (
        <Section title="Featured Projects" subtitle="A glimpse of our best work.">
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <Card key={index} className={styles.card}>
                        <div className={styles.image} style={{ background: project.image }}></div>
                        <div className={styles.content}>
                            <span className={styles.category}>{project.category}</span>
                            <h3 className={styles.title}>{project.title}</h3>
                            <Button href="/portfolio" variant="outline" className={styles.link}>View Project</Button>
                        </div>
                    </Card>
                ))}
            </div>
            <div className={styles.centerAction}>
                <Button href="/portfolio" variant="primary">View All Projects</Button>
            </div>
        </Section>
    );
};

export default FeaturedProjects;
