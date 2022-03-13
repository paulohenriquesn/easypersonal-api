import { MissingParamError } from '@errors/MissingParamError';
import { ParamInvalid } from '@errors/ParamInvalid';
import { sendEmail as ISendEmail } from '@interfaces/sendEmail';
import isEmail from 'validator/lib/isEmail';

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
}
