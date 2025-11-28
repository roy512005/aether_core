'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CyberCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover effects
        const handleHover = () => {
            gsap.to(cursor, { scale: 0.5, backgroundColor: '#bc13fe', duration: 0.2 });
            gsap.to(follower, { scale: 2, borderColor: '#bc13fe', borderWidth: 1, duration: 0.2 });
        };

        const handleUnhover = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: '#00f3ff', duration: 0.2 });
            gsap.to(follower, { scale: 1, borderColor: '#00f3ff', borderWidth: 2, duration: 0.2 });
        };

        const links = document.querySelectorAll('a, button, .clickable');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleHover);
            link.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleHover);
                link.removeEventListener('mouseleave', handleUnhover);
            });
        };
    });

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#00f3ff',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    mixBlendMode: 'difference'
                }}
            />
            <div
                ref={followerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '2px solid #00f3ff',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transform: 'translate(-50%, -50%)',
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

export default CyberCursor;
