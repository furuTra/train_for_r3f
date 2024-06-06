import Spline from "@splinetool/react-spline";
import type { SplineEvent } from "@splinetool/runtime";

export const WASD = () => {
  const onKeyUp = (e: SplineEvent) => {
    if (e.target.name === "W Key") return console.log("w key up");
    if (e.target.name === "A Key") return console.log("a key up");
    if (e.target.name === "S Key") return console.log("s key up");
    if (e.target.name === "D Key") return console.log("d key up");
  };

  const onKeyDown = (e: SplineEvent) => {
    if (e.target.name === "W Key") return console.log("w key down");
    if (e.target.name === "A Key") return console.log("a key down");
    if (e.target.name === "S Key") return console.log("s key down");
    if (e.target.name === "D Key") return console.log("d key down");
  };

  return (
    <Spline
      scene="./spline/scene.splinecode"
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
    />
  );
};
