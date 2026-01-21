import { z } from "zod";

export const signupSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  username: z.string({ error: "Username is required" }).min(4, "Username must have a minimum of 4 characters"),
  name: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(8, "Password too short"),
  device_id: z.string({ error: "device id is required" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>;
