import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env['SENDGRID_API_KEY'] as string);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { name, email, message } = req.body;

  const msg = {
    to: 'tuo-email@dominio.com', // Cambia questo con il tuo indirizzo email
    from: 'noreply@tuo-dominio.com', // Un indirizzo email verificato su SendGrid
    subject: `Nuovo messaggio da ${name}`,
    text: `
      Hai ricevuto un nuovo messaggio da ${name} (${email}):
      ${message}
    `,
    html: `
      <p>Hai ricevuto un nuovo messaggio da <strong>${name}</strong> (${email}):</p>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Email inviata con successo' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Errore durante l\'invio dell\'email', error });
  }
}
