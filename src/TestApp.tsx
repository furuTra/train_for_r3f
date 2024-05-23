import { FC } from "react";
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from "@react-three/fiber";
import { SelectCube } from "./components/cube/SelectCube";
// import Hello from "./components/page/Hello";
import SelectHello from "./components/page/SelectHello";
import { OrbitControls } from "@react-three/drei";
import styles from "./components/cube/Cube.module.css";

const TestApp: FC = () => {
  return (
    <div className={styles.cube__app}>
      <VRButton />
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <XR>
          <ambientLight args={[0xff0000]} intensity={0.1} />
          <pointLight position={[10, 10, 5]} />
          <pointLight position={[-10, -10, -10]} />
          <SelectCube />
          <OrbitControls makeDefault />
          <SelectHello />
          {/* <Hello /> */}
        </XR>
      </Canvas>
    </div>
  );
};

export default TestApp;
