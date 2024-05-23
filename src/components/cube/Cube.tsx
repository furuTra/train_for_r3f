import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { FC, useRef, useState } from "react";
import type { Mesh } from "three";

export const Cube: FC = () => {
  const cubeRef = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    cube.rotation.z += 0.002;
  });
  return (
    <Select enabled={hovered}>
      <mesh
        ref={cubeRef}
        onClick={(event) => click(!clicked)}
        scale={clicked ? 1.5 : 1}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        position={[1, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial
          color={hovered ? "orange" : "aqua"}
          transparent
          opacity={0.7}
        />
        <Html occlude distanceFactor={5} position={[0, 0, 0.51]} transform>
          <span>hello</span>
        </Html>
      </mesh>
    </Select>
  );
};
