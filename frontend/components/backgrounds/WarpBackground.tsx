'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = () => {
    const mesh = useRef<THREE.Points>(null);
    const count = 2000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.z += 0.001;
            // Warp effect: move stars towards camera
            const positions = mesh.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count; i++) {
                positions[i * 3 + 2] += 0.05; // Move Z
                if (positions[i * 3 + 2] > 5) {
                    positions[i * 3 + 2] = -5; // Reset
                }
            }
            mesh.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#00f3ff"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
};

const WarpBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
            </Canvas>
        </div>
    );
};

export default WarpBackground;
