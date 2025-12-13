import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button type={"submit"} aria-disabled={pending}>
      {pending ? <span className="animate-pulse">Submitting</span> : children}
    </Button>
  );
};

export default SubmitButton;
