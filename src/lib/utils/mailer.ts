'use server'

import * as sgMail from '@sendgrid/mail'

export const sendReport = async (word: string) => {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
  console.log(process.env.SENDGRID_API_KEY)
  const msg = {
    to: process.env.SENDGRID_RECIPIENT, // Change to your recipient
    from: process.env.SENDGRID_VERIFIED_EMAIL || '', // Change to your verified sender
    subject: 'Report from DebadeepSen.com',
    html: `<strong>Someone reported the following word as inappropriate -
            <h2 style="color:#910">${word}</h2>
            </strong>`
  }

  try {
    await sgMail.send(msg)
    return Promise.resolve('Thank you for your feedback!')
  } catch (error) {
    return Promise.reject('An error occurred trying to send feedback.')
  }
}
