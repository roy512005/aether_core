'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Section from './Section';
import styles from './WorkingProcess.module.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { id: '01', title: 'Discovery', desc: 'We analyze your requirements and understand your business goals.' },
    { id: '02', title: 'Design', desc: 'We create intuitive and futuristic designs tailored to your brand.' },
    { id: '03', title: 'Development', desc: 'We build robust, scalable solutions using the latest tech stack.' },
    { id: '04', title: 'Deployment', desc: 'We launch your product and provide ongoing support.' },
];

const WorkingProcess = () => {
    const container = useRef(null);
    const lineRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.process-card');

        // Animate Line
        gsap.fromTo(lineRef.current,
            { height: '0%' },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                }
            }
        );

        // Animate Cards
        cards.forEach((card: any, i) => {
            gsap.from(card, {
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 95%', // Trigger almost immediately when entering screen
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                }
            });
        });

    }, { scope: container });

    return (
        <Section title="Our Working Process" subtitle="How we turn ideas into reality." className={styles.processSection}>
            <div className={styles.timeline} ref={container}>
                <div className={styles.lineBase}></div>
                <div className={styles.lineFill} ref={lineRef}></div>

                {steps.map((step, index) => (
                    <div key={index} className={`${styles.step} ${index % 2 === 0 ? styles.left : styles.right} process-card`}>
                        <div className={styles.content}>
                            <span className={styles.number}>{step.id}</span>
                            <h3 className={styles.title}>{step.title}</h3>
                            <p className={styles.desc}>{step.desc}</p>
                        </div>
                        <div className={styles.dot}></div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default WorkingProcess;