// import { Canvas } from "@react-three/fiber";
// import { Cube } from "./Cube";
// import { Tag } from "./Tag";
// import { Html } from "@react-three/drei";
// import { Stats, OrbitControls } from "@react-three/drei";
// import { Scene } from "./KeyBoard";
import { WASD } from "./WASD";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <WASD />
      {/* <Html>
        <div>
          hello <br/>
          world
        </div>
      </Html> */}
      {/* <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
          position: [0, 0, 5],
        }}
      >
        <Html className="data" position={[-100, -100, -100]}>
          <h1>KeyBoad</h1>
          <a href="#">
            <h2>WASD</h2>
          </a>
        </Html>
        <Cube />
        <Tag
          position={[10, 10, 10]}
          stat="3.7x"
          expl={`faster CPU\nperformance¹`}
        />
        <Scene />
        <Cube />
        <OrbitControls />

        <Stats />
      </Canvas> */}
    </div>
  );
}

export default App;
