import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/SubmitButton";

const SignInForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com"/>
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder=""/>
      </div>

      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
}

export default SignInForm;
