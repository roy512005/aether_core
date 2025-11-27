import React from 'react';
import Link from 'next/link';
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Cyber<span className="gradient-text">Tech</span>
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/services" className={styles.link}>Services</Link></li>
                    <li><Link href="/about" className={styles.link}>About</Link></li>
                    <li><Link href="/portfolio" className={styles.link}>Portfolio</Link></li>
                    <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                </ul>
                <div className={styles.action}>
                    <Button href="/quote" variant="primary" className={styles.quoteBtn}>Get Quote</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
