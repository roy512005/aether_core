'use client';

import React, { useState } from 'react';
import Section from '../../components/Section';
import AnimatedButton from '../../components/animations/AnimatedButton';
import Reveal from '../../components/animations/Reveal';
import styles from './page.module.css';

import { API_URL } from '../../utils/api';

export default function Quote() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Website',
        budgetRange: 'Less than $5k',
        description: '',
        phone: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        const payload = {
            projectType: formData.projectType,
            budgetRange: formData.budgetRange,
            description: formData.description,
            contactInfo: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            }
        };

        try {
            const res = await fetch(`${API_URL}/api/quote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus('Quote Request Sent Successfully!');
                setFormData({
                    projectType: 'Website',
                    budgetRange: 'Less than $5k',
                    description: '',
                    name: '',
                    email: '',
                    phone: ''
                });
            } else {
                setStatus('Failed to send request.');
            }
        } catch (error) {
            setStatus('Error sending request.');
        }
    };

    return (
        <main>
            <Section title="Get a Free Quote" subtitle="Tell us about your project — we’ll get back within 24 hours." className={styles.hero}>
                <div className={styles.formWrapper}>
                    <Reveal variant="scale" width='100%'>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.group}>
                                    <label>Project Type</label>
                                    <select name="projectType" value={formData.projectType} onChange={handleChange} className={styles.select}>
                                        <option value="Website">Website</option>
                                        <option value="App">App</option>
                                        <option value="Software">Custom Software</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.group}>
                                    <label>Budget Range</label>
                                    <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} className={styles.select}>
                                        <option value="Less than $5k">Less than $5k</option>
                                        <option value="$5k - $10k">$5k - $10k</option>
                                        <option value="$10k - $25k">$10k - $25k</option>
                                        <option value="$25k+">$25k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.group}>
                                <label>Project Description</label>
                                <textarea name="description" rows={5} value={formData.description} onChange={handleChange} required placeholder="Describe your project goals, features, and timeline..."></textarea>
                            </div>

                            <h3 className={styles.subheading}>Contact Information</h3>

                            <div className={styles.row}>
                                <div className={styles.group}>
                                    <label>Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className={styles.group}>
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className={styles.group}>
                                <label>Phone</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>

                            <AnimatedButton className={styles.submitBtn}>Request Quote</AnimatedButton>
                            {status && <p className={styles.status}>{status}</p>}
                        </form>
                    </Reveal>
                </div>
            </Section>
        </main>
    );
}
