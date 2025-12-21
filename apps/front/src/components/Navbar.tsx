import React from "react";
import Link from "next/link";
import { getSession } from "@/lib/session";
import SignInPanel from "@/components/SignInPanel";
import Profile from "@/components/Profile";

const Navbar = async () => {
  const session = await getSession();
  return (
    <>
      <h1 className="text-2xl font-bold p-2">My Modern Blog</h1>
      <div className="flex flex-col md:flex-row gap-2 ml-auto [&>a]:py-2 [&>a]:px-4 [&>a]:transition [&>a]:rounded-md [&>a:hover]:text-sky-100 [&>a:hover]:bg-sky-400">
        <Link href={"/"}>Blog</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
        {session && session.user ? (
          <Profile user={session.user} />
        ) : (
          <SignInPanel />
        )}
      </div>
    </>
  );
};

export default Navbar;
