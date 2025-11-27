'use client';

import React, { useState } from 'react';
import Section from '../../components/Section';
import AnimatedButton from '../../components/animations/AnimatedButton';
import Reveal from '../../components/animations/Reveal';
import styles from './page.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Message Sent Successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Error sending message.');
        }
    };

    return (
        <main>
            <Section title="Contact Us" subtitle="Let’s Discuss Your Project Today!" className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <Reveal direction="right">
                            <div className={styles.infoItem}>
                                <h3>Office Info</h3>
                                <p>123 Cyber Street, Tech City, TC 90210</p>
                                <p>+1 (555) 123-4567</p>
                                <p>hello@cybertech.com</p>
                            </div>
                        </Reveal>
                        <Reveal direction="right" delay={0.4}>
                            <div className={styles.map}>
                                {/* Google Map Placeholder */}
                                <div className={styles.mapPlaceholder}>Google Map Embed</div>
                            </div>
                        </Reveal>
                    </div>
                    <div className={styles.formWrapper}>
                        <Reveal direction="left">
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.group}>
                                    <label>Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className={styles.group}>
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className={styles.group}>
                                    <label>Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className={styles.group}>
                                    <label>Message</label>
                                    <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <AnimatedButton className={styles.submitBtn}>Send Message</AnimatedButton>
                                {status && <p className={styles.status}>{status}</p>}
                            </form>
                        </Reveal>
                    </div>
                </div>
            </Section>
        </main>
    );
}
