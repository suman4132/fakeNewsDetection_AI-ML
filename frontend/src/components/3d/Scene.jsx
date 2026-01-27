import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#4f46e5" // Indigo-like color
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Scene = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <ParticleField />
                </Float>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Scene;
