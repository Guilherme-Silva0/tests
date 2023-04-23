import { usePlane } from "@react-three/cannon";
import { MutableRefObject } from "react";
import { Mesh } from "three";

const Plane = () => {
  const [refPlane] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh
      ref={refPlane as MutableRefObject<Mesh>}
      position={[0, -1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
};

export default Plane;
