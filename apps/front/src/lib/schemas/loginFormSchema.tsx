import { z } from "zod";

export const LoginFormSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.string().email(),
  password: z
    .string()
    .min(1)
    .trim(),
});
