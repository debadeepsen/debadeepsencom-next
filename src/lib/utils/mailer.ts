'use server'

import { IPDetails } from '@/types/types'
import * as sgMail from '@sendgrid/mail'
import { getIp } from './api'

export const sendReport = async (word: string) => {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  const ipDetails = await getIp()
  let ipDetailsStr = '<hr/><h3>IP Details:</h3>'
  for (const key in ipDetails) {
    ipDetailsStr += `<strong>${key}</strong>: ${
      ipDetails[key as keyof typeof ipDetails]
    }<br/>`
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

  const msg = {
    to: process.env.SENDGRID_RECIPIENT, // Change to your recipient
    from: process.env.SENDGRID_VERIFIED_EMAIL || '', // Change to your verified sender
    subject: 'Report from DebadeepSen.com',
    html:
      `<div style="font-family:system-ui,Verdana,sans-serif"></div><strong>Someone reported the following word as inappropriate -
            <h2 style="color:#910">${word}</h2>
            </strong> ${ipDetailsStr}</div>`
  }

  try {
    await sgMail.send(msg)
    return Promise.resolve('Thank you for your feedback!')
  } catch (error) {
    return Promise.reject('An error occurred trying to send feedback.')
  }
}
