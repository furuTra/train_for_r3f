import { useMemo } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SelectCube from "./components/cube/SelectCube";
import Polyhedron from "./components/polyhedron/Polyhedron";
import styles from "./components/cube/Cube.module.css";
import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";

export default function AppMain() {
  const polyhedron = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398),
    ],
    []
  );
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    };
  }, []);
  const cubeOptions = useMemo(() => {
    return {
      posX: { value: 1, min: -5, max: 5, step: 0.1 },
      posY: { value: 1, min: -5, max: 5, step: 0.1 },
      posZ: { value: 1, min: -5, max: 5, step: 0.1 },
    };
  }, []);
  const pA = useControls("Polyhedron A", options);
  const pB = useControls("Polyhedron B", options);
  const cA = useControls("Cube A", cubeOptions);
  return (
    <div className={styles.cube__app}>
      <ARButton />
      <Canvas camera={{ position: [1, 2, 3] }}>
        <XR referenceSpace="local">
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <Polyhedron
            position={[-1, 1, 0]}
            rotation={[pA.x, pA.y, pA.z]}
            visible={pA.visible}
            color={pA.color}
            polyhedron={polyhedron}
          />
          <Polyhedron
            position={[1, 1, 0]}
            rotation={[pB.x, pB.y, pB.z]}
            visible={pB.visible}
            color={pB.color}
            polyhedron={polyhedron}
          />
          <OrbitControls target-y={1} />
          <SelectCube position={[cA.posX, cA.posY, cA.posZ]} />
          <axesHelper args={[5]} />
          <gridHelper />
        </XR>
      </Canvas>
    </div>
  );
}
