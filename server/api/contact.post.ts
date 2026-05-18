import { z } from 'zod'
import { sendContactEmail } from '../utils/email'

const contactSchema = z.object({
  name: z.string().min(2, 'Zadejte prosím své jméno'),
  email: z.string().email('Zadejte platnou e-mailovou adresu'),
  phone: z.string().optional(),
  serviceType: z.string().min(1, 'Vyberte typ služby'),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
  fileName: z.string().optional(),
  gdprConsent: z.literal(true, { errorMap: () => ({ message: 'Souhlas se zpracováním osobních údajů je povinný' }) })
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Neplatná data',
      data: parsed.error.flatten().fieldErrors
    })
  }

  try {
    await sendContactEmail(parsed.data)
    return { success: true, message: 'Zpráva odeslána. Ozveme se do 24 hodin.' }
  }
  catch (err) {
    console.error('Email send error:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.'
    })
  }
})
