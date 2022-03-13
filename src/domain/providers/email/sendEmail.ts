import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { sendEmail as ISendEmail } from '@interfaces/sendEmail';
import logger from '@log/logger';
import isEmail from 'validator/lib/isEmail';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export async function sendEmail(emailObject: ISendEmail): Promise<void> {
  const requiredFields = ['to', 'content'];
  for (const field of requiredFields) {
    if (emailObject[field] === undefined) {
      throw new MissingParamError(field);
    }
  }
  if (!isEmail(emailObject.to)) {
    throw new ParamInvalid('to');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  logger.info(`Sending email to ${emailObject.to}`);
  await transporter.sendMail({
    from: 'Easy Personal <info@easypersonal.com.br>',
    to: emailObject.to,
    subject: 'Hello',
    text: 'Hello',
    html: '<h1>oi</h1>',
  });
}
