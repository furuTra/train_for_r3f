import { useRef, useState } from "react";
import { MeshProps } from "@react-three/fiber";
import * as THREE from "three";

interface IPolyhedronProps extends MeshProps {
  polyhedron: THREE.BufferGeometry[];
  color: THREE.Color | String;
}

export default function Polyhedron({
  polyhedron,
  color,
  ...props
}: IPolyhedronProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const [count, setCount] = useState(2);

  return (
    <mesh
      {...props}
      ref={ref}
      geometry={polyhedron[count]}
      onClick={() => setCount((count + 1) % polyhedron.length)}
    >
      <meshStandardMaterial color={color as THREE.Color} wireframe />
    </mesh>
  );
}
