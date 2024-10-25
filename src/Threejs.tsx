import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";

extend({ OrbitControls })

function Threejs() {

  const number = Math.random() * (50 - 10) + 10;
  const cubeRef = useRef<Mesh>(null!)
  // const {camera, gl} = useThree()
  console.log(number);
  console.log('Threejs Component');
  useFrame((_, delta) => {
    // console.log(state.clock.elapsedTime);
    // state.camera.position.x += delta
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle)
    // state.camera.position.z = Math.cos(angle)
    // state.camera.lookAt(0, 0, 0)
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta
    }
  })

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <directionalLight intensity={2} position={[1, 2, 3]} />
      <ambientLight intensity={1} />
      <group>
        <mesh ref={cubeRef} rotation-y={ Math.PI / 5 } position-x={ 2 }>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="purple" wireframe={false} />
        </mesh>
        <mesh rotation-y={ Math.PI / 5 } position-x={ -2 }>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="orange" wireframe={false} />
        </mesh>
        <mesh rotation-y={ Math.PI / 5 } position-y={ -1 }>
          <boxGeometry args={[6.5, 0.2, 6.5]} />
          <meshStandardMaterial color="yellow" wireframe={false} />
        </mesh>
      </group>
      <CustomObject />
    </>
  )
}

export default Threejs