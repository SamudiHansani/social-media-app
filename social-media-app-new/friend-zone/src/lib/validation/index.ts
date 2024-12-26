import { z } from "zod";

export const SignupFormValidation = z.object({
    name: z.string().min(2, "Name must contain at least 2 characters"),
    username: z.string().min(2, "Username must contain at least 2 characters"),
    email: z.string().email(),
    password: z.string().min(5, "Password must contain at least 5 characters")
});

export const SigninFormValidation = z.object({
  email: z.string().email(),
  password: z.string().min(5, "Password must contain at least 5 characters")
});

export const PostFormValidation = z.object({
  title: z.string().min(2, "Title must contain at least 2 characters").max(25, "Title must not exceed 25 characters"),
  description: z.string().min(10, "Description must contain at least 10 characters"),
  titleColor: z.string()
});

export const CommentFormValidation = z.object({
  comment: z.string().min(2, "Comment must contain at least 2 characters")
});