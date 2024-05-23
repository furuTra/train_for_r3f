import { FC, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import type { Vector3 } from "@react-three/fiber";

type Props = {
  position?: Vector3;
  link_name?: string;
};

const Hello: FC<Props> = ({
  position = [0, 0, 0.01],
  link_name = "Hello!!",
}) => {
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setCount((count) => ++count);
  };

  return (
    <Html occlude distanceFactor={5} position={position} transform>
      <h1>Count: {count}</h1>
      <a href="#">{link_name}</a>
      <button onClick={buttonClick}>button</button>
    </Html>
  );
};

export default Hello;
