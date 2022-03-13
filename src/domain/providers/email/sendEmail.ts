import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { IMailView } from '@interfaces/sendEmail';
import logger from '@log/logger';
import isEmail from 'validator/lib/isEmail';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export async function sendEmail(
  to: string,
  emailView: IMailView,
): Promise<void> {
  const requiredFields = ['subject', 'content', 'text', 'html'];

  if (!to) {
    throw new MissingParamError('to');
  }

  for (const field of requiredFields) {
    if (emailView[field] === undefined) {
      throw new MissingParamError(field);
    }
  }
  if (!isEmail(to)) {
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

  logger.info(`Sending email to ${to}`);
  try {
    await transporter.sendMail({
      from: 'Easy Personal <info@easypersonal.com.br>',
      to,
      ...emailView,
    });
    logger.success(`Email has been sent to ${to}`);
  } catch (err) {
    logger.error(err);
  }
}
