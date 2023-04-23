import { useBox } from "@react-three/cannon";
import { MutableRefObject, useEffect } from "react";
import { Mesh } from "three";

const Box = () => {
  const [refbox, api] = useBox(() => ({ mass: 0.1, position: [0, 10, 0] }));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        api.velocity.set(0, 0, -1);
      }
      if (event.key === "ArrowDown") {
        api.velocity.set(1, 0, 1);
      }
      if (event.key === "ArrowLeft") {
        api.velocity.set(-1, 0, 0);
      }
      if (event.key === "ArrowRight") {
        api.velocity.set(1, 0, 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={refbox as MutableRefObject<Mesh>}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Box;
