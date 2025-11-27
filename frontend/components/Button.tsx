import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    href?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    href,
    className = ''
}) => {
    const Component = href ? 'a' : 'button';
    const props = href ? { href } : { onClick };

    return (
        // @ts-ignore
        <Component
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
