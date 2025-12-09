import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import { Bars3Icon } from "@heroicons/react/16/solid";

type Props = React.PropsWithChildren;

const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden">
      <Sidebar
        triggerIcon={<Bars3Icon className="w-4" />}
        triggerClassName="absolute top-2 left-2"
      >{props.children}</Sidebar>
    </div>
  );
};

export default MobileNavbar;
