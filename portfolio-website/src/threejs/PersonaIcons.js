import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';

export const DataIcon = () => {
  const ref = useRef();
  
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref}>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8D8DDA" />
      </Box>
      <Sphere args={[0.3, 16, 16]} position={[0.7, 0.7, 0]}>
        <meshStandardMaterial color="#C2C2F0" />
      </Sphere>
    </group>
  );
};

export const MusicIcon = () => {
  const ref = useRef();
  
  useFrame((state) => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <group ref={ref}>
      <Torus args={[0.7, 0.2, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#8D8DDA" />
      </Torus>
      <Box args={[0.2, 0.8, 0.2]} position={[0.4, -0.4, 0]}>
        <meshStandardMaterial color="#C2C2F0" />
      </Box>
    </group>
  );
};

export const DesignIcon = () => {
  const ref = useRef();
  
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
  });

  return (
    <group ref={ref}>
      <Box args={[1.2, 0.1, 1.2]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#8D8DDA" />
      </Box>
      <Box args={[0.8, 0.1, 0.8]} position={[0, 0.2, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <meshStandardMaterial color="#C2C2F0" />
      </Box>
    </group>
  );
}; 