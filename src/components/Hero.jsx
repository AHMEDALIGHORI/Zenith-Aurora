/**
 * Hero — Uses React Three Fiber + Drei + react-scroll-parallax + Framer Motion
 * R3F/Drei: 3D animated particle sphere in background
 * react-scroll-parallax: depth parallax on content layers
 * Framer Motion: staggered text entrance
 */
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import HeroMetrics from './HeroMetrics';
import './Hero.css';

/* 3D Particle field — React Three Fiber + Drei */
function ParticleField() {
  const ref = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7c5cfc"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowOrb({ position, color, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} />
    </mesh>
  );
}

/* Stagger variants for Framer Motion */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* 3D background — React Three Fiber + Drei */}
      <div className="hero__canvas-wrap">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <ParticleField />
            <GlowOrb position={[-3, 1, -2]} color="#7c5cfc" scale={1.8} />
            <GlowOrb position={[3, -1, -3]} color="#fc5c8c" scale={1.5} />
            <GlowOrb position={[0, 2, -4]} color="#5cf0b8" scale={1.2} />
          </Suspense>
        </Canvas>
      </div>

      {/* Parallax content — react-scroll-parallax */}
      <Parallax speed={-10} className="hero__content-wrap">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.p className="hero__eyebrow" variants={fadeUp}>Zenith Editions</motion.p>
          <motion.h1 className="hero__title" variants={fadeUp}>
            <span className="hero__title-line">The Aurora</span>
            <br />
            <span className="hero__title-line hero__title-line--gradient">Edition</span>
          </motion.h1>
          <motion.p className="hero__subtitle" variants={fadeUp}>
            150+ new features. One platform. Infinite possibilities.<br />
            The most ambitious update in Zenith history.
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#ai-copilot" className="btn btn-primary btn-large">Explore What's New</a>
            <a href="#" className="btn btn-secondary btn-large">Watch the Keynote</a>
          </motion.div>
        </motion.div>
      </Parallax>

      {/* Parallax metrics — slower layer */}
      <Parallax speed={-5} className="hero__metrics-wrap">
        <HeroMetrics />
      </Parallax>

      {/* Scroll hint */}
      <Parallax speed={5}>
        <motion.div className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </motion.div>
      </Parallax>
    </section>
  );
}
