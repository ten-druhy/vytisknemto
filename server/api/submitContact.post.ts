import { contactSchema } from "~/schemas/contactSchema"

export default defineEventHandler(async (event) => {
  console.log("new contact request")
  const data = await readValidatedBody(event, (d => contactSchema.safeParse(d)))
  if (data.error) {
    console.log("contact request rejected for validation errors", data.error.errors)
    throw createError({
      statusCode: 400,
      statusMessage: "Validation error",
      data: data.error.errors
    })
  }
  const resp = await $fetch("/_turnstile/validate", {
    method: "POST",
    body: {
      token: data.data.validationToken
    }
  })

  if (!resp.success) {
    console.log("contact request rejected for turnstile error", resp["error-codes"])
    throw createError({
      statusCode: 403,
      statusMessage: "CAPTCHA Error",
    })
  }

  const { sendMail } = useNodeMailer()
  console.log("sending contact request email")
  return sendMail({
    to: "vytisknem.test@gmail.com",
    subject: `POPTÁVKA: ${data.data.subject}`,
    html: `
        <table>
  <tr>
    <th>Jméno zákazníka:</th>
    <td>${data.data.name}</td>
  </tr>
  <tr>
    <th>Email zákazníka:</th>
    <td>${data.data.email}</td>
  </tr>
  <tr>
    <th>Telefon zákazníka:</th>
    <td>${data.data.phone}</td>
  </tr>
  
  <tr>
    <th>Zpráva od zákazníka:</th>
  </tr>
</table>
<div>${data.data.message}</div>
        `
  }).then((res) => {
    console.log("email sent OK")
    return res
  }).catch(err => {
    console.error("email sending fucked up", err)
    throw err
  })
})