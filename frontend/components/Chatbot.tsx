'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Chatbot.module.css';

import { API_URL } from '../utils/api';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hi! I'm CyberBot. How can I help you today?", isUser: false }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault(); // Keep preventDefault for form submission
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessages(prev => [...prev, { text: data.response, isUser: false }]);
            } else {
                setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to the mainframe.", isUser: false }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { text: "Network error. Please try again later.", isUser: false }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <motion.button
                className={styles.toggleBtn}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                💬
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    >
                        <div className={styles.header}>
                            <h3>Cyber Assistant</h3>
                            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
                        </div>
                        <div className={styles.messages}>
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`${styles.message} ${msg.isUser ? styles.user : styles.bot}`}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                            {isLoading && (
                                <div className={`${styles.message} ${styles.bot}`}>
                                    <span className={styles.typing}>...</span>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSend} className={styles.inputArea}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className={styles.input}
                            />
                            <button type="submit" className={styles.sendBtn}>Send</button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
