import * as v from "valibot"

export const LoginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.email(),
    v.minLength(5, "email must be at least 5 characters."),
    v.nonEmpty()
  ),
  password: v.pipe(
    v.string(),
    v.minLength(6, "Password must be at least 6 characters."),
    v.maxLength(16, "Password must be at most 16 characters."),
    v.nonEmpty()
  ),
})

export const RegisterSchema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(5, "Name must be at least 5 characters."),
    v.maxLength(20, "Name must be at most 20 characters."),
    v.nonEmpty()
  ),
  email: v.pipe(
    v.string(),
    v.email(),
    v.minLength(5, "email must be at least 5 characters."),
    v.nonEmpty()
  ),
  password: v.pipe(
    v.string(),
    v.minLength(6, "Password must be at least 6 characters."),
    v.maxLength(16, "Password must be at most 16 characters."),
    v.nonEmpty()
  ),
})