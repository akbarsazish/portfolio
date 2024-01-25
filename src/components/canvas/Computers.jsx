import {Suspense, useState, useEffect} from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Canvasloader from "../Loader"

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
         angle={0.12} penumbra={1} intensity={1}
         castShadow shadowmapSize={1024} />
      <primitive object={computer.scene}
         scale={isMobile ? 0.4 : 0.70}
         position={isMobile ? [0, -2.5, -0.9] : [0, -3.5, -1]}
         rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaquerChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaquerChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaquerChange);
    }
  },[])
  
  return (
    <Canvas
      frameloop="demand" shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Canvasloader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;