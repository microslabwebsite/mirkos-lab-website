'use server';

import { Resend } from 'resend';
import type { ContactFormState } from '@/components/contact/ContactForm';

const CONTACT_TO_EMAIL = 'mickroslabwebsite@gmail.com';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Por favor completa los campos requeridos.',
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: 'Ingresa un correo electrónico válido.',
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: 'El envío de correo no está configurado. Contacta al administrador.',
    };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'MiKros Lab <onboarding@resend.dev>';
  const emailSubject = subject || `Nuevo mensaje de contacto - ${name}`;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: emailSubject,
    html: `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(phone || 'No indicado')}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(subject || 'Sin asunto')}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    `,
  });

  if (error) {
    return {
      success: false,
      message: 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.',
    };
  }

  return {
    success: true,
    message: '¡Mensaje enviado! Te contactaremos pronto.',
  };
}
