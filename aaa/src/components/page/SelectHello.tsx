import { useFrame } from "@react-three/fiber";
import React, { FC, useRef, useState } from "react";
import type { Mesh } from "three";
import Hello from "./Hello";
import { PivotControls } from "@react-three/drei";
import { useControls } from "leva";

const SelectHello: FC = () => {
  const mesh = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const { attach, color } = useControls({ attach: false, color: "#39a3aa" });

  useFrame(() => {
    mesh.current;
  });
  return (
    <PivotControls
      object={attach ? mesh : undefined}
      visible={attach}
      anchor={[0, 0.8, 0]}
      scale={75}
      depthTest={false}
      fixed
    >
      <mesh
        ref={mesh}
        position={[-2, 0, 0]}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[5, 5, 0.01]} />
        <meshStandardMaterial color={color} emissive={color} />
        <Hello />
      </mesh>
    </PivotControls>
  );
};

export default SelectHello;
