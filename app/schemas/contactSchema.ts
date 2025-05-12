import { z } from "zod"
export const contactSchema = z.object({
  name: z.string({ required_error: "Vyplňte jméno" }),
  email: z.string({ required_error: "Vyplňte emailovou adresu" }).email("Neplatný formát emailu"),
  phone: z.string().optional(),
  subject: z.string({ required_error: "Vyplňte předmět zprávy" }),
  message: z.string({ required_error: "Vyplňte zprávu" }),
  validationToken: z.string({ required_error: "Podvrťe že jste člověk" }),
})

export type ContactSchema = z.output<typeof contactSchema>