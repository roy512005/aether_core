'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

import { API_URL } from '../utils/api';

const Footer = () => {
    const [info, setInfo] = React.useState<any>(null);

    React.useEffect(() => {
        fetch(`${API_URL}/api/public/info`)
            .then(res => res.json())
            .then(data => setInfo(data))
            .catch(err => console.error('Failed to fetch info', err));
    }, []);

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <img src="/logo.png" alt="CyberTech" style={{ height: '60px' }} />
                        </Link>
                        <p className={styles.desc}>
                            Empowering businesses through technology and design.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <h4 className={styles.heading}>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <h4 className={styles.heading}>Connect</h4>
                        <ul>
                            {info?.linkedin && <li><a href={info.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
                            {info?.twitter && <li><a href={info.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>}
                            {info?.instagram && <li><a href={info.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>}
                        </ul>
                    </div>
                    <div className={styles.newsletter}>
                        <h4 className={styles.heading}>Newsletter</h4>
                        <form className={styles.form}>
                            <input type="email" placeholder="Enter your email" className={styles.input} />
                            <button type="submit" className={styles.btn}>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; 2025 CyberTech Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
