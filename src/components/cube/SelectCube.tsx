import Cube from "./Cube";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import { MeshProps } from "@react-three/fiber";

export default function SelectCube(props: MeshProps) {
  return (
    <Selection>
      <EffectComposer multisampling={8} autoClear={false}>
        <Outline blur edgeStrength={100} width={1000} />
      </EffectComposer>
      <Cube position={props.position} />
    </Selection>
  );
}
