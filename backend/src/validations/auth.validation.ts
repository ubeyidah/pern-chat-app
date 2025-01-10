import { z } from "zod";

const GenderEnum = z.enum(["male", "female"]);
export const signUpSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must match the required length"),
    gender: GenderEnum,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  identifier: z
    .string()
    .min(1, "Username or email is required")
    .refine(
      (value) => /\S+@\S+\.\S+/.test(value) || /^[a-zA-Z0-9._-]+$/.test(value),
      {
        message: "Identifier must be a valid email or username",
      }
    ),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
