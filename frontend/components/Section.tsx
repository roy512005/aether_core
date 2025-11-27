import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    id,
    className = '',
    title,
    subtitle,
    dark = false
}) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${dark ? styles.dark : ''} ${className}`}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className={styles.header}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
