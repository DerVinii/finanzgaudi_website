"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Coin } from "./coin";
import { Particles } from "./particles";

export function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#fff4d6"
        castShadow
      />
      <directionalLight
        position={[-5, -3, -5]}
        intensity={0.6}
        color="#fbb724"
      />
      <pointLight position={[0, 0, 4]} intensity={0.5} color="#fbb724" />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <Coin />
        </Float>
        <Particles count={500} />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
