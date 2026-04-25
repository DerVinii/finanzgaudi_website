"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

export function Coin() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.6;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.1;
    group.current.position.y = Math.sin(t * 0.8) * 0.15;
    if (inner.current) {
      inner.current.rotation.y = -t * 0.3;
    }
  });

  return (
    <group ref={group}>
      {/* Outer gold disc — laid flat (axis along Z), so coin stands upright facing camera */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.6, 1.6, 0.2, 64]} />
        <meshStandardMaterial
          color="#fbb724"
          metalness={1}
          roughness={0.15}
          emissive="#f59e0b"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner ring engraving — front face */}
      <mesh position={[0, 0, 0.101]}>
        <ringGeometry args={[1.25, 1.5, 64]} />
        <meshStandardMaterial
          color="#d97706"
          metalness={0.9}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Inner ring engraving — back face */}
      <mesh position={[0, 0, -0.101]} rotation={[0, Math.PI, 0]}>
        <ringGeometry args={[1.25, 1.5, 64]} />
        <meshStandardMaterial
          color="#d97706"
          metalness={0.9}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Euro sign — front face */}
      <Text
        position={[0, 0, 0.11]}
        fontSize={1.6}
        color="#78350f"
        anchorX="center"
        anchorY="middle"
      >
        €
      </Text>

      {/* JD sign — back face */}
      <Text
        position={[0, 0, -0.11]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.9}
        color="#78350f"
        anchorX="center"
        anchorY="middle"
      >
        JD
      </Text>

      {/* Glow sphere behind */}
      <mesh ref={inner} position={[0, 0, 0]}>
        <sphereGeometry args={[2.4, 32, 32]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.2}
          roughness={0.1}
          ior={1.2}
          chromaticAberration={0.05}
          color="#fbb724"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}
