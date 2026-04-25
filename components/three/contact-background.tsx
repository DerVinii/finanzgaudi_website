"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Torus({ position, speed, color }: { position: [number, number, number]; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.4;
    ref.current.rotation.y = t * speed * 0.3;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1, 0.35, 32, 100]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function FloatingGrid() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#fbb724"
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ContactBackground() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#fff4d6" />
      <pointLight position={[-4, 0, 2]} intensity={0.8} color="#fbb724" />

      <Suspense fallback={null}>
        <Torus position={[-3, 1.5, -2]} speed={0.5} color="#fbb724" />
        <Torus position={[3.5, -1, -3]} speed={0.3} color="#d97706" />
        <Torus position={[0, -2, -4]} speed={0.4} color="#f59e0b" />
        <FloatingGrid />
      </Suspense>
    </Canvas>
  );
}
