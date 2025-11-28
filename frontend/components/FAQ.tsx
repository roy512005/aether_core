'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import styles from './FAQ.module.css';

const faqs = [
    { question: 'What services do you offer?', answer: 'We specialize in Web Development, Mobile App Development, UI/UX Design, and Custom Software Solutions tailored to your business needs.' },
    { question: 'How much does a project cost?', answer: 'Project costs vary based on complexity and requirements. Contact us for a free quote, and we will provide a detailed estimate.' },
    { question: 'How long does development take?', answer: 'A standard website takes 2-4 weeks, while complex apps may take 8-12 weeks. We provide a timeline during the discovery phase.' },
    { question: 'Do you provide post-launch support?', answer: 'Yes! We offer ongoing maintenance and support packages to ensure your digital product remains secure and up-to-date.' },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className={styles.item} layout onClick={() => setIsOpen(!isOpen)}>
            <motion.div className={styles.question} layout="position">
                <h4>{question}</h4>
                <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.answer}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <Section title="Frequently Asked Questions" subtitle="Got questions? We've got answers.">
            <div className={styles.list}>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
