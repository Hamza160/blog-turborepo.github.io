import React from "react";
import Link from "next/link";
import SignInForm from "@/app/auth/signin/_components/SignInForm";

export default function SignInPage() {
  return (
    <div className="bg-white gap-3 p-8 border rounded-md shadow-md w-96 flex flex-col justify-center">
      <h1 className="text-center text-2xl font-bold  mb-4">Sign In Page</h1>
      <SignInForm />
      <Link href="/forgot">Forgot Your Password?</Link>
    </div>
  );
}
