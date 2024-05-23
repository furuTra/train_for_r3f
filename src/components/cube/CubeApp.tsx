import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { SelectCube } from "./SelectCube";
import { OrbitControls } from "@react-three/drei";
import styles from "./Cube.module.css";

const CubeApp: FC = () => {
  return (
    <div className={styles.cube__app}>
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <SelectCube />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default CubeApp;
