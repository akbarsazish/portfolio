import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Decal, Float,Preload, useTexture } from "@react-three/drei" 
import CanvasLoader from "../Loader"


const Ball = (props) => {
  const [Decal] = useTexture([props.imgUrl])
  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <DirectionalLight position={[0, 0 , 0.05]} />
      <mesh  castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas