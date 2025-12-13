import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;
export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      {children}
    </div>
  );
}
