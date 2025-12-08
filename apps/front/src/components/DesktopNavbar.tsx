"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren;

const DesktopNavbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollDown = scrollPosition > 10;

  return (
    <nav
      className={cn("fixed transition-colors w-full z-50 text-white top-0 block", {
        "bg-white text-gray-700 shadow-md": isScrollDown,
      })}
    >
      <div className="flex items-center px-4 py-4 container mx-auto">
        {props.children}
      </div>
      <hr className="border-b border-gray-100 opacity-25" />
    </nav>
  );
};

export default DesktopNavbar;
