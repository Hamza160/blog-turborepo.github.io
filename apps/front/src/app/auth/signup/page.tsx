import React from "react";
import Link from "next/link";
import SignUpForm from "@/app/auth/signup/_components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-96 flex flex-col items-center justify-center ">
      <h2 className="text-center text-2xl font-bold mb-4">Sign Up Page</h2>
      <SignUpForm />
      <div>
        <p>Already have an account?</p>
        <Link href={"/auth/signin"}>Signin</Link>
      </div>
    </div>
  );
}
