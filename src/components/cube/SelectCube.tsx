import { FC } from "react";
import { Cube } from "./Cube";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

export const SelectCube: FC = () => {
  return (
    <Selection>
      <EffectComposer multisampling={8} autoClear={false}>
        <Outline
          blur
          visibleEdgeColor="white"
          edgeStrength={100}
          width={1000}
        />
      </EffectComposer>
      <Cube />
    </Selection>
  );
};
