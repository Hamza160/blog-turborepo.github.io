"use client";
import React, { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "usehooks-ts";

type Props = PropsWithChildren<{
  triggerIcon: ReactNode;
  triggerClassName?: string;
}>;
const Sidebar = (props: Props) => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setShow(false));
  return (
    <>
      <button
        className={props.triggerClassName}
        onClick={() => setShow((prev) => !prev)}
      >
        {props.triggerIcon}
      </button>
      <div
        ref={ref}
        className={cn(
          "w-60 absolute top-0 z-10 duration-300 transition-all bg-white rounded-r-md min-h-screen",
          {
            "-left-full": !show,
            "left-0": show,
          },
        )}
      >
        {props.children}
      </div>
    </>
  );
};

export default Sidebar;
