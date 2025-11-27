import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`${styles.card} ${hoverEffect ? styles.hover : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
