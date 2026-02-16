import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"

const RotatingCylinder = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" /> 
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={0.5} color={0x9CDBA6} />
      <ambientLight intensity={0.3} />
      <color attach="background" args={["#F0F0F0"]} />
      <RotatingCylinder />
    </Canvas>
  )
}

export default App;
