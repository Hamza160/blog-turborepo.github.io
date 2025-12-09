import React from 'react';
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";

type Props = React.PropsWithChildren
const NavbarContainer = (props: Props) => {
  return (
    <div className="relative">
      <DesktopNavbar>{props.children}</DesktopNavbar>
      <MobileNavbar>{props.children}</MobileNavbar>
    </div>
  );
}

export default NavbarContainer;
