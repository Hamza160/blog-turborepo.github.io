"use server";

import { SignUpFormState } from "@/types/formStateTypes";
import { SignUpFormSchema } from "@/lib/schemas/signUpFormSchema";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { CREATE_USER_MUTATION } from "@/graphql/quries/posts";
import { print } from "graphql";
import { redirect } from "next/navigation";
import { LoginFormSchema } from "@/lib/schemas/loginFormSchema";

export async function signUp(
  stats: SignUpFormState,
  formData: FormData,
): Promise<SignUpFormState> {
  const validatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data.errors) return { data: Object.fromEntries(formData.entries()), message: "Something went wrong" };

  redirect("/auth/signin");
}


export async function signIn(state: SignUpFormState, formData: FormData): Promise<SignUpFormState> {
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

}