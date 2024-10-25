import { useEffect, useMemo, useRef } from "react";
import { BufferGeometry, DoubleSide } from "three";

function CustomObject() {
  console.log('CustomObject Component');
  const geometryRef = useRef<BufferGeometry>(null!)
  const certicesCount = 10 * 3
  const positions = useMemo(() => {
    const positions = new Float32Array(certicesCount * 3)
    for (let i = 0; i < certicesCount * 3; i++) {
      positions[i] = (Math.random() -0.5) * 3
    }
    return positions
  }, [])
  useEffect(() => {
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals()
    }
  }, [])
  return (
    <mesh>
      <bufferGeometry ref={geometryRef} attach="geometry" >
        <bufferAttribute attach="attributes-position" count={certicesCount} itemSize={3} array={positions} />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide}/>
    </mesh>
  )
}

export default CustomObject