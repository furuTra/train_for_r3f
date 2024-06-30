import React, { lazy } from "react";
import { Canvas } from "@react-three/offscreen";
import "./App.css";
import { ARButton } from "@react-three/xr";

const Scene = lazy(() => import("./Scene"));

const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
  type: "module",
});

export default function AppMain() {
  return (
    <>
      <ARButton />
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75, near: 0.1, far: 2000 }}
        worker={worker}
        fallback={<Scene />}
      />
    </>
  );
}
