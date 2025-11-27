'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

const MovingGrid = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Move grid logic here if using custom shader or texture offset
            // For simple wireframe, we can rotate or move the camera
            // meshRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 2;
        }
    });

    return (
        <Plane args={[100, 100, 50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -10]} ref={meshRef}>
            <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.2} />
        </Plane>
    );
};

const CyberGrid = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2, overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <fog attach="fog" args={['#050505', 5, 20]} />
                <MovingGrid />
            </Canvas>
        </div>
    );
};

export default CyberGrid;
