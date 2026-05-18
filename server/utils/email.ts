import { Resend } from 'resend'

let resend: Resend | null = null

function getResend() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) throw new Error('RESEND_API_KEY is not set')
    resend = new Resend(apiKey)
  }
  return resend
}

export interface ContactEmailPayload {
  name: string
  email: string
  phone?: string
  serviceType: string
  message: string
  fileName?: string
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const to = process.env.EMAIL_TO ?? 'info@vytisknem.to'

  return getResend().emails.send({
    from: 'vytisknem.to <noreply@vytisknem.to>',
    to,
    replyTo: payload.email,
    subject: `Nová poptávka od ${payload.name} — ${payload.serviceType}`,
    html: `
      <h2>Nová poptávka z vytisknem.to</h2>
      <table>
        <tr><td><strong>Jméno:</strong></td><td>${payload.name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${payload.email}</td></tr>
        ${payload.phone ? `<tr><td><strong>Telefon:</strong></td><td>${payload.phone}</td></tr>` : ''}
        <tr><td><strong>Typ služby:</strong></td><td>${payload.serviceType}</td></tr>
        ${payload.fileName ? `<tr><td><strong>Přiložený soubor:</strong></td><td>${payload.fileName}</td></tr>` : ''}
      </table>
      <h3>Zpráva:</h3>
      <p>${payload.message.replace(/\n/g, '<br>')}</p>
    `
  })
}
