import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const particlesCount = 1000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b35"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function RotatingIcosahedron() {
  const ref = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
    
    // Mouse interaction
    ref.current.rotation.y += (mousePos.current.x - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (mousePos.current.y - ref.current.rotation.x) * 0.05;
  });

  // Listen for mouse movement
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (event) => {
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  }

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[4, 0]} />
      <meshBasicMaterial color="#00d9ff" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <RotatingIcosahedron />
        <ParticleField />
      </Canvas>
    </div>
  );
}
