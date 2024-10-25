function Threejs() {

  return (
    <mesh rotation-y={ Math.PI / 5 }>
      {/* <sphereGeometry args={[2, 16, 16]} /> */}
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="blue" wireframe />
    </mesh>
  )
}

export default Threejs