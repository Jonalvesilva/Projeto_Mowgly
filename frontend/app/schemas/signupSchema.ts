import { z } from "zod";

const regexZodSenha = z
  .string()
  .refine(
    (value) =>
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(value),
    {
      message:
        "A senha deve conter pelo menos 8 caracteres, incluindo um dígito, uma letra maiúscula e um caractere especial",
    }
  );

export const signupSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome deve conter pelo menos 3 caracteres" }),
  sobrenome: z
    .string()
    .min(3, { message: "Sobrenome deve conter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Insira um email válido" }),
  senha: regexZodSenha,
});

export type SignUp = z.infer<typeof signupSchema>;
