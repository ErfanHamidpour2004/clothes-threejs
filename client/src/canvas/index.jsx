import { Canvas } from "@react-three/fiber"
import { Environment, Center } from "@react-three/drei"

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CamerRig from './CameraRig'
const CanvasModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 25 }}
    >
      <ambientLight  intensity={2} />
      <Environment preset="city" />
      <CamerRig>
      {/*  <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>

     </CamerRig>
    </Canvas>
  )
}

export default CanvasModel