import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <h1 className="text-2xl font-bold p-2">My Modern Blog</h1>
      <div className="flex gap-2 ml-auto">
        <Link href={"/"}>Blog</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
