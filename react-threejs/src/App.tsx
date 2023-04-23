import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Box from "./components/Box";
import Plane from "./components/Plane";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.4} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
};

export default App;
