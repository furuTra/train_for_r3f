import { forwardRef } from "react";
import { Html } from "@react-three/drei";
import { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function MyPopover() {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover className="relative">
      <Popover.Button ref={setReferenceElement}>
        Button
        <ChevronDownIcon className="ui-open:rotate-180 ui-open:transform" />
      </Popover.Button>
      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export const Tag = forwardRef(({ stat, expl, ...props }) => {
  return (
    <Html className="data" center {...props}>
      <MyPopover />
      <h1>{stat}</h1>
      <a href="#">
        <h2>{expl}</h2>
      </a>
    </Html>
  );
});
Tag.displayName = "Tag";
