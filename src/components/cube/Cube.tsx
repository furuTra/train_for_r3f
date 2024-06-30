import { MeshProps, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import type { Mesh } from "three";
import { Interactive } from "@react-three/xr";

export default function Cube(props: MeshProps) {
  const cubeRef = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    // cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    // cube.rotation.z += 0.001;
  });
  return (
    <Select enabled={hovered}>
      <Interactive
        onHover={() => hover(true)}
        onBlur={() => hover(false)}
        onSelect={() => click(!clicked)}
      >
        <mesh
          ref={cubeRef}
          onClick={(event) => click(!clicked)}
          scale={clicked ? 1.5 : 1}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
          position={props.position}
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
      </Interactive>
    </Select>
  );
}
