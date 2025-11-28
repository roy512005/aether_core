'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import Section from './Section';
import styles from './TechStack.module.css';

const technologies = [
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Node.js", color: "#68a063" },
    { name: "Three.js", color: "#ffffff" },
    { name: "GSAP", color: "#88ce02" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "AWS", color: "#ff9900" },
    { name: "GraphQL", color: "#e10098" },
];

const Constellation = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Calculate positions in a sphere
    const nodes = useMemo(() => {
        const temp = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
        for (let i = 0; i < technologies.length; i++) {
            const y = 1 - (i / (technologies.length - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            temp.push({
                ...technologies[i],
                position: new THREE.Vector3(x * 3.5, y * 3.5, z * 3.5)
            });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central Hub */}
            <mesh>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
            </mesh>
            <Text position={[0, 0, 1]} fontSize={0.3} color="black" fontWeight="bold">
                CORE
            </Text>

            {/* Orbiting Nodes */}
            {nodes.map((node, i) => (
                <group key={i} position={node.position}>
                    <Sphere args={[0.15, 16, 16]}>
                        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={1} />
                    </Sphere>
                    <Text position={[0, 0.4, 0]} fontSize={0.3} color="white">
                        {node.name}
                    </Text>
                    {/* Connection Line */}
                    <Line
                        points={[[0, 0, 0], node.position.clone().multiplyScalar(-1)]} // Connect to center (relative)
                        color={node.color}
                        lineWidth={1}
                        transparent
                        opacity={0.3}
                    />
                </group>
            ))}
        </group>
    );
};

const TechStack = () => {
    return (
        <Section title="Technologies We Work With" subtitle="A connected ecosystem of modern tools." dark>
            <div className={styles.container}>
                <div className={styles.canvasWrapper}>
                    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Constellation />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </div>
                {/* Mobile Fallback */}
                <div className={styles.grid}>
                    {technologies.map((tech, i) => (
                        <div key={i} className={styles.techItem} style={{ borderColor: tech.color }}>
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TechStack;
