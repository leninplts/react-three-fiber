import { ContactShadows, Environment, Html, OrbitControls, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper, Mesh } from "three";

function Threejs() {

  const directionalLightRef = useRef<DirectionalLight>(null!)
  useHelper(directionalLightRef, DirectionalLightHelper, 1)

  const number = Math.random() * (50 - 10) + 10;
  const cubeRef = useRef<Mesh>(null!)
  console.log(number);
  console.log('Threejs Component');
  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <>
      <Environment
        // background={ true }
        // files={ 'hdri/brown.hdr' }
        preset="lobby"
        ground={{
          height: 10,
          radius: 38,
          scale: 50
        }}
      />
      {/* <BakeShadows />
      <SoftShadows
        size={ 10 }
        samples={ 10 }
        focus={ 8 }
      /> */}
      <Perf position="top-left" />
      <OrbitControls enableDamping makeDefault />
      {/* <AccumulativeShadows
        position={[ 0, -0.99, 0 ]}
        color="#316d39"
        scale={ 10 }
        opacity={ 0.8 }
        frames={ 40 }
        // temporal
      >
        <RandomizedLight
          amount={ 8 }
          radius={ 1 }
          ambient={ 0.5 }
          intensity={ 6 }
          position={[ 1, 2, 3 ]}
          bias={0.8}
        />
      </AccumulativeShadows> */}
      <ContactShadows
        position={[ 0, -0.99, 0 ]}
        scale={ 10 }
        resolution={ 128 }
        opacity={ 0.5 }
        far={ 5 }
        color="#316d39"
        blur={ 2.2 }
        // frames={ 1 }
      />
      {/* <directionalLight
        shadow-mapSize={ [ 256, 256 ] }
        castShadow
        ref={ directionalLightRef }
        intensity={2}
        position={[1, 2, 3]}
      /> */}
      {/* <ambientLight intensity={1} /> */}
      {/* <Sky /> */}
      <group>
        {/* <TransformControls position-x={ 2 }> */}
          <mesh castShadow position-x={ 2 } ref={ cubeRef } rotation-y={ Math.PI / 5 } >
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="purple" wireframe={false} />
            <Html
              position={[ 1, 1, 0.5  ]}
              wrapperClass="label"
              center
              distanceFactor={ 8 }
              occlude={[ cubeRef ]}
            >
              It's a Cube 👍
            </Html>
          </mesh>
        {/* </TransformControls> */}
        <mesh castShadow rotation-y={ Math.PI / 5 } position-x={ -2 }>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="orange" wireframe={false} />
        </mesh>
        <mesh rotation-x={ - Math.PI * 0.5 } position-y={ -1 } scale={ 10 }>
          <planeGeometry />
          <meshStandardMaterial color="yellow" wireframe={false} />
          {/* <MeshReflectorMaterial
            mirror={ 0.5 }
            resolution={512}
            blur={[ 1000, 1000 ]}
            mixBlur={ 1 }
            color={'yellow'}
          /> */}
        </mesh>
        {/* <Text
          position-y={ 2 }
          fontSize={ 0.5 }
          color="salmon"
          fontWeight={ 'bold' }
          lineHeight={ 1 }
          letterSpacing={ 0.02 }
          textAlign="center"
        >
          Hello World
          <meshNormalMaterial side={ DoubleSide } />
        </Text> */}
      </group>
    </>
  )
}

export default Threejs