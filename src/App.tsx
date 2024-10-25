import { Canvas } from "@react-three/fiber";
import Threejs from "./Threejs";

function App() {
  console.log('App Component');
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          // toneMapping: ACESFilmicToneMapping,
          // outputColorSpace: LinearSRGBColorSpace
        }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [1, 2, 5]
        }}
      >
        <Threejs />
      </Canvas>
    </>
  )
}

export default App
