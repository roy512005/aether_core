import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Cyber<span className="gradient-text">Tech</span>
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
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
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
